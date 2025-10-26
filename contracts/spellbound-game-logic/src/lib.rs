#![no_std]
use soroban_sdk::{contract, contractimpl, symbol_short, Address, Env, Symbol, Vec, IntoVal};

mod error;
use error::Error;

// Game state constants
const PRE_GAME: i32 = 0;
const GAME_IN_PROGRESS: i32 = 1;
const POST_GAME: i32 = 2;

// Storage keys for game data
const GAME_STATE: &Symbol = &symbol_short!("state");
const PLAYER1: &Symbol = &symbol_short!("p1");
const PLAYER2: &Symbol = &symbol_short!("p2");
const PLAYER1_DECK: &Symbol = &symbol_short!("deck1");
const PLAYER2_DECK: &Symbol = &symbol_short!("deck2");
const PLAYER1_HAND: &Symbol = &symbol_short!("hand1");
const PLAYER2_HAND: &Symbol = &symbol_short!("hand2");
const PLAYER1_CARD: &Symbol = &symbol_short!("card1");
const PLAYER2_CARD: &Symbol = &symbol_short!("card2");
const PLATFORM_CONTRACT: &Symbol = &symbol_short!("platform");
const MATCH_ID: &Symbol = &symbol_short!("match_id");

#[contract]
pub struct SpellboundGameLogic;

#[contractimpl]
impl SpellboundGameLogic {
    /// Constructor
    pub fn __constructor(env: &Env) {
        // Initialize with no active game
        env.storage().instance().set(GAME_STATE, &PRE_GAME);
    }

    /// Start a new game with two players
    /// Called by the platform contract
    pub fn strt_game(env: &Env, game_id: i32, player1: Address, player2: Address, platform_contract: Address) -> Result<(), Error> {
        // Check if game is already in progress
        let current_state: i32 = env.storage().instance().get(GAME_STATE).unwrap_or(PRE_GAME);
        if current_state != PRE_GAME {
            return Err(Error::GameNotAvailable);
        }

        // Store players and platform info
        env.storage().instance().set(PLAYER1, &player1);
        env.storage().instance().set(PLAYER2, &player2);
        env.storage().instance().set(PLATFORM_CONTRACT, &platform_contract);
        env.storage().instance().set(MATCH_ID, &game_id);

        // Initialize decks (cards 1-4, 3 types each = 12 total cards per player)
        let mut deck1: Vec<i32> = Vec::new(&env);
        let mut deck2: Vec<i32> = Vec::new(&env);
        
        // Create 12 cards per player: 1-4 for each type (Light=1, Shadow=2, Mortal=3)
        for card_num in 1..=4 {
            for card_type in 1..=3 {
                // Card encoding: type*10 + number (e.g., Light 3 = 13, Shadow 2 = 22)
                let card = card_type * 10 + card_num;
                deck1.push_back(card);
                deck2.push_back(card);
            }
        }
        
        // Shuffle decks
        Self::shuffle_deck(env, &mut deck1);
        Self::shuffle_deck(env, &mut deck2);
        
        // Store decks
        env.storage().instance().set(PLAYER1_DECK, &deck1);
        env.storage().instance().set(PLAYER2_DECK, &deck2);
        
        // Deal initial hands (4 cards each)
        let mut hand1: Vec<i32> = Vec::new(&env);
        let mut hand2: Vec<i32> = Vec::new(&env);
        
        for _ in 0..4 {
            if let Some(card) = deck1.pop_back() {
                hand1.push_back(card);
            }
            if let Some(card) = deck2.pop_back() {
                hand2.push_back(card);
            }
        }
        
        // Store hands
        env.storage().instance().set(PLAYER1_HAND, &hand1);
        env.storage().instance().set(PLAYER2_HAND, &hand2);
        
        // Update decks
        env.storage().instance().set(PLAYER1_DECK, &deck1);
        env.storage().instance().set(PLAYER2_DECK, &deck2);
        
        // Set game state
        env.storage().instance().set(GAME_STATE, &GAME_IN_PROGRESS);
        
        Ok(())
    }

    /// Play a card from hand
    pub fn play_card(env: &Env, player: Address, card_value: i32) -> Result<(), Error> {
        player.require_auth();
        
        let game_state: i32 = env.storage().instance().get(GAME_STATE).unwrap_or(PRE_GAME);
        if game_state != GAME_IN_PROGRESS {
            return Err(Error::GameNotInProgress);
        }

        // Determine which player this is
        let player1: Address = env.storage().instance().get(PLAYER1).unwrap();
        let player2: Address = env.storage().instance().get(PLAYER2).unwrap();
        
        let is_player1 = player == player1;
        let is_player2 = player == player2;
        
        if !is_player1 && !is_player2 {
            return Err(Error::NotInGame);
        }

        // Check if both players have already played this turn
        let p1_card: Option<i32> = env.storage().instance().get(PLAYER1_CARD);
        let p2_card: Option<i32> = env.storage().instance().get(PLAYER2_CARD);
        
        // If this player has already played this turn, they can't play again
        if (is_player1 && p1_card.is_some()) || (is_player2 && p2_card.is_some()) {
            return Err(Error::NotYourTurn);
        }

        // Get player's hand
        let hand_key = if is_player1 { PLAYER1_HAND } else { PLAYER2_HAND };
        let mut hand: Vec<i32> = env.storage().instance().get(hand_key).unwrap();
        
        // Check if player has this card
        let mut card_index = None;
        for (i, card) in hand.iter().enumerate() {
            if card == card_value {
                card_index = Some(i);
                break;
            }
        }
        
        if card_index.is_none() {
            return Err(Error::CardNotInHand);
        }

        // Remove card from hand
        let card_index = card_index.unwrap();
        hand.remove(card_index.try_into().unwrap());
        env.storage().instance().set(hand_key, &hand);

        // Store played card
        let card_key = if is_player1 { PLAYER1_CARD } else { PLAYER2_CARD };
        env.storage().instance().set(card_key, &card_value);

        // Check if both players have played
        let p1_card: Option<i32> = env.storage().instance().get(PLAYER1_CARD);
        let p2_card: Option<i32> = env.storage().instance().get(PLAYER2_CARD);
        
        if p1_card.is_some() && p2_card.is_some() {
            // Both cards played, resolve the clash
            Self::resolve_clash(env);
        }
        // If only one player has played, wait for the other

        Ok(())
    }

    /// Resolve the clash between two played cards
    fn resolve_clash(env: &Env) {
        let p1_card: i32 = env.storage().instance().get(PLAYER1_CARD).unwrap();
        let p2_card: i32 = env.storage().instance().get(PLAYER2_CARD).unwrap();
        
        // Extract card type and number
        let p1_type = p1_card / 10;
        let p1_num = p1_card % 10;
        let p2_type = p2_card / 10;
        let p2_num = p2_card % 10;
        
        // Check if same exact card (type and number)
        if p1_card == p2_card {
            // Both cards are destroyed - do nothing
        } else {
            // Determine winner using circular hierarchy
            let winner = Self::determine_winner(p1_type, p1_num, p2_type, p2_num);
            
            if winner == 1 {
                // Player 1 wins - their card goes to front of deck
                let mut deck1: Vec<i32> = env.storage().instance().get(PLAYER1_DECK).unwrap();
                deck1.push_front(p1_card);
                env.storage().instance().set(PLAYER1_DECK, &deck1);
            } else {
                // Player 2 wins - their card goes to front of deck
                let mut deck2: Vec<i32> = env.storage().instance().get(PLAYER2_DECK).unwrap();
                deck2.push_front(p2_card);
                env.storage().instance().set(PLAYER2_DECK, &deck2);
            }
        }
        
        // Clear played cards
        env.storage().instance().remove(PLAYER1_CARD);
        env.storage().instance().remove(PLAYER2_CARD);
        
        // Check for game over first
        Self::check_game_over(env);
        
        // Only draw new cards if game is still in progress
        let game_state: i32 = env.storage().instance().get(GAME_STATE).unwrap_or(PRE_GAME);
        if game_state == GAME_IN_PROGRESS {
            Self::draw_cards(env);
        }
    }
    
    /// Determine winner using number hierarchy first, then type hierarchy
    fn determine_winner(p1_type: i32, p1_num: i32, p2_type: i32, p2_num: i32) -> i32 {
        // Number hierarchy: 4 > 3 > 2 > 1 > 4 (circular, with 1 beating 4)
        let p1_beats_p2_num = (p1_num > p2_num) || (p1_num == 1 && p2_num == 4);
        
        if p1_beats_p2_num {
            return 1;
        } else if p2_num > p1_num || (p2_num == 1 && p1_num == 4) {
            return 2;
        }
        
        // If same number, use type hierarchy: Light(1) > Shadow(2) > Mortal(3) > Light(1)
        let p1_beats_p2_type = (p1_type == 1 && p2_type == 2) ||  // Light beats Shadow
                              (p1_type == 2 && p2_type == 3) ||  // Shadow beats Mortal
                              (p1_type == 3 && p2_type == 1);     // Mortal beats Light
        
        if p1_beats_p2_type { 1 } else { 2 }
    }

    /// Draw cards for both players
    fn draw_cards(env: &Env) {
        // Draw for player 1
        let mut deck1: Vec<i32> = env.storage().instance().get(PLAYER1_DECK).unwrap();
        let mut hand1: Vec<i32> = env.storage().instance().get(PLAYER1_HAND).unwrap();
        
        if let Some(card) = deck1.pop_back() {
            hand1.push_back(card);
        }
        
        env.storage().instance().set(PLAYER1_DECK, &deck1);
        env.storage().instance().set(PLAYER1_HAND, &hand1);
        
        // Draw for player 2
        let mut deck2: Vec<i32> = env.storage().instance().get(PLAYER2_DECK).unwrap();
        let mut hand2: Vec<i32> = env.storage().instance().get(PLAYER2_HAND).unwrap();
        
        if let Some(card) = deck2.pop_back() {
            hand2.push_back(card);
        }
        
        env.storage().instance().set(PLAYER2_DECK, &deck2);
        env.storage().instance().set(PLAYER2_HAND, &hand2);
    }

    /// Check if game is over
    fn check_game_over(env: &Env) {
        let deck1: Vec<i32> = env.storage().instance().get(PLAYER1_DECK).unwrap();
        let deck2: Vec<i32> = env.storage().instance().get(PLAYER2_DECK).unwrap();
        let hand1: Vec<i32> = env.storage().instance().get(PLAYER1_HAND).unwrap();
        let hand2: Vec<i32> = env.storage().instance().get(PLAYER2_HAND).unwrap();
        
        // Game over if either player has no cards in hand AND deck
        let player1_out = deck1.len() == 0 && hand1.len() == 0;
        let player2_out = deck2.len() == 0 && hand2.len() == 0;
        
        if player1_out || player2_out {
            env.storage().instance().set(GAME_STATE, &POST_GAME);
            
            // Call platform contract to end match and handle payouts
            let platform_contract: Address = env.storage().instance().get(PLATFORM_CONTRACT).unwrap();
            let match_id: i32 = env.storage().instance().get(MATCH_ID).unwrap();
            
            // Determine winner
            let winner: Option<Address> = if player1_out {
                env.storage().instance().get(PLAYER2) // Player 2 wins
            } else {
                env.storage().instance().get(PLAYER1) // Player 1 wins
            };
            
            // Call platform contract's end_match function
            env.invoke_contract::<()>(
                &platform_contract,
                &symbol_short!("end_match"),
                (match_id, winner).into_val(env),
            );
        }
    }

    /// Shuffle a deck using the environment's PRNG
    fn shuffle_deck(env: &Env, deck: &mut Vec<i32>) {
        let len = deck.len() as u64;
        for i in 0..len {
            let j: u64 = env.prng().gen_range(0..len);
            if i != j {
                let temp = deck.get(i as u32).unwrap();
                let swap = deck.get(j as u32).unwrap();
                deck.set(i as u32, swap);
                deck.set(j as u32, temp);
            }
        }
    }





    /// Reset game (for testing)
    pub fn reset_game(env: &Env) {
        env.storage().instance().set(GAME_STATE, &PRE_GAME);
        env.storage().instance().remove(PLAYER1);
        env.storage().instance().remove(PLAYER2);
        env.storage().instance().remove(PLAYER1_DECK);
        env.storage().instance().remove(PLAYER2_DECK);
        env.storage().instance().remove(PLAYER1_HAND);
        env.storage().instance().remove(PLAYER2_HAND);
        env.storage().instance().remove(PLAYER1_CARD);
        env.storage().instance().remove(PLAYER2_CARD);
    }
}

#[cfg(test)]
mod test;
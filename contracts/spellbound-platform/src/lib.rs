#![no_std]
use soroban_sdk::{contract, contractimpl, symbol_short, Address, BytesN, Env, Symbol, Map, Vec, IntoVal};

mod error;
mod xlm;

use error::Error;

#[contract]
pub struct Spellbound;

// Match states
const MATCH_WAITING: i32 = 0;
const MATCH_ACTIVE: i32 = 1;
const MATCH_FINISHED: i32 = 2;

// Staking amount (10 XLM in stroops)
pub const STAKE_AMOUNT: i128 = 10_000_000_0; // 10 XLM

pub const ADMIN_KEY: &Symbol = &symbol_short!("ADMIN");

// Platform contract storage keys
pub const PLAYER_STAKES: &Symbol = &symbol_short!("stakes");
pub const MATCHES: &Symbol = &symbol_short!("matches");
pub const TREASURY_FUNDS: &Symbol = &symbol_short!("treasury");
pub const GAME_LOGIC_CONTRACT: &Symbol = &symbol_short!("game");
pub const NFT_CONTRACT: &Symbol = &symbol_short!("nft");
pub const MATCH_COUNTER: &Symbol = &symbol_short!("counter");
pub const REGISTERED_PLAYERS: &Symbol = &symbol_short!("players");
pub const MATCHMAKING_QUEUE: &Symbol = &symbol_short!("queue");

#[contractimpl]
impl Spellbound {
    /// Constructor to initialize the contract with an admin and a random number
    pub fn __constructor(env: &Env, admin: Address) {
        // Require auth from the admin to make the transfer
        admin.require_auth();
        // This is for testing purposes. Ensures that the XLM contract set up for unit testing and local network
        xlm::register(env, &admin);
        // Send the contract an amount of XLM to play with
        xlm::token_client(env).transfer(
            &admin,
            env.current_contract_address(),
            &xlm::to_stroops(1),
        );
        // Set the admin in storage
        Self::set_admin(env, admin);
    }

    /// Admin can add more funds to the contract
    pub fn add_funds(env: &Env, amount: i128) {
        Self::require_admin(env);
        let contract_address = env.current_contract_address();
        // unwrap here is safe because the admin was set in the constructor
        let admin = Self::admin(env).unwrap();
        xlm::token_client(env).transfer(&admin, &contract_address, &amount);
    }

    /// Upgrade the contract to new wasm. Only callable by admin.
    pub fn upgrade(env: &Env, new_wasm_hash: BytesN<32>) {
        Self::require_admin(env);
        env.deployer().update_current_contract_wasm(new_wasm_hash);
    }

    /// readonly function to get the current admin
    pub fn admin(env: &Env) -> Option<Address> {
        env.storage().instance().get(ADMIN_KEY)
    }

    /// Set a new admin address. This is only callable by the admin.
    pub fn set_admin(env: &Env, admin: Address) {
        // Check if admin is already set
        if env.storage().instance().has(ADMIN_KEY) {
            panic!("admin already set");
        }
        env.storage().instance().set(ADMIN_KEY, &admin);
    }

    // Private helper function to require auth from the admin
    fn require_admin(env: &Env) {
        let admin = Self::admin(env).expect("admin not set");
        admin.require_auth();
    }

    // ===== PLATFORM CONTRACT FUNCTIONS =====

    /// Register a new player and mint 3 artifact NFTs
    pub fn register_player(env: &Env, player: Address) -> Result<(), Error> {
        player.require_auth();
        
        // Check if player already registered
        let mut players: Vec<Address> = env.storage().instance().get(REGISTERED_PLAYERS).unwrap_or(Vec::new(&env));
        if players.contains(&player) {
            return Err(Error::PlayerAlreadyRegistered);
        }
        
        // Add player to registered list
        players.push_back(player.clone());
        env.storage().instance().set(REGISTERED_PLAYERS, &players);
        
        // TODO: Mint 3 artifact NFTs for the player
        // This will be implemented when we integrate the NFT contract
        
        Ok(())
    }

    /// Get player's staked amount
    pub fn get_player_stake(env: &Env, player: Address) -> i128 {
        let stakes: Map<Address, i128> = env.storage().instance().get(PLAYER_STAKES).unwrap_or(Map::new(&env));
        stakes.get(player).unwrap_or(0)
    }

    /// Enter matchmaking queue (stake money upfront)
    pub fn enter_matchmaking_queue(env: &Env, player: Address) -> Result<(), Error> {
        player.require_auth();
        
        // Check if player is registered
        let players: Vec<Address> = env.storage().instance().get(REGISTERED_PLAYERS).unwrap_or(Vec::new(&env));
        if !players.contains(&player) {
            return Err(Error::PlayerNotRegistered);
        }
        
        // Check if player is already in a match or queue
        let matches: Map<i32, (Address, Address, i32)> = env.storage().instance().get(MATCHES).unwrap_or(Map::new(&env));
        for (_, (p1, p2, state)) in matches.iter() {
            if (p1 == player || p2 == player) && state != MATCH_FINISHED {
                return Err(Error::PlayerAlreadyInMatch);
            }
        }
        
        let queue: Vec<Address> = env.storage().instance().get(MATCHMAKING_QUEUE).unwrap_or(Vec::new(&env));
        if queue.contains(&player) {
            return Err(Error::PlayerAlreadyInQueue);
        }
        
        // Pre-stake the money (player signs this transaction)
        let xlm_client = xlm::token_client(env);
        xlm_client.transfer(&player, &env.current_contract_address(), &STAKE_AMOUNT);
        
        // Store the stake
        let mut stakes: Map<Address, i128> = env.storage().instance().get(PLAYER_STAKES).unwrap_or(Map::new(&env));
        stakes.set(player.clone(), STAKE_AMOUNT);
        env.storage().instance().set(PLAYER_STAKES, &stakes);
        
        // Add player to queue
        let mut queue: Vec<Address> = env.storage().instance().get(MATCHMAKING_QUEUE).unwrap_or(Vec::new(&env));
        queue.push_back(player);
        env.storage().instance().set(MATCHMAKING_QUEUE, &queue);
        
        Ok(())
    }
    
    /// Leave matchmaking queue (refund stake)
    pub fn leave_matchmaking_queue(env: &Env, player: Address) -> Result<(), Error> {
        player.require_auth();
        
        let mut queue: Vec<Address> = env.storage().instance().get(MATCHMAKING_QUEUE).unwrap_or(Vec::new(&env));
        if let Some(index) = queue.iter().position(|p| p == player) {
            queue.remove(index.try_into().unwrap());
            env.storage().instance().set(MATCHMAKING_QUEUE, &queue);
            
            // Refund the stake
            let xlm_client = xlm::token_client(env);
            xlm_client.transfer(&env.current_contract_address(), &player, &STAKE_AMOUNT);
            
            // Clear the stake record
            let mut stakes: Map<Address, i128> = env.storage().instance().get(PLAYER_STAKES).unwrap_or(Map::new(&env));
            stakes.set(player, 0);
            env.storage().instance().set(PLAYER_STAKES, &stakes);
        }
        
        Ok(())
    }
    
    /// Find a match (use pre-staked money)
    pub fn find_match(env: &Env, player: Address) -> Result<i32, Error> {
        player.require_auth();
        
        let mut queue: Vec<Address> = env.storage().instance().get(MATCHMAKING_QUEUE).unwrap_or(Vec::new(&env));
        if !queue.contains(&player) {
            return Err(Error::PlayerNotInQueue);
        }
        
        // Find another player in queue
        let mut opponent: Option<Address> = None;
        for (i, queued_player) in queue.iter().enumerate() {
            if queued_player != player {
                opponent = Some(queued_player.clone());
                queue.remove(i.try_into().unwrap());
                break;
            }
        }
        
        let opponent = opponent.ok_or(Error::NoOpponentFound)?;
        
        // Remove both players from queue
        let mut new_queue: Vec<Address> = Vec::new(&env);
        for queued_player in queue.iter() {
            if queued_player != player && queued_player != opponent {
                new_queue.push_back(queued_player.clone());
            }
        }
        env.storage().instance().set(MATCHMAKING_QUEUE, &new_queue);
        
        // Money is already staked, just create the match
        let mut counter: i32 = env.storage().instance().get(MATCH_COUNTER).unwrap_or(0);
        counter += 1;
        env.storage().instance().set(MATCH_COUNTER, &counter);
        
        // Create match data
        let match_data = (player, opponent, MATCH_WAITING);
        let mut matches: Map<i32, (Address, Address, i32)> = env.storage().instance().get(MATCHES).unwrap_or(Map::new(&env));
        matches.set(counter, match_data);
        env.storage().instance().set(MATCHES, &matches);
        
        Ok(counter)
    }

    /// Start a match (initialize game logic contract)
    pub fn start_match(env: &Env, match_id: i32) -> Result<(), Error> {
        let matches: Map<i32, (Address, Address, i32)> = env.storage().instance().get(MATCHES).unwrap_or(Map::new(&env));
        let match_data = matches.get(match_id).ok_or(Error::MatchNotFound)?;
        
        let (player1, player2, state) = match_data;
        if state != MATCH_WAITING {
            return Err(Error::MatchNotWaiting);
        }
        
        // Get game logic contract address
        let game_contract: Address = env.storage().instance().get(GAME_LOGIC_CONTRACT).ok_or(Error::GameContractNotSet)?;
        
        // Start game in game logic contract
        env.invoke_contract::<()>(
            &game_contract,
            &symbol_short!("start"),
            (match_id, player1.clone(), player2.clone()).into_val(env),
        );
        
        // Update match state
        let mut matches: Map<i32, (Address, Address, i32)> = env.storage().instance().get(MATCHES).unwrap_or(Map::new(&env));
        matches.set(match_id, (player1, player2, MATCH_ACTIVE));
        env.storage().instance().set(MATCHES, &matches);
        
        Ok(())
    }

    /// End a match and handle payouts
    pub fn end_match(env: &Env, match_id: i32) -> Result<(), Error> {
        let matches: Map<i32, (Address, Address, i32)> = env.storage().instance().get(MATCHES).unwrap_or(Map::new(&env));
        let match_data = matches.get(match_id).ok_or(Error::MatchNotFound)?;
        
        let (player1, player2, state) = match_data;
        if state != MATCH_ACTIVE {
            return Err(Error::MatchNotActive);
        }
        
        // Get game logic contract and winner
        let game_contract: Address = env.storage().instance().get(GAME_LOGIC_CONTRACT).ok_or(Error::GameContractNotSet)?;
        let winner: Option<Address> = env.invoke_contract(
            &game_contract,
            &symbol_short!("winner"),
            ().into_val(env),
        );
        
        // Calculate payouts
        let total_pot = STAKE_AMOUNT * 2; // 20 XLM total
        let platform_fee = (total_pot * 10) / 100; // 2 XLM (10%)
        let winner_payout = (total_pot * 90) / 100; // 18 XLM (90%)
        
        let xlm_client = xlm::token_client(env);
        
        if let Some(winner_addr) = winner {
            // Winner gets 90% of pot
            xlm_client.transfer(&env.current_contract_address(), &winner_addr, &winner_payout);
        } else {
            // Tie - each player gets 9 XLM
            let tie_payout = winner_payout / 2;
            xlm_client.transfer(&env.current_contract_address(), &player1, &tie_payout);
            xlm_client.transfer(&env.current_contract_address(), &player2, &tie_payout);
        }
        
        // Platform keeps 10% fee
        let mut fees: i128 = env.storage().instance().get(TREASURY_FUNDS).unwrap_or(0);
        fees += platform_fee;
        env.storage().instance().set(TREASURY_FUNDS, &fees);
        
        // Clear player stakes
        let mut stakes: Map<Address, i128> = env.storage().instance().get(PLAYER_STAKES).unwrap_or(Map::new(&env));
        stakes.set(player1.clone(), 0);
        stakes.set(player2.clone(), 0);
        env.storage().instance().set(PLAYER_STAKES, &stakes);
        
        // Update match state
        let mut matches: Map<i32, (Address, Address, i32)> = env.storage().instance().get(MATCHES).unwrap_or(Map::new(&env));
        matches.set(match_id, (player1, player2, MATCH_FINISHED));
        env.storage().instance().set(MATCHES, &matches);
        
        Ok(())
    }

    /// Get platform treasury funds
    pub fn get_treasury_funds(env: &Env) -> i128 {
        env.storage().instance().get(TREASURY_FUNDS).unwrap_or(0)
    }

    /// Set game logic contract address (admin only)
    pub fn set_game_contract(env: &Env, game_contract: Address) {
        Self::require_admin(env);
        env.storage().instance().set(GAME_LOGIC_CONTRACT, &game_contract);
    }

    /// Set NFT contract address (admin only)
    pub fn set_nft_contract(env: &Env, nft_contract: Address) {
        Self::require_admin(env);
        env.storage().instance().set(NFT_CONTRACT, &nft_contract);
    }

    /// Withdraw platform fees (admin only)
    pub fn withdraw_fees(env: &Env, admin: Address) -> Result<(), Error> {
        Self::require_admin(env);
        
        let fees = Self::get_treasury_funds(env);
        if fees == 0 {
            return Err(Error::NoFeesToWithdraw);
        }
        
        let xlm_client = xlm::token_client(env);
        xlm_client.transfer(&env.current_contract_address(), &admin, &fees);
        
        // Reset treasury counter
        env.storage().instance().set(TREASURY_FUNDS, &0);
        
        Ok(())
    }
}

mod test;

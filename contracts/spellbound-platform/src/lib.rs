#![no_std]
use soroban_sdk::{contract, contractimpl, symbol_short, Address, BytesN, Env, Symbol, Map, Vec, IntoVal};

mod error;
mod xlm;

use error::Error;

#[contract]
pub struct SpellboundPlatform;

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
impl SpellboundPlatform {
    /// Constructor to initialize the contract with an admin
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

    /// DEMO: Simple stake function - just move money from player to contract
    pub fn demo_stake(env: &Env, player: Address) -> Result<(), Error> {
        player.require_auth();
        
        // Register XLM token for the player if not already registered
        xlm::register(env, &player);
        
        // Transfer XLM from player to contract
        let xlm_client = xlm::token_client(env);
        xlm_client.transfer(&player, &env.current_contract_address(), &STAKE_AMOUNT);
        
        // Store the stake
        let mut stakes: Map<Address, i128> = env.storage().instance().get(PLAYER_STAKES).unwrap_or(Map::new(&env));
        stakes.set(player.clone(), STAKE_AMOUNT);
        env.storage().instance().set(PLAYER_STAKES, &stakes);
        
        Ok(())
    }
    
    /// DEMO: Simple unstake function - just move money from contract back to player
    pub fn demo_unstake(env: &Env, player: Address) -> Result<(), Error> {
        player.require_auth();
        
        // Register XLM token for the player if not already registered
        xlm::register(env, &player);
        
        // Check if player has stake to refund
        let stakes: Map<Address, i128> = env.storage().instance().get(PLAYER_STAKES).unwrap_or(Map::new(&env));
        let stake_amount = stakes.get(player.clone()).unwrap_or(0);
        if stake_amount == 0 {
            return Err(Error::NoStakeToRefund);
        }
        
        // Transfer XLM from contract back to player
        let xlm_client = xlm::token_client(env);
        xlm_client.transfer(&env.current_contract_address(), &player, &STAKE_AMOUNT);
        
        // Remove stake from storage
        let mut stakes_mut: Map<Address, i128> = stakes;
        stakes_mut.remove(player.clone());
        env.storage().instance().set(PLAYER_STAKES, &stakes_mut);
        
        Ok(())
    }
    
    /// Find match - automatically matches if opponent available, otherwise enters queue
    pub fn find_match(env: &Env, player: Address) -> Result<i32, Error> {
        player.require_auth();
        
        // Register XLM token for the player if not already registered
        xlm::register(env, &player);
        
        // Check if player is registered - DISABLED for simplified flow
        // let players: Vec<Address> = env.storage().instance().get(REGISTERED_PLAYERS).unwrap_or(Vec::new(&env));
        // if !players.contains(&player) {
        //     return Err(Error::PlayerNotRegistered);
        // }
        
        // Check if player is already in a match
        let matches: Map<i32, (Address, Address, i32)> = env.storage().instance().get(MATCHES).unwrap_or(Map::new(&env));
        for (_, (p1, p2, state)) in matches.iter() {
            if (p1 == player || p2 == player) && state != MATCH_FINISHED {
                return Err(Error::PlayerAlreadyInMatch);
            }
        }
        
        // Pre-stake the money (player signs this transaction)
        let xlm_client = xlm::token_client(env);
        let _ = xlm_client
            .try_transfer(&player, &env.current_contract_address(), &STAKE_AMOUNT)
            .map_err(|_| Error::FailedToTransferFromPlayer)?;
        
        // Store the stake
        let mut stakes: Map<Address, i128> = env.storage().instance().get(PLAYER_STAKES).unwrap_or(Map::new(&env));
        stakes.set(player.clone(), STAKE_AMOUNT);
        env.storage().instance().set(PLAYER_STAKES, &stakes);
        
        // Check if there's someone waiting in queue
        let mut queue: Vec<Address> = env.storage().instance().get(MATCHMAKING_QUEUE).unwrap_or(Vec::new(&env));
        
        if queue.is_empty() {
            // No one waiting - enter queue
            queue.push_back(player);
            env.storage().instance().set(MATCHMAKING_QUEUE, &queue);
            return Ok(0); // Return 0 to indicate "waiting in queue"
        } else {
            // Someone waiting - match immediately!
            let opponent = queue.pop_back().unwrap();
            
            // Verify opponent still has stake
            if stakes.get(opponent.clone()).unwrap_or(0) == 0 {
                // Opponent left queue but stake wasn't cleared - refund and enter queue
                queue.push_back(player);
                env.storage().instance().set(MATCHMAKING_QUEUE, &queue);
                return Ok(0);
            }
            
            // Update queue (opponent removed)
            env.storage().instance().set(MATCHMAKING_QUEUE, &queue);
            
            // Create match immediately
            let mut counter: i32 = env.storage().instance().get(MATCH_COUNTER).unwrap_or(0);
            counter += 1;
            env.storage().instance().set(MATCH_COUNTER, &counter);
            
            let match_data = (player, opponent, MATCH_WAITING);
            let mut matches: Map<i32, (Address, Address, i32)> = env.storage().instance().get(MATCHES).unwrap_or(Map::new(&env));
            matches.set(counter, match_data);
            env.storage().instance().set(MATCHES, &matches);
            
            // Automatically start the match (fluid motion)
            Self::start_match(env, counter)?;
            
            return Ok(counter); // Return match ID
        }
    }
    
    /// Check if player is in matchmaking queue
    pub fn is_in_queue(env: &Env, player: Address) -> bool {
        let queue: Vec<Address> = env.storage().instance().get(MATCHMAKING_QUEUE).unwrap_or(Vec::new(&env));
        queue.contains(&player)
    }

    /// Leave matchmaking queue (refund stake) - SECURE VERSION
    pub fn leave_matchmaking_queue(env: &Env, player: Address) -> Result<(), Error> {
        player.require_auth();
        
        // Register XLM token for the player if not already registered
        xlm::register(env, &player);
        
        // 1. CHECKS: Verify player is in queue and has stake
        let mut queue: Vec<Address> = env.storage().instance().get(MATCHMAKING_QUEUE).unwrap_or(Vec::new(&env));
        let stake_index = queue.iter().position(|p| p == player);
        if stake_index.is_none() {
            return Err(Error::PlayerNotInQueue);
        }
        
        let stakes: Map<Address, i128> = env.storage().instance().get(PLAYER_STAKES).unwrap_or(Map::new(&env));
        let player_stake = stakes.get(player.clone()).unwrap_or(0);
        if player_stake == 0 {
            return Err(Error::NoStakeToRefund);
        }
        
        // 2. EFFECTS: Update state FIRST (before external calls)
        queue.remove(stake_index.unwrap().try_into().unwrap());
        env.storage().instance().set(MATCHMAKING_QUEUE, &queue);
        
        let mut stakes: Map<Address, i128> = env.storage().instance().get(PLAYER_STAKES).unwrap_or(Map::new(&env));
        stakes.set(player.clone(), 0);
        env.storage().instance().set(PLAYER_STAKES, &stakes);
        
        // 3. INTERACTIONS: External call LAST (after state is committed)
        let xlm_client = xlm::token_client(env);
        let _ = xlm_client
            .try_transfer(&env.current_contract_address(), &player, &STAKE_AMOUNT)
            .map_err(|_| Error::FailedToTransferToGuesser)?;
        
        Ok(())
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
            &symbol_short!("strt_game"),
            (match_id, player1.clone(), player2.clone(), env.current_contract_address()).into_val(env),
        );
        
        // Update match state
        let mut matches: Map<i32, (Address, Address, i32)> = env.storage().instance().get(MATCHES).unwrap_or(Map::new(&env));
        matches.set(match_id, (player1, player2, MATCH_ACTIVE));
        env.storage().instance().set(MATCHES, &matches);
        
        Ok(())
    }

    /// End a match and handle payouts (called by game logic contract)
    pub fn end_match(env: &Env, match_id: i32, winner: Option<Address>) -> Result<(), Error> {
        let matches: Map<i32, (Address, Address, i32)> = env.storage().instance().get(MATCHES).unwrap_or(Map::new(&env));
        let match_data = matches.get(match_id).ok_or(Error::MatchNotFound)?;
        
        let (player1, player2, state) = match_data;
        if state != MATCH_ACTIVE {
            return Err(Error::MatchNotActive);
        }
        
        // Winner is passed as parameter from game logic contract
        
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

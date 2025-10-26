#![cfg(test)]
extern crate std;

use super::*;
use soroban_sdk::{
    testutils::{Address as _, MockAuth, MockAuthInvoke},
    Address, Env, IntoVal, Vec,
};

fn generate_client<'a>(env: &Env) -> SpellboundGameLogicClient<'a> {
    let contract_id = Address::generate(env);
    env.mock_all_auths();
    let contract_id = env.register_at(&contract_id, SpellboundGameLogic, ());
    env.set_auths(&[]); // clear auths
    SpellboundGameLogicClient::new(env, &contract_id)
}

fn init_test<'a>(env: &'a Env) -> SpellboundGameLogicClient<'a> {
    let client = generate_client(env);
    client
}

#[test]
fn constructed_correctly() {
    let env = &Env::default();
    let _client = init_test(env);
    
    // Contract should initialize with PRE_GAME state
    // We can't easily test this without a getter, but the constructor should not panic
}

#[test]
fn start_game() {
    let env = &Env::default();
    let client = init_test(env);
    let player1 = Address::generate(env);
    let player2 = Address::generate(env);
    let platform = Address::generate(env);
    
    // Start a game
    client.strt_game(&1, &player1, &player2, &platform);
    
    // Game should be started (we can't easily test this without getters, but the function should not panic)
}

#[test]
fn play_card() {
    let env = &Env::default();
    let client = init_test(env);
    let player1 = Address::generate(env);
    let player2 = Address::generate(env);
    let platform = Address::generate(env);
    
    // Start a game first
    client.strt_game(&1, &player1, &player2, &platform);
    
    // Mock all auths for play_card operations
    env.mock_all_auths();
    
    // Create a mock hand with known cards for testing
    // We'll manually set the hand to contain specific cards we can test with
    env.as_contract(&client.address, || {
        let mut hand1: Vec<i32> = Vec::new(&env);
        hand1.push_back(11); // Light 1
        hand1.push_back(12); // Light 2
        hand1.push_back(13); // Light 3
        hand1.push_back(14); // Light 4
        
        let mut hand2: Vec<i32> = Vec::new(&env);
        hand2.push_back(21); // Shadow 1
        hand2.push_back(22); // Shadow 2
        hand2.push_back(23); // Shadow 3
        hand2.push_back(24); // Shadow 4
        
        env.storage().instance().set(&symbol_short!("hand1"), &hand1);
        env.storage().instance().set(&symbol_short!("hand2"), &hand2);
    });
    
    // Now we can test playing cards that we know are in the hand
    client.play_card(&player1, &11); // Play Light 1
    client.play_card(&player2, &21); // Play Shadow 1
}

#[test]
fn reset_game() {
    let env = &Env::default();
    let client = init_test(env);
    let player1 = Address::generate(env);
    let player2 = Address::generate(env);
    let platform = Address::generate(env);
    
    // Start a game
    client.strt_game(&1, &player1, &player2, &platform);
    
    // Reset the game
    client.reset_game();
    
    // Game should be reset (we can't easily test this without getters, but the function should not panic)
}

#[soroban_sdk::contracterror]
#[derive(Copy, Clone, Debug, Eq, PartialEq, PartialOrd, Ord)]
#[repr(u32)]
pub enum Error {
    /// The contract failed to transfer XLM to the guesser
    FailedToTransferToGuesser = 1,
    /// The guesser failed to transfer XLM to the contract
    FailedToTransferFromGuesser = 2,
    /// The contract has no balance to transfer to the guesser
    NoBalanceToTransfer = 3,
    
    // Platform contract errors
    /// Player is already registered
    PlayerAlreadyRegistered = 4,
    /// Player is not registered
    PlayerNotRegistered = 5,
    /// Insufficient stake amount
    InsufficientStake = 6,
    /// Match not found
    MatchNotFound = 7,
    /// Match is not in waiting state
    MatchNotWaiting = 8,
    /// Match is not active
    MatchNotActive = 9,
    /// Game contract not set
    GameContractNotSet = 10,
    /// No fees to withdraw
    NoFeesToWithdraw = 11,
    /// Player is already in a match
    PlayerAlreadyInMatch = 12,
    /// Player is already in matchmaking queue
    PlayerAlreadyInQueue = 13,
    /// Player is not in matchmaking queue
    PlayerNotInQueue = 14,
    /// No opponent found in matchmaking queue
    NoOpponentFound = 15,
    /// No stake to refund
    NoStakeToRefund = 16,
    /// Player failed to transfer XLM to the contract
    FailedToTransferFromPlayer = 17,
}

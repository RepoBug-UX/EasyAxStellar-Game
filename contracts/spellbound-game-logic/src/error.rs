#[soroban_sdk::contracterror]
#[derive(Copy, Clone, Debug, Eq, PartialEq, PartialOrd, Ord)]
#[repr(u32)]
pub enum Error {
    /// Game is not available
    GameNotAvailable = 1,
    /// Player is already in the game
    AlreadyInGame = 2,
    /// Game is not in progress
    GameNotInProgress = 3,
    /// Player is not in the game
    NotInGame = 4,
    /// It's not this player's turn
    NotYourTurn = 5,
    /// Card is not in player's hand
    CardNotInHand = 6,
    /// Game is already full
    GameFull = 7,
}

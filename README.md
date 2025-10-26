# Spellbound ⚔️

A decentralized card battle game built on Stellar blockchain where players stake XLM, battle with strategic card decks, and earn real rewards. Inspired by classic War-style gameplay with NFT power-ups and on-chain game logic.

## 📺 Demo Video

> **[Add your demo video link here]**

---

## 🎮 Game Overview

Spellbound combines strategic card battles with blockchain-based staking mechanics:

- **Stake 10 XLM** per match
- **Battle with card decks** featuring three types (Light, Shadow, Mortal) and circular hierarchy mechanics
- **Winner takes 90%** of the pot (18 XLM), platform keeps 10% (2 XLM)
- **NFT artifacts** provide gameplay advantages (coming soon)
- **On-chain game state** ensures trustless, verifiable gameplay

---

## 🖼️ Screenshots

### Home Page

![Home Page](./screenshots/home.png)
_Connect wallet and start playing_

### Game Interface

![Game Interface](./screenshots/game.png)
_Real-time card battles with your opponent_

### Matchmaking

![Matchmaking](./screenshots/matchmaking.png)
_Queue system for finding opponents_

> **Note:** Add your screenshots to a `screenshots/` folder in the project root

---

## 📜 Smart Contracts

### **1. Spellbound Platform Contract** (`spellbound-platform`)

The main platform contract handling player management, matchmaking, and financial operations:

- **Player Registration**: `register_player()` - Onboard new players and mint starter NFTs
- **Matchmaking System**:
  - `find_match()` - Automatically matches players or enters them into a queue
  - `is_in_queue()` - Check queue status
  - `leave_matchmaking_queue()` - Exit queue with stake refund (CEI pattern for security)
- **Match Management**:
  - `start_match()` - Initialize game logic contract for matched players
  - `end_match()` - Handle payouts (90% winner, 10% platform fee)
- **Financial Operations**:
  - Stakes 10 XLM per player using Stellar's native XLM token
  - Automatic payout distribution via `xlm::token_client()`
  - `withdraw_fees()` - Admin withdrawal of platform earnings
- **Admin Functions**: Contract upgrades, fee management, contract linking

**Key Features:**

- Reentrancy protection using Checks-Effects-Interactions pattern
- Native XLM integration (not wrapped tokens)
- Cross-contract calls to game logic

### **2. Spellbound Game Logic Contract** (`spellbound-game-logic`)

Core game mechanics and state management:

- **Game Initialization**: `strt_game()` - Create new game with shuffled 12-card decks per player
- **Card System**:
  - 3 card types: Light (1), Shadow (2), Mortal (3)
  - 4 card numbers: 1-4 with circular hierarchy (1 beats 4)
  - Encoding: `card_value = type*10 + number` (e.g., Light 3 = 13)
- **Gameplay**:
  - `play_card()` - Players submit cards from 4-card hands
  - Automatic clash resolution when both players play
  - Winner's card returns to front of their deck
  - Automatic card draw to maintain hand size
- **Win Conditions**:
  - Game ends when a player runs out of cards (deck + hand empty)
  - Calls platform contract's `end_match()` with winner address
- **Battle Logic**:
  - Number hierarchy checked first: 4 > 3 > 2 > 1 > 4 (circular)
  - Type hierarchy for ties: Light > Shadow > Mortal > Light (circular)
  - Identical cards = both destroyed

**Key Features:**

- Deterministic shuffling using Soroban's PRNG
- State machine (PRE_GAME → GAME_IN_PROGRESS → POST_GAME)
- Automatic turn resolution and game-over detection

### **3. NFT Enumerable Contract** (`nft-enumerable`)

OpenZeppelin-based ERC721-style NFT implementation for artifact power-ups:

- Standard NFT operations: mint, burn, transfer, approve
- Token enumeration for querying player-owned NFTs
- Integrated with platform for minting starter artifacts
- Pausable for emergency stops

### **4. Fungible Token Interface** (`fungible-token-interface`)

Token standard implementation demonstrating Stellar token capabilities (reference/example contract).

---

## 🛠️ Technical Stack

**Frontend:** React 19, TypeScript, Vite, Tailwind CSS, Stellar Design System
**Smart Contracts:** Rust, Soroban SDK v22-23, WebAssembly
**Blockchain:** Stellar (Soroban), Stellar SDK v14, Horizon API, Soroban RPC
**Tools:** Scaffold Stellar, OpenZeppelin Stellar Contracts, Stellar Wallets Kit
**Dev Workflow:** Auto-generated TypeScript bindings, hot-reload, monorepo structure

---

## 🚀 Quick Start

### Prerequisites

- [Node.js v22+](https://nodejs.org/)
- [Rust](https://www.rust-lang.org/tools/install)
- [Stellar CLI](https://developers.stellar.org/docs/tools/stellar-cli)

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd EasyAxStellar-Game

# Install dependencies
npm install

# Create environment file
cp .env.example .env
# Edit .env to configure your network (testnet/mainnet/local)

# Start development server
npm run dev
```

The app runs on `http://localhost:5173` (default Vite port).

### Deploying Contracts

For testnet deployment:

```bash
# Build contracts
stellar contract build

# Deploy to testnet
stellar registry publish
stellar registry deploy --deployed-name spellbound-platform --published-name spellbound-platform
stellar registry deploy --deployed-name spellbound-game-logic --published-name spellbound-game-logic
```

---

## 🎯 How to Play

1. **Connect Wallet** - Use Freighter or another Stellar wallet
2. **Fund Account** - Get testnet XLM from Friendbot (for testnet)
3. **Register** - Create your player profile
4. **Find Match** - Enter matchmaking queue (stakes 10 XLM automatically)
5. **Battle** - Play cards strategically to outlast your opponent
6. **Win** - Collect 18 XLM (90% of 20 XLM pot)

---

## 🔐 Security Features

- **Reentrancy Protection** - CEI pattern in platform contract
- **Authentication** - Stellar's built-in `require_auth()` on all player actions
- **Trustless Execution** - All game logic runs on-chain
- **Transparent Payouts** - Automatic distribution via smart contract
- **Admin Controls** - Multi-sig compatible for platform management

---

## 🏗️ Project Structure

```
├── contracts/              # Rust smart contracts
│   ├── spellbound-platform/
│   ├── spellbound-game-logic/
│   ├── nft-enumerable/
│   └── fungible-token-interface/
├── packages/              # Auto-generated TypeScript contract clients
├── src/
│   ├── components/        # React components
│   ├── contracts/         # Contract interaction helpers
│   ├── hooks/            # React hooks (useWallet, etc.)
│   └── pages/            # App pages
├── environments.toml      # Network & deployment config
└── .env                  # Environment variables
```

---

## 🤝 Contributing

Contributions welcome! Please open an issue or submit a PR.

---

## 📄 License

Apache License 2.0

---

## 🌟 Why Stellar?

This project is fundamentally built on Stellar and cannot exist without it:

- **Soroban smart contracts** provide trustless game execution
- **Native XLM staking** enables real monetary value
- **3-5 second finality** makes real-time gameplay possible
- **Ultra-low fees** (~0.00001 XLM) enable microtransactions for each move
- **Cross-contract calls** allow modular architecture (platform ↔ game logic)

---

Built with ❤️ for the Stellar ecosystem

<<<<<<< HEAD

# Spellbound ⚔️

A decentralized card battle game built on Stellar blockchain where players stake XLM, battle with strategic card decks, and earn real rewards. Inspired by classic War-style gameplay with NFT power-ups and on-chain game logic.

## 📺 Demo Video

> **https://drive.google.com/file/d/1EGClba3pC38KGxgeHjd9AHrXnrLWtIwv/view?usp=sharing**

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
- # [Stellar CLI](https://developers.stellar.org/docs/tools/stellar-cli)

# 🎮 Spellbound - Stellar Blockchain Card Game

# 🚀 LIVE DEMO - TRY IT NOW!

## 🔗 **https://dainty-trifle-d06dfe.netlify.app**

## 🔑 **Password: My-Drop-Site**

---

**Live Demo**: https://repobug-ux.github.io/EasyAxStellar-Spellbound/  
**Netlify Demo**: https://dainty-trifle-d06dfe.netlify.app (Password: `My-Drop-Site`)  
**Smart Contract**: `CCSMSRFPJHXGDFYMPVJVNW2RD6B6WQ5ECTP7VD37WMDUEMWJ4ZALIVC5`  
**Registry Link**: https://registry.stellar.org/contract/CCSMSRFPJHXGDFYMPVJVNW2RD6B6WQ5ECTP7VD37WMDUEMWJ4ZALIVC5

## 🌟 Overview

Spellbound is a retro-styled card battle game built on the Stellar blockchain using Soroban smart contracts. Players battle with magical cards, use NFT powerups, and earn real XLM rewards. The game features a pixel-perfect UI inspired by classic arcade games with modern blockchain integration.

### 🎬 Project Demo Videos

- **[Project Breakdown Video 1](./media/IMG_8959.MOV)** - Complete project overview and technical walkthrough
- **[Project Breakdown Video 2](./media/IMG_8960.MOV)** - Gameplay demonstration and UI showcase

### 📸 UI Screenshots

- **[Home Page](./media/Screenshot%202025-10-26%20at%2012.01.21%20PM.png)** - Landing page with game rules and wallet connection
- **[Lobby Interface](./media/Screenshot%202025-10-26%20at%2012.01.33%20PM.png)** - Matchmaking lobby with player stats and funding
- **[Game in Progress](./media/Screenshot%202025-10-26%20at%2012.01.41%20PM.png)** - Active card battle with opponent and player hands

## 🎯 Key Features

- **🎴 Strategic Card Battles**: Turn-based combat with 3 card types (Light, Shadow, Mortal) and power values (1-4)
- **⚔️ Type Advantages**: Rock-paper-scissors mechanics where Light beats Shadow, Shadow beats Mortal, Mortal beats Light
- **🏆 Real Rewards**: Win 15 XLM per victory, stake 10 XLM to enter matches
- **🎨 Retro UI**: Pixel-perfect design with animations, particle effects, and nostalgic gaming aesthetics
- **🔗 Blockchain Integration**: Full Stellar wallet connectivity and smart contract interaction
- **🎁 NFT Powerups**: Special artifacts that provide strategic advantages during battles

## 🎮 How to Play

### Game Rules

1. **Power Wins**: Higher power value (1-4) wins the battle
2. **Tiebreakers**: When powers are equal, type advantages decide the winner
3. **Double Destroy**: Same power + same type = both cards destroyed
4. **Deck Management**: Start with 4 cards in hand + 8 in deck
5. **Victory Conditions**: Last player with cards wins the game

### Card Types

- **✨ Light**: Divine radiance (beats Shadow)
- **👻 Shadow**: Dark essence (beats Mortal)
- **⚔️ Mortal**: Human strength (beats Light)

### Battle Flow

1. **Select Card**: Choose from your 4-card hand
2. **Reveal**: Both players' cards are revealed simultaneously
3. **Resolve**: Winner determined by power + type advantages
4. **Consequences**: Winner's card goes to deck bottom, loser's card destroyed
5. **Continue**: Draw new cards and repeat until one player runs out

## 🏗️ Smart Contract Architecture

### Deployed Contract: Spellbound Game Logic

**Contract ID**: `CCSMSRFPJHXGDFYMPVJVNW2RD6B6WQ5ECTP7VD37WMDUEMWJ4ZALIVC5`

#### Core Functions:

- **`play_card(card_value, card_type)`**: Submit a card for battle
- **`strt_game()`**: Initialize a new game session
- **`reset_game()`**: Reset game state for new match

#### Game State Management:

- Tracks player cards and deck states
- Manages battle resolution logic
- Handles type advantage calculations
- Maintains game progression state

### Additional Contracts (Published):

- **Spellbound Platform**: Matchmaking and staking system
- **Spellbound NFT**: Powerup artifacts and collectibles

## 🛠️ Technical Stack

### Frontend

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** with custom retro styling
- **Framer Motion** for smooth animations
- **Radix UI** for accessible components
- **Stellar SDK** for blockchain integration

### Backend

- **Soroban Smart Contracts** (Rust)
- **Stellar Testnet** for deployment
- **Stellar Registry** for contract publishing

### Key Libraries

- `@stellar/stellar-sdk`: Blockchain interaction
- `motion/react`: Animation framework
- `lucide-react`: Icon system
- `react-router-dom`: Navigation

## 🚀 Getting Started

### Prerequisites

- Node.js 20.19+ or 22.12+
- Rust toolchain
- Stellar CLI
  > > > > > > > 55526783ed470a9d73defc113407ae1dddfff895

### Installation

```bash
# Clone the repository
<<<<<<< HEAD
git clone <your-repo-url>
cd EasyAxStellar-Game
=======
git clone https://github.com/RepoBug-UX/EasyAxStellar-Spellbound.git
cd EasyAxStellar-Spellbound
>>>>>>> 55526783ed470a9d73defc113407ae1dddfff895

# Install dependencies
npm install

<<<<<<< HEAD
# Create environment file
cp .env.example .env
# Edit .env to configure your network (testnet/mainnet/local)

=======
>>>>>>> 55526783ed470a9d73defc113407ae1dddfff895
# Start development server
npm run dev
```

<<<<<<< HEAD
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

# Built with ❤️ for the Stellar ecosystem

### Building for Production

```bash
# Build the project
npm run build

# Preview production build
npm run preview
```

## 🎨 UI/UX Features

### Retro Design System

- **Pixel Font**: Custom retro typography
- **Color Palette**: Purple/cyan gradients with neon accents
- **Animations**: Floating particles, glow effects, card reveals
- **Responsive**: Works on desktop and mobile devices

### Interactive Elements

- **Wallet Connection**: Seamless Stellar wallet integration
- **Card Animations**: Smooth card selection and battle reveals
- **Emote System**: Player communication during battles
- **Progress Indicators**: Real-time matchmaking status

### Visual Showcase

The game features a complete retro gaming experience with:

![Home Page](./media/Screenshot%202025-10-26%20at%2012.01.21%20PM.png)
_Landing page with comprehensive game rules and wallet connection_

![Lobby Interface](./media/Screenshot%202025-10-26%20at%2012.01.33%20PM.png)
_Matchmaking lobby showing player stats, balance, and matchmaking status_

![Game in Progress](./media/Screenshot%202025-10-26%20at%2012.01.41%20PM.png)
_Active card battle with opponent hand, player hand, and NFT powerups_

## 🚀 Try It Now!

**Quick Access**:

- **Primary Demo**: https://repobug-ux.github.io/EasyAxStellar-Spellbound/
- **Backup Demo**: https://dainty-trifle-d06dfe.netlify.app (Password: `My-Drop-Site`)

**Steps to Play**:

1. Visit either demo URL above
2. Connect your Stellar wallet (Freighter recommended)
3. Fund your account with testnet XLM
4. Click "FIND MATCH" to start a game
5. Select cards strategically and battle!
6. Win XLM rewards for victories

## 🔧 Development

### Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Base UI components (buttons, dialogs, etc.)
│   ├── PixelCard.tsx   # Game card component
│   ├── EmoteSelector.tsx # Player emote system
│   └── GameResult.tsx  # End game screen
├── pages/              # Main application pages
│   ├── Home.tsx        # Landing page with game rules
│   ├── Lobby.tsx       # Matchmaking interface
│   └── Game.tsx        # Main game interface
├── hooks/              # Custom React hooks
│   ├── useWallet.ts    # Wallet connection logic
│   ├── useMatchmaking.ts # Game matching system
│   └── useWalletBalance.ts # Balance tracking
├── contracts/          # Smart contract clients
└── util/               # Utility functions
```

### Smart Contract Development

```bash
# Build contracts
cargo build --target wasm32v1-none --release

# Deploy to testnet
stellar contract deploy --wasm target/wasm32v1-none/release/spellbound_game_logic.wasm
```

## 🌐 Deployment

### GitHub Pages

The project is automatically deployed to GitHub Pages:

- **Repository**: https://github.com/RepoBug-UX/EasyAxStellar-Spellbound
- **Live URL**: https://repobug-ux.github.io/EasyAxStellar-Spellbound/

### Smart Contract Deployment

- **Network**: Stellar Testnet
- **Registry**: Published to Stellar Registry
- **Contract ID**: `CCSMSRFPJHXGDFYMPVJVNW2RD6B6WQ5ECTP7VD37WMDUEMWJ4ZALIVC5`

## 🎯 Hackathon Submission

### What We Built

✅ **Complete Card Battle Game** with strategic gameplay mechanics  
✅ **Stellar Smart Contract** deployed on testnet  
✅ **Retro Gaming UI** with pixel-perfect design  
✅ **Wallet Integration** for seamless blockchain interaction  
✅ **Real-time Matchmaking** system  
✅ **NFT Powerup System** for enhanced gameplay

### Technical Achievements

- **Soroban Smart Contracts**: Game logic implemented in Rust
- **Stellar Registry**: Published and deployed contracts
- **Modern Frontend**: React + TypeScript with retro styling
- **Blockchain Integration**: Full wallet connectivity and transaction handling
- **Responsive Design**: Works across all device sizes

### Demo Instructions

1. **Visit**: Either demo URL above
2. **Connect Wallet**: Use any Stellar wallet (Freighter recommended)
3. **Fund Account**: Claim testnet XLM from friendbot
4. **Enter Lobby**: Click "FIND MATCH" to start a game
5. **Play**: Select cards strategically and battle opponents
6. **Win Rewards**: Earn XLM for victories

## 📱 Supported Wallets

- **Freighter** (Recommended)
- **Albedo**
- **Rabet**
- **Any Stellar-compatible wallet**

## 🤝 Contributing

This project was built for the EasyAx Stellar Hackathon. For contributions or questions, please open an issue on GitHub.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**Built with ❤️ for the Stellar ecosystem using Soroban smart contracts**

> > > > > > > 55526783ed470a9d73defc113407ae1dddfff895

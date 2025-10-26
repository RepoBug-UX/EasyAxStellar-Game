# 🎮 Spellbound - Stellar Blockchain Card Game

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

### Installation

```bash
# Clone the repository
git clone https://github.com/RepoBug-UX/EasyAxStellar-Spellbound.git
cd EasyAxStellar-Spellbound

# Install dependencies
npm install

# Start development server
npm run dev
```

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

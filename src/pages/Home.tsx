import { motion } from "motion/react";
import { Sparkles, Skull, Ghost, Flame, Zap } from "lucide-react";
import { Button } from "../components/ui/button";
import { useWallet } from "../hooks/useWallet";
import { connectWallet } from "../util/wallet";
import { useMatchmaking } from "../hooks/useMatchmaking";
import { useNotification } from "../hooks/useNotification";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { address } = useWallet();
  const { isLoading: matchmakingLoading } = useMatchmaking();
  const { addNotification } = useNotification();
  const navigate = useNavigate();

  const handleConnect = () => {
    try {
      if (!address) {
        // No wallet connected - connect wallet
        addNotification("Connecting wallet...", "info");
        void connectWallet();
        addNotification(
          "Wallet connected! You can now navigate to the lobby.",
          "success",
        );
      } else {
        // Wallet connected - navigate to lobby
        void navigate("/lobby");
      }
    } catch (error) {
      console.error("Failed to connect wallet:", error);
      addNotification("Failed to connect wallet. Please try again.", "error");
    }
  };

  // Determine button text and state
  const getButtonState = () => {
    if (matchmakingLoading) {
      return { text: "PROCESSING...", disabled: true };
    }

    if (!address) {
      return { text: "CONNECT WALLET", disabled: false };
    }

    return { text: "ENTER LOBBY", disabled: false };
  };

  const buttonState = getButtonState();

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-gradient-to-b from-background via-purple-950/30 to-background">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -30, 0], rotate: [0, 10, 0], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-10 left-10 text-purple-500/10"
        >
          <Ghost className="w-32 h-32" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 9, repeat: Infinity }}
          className="absolute top-40 right-10 text-orange-500/10"
        >
          <Flame className="w-40 h-40" />
        </motion.div>
        <motion.div
          animate={{ y: [0, -20, 0], x: [0, -15, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-32 left-1/4 text-purple-400/10"
        >
          <Skull className="w-28 h-28" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 25, 0], rotate: [0, 15, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute bottom-20 right-1/3 text-cyan-400/10"
        >
          <Zap className="w-36 h-36" />
        </motion.div>

        {/* Floating particles */}
        {Array.from({ length: 20 }, (_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          {/* Logo/Title */}
          <div className="flex items-center justify-center gap-4 mb-6 flex-wrap">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Skull className="w-20 h-20 text-primary animate-flicker" />
            </motion.div>
            <div>
              <h1 className="text-5xl md:text-7xl pixel-font bg-gradient-to-r from-primary via-purple-400 to-secondary bg-clip-text text-transparent mb-2">
                STELLAR
              </h1>
              <h1 className="text-5xl md:text-7xl pixel-font bg-gradient-to-r from-secondary via-orange-400 to-primary bg-clip-text text-transparent">
                SPELLBOUND
              </h1>
            </div>
            <motion.div
              animate={{ rotate: [0, -360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Flame className="w-20 h-20 text-secondary animate-flicker" />
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto pixel-font text-[14px] leading-relaxed"
          >
            BLOCKCHAIN-POWERED CARD BATTLES • STAKE XLM • WIN REWARDS
          </motion.p>
        </motion.div>

        {/* Description card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="retro-panel rounded p-8 max-w-4xl mb-8 shadow-2xl"
        >
          <div className="space-y-6">
            {/* Card Hierarchy Section */}
            <div className="bg-black/40 rounded p-6 border-2 border-primary/40">
              <h3 className="text-3xl pixel-font text-secondary mb-6 flex items-center gap-2 text-center justify-center">
                <Sparkles className="w-8 h-8" />
                GAME RULES
                <Sparkles className="w-8 h-8" />
              </h3>

              {/* Card Types */}
              <div className="mb-6">
                <div className="pixel-font text-[16px] text-center text-primary mb-4">
                  CARD TYPES
                </div>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-gradient-to-br from-yellow-900/60 to-amber-900/60 rounded p-5 border-2 border-yellow-500">
                    <div className="text-5xl text-center mb-2">✨</div>
                    <div className="pixel-font text-[14px] text-center text-yellow-300 uppercase mb-2">
                      LIGHT
                    </div>
                    <p className="pixel-font text-[12px] text-center text-white/70 leading-relaxed">
                      Divine radiance
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-purple-900/60 to-indigo-900/60 rounded p-5 border-2 border-purple-500">
                    <div className="text-5xl text-center mb-2">👻</div>
                    <div className="pixel-font text-[14px] text-center text-purple-300 uppercase mb-2">
                      SHADOW
                    </div>
                    <p className="pixel-font text-[12px] text-center text-white/70 leading-relaxed">
                      Dark essence
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-red-900/60 to-rose-900/60 rounded p-5 border-2 border-red-500">
                    <div className="text-5xl text-center mb-2">⚔️</div>
                    <div className="pixel-font text-[14px] text-center text-red-300 uppercase mb-2">
                      MORTAL
                    </div>
                    <p className="pixel-font text-[12px] text-center text-white/70 leading-relaxed">
                      Human strength
                    </p>
                  </div>
                </div>
              </div>

              {/* Battle Rules */}
              <div className="bg-muted/30 rounded p-5 border border-primary/20">
                <div className="pixel-font text-[16px] text-center text-primary mb-4">
                  HOW TO WIN
                </div>

                <div className="space-y-4">
                  {/* Rule 1 */}
                  <div className="bg-black/30 rounded p-3 border border-secondary/30">
                    <div className="pixel-font text-[13px] text-secondary mb-2">
                      📊 RULE 1: POWER WINS
                    </div>
                    <div className="pixel-font text-[12px] text-white/80 leading-relaxed">
                      Higher power (1-4) wins the battle
                      <br />
                      <span className="text-secondary font-bold">
                        • 1 beats 4!
                      </span>
                    </div>
                  </div>

                  {/* Rule 2 */}
                  <div className="bg-black/30 rounded p-3 border border-secondary/30">
                    <div className="pixel-font text-[13px] text-secondary mb-2">
                      ⚔️ RULE 2: TIEBREAKERS
                    </div>
                    <div className="pixel-font text-[12px] text-white/80 leading-relaxed mb-2">
                      When powers are equal, type decides:
                    </div>
                    <div className="flex flex-col gap-1 pixel-font text-[11px] text-white/70">
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-yellow-400">✨ LIGHT</span>
                        <span>beats</span>
                        <span className="text-purple-400">👻 SHADOW</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-purple-400">👻 SHADOW</span>
                        <span>beats</span>
                        <span className="text-red-400">⚔️ MORTAL</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-red-400">⚔️ MORTAL</span>
                        <span>beats</span>
                        <span className="text-yellow-400">✨ LIGHT</span>
                      </div>
                    </div>
                  </div>

                  {/* Rule 3 */}
                  <div className="bg-black/30 rounded p-3 border border-destructive/30">
                    <div className="pixel-font text-[13px] text-destructive mb-2">
                      💥 RULE 3: DOUBLE DESTROY
                    </div>
                    <div className="pixel-font text-[12px] text-white/80 leading-relaxed">
                      Same power + same type = BOTH cards destroyed!
                    </div>
                  </div>

                  {/* Deck System */}
                  <div className="bg-primary/20 rounded p-3 border border-primary/40">
                    <div className="pixel-font text-[13px] text-primary mb-2">
                      🎴 DECK SYSTEM
                    </div>
                    <div className="space-y-1 pixel-font text-[11px] text-white/80 leading-relaxed">
                      <p>• Start with 4 cards in hand + 8 in deck</p>
                      <p>• Winner's card returns to deck bottom</p>
                      <p>• Loser's card is destroyed</p>
                      <p>• Draw new card after each round</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* How to Play */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-muted/60 to-muted/30 rounded p-5 border-2 border-primary/30">
                <div className="text-5xl mb-3 text-center">🎴</div>
                <div className="pixel-font text-[14px] mb-3 text-center text-primary">
                  1. DRAW & PLAY
                </div>
                <p className="pixel-font text-[12px] text-muted-foreground text-center leading-relaxed">
                  See your hand of 4 cards! Play strategically based on power &
                  type.
                </p>
              </div>

              <div className="bg-gradient-to-br from-muted/60 to-muted/30 rounded p-5 border-2 border-primary/30">
                <div className="text-5xl mb-3 text-center">⚔️</div>
                <div className="pixel-font text-[14px] mb-3 text-center text-primary">
                  2. BATTLE
                </div>
                <p className="pixel-font text-[12px] text-muted-foreground text-center leading-relaxed">
                  Higher power wins! Use type advantages to break ties.
                </p>
              </div>

              <div className="bg-gradient-to-br from-muted/60 to-muted/30 rounded p-5 border-2 border-primary/30">
                <div className="text-5xl mb-3 text-center">🏆</div>
                <div className="pixel-font text-[14px] mb-3 text-center text-primary">
                  3. WIN BIG
                </div>
                <p className="pixel-font text-[12px] text-muted-foreground text-center leading-relaxed">
                  Last player with cards wins 15 XLM and rare NFTs!
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-secondary/30 to-primary/30 rounded p-4 border-2 border-secondary/50 animate-pulse-glow">
              <p className="text-center pixel-font text-[14px]">
                <span className="text-secondary">NEW PLAYER BONUS:</span>{" "}
                <span className="text-white">
                  10,000 XLM + 2 FREE POWER-UPS!
                </span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Connect button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-8"
        >
          <Button
            onClick={handleConnect}
            disabled={buttonState.disabled}
            className="retro-panel bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-16 py-10 rounded shadow-2xl shadow-primary/50 pixel-font text-lg hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {buttonState.text}
          </Button>
        </motion.div>

        {/* Footer info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center pixel-font text-[12px] text-muted-foreground"
        >
          POWERED BY STELLAR NETWORK & SOROBAN SMART CONTRACTS
        </motion.div>
      </div>
    </div>
  );
}

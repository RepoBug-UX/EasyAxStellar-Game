import { motion } from "motion/react";
import { Trophy, Coins, Skull, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

interface GameResultProps {
  winner: "player" | "opponent" | "tie";
  playerScore: number;
  opponentScore: number;
  xlmWon: number;
  onBackToLobby: () => void;
}

export function GameResult({
  winner,
  playerScore,
  opponentScore,
  xlmWon,
  onBackToLobby,
}: GameResultProps) {
  const isVictory = winner === "player";
  const isTie = winner === "tie";

  const rewards = isVictory
    ? {
        xlm: xlmWon,
        bonus: "Rare NFT Card",
      }
    : isTie
      ? {
          xlm: Math.floor(xlmWon * 0.6), // 60% of stake back
          bonus: null,
        }
      : {
          xlm: 0,
          bonus: null,
        };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
    >
      <motion.div
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 50 }}
        transition={{ type: "spring", damping: 15 }}
      >
        <div className="max-w-2xl w-full p-8 retro-panel rounded shadow-2xl">
          {/* Header Icon */}
          <div className="text-center mb-6">
            {isVictory ? (
              <motion.div
                animate={{ rotate: [0, -10, 10, -10, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 0.6 }}
                className="inline-block"
              >
                <div className="relative">
                  <Trophy className="w-32 h-32 text-secondary mx-auto" />
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 blur-xl"
                  >
                    <Trophy className="w-32 h-32 text-secondary" />
                  </motion.div>
                </div>
              </motion.div>
            ) : isTie ? (
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Sparkles className="w-32 h-32 text-primary mx-auto" />
              </motion.div>
            ) : (
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Skull className="w-32 h-32 text-muted-foreground mx-auto" />
              </motion.div>
            )}
          </div>

          {/* Title */}
          <h2 className="text-5xl text-center mb-4 pixel-font">
            {isVictory ? (
              <span className="bg-gradient-to-r from-secondary via-yellow-400 to-secondary bg-clip-text text-transparent">
                VICTORY!
              </span>
            ) : isTie ? (
              <span className="text-primary">TIE GAME!</span>
            ) : (
              <span className="text-muted-foreground">DEFEAT</span>
            )}
          </h2>

          <p className="text-center text-muted-foreground mb-8 pixel-font text-[9px]">
            {isVictory
              ? "YOU VANQUISHED YOUR OPPONENT!"
              : isTie
                ? "BOTH WARRIORS FOUGHT TO A DRAW"
                : "YOUR OPPONENT CLAIMED VICTORY"}
          </p>

          {/* Score */}
          <div className="flex items-center justify-center gap-8 mb-8">
            <div className="text-center retro-panel rounded p-4">
              <div className="text-4xl mb-2 pixel-font text-primary">
                {playerScore}
              </div>
              <div className="text-sm text-muted-foreground pixel-font text-[8px]">
                YOU
              </div>
            </div>
            <div className="text-3xl text-muted-foreground pixel-font">-</div>
            <div className="text-center retro-panel rounded p-4">
              <div className="text-4xl mb-2 pixel-font text-secondary">
                {opponentScore}
              </div>
              <div className="text-sm text-muted-foreground pixel-font text-[8px]">
                OPPONENT
              </div>
            </div>
          </div>

          {/* Rewards */}
          <div className="bg-muted/30 rounded p-6 mb-8 border-2 border-primary/30">
            <h3 className="text-center mb-4 flex items-center justify-center gap-2 pixel-font">
              <Coins className="w-5 h-5 text-secondary" />
              <span>REWARDS</span>
            </h3>

            <div className="space-y-3">
              <div className="flex items-center justify-between bg-black/30 rounded p-3">
                <span className="text-muted-foreground pixel-font text-[8px]">
                  XLM EARNED:
                </span>
                <span
                  className={`text-2xl pixel-font ${isVictory ? "text-secondary" : ""}`}
                >
                  {rewards.xlm} XLM
                </span>
              </div>

              {rewards.bonus && (
                <div className="flex items-center justify-between bg-black/30 rounded p-3">
                  <span className="text-muted-foreground pixel-font text-[8px]">
                    BONUS:
                  </span>
                  <span className="text-lg text-primary flex items-center gap-2 pixel-font text-[9px]">
                    <Sparkles className="w-4 h-4" />
                    {rewards.bonus}
                  </span>
                </div>
              )}

              {!isVictory && !isTie && (
                <div className="text-center text-sm text-muted-foreground pt-2 pixel-font text-[8px]">
                  BETTER LUCK NEXT TIME, WARRIOR
                </div>
              )}
            </div>
          </div>

          {/* Stats Summary */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="text-center p-3 bg-card/50 rounded border-2 border-primary/30">
              <div className="text-2xl text-primary mb-1 pixel-font">
                {playerScore}
              </div>
              <div className="text-xs text-muted-foreground pixel-font text-[7px]">
                ROUNDS WON
              </div>
            </div>
            <div className="text-center p-3 bg-card/50 rounded border-2 border-primary/30">
              <div className="text-2xl text-secondary mb-1 pixel-font">
                {playerScore + opponentScore}
              </div>
              <div className="text-xs text-muted-foreground pixel-font text-[7px]">
                TOTAL ROUNDS
              </div>
            </div>
            <div className="text-center p-3 bg-card/50 rounded border-2 border-primary/30">
              <div className="text-2xl text-primary mb-1 pixel-font">
                {playerScore + opponentScore > 0
                  ? Math.round(
                      (playerScore / (playerScore + opponentScore)) * 100,
                    )
                  : 0}
                %
              </div>
              <div className="text-xs text-muted-foreground pixel-font text-[7px]">
                WIN RATE
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <Button
              onClick={onBackToLobby}
              className="flex-1 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-4 rounded shadow-xl pixel-font"
            >
              BACK TO LOBBY
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

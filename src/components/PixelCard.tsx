import { motion } from "motion/react";
import { Sword, Shield } from "lucide-react";
import { CardData, CARD_TYPE_INFO } from "./CardTypes";

interface PixelCardProps {
  card: CardData;
  isRevealed: boolean;
  isSelected?: boolean;
  onClick?: () => void;
  isDisabled?: boolean;
  isWinner?: boolean;
  isLoser?: boolean;
  typeBonus?: boolean;
}

export function PixelCard({
  card,
  isRevealed,
  isSelected,
  onClick,
  isDisabled,
  isWinner,
  isLoser,
  typeBonus,
}: PixelCardProps) {
  const typeInfo = CARD_TYPE_INFO[card.type];

  return (
    <motion.div
      whileHover={!isDisabled && onClick ? { scale: 1.08, y: -12 } : {}}
      whileTap={!isDisabled && onClick ? { scale: 0.95 } : {}}
      onClick={!isDisabled ? onClick : undefined}
      className={`relative cursor-pointer transition-all duration-200 ${
        isDisabled ? "cursor-not-allowed opacity-60" : ""
      }`}
      animate={
        isWinner
          ? { scale: [1, 1.15, 1], rotate: [0, 5, -5, 0] }
          : isLoser
            ? { opacity: [1, 0.3], scale: [1, 0.9] }
            : {}
      }
      transition={{ duration: 0.6 }}
    >
      <div
        className={`w-28 h-40 rounded border-4 flex flex-col items-center justify-between p-2 relative overflow-hidden transition-all ${
          isRevealed
            ? isWinner
              ? "bg-gradient-to-br from-green-800/80 to-green-600/80 border-green-400 shadow-lg shadow-green-500/60 animate-pulse-glow"
              : isLoser
                ? "bg-gradient-to-br from-red-900/60 to-gray-900/60 border-red-600 shadow-lg shadow-red-500/40"
                : `bg-gradient-to-br ${typeInfo.bgGradient}`
            : "bg-gradient-to-br from-gray-800 to-gray-900 border-purple-600"
        } ${isSelected ? "ring-4 ring-secondary shadow-xl shadow-secondary/50" : ""}`}
        style={{
          ...(isRevealed && !isWinner && !isLoser
            ? { borderColor: typeInfo.color }
            : {}),
        }}
      >
        {/* Pixel pattern background */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px),
                repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)
              `,
            }}
          />
        </div>

        {isRevealed ? (
          <>
            {/* Card Type Icon */}
            <div className="relative z-10 w-full flex justify-center mb-1">
              <div
                className="text-6xl pixel-font animate-float"
                style={{ animationDelay: "0.2s" }}
              >
                {card.emoji}
              </div>
            </div>

            {/* Card Name */}
            <div className="relative z-10 text-center px-1">
              <div className="text-[9px] pixel-font text-white uppercase leading-tight mb-1 tracking-tight">
                {card.name}
              </div>
              <div className="text-[7px] text-white/70 uppercase pixel-font">
                {card.type}
              </div>
            </div>

            {/* Value Display - More Prominent */}
            <div className="relative z-10 w-full">
              <div className="flex items-center justify-center gap-2 bg-gradient-to-br from-secondary/40 to-primary/40 rounded-lg py-2 px-3 border-2 border-secondary/60 shadow-lg">
                <Sword className="w-4 h-4 text-secondary animate-flicker" />
                <span className="text-2xl pixel-font text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  {card.value}
                </span>
                <Shield className="w-4 h-4 text-primary animate-flicker" />
              </div>
            </div>

            {/* Type advantage indicator */}
            {typeBonus && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute top-1 right-1 bg-secondary rounded-full p-1 border-2 border-white"
              >
                <span className="text-xs pixel-font">+2</span>
              </motion.div>
            )}
          </>
        ) : (
          <>
            {/* Card Back Design */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full w-full">
              {/* Skull pattern */}
              <div className="text-6xl animate-glow mb-2">💀</div>

              {/* Decorative borders */}
              <div className="w-full border-t-2 border-b-2 border-purple-400/30 py-2 my-2">
                <div className="text-[7px] pixel-font text-purple-300 text-center uppercase tracking-wider">
                  Stellar
                </div>
                <div className="text-[6px] pixel-font text-purple-300/60 text-center uppercase">
                  Spellbound
                </div>
              </div>

              {/* Bottom icon */}
              <div className="text-2xl text-purple-400/40">⚔️</div>
            </div>

            {/* Scanline effect */}
            <div className="absolute inset-0 pointer-events-none">
              <div
                className="w-full h-full opacity-10"
                style={{
                  background:
                    "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(139, 92, 246, 0.5) 2px, rgba(139, 92, 246, 0.5) 4px)",
                }}
              />
            </div>
          </>
        )}

        {/* Glow effect when selected */}
        {isSelected && (
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 to-transparent rounded pointer-events-none" />
        )}

        {/* Winner glow */}
        {isWinner && (
          <motion.div
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="absolute -inset-1 bg-green-500/40 blur-xl rounded -z-10"
          />
        )}
      </div>
    </motion.div>
  );
}

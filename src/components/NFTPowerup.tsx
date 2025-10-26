import { motion } from "motion/react";
import { Sparkles, Clock, Shield, Zap, Flame, Moon } from "lucide-react";
import { Button } from "./ui/button";

export interface PowerupType {
  id: string;
  name: string;
  description: string;
  icon: "sparkles" | "clock" | "shield" | "zap" | "flame" | "moon";
  rarity: "common" | "rare" | "legendary";
  used?: boolean;
}

interface NFTPowerupProps {
  powerup: PowerupType;
  onUse: () => void;
  disabled?: boolean;
}

const iconMap = {
  sparkles: Sparkles,
  clock: Clock,
  shield: Shield,
  zap: Zap,
  flame: Flame,
  moon: Moon,
};

const rarityColors = {
  common: "from-gray-600 to-gray-800 border-gray-500",
  rare: "from-blue-600 to-purple-800 border-blue-400",
  legendary: "from-orange-600 to-yellow-600 border-yellow-400",
};

export function NFTPowerup({ powerup, onUse, disabled }: NFTPowerupProps) {
  const Icon = iconMap[powerup.icon];

  return (
    <motion.div
      whileHover={!disabled && !powerup.used ? { scale: 1.05 } : {}}
      className="relative"
    >
      <div
        className={`relative p-4 rounded border-2 bg-gradient-to-br ${rarityColors[powerup.rarity]} ${
          powerup.used ? "opacity-40 grayscale" : ""
        } ${disabled ? "cursor-not-allowed" : ""}`}
      >
        {/* Glow effect for legendary */}
        {powerup.rarity === "legendary" && !powerup.used && (
          <div className="absolute inset-0 rounded blur-xl bg-gradient-to-r from-orange-500 to-yellow-500 opacity-50 animate-pulse-glow" />
        )}

        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-2">
            <Icon className="w-5 h-5 text-white" />
            <h4 className="pixel-font text-[8px] text-white">{powerup.name}</h4>
          </div>
          <p className="text-[7px] text-white/80 mb-3 leading-relaxed">
            {powerup.description}
          </p>
          <Button
            onClick={onUse}
            disabled={disabled || powerup.used}
            size="sm"
            className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/40 pixel-font text-[7px]"
          >
            {powerup.used ? "USED" : "ACTIVATE"}
          </Button>
        </div>

        {/* Rarity badge */}
        <div className="absolute top-2 right-2">
          <div className="px-2 py-1 rounded bg-black/50 pixel-font text-[6px] text-white uppercase">
            {powerup.rarity}
          </div>
        </div>

        {/* Used overlay */}
        {powerup.used && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white pixel-font text-[10px] rotate-12">
              USED
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

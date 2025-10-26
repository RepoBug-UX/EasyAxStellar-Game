import { motion, AnimatePresence } from "motion/react";
import { Smile } from "lucide-react";
import { useState } from "react";
import { EMOTES } from "./emotes";

interface EmoteSelectorProps {
  onSelectEmote: (emote: string) => void;
  disabled?: boolean;
}

export function EmoteSelector({ onSelectEmote, disabled }: EmoteSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleEmoteClick = (emoji: string) => {
    onSelectEmote(emoji);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        disabled={disabled}
        className="retro-panel p-3 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:border-secondary transition-colors"
      >
        <Smile className="w-6 h-6 text-secondary" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -10 }}
            className="absolute bottom-full right-0 mb-2 retro-panel p-2 rounded z-50"
          >
            <div className="grid grid-cols-2 gap-3">
              {EMOTES.map((emote) => (
                <motion.button
                  key={emote.id}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleEmoteClick(emote.emoji)}
                  className="w-14 h-14 bg-muted/50 hover:bg-primary/30 rounded border-2 border-primary/30 flex items-center justify-center transition-colors"
                  title={emote.label}
                >
                  <span className="text-2xl">{emote.emoji}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface EmoteDisplayProps {
  emote: string;
  side: "player" | "opponent";
}

export function EmoteDisplay({ emote, side }: EmoteDisplayProps) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: [0, 1.5, 1], opacity: [0, 1, 1] }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5 }}
      className={`absolute ${
        side === "player" ? "bottom-4 left-1/2" : "top-4 left-1/2"
      } -translate-x-1/2 z-50`}
    >
      <div className="relative">
        <div className="text-8xl animate-float">{emote}</div>
        <div className="absolute inset-0 blur-xl opacity-50">
          <div className="text-8xl">{emote}</div>
        </div>
      </div>
    </motion.div>
  );
}

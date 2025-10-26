import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Swords, Trophy, Skull, Coins, Zap, Heart } from "lucide-react";
import { PixelCard } from "../components/PixelCard";
import { NFTPowerup, PowerupType } from "../components/NFTPowerup";
import { GameResult } from "../components/GameResult";
import { EmoteSelector, EmoteDisplay } from "../components/EmoteSelector";
import {
  CardData,
  generateDeck,
  determineBattleWinner,
  CARD_TYPE_ADVANTAGES,
} from "../components/CardTypes";
import cardBackImage from "../assets/card-back.png";

interface GamePageProps {
  onBackToLobby: () => void;
}

type GamePhase = "selecting" | "revealing" | "resolving";

// Face-down card stack component
function CardStack({ count }: { count: number }) {
  if (count === 0) return null;

  return (
    <div className="relative w-28 h-40 flex-shrink-0">
      {/* Stacked card effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-secondary/40 rounded border-4 border-primary/60 transform translate-x-1 translate-y-1" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/50 to-secondary/50 rounded border-4 border-primary/70 transform translate-x-0.5 translate-y-0.5" />
      <div className="absolute inset-0 bg-gradient-to-br from-card to-muted rounded border-4 border-primary flex flex-col items-center justify-center overflow-hidden">
        <img
          src={cardBackImage}
          alt="Card Back"
          className="w-full h-full object-cover absolute inset-0"
        />
        <div className="relative z-10 bg-black/70 px-2 py-1 rounded mt-auto mb-2">
          <div className="pixel-font text-[10px] text-primary">{count}</div>
          <div className="pixel-font text-[6px] text-muted-foreground">
            CARDS
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Game({ onBackToLobby }: GamePageProps) {
  // Player hand (4 cards) and draw deck (8 cards)
  const [playerHand, setPlayerHand] = useState<CardData[]>([]);
  const [playerDrawDeck, setPlayerDrawDeck] = useState<CardData[]>([]);

  // Opponent hand and draw deck
  const [opponentHand, setOpponentHand] = useState<CardData[]>([]);
  const [opponentDrawDeck, setOpponentDrawDeck] = useState<CardData[]>([]);

  const [playerSelectedCard, setPlayerSelectedCard] = useState<number | null>(
    null,
  );
  const [opponentSelectedCard, setOpponentSelectedCard] = useState<
    number | null
  >(null);
  const [phase, setPhase] = useState<GamePhase>("selecting");
  const [roundWinner, setRoundWinner] = useState<
    "player" | "opponent" | "both-destroyed" | null
  >(null);
  const [gameOver, setGameOver] = useState(false);
  const [finalWinner, setFinalWinner] = useState<
    "player" | "opponent" | "tie" | null
  >(null);
  const [playerScore, setPlayerScore] = useState(0);
  const [opponentScore, setOpponentScore] = useState(0);
  const [roundNumber, setRoundNumber] = useState(1);
  const [activePowerup, setActivePowerup] = useState<string | null>(null);
  const [playerEmote, setPlayerEmote] = useState<string | null>(null);
  const [opponentEmote, setOpponentEmote] = useState<string | null>(null);
  const [playerTypeBonus, setPlayerTypeBonus] = useState(false);
  const [opponentTypeBonus, setOpponentTypeBonus] = useState(false);

  const [playerPowerups, setPlayerPowerups] = useState<PowerupType[]>([
    {
      id: "1",
      name: "Cursed Amulet",
      description: "+1 to your card value",
      icon: "moon",
      rarity: "rare",
    },
    {
      id: "2",
      name: "Soul Reaper",
      description: "Peek at opponent card",
      icon: "sparkles",
      rarity: "legendary",
    },
    {
      id: "3",
      name: "Blood Pact",
      description: "Revive lost card",
      icon: "flame",
      rarity: "rare",
    },
  ]);

  // Initialize decks - split into hand (4 cards) and draw deck (8 cards)
  useEffect(() => {
    const fullPlayerDeck = generateDeck(); // 12 cards
    const fullOpponentDeck = generateDeck(); // 12 cards

    // First 4 cards go to hand
    setPlayerHand(fullPlayerDeck.slice(0, 4));
    setPlayerDrawDeck(fullPlayerDeck.slice(4, 12));

    setOpponentHand(fullOpponentDeck.slice(0, 4));
    setOpponentDrawDeck(fullOpponentDeck.slice(4, 12));
  }, []);

  const handleCardSelect = (index: number) => {
    if (phase !== "selecting" || playerSelectedCard !== null) return;
    setPlayerSelectedCard(index);

    // Simulate opponent selection after a delay
    setTimeout(() => {
      const randomOpponentCard = Math.floor(
        Math.random() * opponentHand.length,
      );
      setOpponentSelectedCard(randomOpponentCard);
      setPhase("revealing");
    }, 800);
  };

  const handleUsePowerup = (powerupId: string) => {
    setActivePowerup(powerupId);
    setPlayerPowerups((prev) =>
      prev.map((p) => (p.id === powerupId ? { ...p, used: true } : p)),
    );
  };

  const handlePlayerEmote = (emote: string) => {
    setPlayerEmote(emote);
    setTimeout(() => setPlayerEmote(null), 2000);
  };

  useEffect(() => {
    if (phase === "revealing") {
      setTimeout(() => {
        if (playerSelectedCard !== null && opponentSelectedCard !== null) {
          const playerCard = playerHand[playerSelectedCard];
          const opponentCard = opponentHand[opponentSelectedCard];

          // Check type advantages for visual display
          const playerHasAdvantage =
            CARD_TYPE_ADVANTAGES[playerCard.type] === opponentCard.type;
          const opponentHasAdvantage =
            CARD_TYPE_ADVANTAGES[opponentCard.type] === playerCard.type;

          setPlayerTypeBonus(
            playerHasAdvantage && playerCard.value === opponentCard.value,
          );
          setOpponentTypeBonus(
            opponentHasAdvantage && playerCard.value === opponentCard.value,
          );

          // Determine winner
          const winner = determineBattleWinner(playerCard, opponentCard);

          setRoundWinner(winner);
          setPhase("resolving");
          setActivePowerup(null);

          // Opponent sends emote sometimes
          if (winner === "opponent" && Math.random() > 0.5) {
            const emotes = ["😂", "🤡", "😎", "👻"];
            const randomEmote =
              emotes[Math.floor(Math.random() * emotes.length)];
            setOpponentEmote(randomEmote);
            setTimeout(() => setOpponentEmote(null), 2000);
          }

          if (winner === "player") {
            setPlayerScore((s) => s + 1);
          } else if (winner === "opponent") {
            setOpponentScore((s) => s + 1);
          }
        }
      }, 1500);
    }
  }, [
    phase,
    playerSelectedCard,
    opponentSelectedCard,
    playerHand,
    opponentHand,
  ]);

  useEffect(() => {
    if (phase === "resolving") {
      setTimeout(() => {
        if (playerSelectedCard !== null && opponentSelectedCard !== null) {
          let newPlayerHand = [...playerHand];
          let newOpponentHand = [...opponentHand];
          let newPlayerDrawDeck = [...playerDrawDeck];
          let newOpponentDrawDeck = [...opponentDrawDeck];

          const playerCard = playerHand[playerSelectedCard];
          const opponentCard = opponentHand[opponentSelectedCard];

          // Handle card resolution based on winner
          if (roundWinner === "both-destroyed") {
            // Both cards destroyed
            newPlayerHand = playerHand.filter(
              (_, i) => i !== playerSelectedCard,
            );
            newOpponentHand = opponentHand.filter(
              (_, i) => i !== opponentSelectedCard,
            );
          } else if (roundWinner === "player") {
            // Player wins: player's card goes to bottom of deck, opponent's card destroyed
            newPlayerHand = playerHand.filter(
              (_, i) => i !== playerSelectedCard,
            );
            newPlayerDrawDeck = [...newPlayerDrawDeck, playerCard];
            newOpponentHand = opponentHand.filter(
              (_, i) => i !== opponentSelectedCard,
            );
          } else if (roundWinner === "opponent") {
            // Opponent wins: opponent's card goes to bottom of deck, player's card destroyed
            newOpponentHand = opponentHand.filter(
              (_, i) => i !== opponentSelectedCard,
            );
            newOpponentDrawDeck = [...newOpponentDrawDeck, opponentCard];
            newPlayerHand = playerHand.filter(
              (_, i) => i !== playerSelectedCard,
            );
          }

          // Draw new cards from deck if available
          if (newPlayerDrawDeck.length > 0 && newPlayerHand.length < 4) {
            newPlayerHand.push(newPlayerDrawDeck[0]);
            newPlayerDrawDeck = newPlayerDrawDeck.slice(1);
          }
          if (newOpponentDrawDeck.length > 0 && newOpponentHand.length < 4) {
            newOpponentHand.push(newOpponentDrawDeck[0]);
            newOpponentDrawDeck = newOpponentDrawDeck.slice(1);
          }

          setPlayerHand(newPlayerHand);
          setPlayerDrawDeck(newPlayerDrawDeck);
          setOpponentHand(newOpponentHand);
          setOpponentDrawDeck(newOpponentDrawDeck);

          // Check if game is over (no cards left in hand or deck)
          const playerHasCards =
            newPlayerHand.length > 0 || newPlayerDrawDeck.length > 0;
          const opponentHasCards =
            newOpponentHand.length > 0 || newOpponentDrawDeck.length > 0;

          if (!playerHasCards || !opponentHasCards) {
            let finalResult: "player" | "opponent" | "tie";
            if (!playerHasCards && !opponentHasCards) {
              finalResult =
                playerScore > opponentScore
                  ? "player"
                  : opponentScore > playerScore
                    ? "opponent"
                    : "tie";
            } else if (!playerHasCards) {
              finalResult = "opponent";
            } else {
              finalResult = "player";
            }
            setFinalWinner(finalResult);
            setGameOver(true);
          } else {
            setPlayerSelectedCard(null);
            setOpponentSelectedCard(null);
            setRoundWinner(null);
            setPlayerTypeBonus(false);
            setOpponentTypeBonus(false);
            setPhase("selecting");
            setRoundNumber((r) => r + 1);
          }
        }
      }, 2500);
    }
  }, [
    phase,
    roundWinner,
    playerSelectedCard,
    opponentSelectedCard,
    playerHand,
    opponentHand,
    playerDrawDeck,
    opponentDrawDeck,
    playerScore,
    opponentScore,
  ]);

  if (gameOver && finalWinner) {
    return (
      <GameResult
        winner={finalWinner}
        playerScore={playerScore}
        opponentScore={opponentScore}
        xlmWon={finalWinner === "player" ? 15 : 0}
        onBackToLobby={onBackToLobby}
      />
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background via-purple-950/20 to-background p-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 30 }, (_, i) => (
          <div
            key={`bg-particle-${i}`}
            className="absolute w-2 h-2 bg-primary/10 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="w-full max-w-7xl relative z-10">
        {/* Top HUD */}
        <div className="retro-panel rounded p-4 mb-4 flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <div className="pixel-font text-[10px] text-primary">
              ROUND {roundNumber}
            </div>
            <div className="flex items-center gap-3 pixel-font text-lg">
              <div className="flex items-center gap-1">
                <Heart className="w-5 h-5 text-primary" />
                <span className="text-primary">{playerScore}</span>
              </div>
              <span className="text-muted-foreground">vs</span>
              <div className="flex items-center gap-1">
                <Skull className="w-5 h-5 text-secondary" />
                <span className="text-secondary">{opponentScore}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 flex-wrap">
            {phase === "selecting" && (
              <div className="bg-primary/20 px-3 py-1 rounded border border-primary/40">
                <span className="pixel-font text-[7px] text-primary">
                  💡 CHOOSE FROM YOUR HAND!
                </span>
              </div>
            )}
            <div className="flex items-center gap-2">
              <Coins className="w-5 h-5 text-secondary" />
              <span className="pixel-font text-[10px] text-secondary">
                PRIZE: 15 XLM
              </span>
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          {/* Opponent area */}
          <div className="retro-panel rounded p-4 relative">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-gradient-to-br from-secondary to-red-600 flex items-center justify-center border-2 border-secondary">
                  <Skull className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="pixel-font text-[10px] text-secondary">
                    OPPONENT
                  </div>
                  <div className="text-[7px] text-muted-foreground flex items-center gap-2">
                    <span>
                      TOTAL: {opponentHand.length + opponentDrawDeck.length}{" "}
                      cards
                    </span>
                  </div>
                </div>
              </div>

              <AnimatePresence>
                {opponentEmote && (
                  <EmoteDisplay emote={opponentEmote} side="opponent" />
                )}
              </AnimatePresence>
            </div>

            {/* Opponent Hand with Deck Counter */}
            <div>
              <div className="pixel-font text-[8px] text-center text-muted-foreground mb-2">
                OPPONENT'S CARDS
              </div>
              <div className="flex justify-center gap-3 flex-wrap items-start">
                {/* Deck counter on the left */}
                {opponentDrawDeck.length > 0 && (
                  <CardStack count={opponentDrawDeck.length} />
                )}

                {/* Hand cards */}
                {opponentHand.map((card, index) => (
                  <PixelCard
                    key={`opponent-hand-${card.id}`}
                    card={card}
                    isRevealed={
                      phase === "revealing" || phase === "resolving"
                        ? index === opponentSelectedCard
                        : false
                    }
                    isWinner={
                      phase === "resolving" &&
                      roundWinner === "opponent" &&
                      index === opponentSelectedCard
                    }
                    isLoser={
                      phase === "resolving" &&
                      (roundWinner === "player" ||
                        roundWinner === "both-destroyed") &&
                      index === opponentSelectedCard
                    }
                    typeBonus={
                      opponentTypeBonus && index === opponentSelectedCard
                    }
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Battle Status */}
          <div className="flex flex-col items-center gap-2">
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="retro-panel rounded px-8 py-4 bg-gradient-to-r from-primary/20 to-secondary/20"
            >
              <div className="flex items-center gap-4">
                <Swords className="w-6 h-6 text-primary" />
                <span className="pixel-font text-[11px] text-white">
                  {phase === "selecting"
                    ? "SELECT YOUR CARD"
                    : phase === "revealing"
                      ? "REVEALING..."
                      : roundWinner === "player"
                        ? "YOU WIN ROUND!"
                        : roundWinner === "opponent"
                          ? "OPPONENT WINS"
                          : "BOTH CARDS DESTROYED!"}
                </span>
                <Swords className="w-6 h-6 text-secondary" />
              </div>
            </motion.div>

            {/* Strategy Hint for Round 1 */}
            {roundNumber === 1 && phase === "selecting" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-secondary/20 px-4 py-2 rounded border border-secondary/40"
              >
                <p className="pixel-font text-[7px] text-secondary text-center">
                  💡 TIP: HIGHER VALUE WINS! SEE YOUR ENTIRE DECK!
                </p>
              </motion.div>
            )}
          </div>

          {/* Player area */}
          <div className="retro-panel rounded p-4 relative">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center border-2 border-primary">
                  <Trophy className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="pixel-font text-[10px] text-primary">YOU</div>
                  <div className="text-[7px] text-muted-foreground flex items-center gap-2">
                    <span>
                      TOTAL: {playerHand.length + playerDrawDeck.length} cards
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <EmoteSelector onSelectEmote={handlePlayerEmote} />
                <AnimatePresence>
                  {playerEmote && (
                    <EmoteDisplay emote={playerEmote} side="player" />
                  )}
                </AnimatePresence>
              </div>

              {activePowerup && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 left-1/2 -translate-x-1/2 bg-secondary/90 px-3 py-1 rounded-full border-2 border-white flex items-center gap-1"
                >
                  <Zap className="w-4 h-4 text-secondary animate-flicker" />
                  <span className="pixel-font text-[8px] text-white">
                    BUFF ACTIVE
                  </span>
                </motion.div>
              )}
            </div>

            {/* Player Hand with Deck Counter */}
            <div>
              <div className="pixel-font text-[8px] text-center text-primary mb-2">
                YOUR CARDS (CHOOSE ONE)
              </div>
              <div className="flex justify-center gap-3 flex-wrap items-start">
                {/* Deck counter on the left */}
                {playerDrawDeck.length > 0 && (
                  <CardStack count={playerDrawDeck.length} />
                )}

                {/* Hand cards */}
                {playerHand.map((card, index) => (
                  <PixelCard
                    key={`player-hand-${card.id}`}
                    card={card}
                    isRevealed={true}
                    isSelected={index === playerSelectedCard}
                    onClick={() => handleCardSelect(index)}
                    isDisabled={
                      phase !== "selecting" || playerSelectedCard !== null
                    }
                    isWinner={
                      phase === "resolving" &&
                      roundWinner === "player" &&
                      index === playerSelectedCard
                    }
                    isLoser={
                      phase === "resolving" &&
                      (roundWinner === "opponent" ||
                        roundWinner === "both-destroyed") &&
                      index === playerSelectedCard
                    }
                    typeBonus={playerTypeBonus && index === playerSelectedCard}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* NFT Powerups */}
          <div className="retro-panel rounded p-4">
            <h3 className="pixel-font text-[9px] text-center mb-3 text-primary">
              NFT ARTIFACTS
            </h3>
            <div className="flex gap-3 justify-center flex-wrap">
              {playerPowerups.map((powerup) => (
                <NFTPowerup
                  key={powerup.id}
                  powerup={powerup}
                  onUse={() => handleUsePowerup(powerup.id)}
                  disabled={phase !== "selecting" || powerup.used}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

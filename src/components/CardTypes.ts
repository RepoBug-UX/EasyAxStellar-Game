// Card type definitions and hierarchy

export type CardType = "light" | "shadow" | "mortal";

export interface CardData {
  id: string;
  name: string;
  type: CardType;
  value: number; // 1-4
  emoji: string;
}

// Tiebreaker hierarchy (when values are equal): Light > Shadow > Mortal > Light
export const CARD_TYPE_ADVANTAGES: Record<CardType, CardType> = {
  light: "shadow", // Light beats Shadow
  shadow: "mortal", // Shadow beats Mortal
  mortal: "light", // Mortal beats Light
};

export const CARD_TYPE_INFO: Record<
  CardType,
  { color: string; bgGradient: string; description: string }
> = {
  light: {
    color: "#fbbf24",
    bgGradient: "from-yellow-900/60 to-amber-900/60",
    description: "Divine radiance. Beats Shadow in ties.",
  },
  shadow: {
    color: "#8b5cf6",
    bgGradient: "from-purple-900/60 to-indigo-900/60",
    description: "Dark essence. Beats Mortal in ties.",
  },
  mortal: {
    color: "#ef4444",
    bgGradient: "from-red-900/60 to-rose-900/60",
    description: "Human strength. Beats Light in ties.",
  },
};

// Card name generators based on type and value
const LIGHT_NAMES = ["Acolyte", "Cleric", "Paladin", "Archangel"];
const SHADOW_NAMES = ["Shade", "Phantom", "Wraith", "Shadow Lord"];
const MORTAL_NAMES = ["Squire", "Warrior", "Knight", "Champion"];

const LIGHT_EMOJIS = ["✨", "🌟", "⭐", "☀️"];
const SHADOW_EMOJIS = ["👻", "🌑", "💀", "😈"];
const MORTAL_EMOJIS = ["⚔️", "🗡️", "🛡️", "👑"];

export function getCardName(type: CardType, value: number): string {
  const names =
    type === "light"
      ? LIGHT_NAMES
      : type === "shadow"
        ? SHADOW_NAMES
        : MORTAL_NAMES;

  return names[value - 1]; // value is 1-4, array is 0-3
}

export function getCardEmoji(type: CardType, value: number): string {
  const emojis =
    type === "light"
      ? LIGHT_EMOJIS
      : type === "shadow"
        ? SHADOW_EMOJIS
        : MORTAL_EMOJIS;

  return emojis[value - 1]; // value is 1-4, array is 0-3
}

// Determine battle outcome
// Higher value always wins first
// If same value, check type advantage
// If same value AND same type, both destroyed
export function determineBattleWinner(
  card1: CardData,
  card2: CardData,
): "player" | "opponent" | "tie" | "both-destroyed" {
  // First, compare values - higher wins
  if (card1.value > card2.value) return "player";
  if (card2.value > card1.value) return "opponent";

  // Values are equal - check types
  if (card1.type === card2.type) {
    // Same type and same value = both destroyed
    return "both-destroyed";
  }

  // Different types, same value - check tiebreaker
  if (CARD_TYPE_ADVANTAGES[card1.type] === card2.type) {
    return "player"; // card1's type beats card2's type
  } else {
    return "opponent"; // card2's type beats card1's type
  }
}

// Generate a full deck: 12 cards total
// 4 of each type (Light, Shadow, Mortal), numbered 1-4
export function generateDeck(): CardData[] {
  const types: CardType[] = ["light", "shadow", "mortal"];
  const deck: CardData[] = [];
  let cardId = 0;

  types.forEach((type) => {
    for (let value = 1; value <= 4; value++) {
      deck.push({
        id: `card-${cardId++}`,
        name: getCardName(type, value),
        type,
        value,
        emoji: getCardEmoji(type, value),
      });
    }
  });

  // Shuffle the deck
  return shuffleDeck(deck);
}

// Shuffle deck helper
export function shuffleDeck(deck: CardData[]): CardData[] {
  const shuffled = [...deck];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

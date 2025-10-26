import { useState } from "react";
import { Button, Text } from "@stellar/design-system";
import { useWallet } from "../hooks/useWallet";

export const GuessTheNumber = () => {
  const [isRegistered, setIsRegistered] = useState<boolean>();
  const { address } = useWallet();

  if (!address) {
    return (
      <Text as="p" size="md">
        Connect wallet to access Spellbound platform
      </Text>
    );
  }

  const registerPlayer = () => {
    console.log("Register player - contract client not generated yet");
    setIsRegistered(true);
  };

  const enterQueue = () => {
    console.log("Enter matchmaking queue - contract client not generated yet");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Text as="h3" size="lg">
        Spellbound Platform
      </Text>

      <Button onClick={registerPlayer} variant="primary" size="md">
        Register Player
      </Button>

      <Button
        onClick={enterQueue}
        variant="secondary"
        size="md"
        disabled={!isRegistered}
      >
        Enter Matchmaking Queue
      </Button>

      {isRegistered && (
        <Text as="p" size="md" style={{ color: "green" }}>
          ✅ Player registered successfully!
        </Text>
      )}
    </div>
  );
};

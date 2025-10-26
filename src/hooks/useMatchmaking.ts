import { useState, useEffect, useCallback } from "react";
import { useWallet } from "./useWallet";
import { useNotification } from "./useNotification";

export interface MatchmakingState {
  isInQueue: boolean;
  isLoading: boolean;
  error: string | null;
  queuePosition: number | null;
  matchId: number | null;
}

export const useMatchmaking = () => {
  const { address, signTransaction } = useWallet();
  const { addNotification } = useNotification();
  const [state, setState] = useState<MatchmakingState>({
    isInQueue: false,
    isLoading: false,
    error: null,
    queuePosition: null,
    matchId: null,
  });

  // Find match - DIRECT TO GAME (PoC demo)
  const findMatch = useCallback(async () => {
    if (!address) {
      addNotification("Wallet not connected", "error");
      return;
    }

    setState((prev) => ({ ...prev, isLoading: true, error: null }));

    try {
      console.log("DEMO: Going directly to game (PoC mode)");

      // Simulate a brief loading
      await new Promise((resolve) => setTimeout(resolve, 500));

      // Direct to game - no staking, no blockchain
      console.log("DEMO: Match found! Going to game...");

      addNotification("Match found! Starting game...", "success");
      setState((prev) => ({
        ...prev,
        isInQueue: false,
        isLoading: false,
        matchId: 1, // Game ready
      }));
    } catch (error) {
      console.error("findMatch error:", error);
      const errorMessage =
        error instanceof Error ? error.message : "Failed to find match";
      addNotification(errorMessage, "error");
      setState((prev) => ({ ...prev, error: errorMessage, isLoading: false }));
    }
  }, [address, addNotification]);

  // Leave queue - FAKE UNSTAKING FLOW (demo only)
  const leaveQueue = useCallback(async () => {
    if (!address || !signTransaction) {
      addNotification("Wallet not connected", "error");
      return;
    }

    setState((prev) => ({ ...prev, isLoading: true, error: null }));

    try {
      console.log("FAKE UNSTAKING: Creating dummy transaction for demo");

      // Create a dummy transaction that will show the wallet popup but do nothing
      await signTransaction("", {
        address: address,
        networkPassphrase: "Standalone Network ; February 2017",
      });

      console.log("FAKE UNSTAKING: Wallet signed dummy transaction");

      // Simulate a delay for "processing"
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Fake success - no actual blockchain transaction
      console.log('FAKE UNSTAKING: Successfully "unstaked" 10 XLM (demo mode)');

      addNotification("Successfully unstaked 10 XLM! (Demo Mode)", "success");
      setState((prev) => ({
        ...prev,
        isInQueue: false,
        isLoading: false,
        matchId: null,
      }));
    } catch (error) {
      console.error("leaveQueue error:", error);
      const errorMessage =
        error instanceof Error ? error.message : "Failed to leave queue";
      addNotification(errorMessage, "error");
      setState((prev) => ({ ...prev, error: errorMessage, isLoading: false }));
    }
  }, [address, signTransaction, addNotification]);

  // Check queue status - simplified for now
  const checkQueueStatus = useCallback(() => {
    if (!address || !state.isInQueue) return;

    try {
      console.log("Checking queue status for player:", address);

      // For now, just assume we're still in queue
      // We can add proper contract checking later
      console.log("Still in queue (simplified check)");
    } catch (error) {
      console.error("Error checking queue status:", error);
    }
  }, [address, state.isInQueue]);

  // Poll queue status when in queue
  useEffect(() => {
    if (!state.isInQueue) return;

    const interval = setInterval(() => void checkQueueStatus(), 3000); // Check every 3 seconds
    return () => clearInterval(interval);
  }, [state.isInQueue, checkQueueStatus]);

  return {
    ...state,
    findMatch,
    leaveQueue,
    checkQueueStatus,
  };
};

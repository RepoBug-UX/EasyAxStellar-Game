import { motion } from "motion/react";
import {
  Swords,
  Trophy,
  Flame,
  Zap,
  Users,
  Coins,
  Clock,
  CheckCircle,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Progress } from "../components/ui/progress";
import { useWalletBalance } from "../hooks/useWalletBalance";
import { useMatchmaking } from "../hooks/useMatchmaking";
import { CustomWalletButton } from "../components/CustomWalletButton";
import FundAccountButton from "../components/FundAccountButton";

interface LobbyPageProps {
  onFindMatch: () => void;
}

export default function LobbyPage({ onFindMatch }: LobbyPageProps) {
  const { xlm, isFunded, isLoading } = useWalletBalance();
  const {
    isInQueue,
    isLoading: matchmakingLoading,
    error: matchmakingError,
    matchId,
    findMatch,
    leaveQueue,
  } = useMatchmaking();

  // Mock player stats for now
  const playerStats = {
    wins: 12,
    losses: 8,
    winStreak: 3,
  };

  const playerBalance = parseFloat(xlm.replace(/,/g, "")) || 0;

  // Handle matchmaking actions
  const handleFindMatch = async () => {
    await findMatch();
    // After match is found, navigate to game
    onFindMatch();
  };

  const handleLeaveQueue = async () => {
    await leaveQueue();
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-background via-purple-950/10 to-background p-6">
      {/* Simple wallet connection in top right */}
      <div className="absolute top-6 right-6 z-20">
        <CustomWalletButton />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl pixel-font mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              BATTLE LOBBY
            </h1>
            <p className="text-muted-foreground pixel-font text-[9px]">
              READY TO TEST YOUR SKILLS?
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="retro-panel px-6 py-3 rounded">
              <div className="flex items-center gap-2">
                <Coins className="w-5 h-5 text-secondary" />
                <div>
                  <p className="text-[8px] pixel-font text-muted-foreground">
                    BALANCE
                  </p>
                  <p className="text-xl pixel-font">
                    {playerBalance.toLocaleString()} XLM
                  </p>
                </div>
              </div>
            </div>

            <div className="retro-panel px-6 py-3 rounded">
              <div className="flex items-center gap-2">
                <Flame className="w-5 h-5 text-secondary animate-flicker" />
                <div>
                  <p className="text-[8px] pixel-font text-muted-foreground">
                    WIN STREAK
                  </p>
                  <p className="text-xl pixel-font">{playerStats.winStreak}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main matchmaking area */}
          <div className="lg:col-span-2 space-y-6">
            {/* Find Match Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="retro-panel rounded p-8 shadow-2xl">
                <div className="text-center space-y-6">
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="inline-block"
                  >
                    {isInQueue ? (
                      <Clock className="w-24 h-24 text-secondary mx-auto animate-pulse" />
                    ) : matchId ? (
                      <CheckCircle className="w-24 h-24 text-green-400 mx-auto animate-pulse" />
                    ) : (
                      <Swords className="w-24 h-24 text-primary mx-auto animate-flicker" />
                    )}
                  </motion.div>

                  <div>
                    {isInQueue ? (
                      <>
                        <h2 className="text-3xl pixel-font mb-3 text-secondary">
                          IN QUEUE
                        </h2>
                        <p className="text-muted-foreground pixel-font text-[9px] mb-6">
                          WAITING FOR OPPONENT • STAKE: 10 XLM
                        </p>
                      </>
                    ) : matchId ? (
                      <>
                        <h2 className="text-3xl pixel-font mb-3 text-green-400">
                          MATCH FOUND!
                        </h2>
                        <p className="text-muted-foreground pixel-font text-[9px] mb-6">
                          MATCH ID: {matchId} • PREPARING BATTLE...
                        </p>
                      </>
                    ) : (
                      <>
                        <h2 className="text-3xl pixel-font mb-3">
                          ENTER ARENA
                        </h2>
                        <p className="text-muted-foreground pixel-font text-[9px] mb-6">
                          STAKE 10 XLM • WINNER TAKES 15 XLM!
                        </p>
                      </>
                    )}

                    <div className="flex items-center justify-center gap-8 mb-8">
                      <div className="text-center retro-panel rounded p-4">
                        <div className="text-2xl pixel-font text-secondary mb-1">
                          10 XLM
                        </div>
                        <div className="text-muted-foreground pixel-font text-[7px]">
                          ENTRY STAKE
                        </div>
                      </div>
                      <div className="text-4xl text-muted-foreground">→</div>
                      <div className="text-center retro-panel rounded p-4">
                        <div className="text-2xl pixel-font text-primary mb-1">
                          15 XLM
                        </div>
                        <div className="text-muted-foreground pixel-font text-[7px]">
                          WINNER PRIZE
                        </div>
                      </div>
                    </div>

                    {isInQueue ? (
                      <div className="space-y-4">
                        <Button
                          onClick={() => void handleLeaveQueue()}
                          disabled={matchmakingLoading}
                          size="lg"
                          className="retro-panel bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white px-16 py-6 rounded shadow-xl pixel-font hover:scale-105 transition-transform"
                        >
                          {matchmakingLoading ? "LEAVING..." : "LEAVE QUEUE"}
                        </Button>
                        <p className="text-[8px] pixel-font text-muted-foreground">
                          You can leave the queue anytime to get your stake back
                        </p>
                      </div>
                    ) : matchId ? (
                      <div className="space-y-4">
                        <Button
                          disabled
                          size="lg"
                          className="retro-panel bg-gradient-to-r from-green-600 to-green-700 text-white px-16 py-6 rounded shadow-xl pixel-font"
                        >
                          <CheckCircle className="w-6 h-6 mr-2" />
                          MATCH READY
                        </Button>
                        <p className="text-[8px] pixel-font text-green-400">
                          Match found! Game will start automatically...
                        </p>
                      </div>
                    ) : (
                      <Button
                        onClick={() => void handleFindMatch()}
                        disabled={matchmakingLoading || !isFunded}
                        size="lg"
                        className="retro-panel bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-16 py-6 rounded shadow-xl animate-pulse-glow pixel-font hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <Swords className="w-6 h-6 mr-2" />
                        {matchmakingLoading ? "PROCESSING..." : "FIND MATCH"}
                      </Button>
                    )}

                    {matchmakingError && (
                      <div className="bg-red-900/20 border border-red-500/30 rounded p-3 mt-4">
                        <p className="text-[8px] pixel-font text-red-400">
                          Error: {matchmakingError}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Matchmaking Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="retro-panel rounded p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl pixel-font text-primary">
                    MATCHMAKING STATUS
                  </h3>
                  <Badge variant="secondary" className="pixel-font text-[8px]">
                    {isInQueue ? "IN QUEUE" : matchId ? "MATCH FOUND" : "READY"}
                  </Badge>
                </div>

                <div className="space-y-4">
                  {isInQueue ? (
                    <>
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-secondary animate-pulse" />
                        <span className="text-sm pixel-font text-secondary">
                          Waiting for opponent...
                        </span>
                      </div>

                      <Progress value={75} className="h-2" />

                      <div className="flex justify-between text-[8px] pixel-font text-muted-foreground">
                        <span>ESTIMATED TIME: 15s</span>
                        <span>STAKE: 10 XLM</span>
                      </div>
                    </>
                  ) : matchId ? (
                    <>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span className="text-sm pixel-font text-green-400">
                          Match found! Preparing battle...
                        </span>
                      </div>

                      <Progress value={100} className="h-2" />

                      <div className="flex justify-between text-[8px] pixel-font text-green-400">
                        <span>MATCH ID: {matchId}</span>
                        <span>STATUS: READY</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex items-center gap-3">
                        <Users className="w-5 h-5 text-muted-foreground" />
                        <span className="text-sm pixel-font text-muted-foreground">
                          Ready to find match
                        </span>
                      </div>

                      <Progress value={0} className="h-2" />

                      <div className="flex justify-between text-[8px] pixel-font text-muted-foreground">
                        <span>STAKE REQUIRED: 10 XLM</span>
                        <span>PRIZE: 15 XLM</span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Player Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="retro-panel rounded p-6">
                <h3 className="text-lg pixel-font text-primary mb-4">
                  PLAYER STATS
                </h3>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm pixel-font text-muted-foreground">
                      WINS
                    </span>
                    <span className="text-lg pixel-font text-green-400">
                      {playerStats.wins}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm pixel-font text-muted-foreground">
                      LOSSES
                    </span>
                    <span className="text-lg pixel-font text-red-400">
                      {playerStats.losses}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm pixel-font text-muted-foreground">
                      WIN RATE
                    </span>
                    <span className="text-lg pixel-font text-primary">
                      {Math.round(
                        (playerStats.wins /
                          (playerStats.wins + playerStats.losses)) *
                          100,
                      )}
                      %
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm pixel-font text-muted-foreground">
                      STREAK
                    </span>
                    <div className="flex items-center gap-1">
                      <Flame className="w-4 h-4 text-secondary animate-flicker" />
                      <span className="text-lg pixel-font text-secondary">
                        {playerStats.winStreak}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Fund Account */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="retro-panel rounded p-6">
                <h3 className="text-lg pixel-font text-primary mb-4">
                  FUND ACCOUNT
                </h3>

                <div className="space-y-4">
                  {isLoading ? (
                    <div className="bg-gradient-to-r from-muted/20 to-muted/10 rounded p-4 border border-muted/30">
                      <div className="flex items-center gap-2 mb-2">
                        <Coins className="w-5 h-5 text-muted-foreground animate-pulse" />
                        <span className="pixel-font text-[10px] text-muted-foreground">
                          CHECKING BALANCE...
                        </span>
                      </div>
                      <p className="text-[9px] text-white/60 leading-relaxed">
                        Verifying account funding status...
                      </p>
                    </div>
                  ) : isFunded ? (
                    <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded p-4 border border-green-500/30">
                      <div className="flex items-center gap-2 mb-2">
                        <Coins className="w-5 h-5 text-green-400" />
                        <span className="pixel-font text-[10px] text-green-400">
                          ACCOUNT FUNDED
                        </span>
                      </div>
                      <p className="text-[9px] text-white/80 mb-3 leading-relaxed">
                        Your account is already funded and ready to play!
                      </p>
                      <div className="text-center mb-3">
                        <span className="text-2xl pixel-font text-green-400">
                          ✓ READY
                        </span>
                      </div>
                      <div className="text-center">
                        <span className="text-[8px] pixel-font text-green-300">
                          Balance:{" "}
                          {parseFloat(xlm.replace(/,/g, "")).toLocaleString()}{" "}
                          XLM
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-gradient-to-r from-secondary/20 to-primary/20 rounded p-4 border border-secondary/30">
                      <div className="flex items-center gap-2 mb-2">
                        <Coins className="w-5 h-5 text-secondary" />
                        <span className="pixel-font text-[10px] text-secondary">
                          DAILY REWARD
                        </span>
                      </div>
                      <p className="text-[9px] text-white/80 mb-3 leading-relaxed">
                        Claim your daily testnet XLM from the Stellar Friendbot
                      </p>
                      <div className="text-center mb-3">
                        <span className="text-2xl pixel-font text-secondary animate-glow">
                          10,000 XLM
                        </span>
                      </div>
                      <FundAccountButton />
                    </div>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Recent Matches */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="retro-panel rounded p-6">
                <h3 className="text-lg pixel-font text-primary mb-4">
                  RECENT MATCHES
                </h3>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-muted/30 rounded">
                    <div className="flex items-center gap-2">
                      <Trophy className="w-4 h-4 text-yellow-400" />
                      <span className="text-sm pixel-font">Victory</span>
                    </div>
                    <span className="text-xs pixel-font text-muted-foreground">
                      +15 XLM
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-muted/30 rounded">
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-red-400" />
                      <span className="text-sm pixel-font">Defeat</span>
                    </div>
                    <span className="text-xs pixel-font text-muted-foreground">
                      -10 XLM
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-muted/30 rounded">
                    <div className="flex items-center gap-2">
                      <Trophy className="w-4 h-4 text-yellow-400" />
                      <span className="text-sm pixel-font">Victory</span>
                    </div>
                    <span className="text-xs pixel-font text-muted-foreground">
                      +15 XLM
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

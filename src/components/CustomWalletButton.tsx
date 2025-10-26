import { Button } from "./ui/button";
import { useWallet } from "../hooks/useWallet";
import { connectWallet, disconnectWallet } from "../util/wallet";
import { Avatar, AvatarFallback } from "./ui/avatar";

export const CustomWalletButton = () => {
  const { address, isPending } = useWallet();
  const buttonLabel = isPending ? "Loading..." : "Connect";

  if (!address) {
    return (
      <Button
        variant="default"
        size="sm"
        onClick={() => void connectWallet()}
        className="pixel-font text-[8px] retro-panel bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-6 py-3 rounded shadow-lg hover:scale-105 transition-transform"
      >
        {buttonLabel.toUpperCase()}
      </Button>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <Avatar
        className="w-8 h-8 cursor-pointer hover:ring-2 hover:ring-primary transition-all retro-panel"
        onClick={() => void disconnectWallet()}
      >
        <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-primary-foreground text-[8px] font-bold pixel-font">
          {address.slice(0, 2).toUpperCase()}
        </AvatarFallback>
      </Avatar>
    </div>
  );
};

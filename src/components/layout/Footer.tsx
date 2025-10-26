import React from "react";

interface FooterProps {
  children: React.ReactNode;
}

export const Footer: React.FC<FooterProps> = ({ children }) => {
  return (
    <footer className="bg-gradient-to-b from-background via-purple-950/10 to-background border-t-2 border-primary/40 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="text-center text-[8px] text-muted-foreground pixel-font">
          {children}
        </div>
      </div>
    </footer>
  );
};

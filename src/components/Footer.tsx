import { Terminal, Coffee } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border bg-card/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <Terminal className="w-5 h-5 text-terminal" />
            <span className="font-mono text-sm text-muted-foreground group-hover:text-foreground transition-colors">
              ~/suleiman-bm
            </span>
          </a>

          {/* Copyright */}
          <p className="flex items-center gap-1 font-mono text-sm text-muted-foreground">
            <span>ka voi tea</span>
            <Coffee className="w-4 h-4 text-terminal " />
            <span>© {currentYear}</span>
          </p>

          {/* Status */}
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-terminal animate-pulse-glow" />
            <span className="font-mono text-sm text-muted-foreground">
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

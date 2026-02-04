import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Set dark mode by default
    document.documentElement.classList.add("dark");
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-md border border-border bg-secondary/50 hover:bg-secondary 
                 hover:border-terminal/50 transition-all duration-300 group"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-muted-foreground group-hover:text-terminal transition-colors" />
      ) : (
        <Moon className="w-5 h-5 text-muted-foreground group-hover:text-terminal transition-colors" />
      )}
    </button>
  );
};

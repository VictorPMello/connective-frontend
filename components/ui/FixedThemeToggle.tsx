"use client";

import { useTheme } from "next-themes";
import { Switch } from "./switch";
import { Label } from "./label";
import { Moon, Sun } from "lucide-react";

export function FixedThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <div className="flex items-center space-x-2">
        <Label htmlFor="toggleTheme">
          <Sun className={`text-primary ${isDark ? "opacity-30" : ""} `} />
        </Label>
        <Switch
          id="toggleTheme"
          onClick={() => setTheme(isDark ? "light" : "dark")}
        />
        <Label htmlFor="toggleTheme">
          <Moon className={`text-destructive ${isDark ? "" : "opacity-30"} `} />
        </Label>
      </div>
    </div>
  );
}

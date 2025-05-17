import { memo, useEffect } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

import useLocalStorage from "../hooks/useLocalStorage.ts";

function ThemeToggleButton() {
  const [theme, setTheme] = useLocalStorage<"light" | "dark">("theme", "light");

  useEffect(() => {
    document.querySelector("html")?.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <label className="swap swap-rotate p-2 bg-base-300 opacity-60 hover:opacity-100 shadow-lg outline outline-black/5 dark:outline-white/5  rounded-full">
      <input
        type="checkbox"
        checked={theme === "dark"}
        onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
      />
      <MdLightMode size={24} className="swap-off" />
      <MdDarkMode size={24} className="swap-on" />
    </label>
  );
}

export default memo(ThemeToggleButton);

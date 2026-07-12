import { memo, useEffect } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

import useLocalStorage from "../hooks/useLocalStorage.ts";

function ThemeToggleButton() {
  const [theme, setTheme] = useLocalStorage<"light" | "dark">("theme", "light");

  useEffect(() => {
    document.querySelector("html")?.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <label className="btn btn-circle floating-action swap swap-rotate">
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

import { useTheme } from "next-themes";
import React, { useState, useEffect } from "react";

export const DarkMode = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

  const toggleDarkMode = () => {
    setDarkMode(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        toggle {theme === "light" ? "dark" : "light"}
      </button>
    </>
  );
};

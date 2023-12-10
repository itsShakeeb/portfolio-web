"use client";
import React, { useEffect, useState } from "react";

const useToggleMode = () => {
  const [theme, setTheme] = useState(
    typeof window !== "undefined"
      ? [null, "dark"].includes(localStorage.getItem("theme"))
        ? "dark"
        : "light"
      : "dark"
  );

  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(colorTheme);
    root.classList.add(theme);

    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
    }
  }, [theme, colorTheme]);

  return [colorTheme, setTheme] as const;
};

export default useToggleMode;

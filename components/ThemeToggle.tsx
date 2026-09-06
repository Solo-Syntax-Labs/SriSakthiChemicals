"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function getPreferredTheme(): Theme {
  try {
    const stored = localStorage.getItem("ssc-theme-v1");
    if (stored === "light" || stored === "dark") return stored;
  } catch {
    /* ignore */
  }
  return "dark";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const current = getPreferredTheme();
    setTheme(current);
    document.documentElement.setAttribute("data-theme", current);
    setReady(true);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("ssc-theme-v1", next);
    } catch {
      /* ignore */
    }
  };

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label={theme === "light" ? "Switch to dark theme" : "Switch to light theme"}
      title={theme === "light" ? "Dark mode" : "Light mode"}
      suppressHydrationWarning
    >
      {ready && theme === "dark" ? (
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden>
          <path
            fill="currentColor"
            d="M6.76 4.84 4.96 3.05 3.55 4.46l1.8 1.79 1.41-1.41ZM1 13h3v-2H1v2Zm10-9h2V1h-2v3Zm9.45.46-1.41-1.41-1.8 1.79 1.41 1.41 1.8-1.79ZM17.24 18l1.79 1.8 1.41-1.41-1.8-1.79L17.24 18ZM20 11v2h3v-2h-3ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-1 12h2v3h-2v-3Zm-6.45-.46 1.41 1.41 1.8-1.79-1.41-1.41-1.8 1.79Z"
          />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden>
          <path
            fill="currentColor"
            d="M12 3.1A8.9 8.9 0 1 0 20.9 12 7.1 7.1 0 0 1 12 3.1Z"
          />
        </svg>
      )}
    </button>
  );
}

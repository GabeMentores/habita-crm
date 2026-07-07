import { useState, useEffect, useCallback } from "react";

export function useTheme(initial = "light") {
  const [theme, setTheme] = useState(initial);
  useEffect(() => { document.documentElement.dataset.theme = theme; }, [theme]);
  const toggle = useCallback(() => setTheme((t) => (t === "dark" ? "light" : "dark")), []);
  return { theme, toggle };
}

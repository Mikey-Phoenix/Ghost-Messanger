import { useCallback, useState } from "react";

export type Theme = "light" | "dark";

const STORAGE_KEY = "theme";

const isTheme = (value: unknown): value is Theme =>
  value === "light" || value === "dark";

const readSaved = (): Theme | null => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return isTheme(saved) ? saved : null;
  } catch {
    return null; // storage blocked (private mode, etc.)
  }
};

/** Current theme: data-theme attribute, then saved choice, then device setting. */
export const getTheme = (): Theme => {
  if (typeof document === "undefined") return "light";

  const attr = document.documentElement.dataset.theme;
  if (isTheme(attr)) return attr;

  const saved = readSaved();
  if (saved) return saved;

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

/** Apply a theme to <html> and remember the choice. */
export const setTheme = (theme: Theme): void => {
  document.documentElement.dataset.theme = theme;
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    /* ignore */
  }
};

/** Flip between light and dark. Returns the new theme. */
export const toggleTheme = (): Theme => {
  const next: Theme = getTheme() === "light" ? "dark" : "light";
  setTheme(next);
  return next;
};

/**
 * Call once at startup (before rendering) so the saved choice or the
 * device setting is applied. Does not save the device fallback, so the
 * app keeps following the device until the user toggles.
 */
export const initTheme = (): void => {
  document.documentElement.dataset.theme = getTheme();
};

/** React hook: re-renders the component whenever the theme is toggled. */
export const useTheme = () => {
  const [theme, setThemeState] = useState<Theme>(getTheme);

  const toggle = useCallback(() => setThemeState(toggleTheme()), []);
  const set = useCallback((t: Theme) => {
    setTheme(t);
    setThemeState(t);
  }, []);

  return { theme, isLight: theme === "light", toggle, setTheme: set };
};
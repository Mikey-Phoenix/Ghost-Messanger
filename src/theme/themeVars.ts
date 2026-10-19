/**
 * Resolves whether the current theme is light, then exports the
 * CSS custom property names that match it.
 *
 * Detection order:
 *  1. <html data-theme="light|dark"> (explicit user choice)
 *  2. the OS-level prefers-color-scheme setting
 *  3. defaults to light (e.g. during SSR / no DOM)
 */
const detectIsLight = (): boolean => {
  // return true
  if (typeof document !== "undefined") {
    const explicit = document.documentElement.dataset.theme;
    if (explicit === "light") return true;
    if (explicit === "dark") return false;
  }

  if (typeof window !== "undefined" && typeof window.matchMedia === "function") {
    return !window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  return true;
};

export const isLight: boolean = detectIsLight();

// Theme-dependent variables (the dark names are assumed; adjust to match your CSS)
export const primary = isLight ? "--primary-light" : "--primary-dark";
export const surfaceBg = isLight ? "--surface-light" : "--surface-dark";
export const surfaceBgHover = isLight ? "--surface-light-hover" : "--surface-dark-hover";
export const primaryText = isLight ? "--primary-text-light" : "--primary-text-dark";
export const secondaryText = isLight ? "--secondary-text-light" : "--secondary-text-dark";

// Theme-independent variables
export const accent = "--color-accent-deep";
export const accentHover = "--color-accent-hover";
export const main = "--color-main";
export const mainHover = "--color-main-hover";
export const grey = "--grey-400";

// const pattern1 = "url('/pattern1_light.webp')"
//     const pattern2 = "url('/pattern2_light.webp')"
//     const pattern3 = "url('/pattern3_light.webp')"
//     const pattern4 = "url('/pattern4_light.webp')"
export const pattern1 = isLight ? "url('/pattern1_light.webp')" : "url('/pattern_1.webp')"
export const pattern2 = isLight ? "url('/pattern2_light.webp')" : "url('/pattern_2.webp')"
export const pattern3 = isLight ? "url('/pattern3_light.webp')" : "url('/pattern_3.webp')"
export const pattern4 = isLight ? "url('/pattern4_light.webp')" : "url('/pattern_4.webp')"

document.body.style.backgroundColor = `var(${primary})`;
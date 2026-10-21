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
console.log(isLight)

// Theme-dependent variables (the dark names are assumed; adjust to match your CSS)
export const primary = "--primary";
export const surfaceBg = "--surface-bg";
export const surfaceBgHover = "--surface-bg-hover";
export const primaryText = "--primary-text";
export const secondaryText = "--secondary-text";
export const accent = "--accent-deep";
export const accentHover = "--accent-hover";
export const main = "--main";
export const mainHover = "--main-hover";
export const grey = "--grey-400";

// const pattern1 = "url('/pattern1_light.webp')"
//     const pattern2 = "url('/pattern2_light.webp')"
//     const pattern3 = "url('/pattern3_light.webp')"
//     const pattern4 = "url('/pattern4_light.webp')"
export const pattern1 ="url('/patterns/light/pattern1_light.webp')";
export const pattern1_dark = "url('/patterns/dark/pattern_1.webp')";
export const pattern2 ="url('/patterns/light/pattern2_light.webp')";
export const pattern2_dark = "url('/patterns/dark/pattern_2.webp')";
export const pattern3 ="url('/patterns/light/pattern3_light.webp')";
export const pattern3_dark = "url('/patterns/dark/pattern_3.webp')";
export const pattern4 ="url('/patterns/light/pattern4_light.webp')";
export const pattern4_dark = "url('/patterns/dark/pattern_4.webp')";

// document.body.style.backgroundColor = `var(--primary)`;
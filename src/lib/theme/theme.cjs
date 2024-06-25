/* eslint-env node */
// Extend default Tailwind Theme
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

const palette = {
  blue: colors.blue,
  orange: colors.orange,
  green: colors.green,
  red: colors.red,
  black: colors.black,
  white: colors.white,
  gray: colors.gray,
  slate: colors.slate,
};
const themeColors = {
  background: palette.white,
  foreground: palette.black,
  primary: palette.blue,
  secondary: palette.blue,
  success: palette.green,
  danger: palette.red,
  failure: palette.red,
  active: palette.blue["600"],
  "side-menu-bg": "#fbfbfb",
};

const spacing = {
  xs: "4px",
  sm: "8px",
  md: "16px",
  lg: "24px",
  xl: "40px",
  "side-menu-lg": "100%",
};

const theme = {
  ...defaultTheme,
  colors: {
    ...colors,
    ...themeColors,
  },
  spacing: {
    ...defaultTheme.spacing,
    ...spacing,
  },
};

module.exports = theme;

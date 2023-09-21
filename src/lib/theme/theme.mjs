// Extend default Tailwind Theme
import defaultTheme from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";

const palette = {
  orange: colors.orange,
  green: colors.green,
  red: colors.red,
  black: colors.black,
  white: colors.white,
  gray: colors.gray,
};
const themeColors = {
  background: palette.white,
  foreground: palette.black,
  primary: palette.green,
  secondary: palette.orange,
  success: palette.green,
  danger: palette.red,
  failure: palette.red,
  active: palette.green["700"],
  "side-menu-bg": "#fbfbfb",
};

const spacing = {
  xs: "4px",
  sm: "8px",
  md: "16px",
  lg: "24px",
  xl: "40px",
  "side-menu-lg": "250px",
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

// console.log(theme.colors);
export default theme;

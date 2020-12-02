import { createMuiTheme } from "@material-ui/core/styles";

const COLORS = {
  DARK: "#222831",
  GREY: "#393e46",
  PALE: "#eeeeee",
  BLUE: "#00adb5",
  CARBON: "#131313",
};

const BACKGROUND = {
  CARBON:
    "linear-gradient(27deg, #151515 5px, transparent 5px) 0 5px,\n" +
    "linear-gradient(207deg, #151515 5px, transparent 5px) 10px 0px,\n" +
    "linear-gradient(27deg, #222 5px, transparent 5px) 0px 10px,\n" +
    "linear-gradient(207deg, #222 5px, transparent 5px) 10px 5px,\n" +
    "linear-gradient(90deg, #1b1b1b 10px, transparent 10px),\n" +
    "linear-gradient(#1d1d1d 25%, #1a1a1a 25%, #1a1a1a 50%, transparent 50%, transparent 75%, #242424 75%, #242424);",
};

export const defaultTheme = createMuiTheme({
  palette: {
    common: {
      grey: COLORS.GREY,
      pale: COLORS.PALE,
      blue: COLORS.BLUE,
      carbon: COLORS.CARBON,
    },
    primary: {
      main: COLORS.DARK,
    },
    secondary: {
      main: COLORS.BLUE,
    },
    background: {
      default: COLORS.PALE,
      carbon: BACKGROUND.CARBON,
    },
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: "700",
      fontSize: "1rem",
      color: "#00adb5",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 450,
      md: 600,
      lg: 900,
      xl: 1200,
    },
  },
});

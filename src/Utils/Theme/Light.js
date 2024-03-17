import { colors, createTheme } from "@mui/material";

const lightTheme = createTheme({
  palette: {
    type: "light",
    common: {
      white: "#fff",
      black: "#020202",
      olive: "#6c6552",
      green: "#2F6450",
      pink: "#e2b6af",
      peach: "#c3897d",
      red: "#a94a39",
    },
    background: {
      default: "#fafafa",
      paper: "#fff",
      contrast: "#242424",
    },
    primary: {
      light: "#e2b6af ",
      main: "#c3897d",
      dark: "#c3897d",
      contrastText: "#fff",
    },
    secondary: {
      light: "#2F6450",
      main: "#2F6450",
      dark: "#2F6450",
      contrastText: "#fff",
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "grey[500]",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)",
    },
  },
  overrides: {},
});

export default lightTheme;

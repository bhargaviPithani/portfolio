import { createTheme } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    type: "dark",
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
      default: "#242424",
      paper: "#424242",
      contrast: "#ffffff",
    },
    primary: {
      light: "#c3897d",
      main: "#e2b6af",
      dark: "#e2b6af",
      contrastText: "#fff",
    },
    secondary: {
      light: "#2F6450",
      main: "#2F6450",
      dark: "#2F6450",
      contrastText: "#fff",
    },
    text: {
      primary: "#fff",
      secondary: "#fff",
      disabled: "rgba(255, 255, 255, 0.5)",
      hint: "rgba(255, 255, 255, 0.5)",
    },
  },
  overrides: {},
});

export default darkTheme;

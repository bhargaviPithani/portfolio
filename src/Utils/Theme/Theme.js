import { createTheme } from "@mui/material";

import light from "./Light";
import dark from "./Dark";

const typeTheme = [light, dark];

const themes = (type) =>
  createTheme({
    ...typeTheme[type],
  });

export default themes;

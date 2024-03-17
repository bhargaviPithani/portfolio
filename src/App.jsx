import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import themes from "./Utils/Theme/Theme";
import useMediaQuery from "@mui/material/useMediaQuery";
import { POC } from "./Components/POC/POC";
import { useEffect, useState } from "react";
import { useStyles } from "../src/Components/POC/POC.styles";
import { Header } from "./Components/Header/Header";
import { LandingPage } from "./Components/LandingPage/LandingPage";
import WebFont from "webfontloader";

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [offsetX, setOffsetX] = useState();
  const [offsetY, setOffsetY] = useState();
  const classes = useStyles();

  const handlePointerMove = (e) => {
    let followX = window.innerWidth / 2 - e.clientX;
    let followY = window.innerHeight / 2 - e.clientY;

    let x = 0;
    let y = 0;
    x += ((-followX - x) * 1) / 64;
    y += ((followY - y) * 1) / 64;
    offsetX === x ? null : setOffsetX(x);
    offsetY === y ? null : setOffsetY(y);
  };

  let wrapperStyle = {
    transform: `perspective(140vw) rotateY(${offsetX}deg)
        rotateX(${offsetY}deg)`,
  };

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Babylonica", "Playfair Display:500"],
      },
    });
  }, []);

  return (
    <>
      <ThemeProvider theme={themes(prefersDarkMode ? 1 : 0)}>
        <div onPointerMove={handlePointerMove}>
          <Header />
          <LandingPage wrapperStyle={wrapperStyle} />
        </div>
        {/* <div className={classes.container} onPointerMove={handlePointerMove}>
          <POC
            handlePointerMove={handlePointerMove}
            wrapperStyle={wrapperStyle}
          />
        </div> */}
      </ThemeProvider>
    </>
  );
}

export default App;

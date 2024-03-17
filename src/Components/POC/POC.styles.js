import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    width: "100vw",
    height: "100vh",
  },
  wrapper: {
    position: "absolute",
    transform:
      "perspective(600px) rotateY(20deg) rotateX(10deg)",
    background: "#1d3557",
    transformStyle: "preserve-3d",
    width: "200px",
    height: "200px",
    borderRadius: "10px",
  },
  box1: {
    background: "#457b9d",
    borderRadius: "10px",
    width: "200px",
    height: "200px",
    transform: "translateZ(50px) scale(.93)",
  },
  box2: {
    background: "pink",
    borderRadius: "10px",
    zIndex: 2,
    width: "200px",
    height: "200px",
    transform: "translateZ(100px) scale(.85)",
    position: 'absolute',
    top: 0,
  },
}));

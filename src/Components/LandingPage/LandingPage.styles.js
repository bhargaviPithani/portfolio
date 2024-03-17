import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  LPContainer: {
    position: "absolute",
    padding: "0 0 0 10%",
    '& img': {
        width: '150%',
        height: 'auto'
    }
  },
  LpBgImg: {
    position: "absolute",
  },
  wrapper: {
    transform:
      "perspective(140vw)",
    transformStyle: "preserve-3d",
  },
  image1: {
    transform: "translateZ(100px) scale(.90)",
    position: 'absolute',
    left:'-30%',
  },
  image2: {
    zIndex: 2,
    transform: "translateZ(200px) scale(.82)",
    position: 'absolute',
    left: '-30%',
  },
  image3: {
    zIndex: 4,
    transform: "translateZ(300px) scale(.74)",
    position: 'absolute',
    left: '-30%'
  },
  image4: {
    zIndex: 6,
    transform: "translateZ(400px) scale(.66)",
    position: 'absolute',
    left:'-30%'
  },
}));

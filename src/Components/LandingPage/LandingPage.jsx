import { Grid, Typography } from "@mui/material";
import { useStyles } from "./LandingPage.styles";

export const LandingPage = (props) => {
    const {wrapperStyle} = props
  const classes = useStyles();

  return (
    <>
      <img src="src/assets/LPEllipse.png" className={classes.LpBgImg} />
      <Grid container className={classes.LPContainer}>
        <Grid item xs={12} md={5}>
          <Typography variant="h3" fontFamily="Playfair Display">
            BHARGAVI
          </Typography>
          <Typography variant="h3" fontFamily="Playfair Display">
            PITHANI
          </Typography>
        </Grid>
        <Grid item xs={12} md={7} >
          <div className={classes.wrapper} style={wrapperStyle}>
            <img src="src/assets/IMG_2822.webp" className={classes.image1} />
            <img src="src/assets/IMG_2823.webp" className={classes.image2} />
            <img src="src/assets/IMG_2824.webp" className={classes.image3} />
            <img src="src/assets/IMG_2821.webp" className={classes.image4} />
          </div>
        </Grid>
      </Grid>
    </>
  );
};

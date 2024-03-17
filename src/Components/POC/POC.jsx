import { useStyles } from "./POC.styles";

export const POC = (props) => {
  const { handlePointerMove, wrapperStyle } = props;
  const classes = useStyles();

  return (
    <>
      <div className={`${classes.wrapper}`} style={wrapperStyle}>
        <div className={classes.box1}></div>
        <div className={classes.box2}></div>
      </div>
    </>
  );
};

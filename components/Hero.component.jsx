import React from "react";
import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
  hero: {
    backgroundImage: ({ backgroundSrc, shouldUseGradient }) =>
      `${
        shouldUseGradient
          ? "linear-gradient(to bottom, rgba(0, 0, 0, 0.87), rgba(0, 0, 0, 0.54)),"
          : ""
      } url('${backgroundSrc}')`,
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
    marginBottom: "2rem",
  },
});

const Hero = ({ content, backgroundSrc, shouldUseGradient }) => {
  const classes = useStyles({ backgroundSrc, shouldUseGradient });
  return (
    <Box className={classes.hero}>
      <Box>{content}</Box>
    </Box>
  );
};

Hero.defaultProps = {
  shouldUseGradient: true,
};

export default Hero;

import React from "react";
import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";

const useStyles = makeStyles({
  hero: {
    backgroundImage: ({ backgroundSrc }) =>
      `linear-gradient(to bottom, rgba(0, 0, 0, 0.87), rgba(0, 0, 0, 0.54)), url('${backgroundSrc}')`,
    height: "500px",
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: ({ isMobile }) => (isMobile ? "3rem" : "4rem"),
    marginBottom: "2rem",
  },
});

const Hero = ({ content, backgroundSrc }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const classes = useStyles({ backgroundSrc, isMobile });
  return (
    <Box className={classes.hero}>
      <Box>{content}</Box>
    </Box>
  );
};

export default Hero;

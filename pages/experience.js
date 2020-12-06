import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import LogoTable from "../components/LogoTable.component";
import Container from "@material-ui/core/Container";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Box from "@material-ui/core/Box";
import ReactAnimation from "../components/ReactAnimation/ReactAnimation.component";
import Hero from "../components/Hero.component";

const useStyles = makeStyles((theme) => ({
  about: {
    fontFamily: "Roboto",
    fontWeight: "300",
  },
}));

const Experience = () => {
  const classes = useStyles();

  return (
    <>
      <Hero
        content="My Experience"
        backgroundSrc="/images/hero-experience-md.jpg"
      />
      <Container maxWidth="lg">
        <Box my={5}>
          <Grid container justify="center" align="center">
            <Typography variant="h4" className={classes.about}>
              A Little Bit Of My Experience
            </Typography>
          </Grid>
        </Box>
        <Box mb={10}>
          <Grid item align="center">
            <Typography variant="h6" className={classes.about}>
              I've been doing web development for about 2 years now, and I'm
              always eager to learn more in this fast paced industry.
            </Typography>
          </Grid>
        </Box>
      </Container>
      <Container maxWidth="lg">
        <Box display="flex" justifyContent="space-around" flexWrap="wrap">
          <Box>
            <LogoTable />
          </Box>
          <Box>
            <Grid item align="center">
              <Typography variant="h6">
                I'M FALLING IN LOVE WITH REACT.
              </Typography>
              <Box>
                <ReactAnimation />
              </Box>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Experience;

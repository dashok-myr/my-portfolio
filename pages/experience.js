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
              I've been doing web development for about 2 years now; mainly working as a freelancer. I've been building
              E-commerce, SEO friendly and SPA web applications, for various clients in the Chicago and LA areas.
              <br />
              My expertise reside in Front-end development; working with React, Redux, NextJS, etc.
              <br />
              .......
              <br />
              I'm eager to learn more in this fast paced industry, so I'm always looking for ways to further increase my
              growth as a Software Engineer... I take every obstacle as a chance for improvement, so I do my very best to
              take every opportunity I'm given.
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

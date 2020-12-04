import React from "react";
import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Hero from "../components/Hero.component";

const useStyles = makeStyles((theme) => ({
  avatar: {
    height: "300px",
    width: "300px",
    borderRadius: "150px",
  },
  about: {
    fontFamily: "Roboto",
    fontWeight: "300",
  },
  box: {
    color: "#f6f6f6",
    backgroundImage:
      "linear-gradient(to bottom, rgba(0, 0, 0, 0.87), rgb(178 158 158 / 14%))",
    borderRadius: "10px",
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <Hero content="Hi, I'm Daria" backgroundSrc="/images/hero-medium.jpeg" />
      <Container maxWidth="lg">
        <Box justifyContent="center" mt="5rem">
          <Grid item align="center">
            <Typography variant="h4" className={classes.about}>
              A LITTLE BIT ABOUT ME
            </Typography>
          </Grid>
          <Box my={8}>
            <Grid item align="center">
              <Avatar
                alt="Remy Sharp"
                src="/images/avatar.jpeg"
                className={classes.avatar}
              />
            </Grid>
          </Box>
          <Grid item align="center">
            <Typography variant="h6" className={classes.about}>
              Hey! My name is Daria and I'm a web developer with a passion for
              front end and back end development. I aspire toward a career that
              will allow me to channel my creativity through crafting beautiful
              software and engaging experiences.
              <br />
              .......
              <br />
              When I'm not on the computer, I enjoy volleyball, working out in
              the park, and petting my cat.
            </Typography>
            <Box p={5} my={10} className={classes.box}>
              <Typography variant="h4">FULL STACK WEB DEVELOPER</Typography>
              <Typography variant="h4">.................</Typography>
              <Typography variant="h5">
                Made in Russia | Based in LA | Cat Lover | Traveler
                <br />I grasp new concepts and ideas quickly
              </Typography>
              <Typography variant="h4">..................</Typography>
            </Box>
          </Grid>
        </Box>
      </Container>
    </>
  );
};
export default Home;

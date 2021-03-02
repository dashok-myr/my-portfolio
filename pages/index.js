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
              Hey! My name is Daria and I was born in Russia. My city is located just north of the Arctic Circle.
              <br />
              Ever since I was a little girl, I had an active mind and optimistic outlook of life. I always found myself
              seeing the possibilities everywhere.
              <br />
              <br />
              At age 13, I was already dreaming of how I could have a life of adventure. I was daydreaming about moving
              to a big city, more specifically, a city on the west coast of the United States.
              <br />
              When I was 22 years old, after completing my bachelor's and master's degree in Cross-cultural Communications
              and International Relations at Belgorod State University, I decided to step forward and pursue my dreams.
              I bought a one-way ticket to the beautiful city I always dreamed of seeing.
              <br />
              <br />
              Now, forwarding a few years later, I've found my passion in Software Engineering, because, I've always
              been obsessed with creating things, and even more obsessed with making things better. I aspire toward a
              career that will allow me to channel my creativity through crafting beautiful software and engaging
              user-experiences while living next to the beach. 🏖️
              <br />
              .......
              <br />
              When I'm not on the computer, I'm probably hanging out with my husband, enjoy knitting,
              working out in the park and petting my cat.
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

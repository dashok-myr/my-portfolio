import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Icon from "@material-ui/core/Icon";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import GitHubIcon from "@material-ui/icons/GitHub";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import CustomButton from "./MyButton.component";

const useStyles = makeStyles((theme) => ({
  footer: {
    background: theme.palette.background.carbon,
    backgroundColor: theme.palette.common.carbon,
    backgroundSize: "20px 20px",
    width: "100%",
  },
  footerTwo: {
    backgroundColor: theme.palette.common.carbon,
    width: "100%",
    height: "5em",
  },
  h4: {
    color: "#393e46",
  },
  gridItem: {
    margin: "2em",
  },
  link: {
    color: theme.palette.common.pale,
    fontFamily: "Raleway",
    fontSize: "1rem",
    fontWeight: "700",
    textDecoration: "none",
  },
  tagline: {
    color: theme.palette.common.blue,
    fontSize: "2rem",
    fontWeight: "700",
  },
  btn: {
    backgroundColor: theme.palette.common.blue,
    color: "white"
  },
}));

export default function FooterComponent() {
  const classes = useStyles();

  return (
    <footer className={classes.footer} >
      <Grid container justify="center">
        <Grid
          item
          xs={12}
          sm={4}
          md={4}
          align="center"
          className={classes.gridItem}
        >
          <Grid container direction="column">
            <Grid item className={classes.tagline}>
              <Box pb={1}>Let's work together</Box>
            </Grid>
            <Grid item className={classes.link}>
              <Box pb={3}>Have any questions?</Box>
            </Grid>
            <Grid item>
              <CustomButton content="SAY HELLO"/>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={5} md={4} className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid
              item
              className={classes.link}
              component={"a"}
              href="mailto:dashok.myr@gmail.com"
              target="_blank"
            >
              <Grid container alignItems="center">
                <Icon component={MailOutlineIcon} />
                <Box pl={2}>DASHOK.MYR@GMAIL.COM</Box>
              </Grid>
            </Grid>
            <Grid
              item
              className={classes.link}
              component={"a"}
              href="https://www.instagram.com/dasha_torres/"
              target="_blank"
            >
              <Grid container alignItems="center">
                <Icon component={InstagramIcon} />
                <Box pl={2}>ON INSTAGRAM</Box>
              </Grid>
            </Grid>
            <Grid
              item
              className={classes.link}
              component={"a"}
              href="/"
              target="_blank"
            >
              <Grid container alignItems="center">
                <Icon component={FacebookIcon} />
                <Box pl={2}>ON FACEBOOK</Box>
              </Grid>
            </Grid>
            <Grid
              item
              className={classes.link}
              component={"a"}
              href="/"
              target="_blank"
            >
              <Grid container alignItems="center">
                <Icon component={GitHubIcon} />
                <Box pl={2}>ON GITHUB</Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <footer className={classes.footerTwo}>
        <Grid container justify="center">
          <Box pt={3} className={classes.h4}>
            Made by Daria Usatyuk
          </Box>
        </Grid>
      </footer>
    </footer>
  );
}

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Hero from "./Hero.component";
import Container from "@material-ui/core/Container";
import CustomButton from "./MyButton.component";

const useStyles = makeStyles((theme) => ({
  carbon: {
    backgroundColor: "#cdc9c3", //light gray
    height: "80px",
  },
  tab: {
    fontFamily: "Lato",
    textTransform: "none",
    fontWeight: "300",
    fontSize: "2rem",
    color: "#555555", //dark gray
  },
  modal: {
    top: "50%",
    left: "50%",
    transform: `translate(-50%, -50%)`,
    position: "absolute",
    width: "85%",
    height: "auto",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    overFlow: "scroll",
  },
  description: {
    textAlign: "center",
    fontFamily: "Roboto Slab",
    fontWeight: "400",
    fontSize: "1.1rem",
  },
}));

export default function ProjectsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <CustomButton content="VIEW" onClick={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={classes.modal}>
          <Hero
            content=""
            backgroundSrc="/images/face-detection.png"
            shouldUseGradient={false}
          />
          <Container maxWidth="md">
            <Grid container justify="center">
              <Box mb={3}>
                <Typography variant="h6">FACE DETECTION</Typography>
              </Box>
            </Grid>
            <Box mb={5}>
            <Typography className={classes.description}>
              In the spirit of wishing the world peace and joy during the 2015
              holiday season, Mullen built a site around an algorithm that
              generates a holiday greeting to each and every person on the
              planet. We also accounted for newcomers being added at an amazing
              rate.
            </Typography>
            </Box>
            <Box mb={4}>
              <Grid container justify="space-evenly">
                <Grid item>
                  <CustomButton content="VIEW SOURCE" />
                </Grid>
                <Grid item>
                  <CustomButton content="SEE WEBSITE" />
                </Grid>
              </Grid>
            </Box>
          </Container>
        </div>
      </Modal>
    </div>
  );
}

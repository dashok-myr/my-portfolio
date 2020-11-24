import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Hero from "./Hero.component";
import Container from "@material-ui/core/Container";
import MyButton from "./MyButton.component";

const useStyles = makeStyles((theme) => ({
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
    maxWidth: "950px",
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

export default function ProjectsModal({
  imgUrl,
  heading,
  modalContent,
  gitHubUrl,
  url,
}) {
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
      <MyButton content="VIEW" onClick={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={classes.modal}>
          <Hero
            content=""
            backgroundSrc={`/images/${imgUrl}`}
            shouldUseGradient={false}
          />
          <Container maxWidth="md">
            <Grid container justify="center">
              <Box mb={3}>
                <Typography variant="h6">{heading}</Typography>
              </Box>
            </Grid>
            <Box mb={5}>
              <Typography className={classes.description}>
                {modalContent}
              </Typography>
            </Box>
            <Box mb={4}>
              <Grid container justify="space-evenly">
                <Grid item>
                  <MyButton
                    content="VIEW SOURCE"
                    href={gitHubUrl}
                    target="_blank"
                  />
                </Grid>
                <Grid item>
                  <MyButton content="SEE WEBSITE" href={url} target="_blank" />
                </Grid>
              </Grid>
            </Box>
          </Container>
        </div>
      </Modal>
    </div>
  );
}

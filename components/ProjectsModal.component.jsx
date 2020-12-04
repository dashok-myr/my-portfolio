import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import MyButton from "./MyButton.component";
import { useTheme } from "@material-ui/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles((theme) => ({
  hero: {
    height: "350px",
  },
  heroMobile: {
    height: "45%",
  },
  modal: {
    top: "50%",
    left: "50%",
    transform: `translate(-50%, -50%)`,
    position: "absolute",
    maxWidth: "650px",
    width: "80%",
    height: "74%",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    overFlow: "scroll",
  },
  description: {
    textAlign: "center",
    fontFamily: "Roboto Slab",
    fontWeight: "400",
    fontSize: "1rem",
  },
  description2: {
    textAlign: "center",
    fontFamily: "Roboto Slab",
    fontWeight: "400",
    fontSize: "0.8rem",
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
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
          <CardMedia
            className={isMobile ? classes.heroMobile : classes.hero}
            image={`/images/${imgUrl}`}
            title="Image title"
          />
          <>
            <Grid container justify="center" alignContent="center" alignItems="center">
              <Grid container justify="center" alignContent="center" >
                <Box mb={2} mt={3}>
                  <Typography variant="h6">{heading}</Typography>
                </Box>
              </Grid>
              <Box mb={2}>
                <Typography
                  className={
                    isMobile ? classes.description2 : classes.description
                  }
                >
                  {modalContent}
                </Typography>
              </Box>
              <Box mb={2}>
                <Grid container justify="space-evenly">
                  <Grid item>
                    <MyButton
                      size="small"
                      content="SOURCE"
                      href={gitHubUrl}
                      target="_blank"
                    />
                  </Grid>
                  <Grid item>
                    <MyButton
                      size="small"
                      content="WEBSITE"
                      href={url}
                      target="_blank"
                    />
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </>
        </div>
      </Modal>
    </div>
  );
}

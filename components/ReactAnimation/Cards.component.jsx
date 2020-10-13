import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import MyCard from "../MyCard.component";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

const projectsData = [
  {
    imgUrl: "face-detection.png",
    heading: "Face Detection",
  },
  {
    imgUrl: "wedding.png",
    heading: "My Wedding",
  },
  {
    imgUrl: "face-detection.png",
    heading: "Face Detection",
  },
  {
    imgUrl: "wedding.png",
    heading: "My Wedding",
  }
];

const Cards = () => {
  const classes = useStyles();
  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {projectsData.map(({ imgUrl, heading}, index) => (
          <MyCard key={index} imgUrl={imgUrl} heading={heading}/>
        ))}
      </Grid>
    </Container>
  );
};


export default Cards;

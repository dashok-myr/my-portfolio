import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import MyCard from "../MyCard.component";
import { projectsData } from "../../data";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

const Cards = () => {
  const classes = useStyles();
  return (
    <Container className={classes.cardGrid} maxWidth="lg">
      <Grid container justify="center" alignItems="center" spacing={4}>
        {projectsData.map((props, index) => (
          <MyCard key={index} {...props} />
        ))}
      </Grid>
    </Container>
  );
};

export default Cards;

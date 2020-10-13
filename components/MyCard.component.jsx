import React from "react";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ProjectsModal from "./ProjectsModal.component";

const useStyles = makeStyles((theme) => ({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const MyCard = ({ imgUrl, heading }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image={`/images/${imgUrl}`}
          title="Image title"
        />
        <CardContent className={classes.cardContent}>
          <Grid container justify="center">
            <Typography gutterBottom variant="h5" component="h2">
              {heading}
            </Typography>
          </Grid>
        </CardContent>
        <CardActions>
          <Grid container justify="center">
            <ProjectsModal />
          </Grid>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default MyCard;

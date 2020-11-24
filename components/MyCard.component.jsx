import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ProjectsModal from "./ProjectsModal.component";

const useStyles = makeStyles({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  media: {
    height: 140,
    paddingTop: "56.25%",
  },
  cardContent: {
    flexGrow: 1,
  },
  root: {
    width: "400px",
  },
});

const MyCard = ({ imgUrl, heading, ...otherProps }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={8} md={6}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
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
        </CardActionArea>
        <CardActions>
          <Grid container justify="center">
            <ProjectsModal heading={heading} imgUrl={imgUrl} {...otherProps} />
          </Grid>
        </CardActions>
      </Card>
    </Grid>
  );
};
export default MyCard;

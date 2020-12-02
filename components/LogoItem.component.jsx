import React from "react";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Box from "@material-ui/core/Box";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles(() => ({
  logos: {
    height: "100%",
    width: "50px",
  },
}));

const LogoItem = ({ logoName }) => {
  const classes = useStyles();

  return (
    <Box p={2}>
      <Grid item>
      <Tooltip
          title={logoName}
        >
          <Avatar
            variant="square"
            className={classes.logos}
            src={`/images/icons/${logoName}.png`}
          />
        </Tooltip>
      </Grid>
    </Box>
  );
};

export default LogoItem;

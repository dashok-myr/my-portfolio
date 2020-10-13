import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  btn: {
    backgroundColor: theme.palette.common.blue,
    color: "white",
    "&:hover": {
      backgroundColor: "#038e95",
    }
  },
}));

const MyButton = ({ content, ...otherProps }) => {
  const classes = useStyles();

  return (
    <Button size="medium" className={classes.btn} type="button" {...otherProps}>
      {content}
    </Button>
  );
};

export default MyButton;

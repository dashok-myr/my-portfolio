import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";

const useStyles = makeStyles(() => ({
  btn: {
    backgroundImage:
      "linear-gradient(to right, #02AAB0 0%, #00CDAC  51%, #02AAB0  100%)",
    color: "white",
    margin: "10px",
    padding: "10px 35px",
    textAlign: "center",
    textTransform: "uppercase",
    transition: "0.5s",
    backgroundSize: "200% auto",
    borderRadius: "10px",
    display: "block",
    "&:hover": {
      backgroundPosition: "right center",
      color: "#fff",
      textDecoration: "none",
    },
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

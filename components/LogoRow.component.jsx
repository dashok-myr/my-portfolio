import React from "react";
import Grid from "@material-ui/core/Grid";
import LogoItem from "../components/LogoItem.component";

const LogoRow = ({ logoRow }) => {
  return (
    <Grid container direction="row" justify="space-between" alignItems="center">
      {logoRow.map((item, index) => {
        return <LogoItem key={index} logoName={item} />;
      })}
    </Grid>
  );
};

export default LogoRow;

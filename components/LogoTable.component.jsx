import React from "react";
import LogoRow from "./LogoRow.component";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";

const logoTableData = [
  ["html", "css", "sass", "bootstrap", "material-ui"],
  ["python", "mongodb", "react", "redux", "js"],
  [
    "firebase",
    "heroku",
    "postgresql",
    "typescript",
    "graphql",
  ],
];

const LogoTable = () => {
  return (
    <Grid container direction="row" justify="flex-start">
      <Grid item align="center">
        <Typography variant="h6">
          SOME TECHNOLOGIES I'VE WORKED WITH:
        </Typography>
        <Box pt={5} mb={15}>
          {logoTableData.map((row, index) => {
            return <LogoRow key={index} logoRow={row} />;
          })}
        </Box>
      </Grid>
    </Grid>
  );
};

export default LogoTable;

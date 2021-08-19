import React from "react";
import { Grid } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

import { useStyle } from "./titlebar-style";

const TitleBar = (props) => {
  const classes = useStyle();
  return (
    <Grid container style={{ position: "relative" }}>
      <Grid item xs={12}>
        <Paper className={classes.paperWrapper} elevation={3}>
          {props.children}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default TitleBar;

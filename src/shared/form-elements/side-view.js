import React from "react";
import { Grid } from "@material-ui/core";

import {sideViewStyles} from "./form-elements-styles";

const SideView = (props) => {
  const classes = sideViewStyles();
  const { sideLabel, value } = props;

  return (
    <Grid
      container
      alignItems="center"
      className={classes.outerContainerForSide}
    >
      <Grid item xs={6}>
        <Grid container direction="row-reverse">
          <div className={classes.sideLabelParagraph}>
            <p>{sideLabel}</p>
          </div>
        </Grid>
      </Grid>
      <Grid item xs={6}>
        <Grid
          container
          spacing={0}
          className={
            value === "" ? classes.insideContainer : classes.insideContainer1
          }
        >
          <div className={classes.mainTextParagraph}>
            <p>{value}</p>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SideView;

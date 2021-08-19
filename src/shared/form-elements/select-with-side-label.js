import React from "react";
import { Grid } from "@material-ui/core";
import Controls from "./controls";

import { selectWithSideStyles } from "./form-elements-styles";

const SelectSideLabel = (props) => {
  const classes = selectWithSideStyles();

  const {
    inputChangeHandler,
    value,
    name,
    label,
    options,
    error,
    blankField,
  } = props;

  return (
    <Grid alignItems="center">
      <div className={`pl-2 text-secondary small ${classes.label}`}>
        {props.sideLabel}
      </div>
      <Grid className={classes.insideContainer}>
        <Controls.Select
          name={name}
          label={label}
          blankField={blankField}
          value={value}
          onChange={inputChangeHandler}
          options={options}
          error={error}
        />
      </Grid>
    </Grid>
  );
};

export default SelectSideLabel;

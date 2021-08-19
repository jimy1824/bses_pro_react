import React from "react";
import {
  Grid,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";

import { radioButtonWithSideStyles } from "./form-elements-styles";

const RadioButtonSide = (props) => {
  const classes = radioButtonWithSideStyles();
  const { label, name, value, inputChangeHandler, error, items = [] } = props;

  return (
    <Grid container alignItems="center">
      <div className={`text-secondary small ${classes.label}`}>
        {props.sideLabel}
      </div>
      <Grid container spacing={0} className={classes.insideContainer}>
        <FormControl>
          <RadioGroup
            row
            name={name}
            value={value}
            onChange={inputChangeHandler}
          >
            {items.map((item, index) => (
              <FormControlLabel
                key={item.id + index}
                value={item.id}
                control={<Radio />}
                label={item.title}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default RadioButtonSide;

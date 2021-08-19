import React from "react";
import { Grid, TextField, useMediaQuery, useTheme } from "@material-ui/core";

import { textFieldWithSideStyles } from "./form-elements-styles";
import "./FormElements.css";
const TextFieldSide = (props) => {
  const classes = textFieldWithSideStyles();
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down("md"));
  const {
    label,
    name,
    value,
    required = false,
    inputChangeHandler,
    margin = "none",
    type,
    sideLabel = "",
    onBlur = () => console.log(),
    error,
    onFocus = () => console.log(),
    disable = false,
  } = props;
  const bg = disable ? "bg-disable" : "";
  return (
    <Grid container alignItems="center">
      <div className={`pl-2 text-secondary small label_1 ${classes.label}`}>
        {sideLabel}
      </div>

      <div
        className={`pl-2 text-secondary small label_2 ${classes.label}`}
        style={
          sideLabel === ""
            ? { visibility: "hidden" }
            : { visibility: "visible" }
        }
      >
        {sideLabel === "" ? "this" : sideLabel}
      </div>

      <Grid container spacing={0} className={classes.insideContainer}>
        <TextField
          required={required}
          className={`${classes.root} ${bg}`}
          disabled={disable}
          variant="outlined"
          label={label}
          onBlur={onBlur}
          onFocus={onFocus}
          type={type}
          name={name}
          value={value}
          margin={margin}
          onChange={inputChangeHandler}
          {...(error && { error: true, helperText: error })}
        />
      </Grid>
    </Grid>
  );
};

export default TextFieldSide;

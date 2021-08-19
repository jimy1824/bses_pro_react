import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  FormHelperText,
} from "@material-ui/core";

import { selectStyles } from "./form-elements-styles";

export default function MuiSelect(props) {
  const classes = selectStyles();
  const {
    name,
    label,
    value,
    error = null,
    onChange,
    options = [{ name: "", value: "" }],
    blankField = true,
  } = props;

  return (
    <div>
      <FormControl
        variant="outlined"
        className={classes.root}
        {...(error && { error: true })}
      >
        <InputLabel
          htmlFor="filled-age-native-simple"
          className={classes.label}
        >
          {value === "" ? label : ""}
        </InputLabel>
        <Select
          native
          name={name}
          margin="dense"
          value={value}
          onChange={onChange}
        >
          {blankField && <option value=""></option>}
          {options.map((item, index) => (
            <option key={index} value={item.value}>
              {item.name}
            </option>
          ))}
        </Select>
        {error && <FormHelperText>{error}</FormHelperText>}
      </FormControl>
    </div>
  );
}

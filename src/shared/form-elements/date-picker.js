import React from "react";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { Grid } from "@material-ui/core";

import { datePickerStyles } from "./form-elements-styles";

export default function DatePicker(props) {
  const { name, label = "", value, onChange, sideLabel, error = "" } = props;
  const classes = datePickerStyles();
  const convertToDefEventPara = (name, value) => ({
    target: {
      name,
      value,
    },
  });

  return (
    <Grid container alignItems="center">
      <div className={`pl-2 text-secondary small ${classes.label}`}>
        {sideLabel}
      </div>
      <Grid container spacing={0} className={classes.insideContainer}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            error={error ? true : false}
            helperText={error && error}
            //validationError="Format de date invalide"
            variant="inline"
            inputVariant="outlined"
            label={label}
            margin={"dense"}
            format="MM/dd/yyyy"
            disableFuture={true}
            name={name}
            value={value}
            emptyLabel="Select Date"
            animateYearScrolling={true}
            allowKeyboardControl={false}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
            autoOk={true}
            onChange={(date) => onChange(convertToDefEventPara(name, date))}
          />
        </MuiPickersUtilsProvider>
      </Grid>
    </Grid>
  );
}

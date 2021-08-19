import React from 'react';
import { Checkbox, FormControlLabel, Grid } from '@material-ui/core';

const CustomCheckbox = (props) => {
  const {
    onChange, value, name, extraClass, label,
  } = props;

  const convertToDefEventPara = (name, value) => ({
    target: {
      name, value,
    },
  });
  return (
    <FormControlLabel
      control={<Checkbox color="primary" checked={value} name={name} onChange={(e) => onChange(convertToDefEventPara(name, e.target.checked))} />}
      label={label}
      labelPlacement="end"
      className={extraClass}
      color="default"
    />
  );
};
export default CustomCheckbox;

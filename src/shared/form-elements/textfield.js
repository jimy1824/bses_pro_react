import React from 'react';
import { TextField, makeStyles } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
}));

const CustomTextFeild = (props) => {
  const classes = useStyle();
  const {
    label,
    name,
    value,
    required = false,
    inputChangeHandler,
    margin = 'none',
    type,
    onBlur = () => (console.log()),
    error,
    onFocus = () => (console.log()),
  } = props;
  return (
    <TextField
      className={classes.root}
      variant="outlined"
      required={required}
      label={label}
      type={type}
      name={name}
      value={value}
      margin={margin}
      onBlur={onBlur}
      onFocus={onFocus}
      onChange={inputChangeHandler}
      {...(error && { error: true, helperText: error })}
    />
  );
};
export default CustomTextFeild;

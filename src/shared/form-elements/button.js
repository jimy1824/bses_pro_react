import React from "react";
import { Button, makeStyles } from "@material-ui/core";

const CustomButton = (props) => {
  const {
    elivation = false,
    insideText,
    type,
    size = "medium",
    extraClass,
    onClick = () => {
      console.log();
    },
  } = props;
  return (
    <Button
      variant="contained"
      color="secondary"
      disableElevation={!elivation}
      type={type}
      size={size}
      className={extraClass}
      onClick={onClick}
    >
      {insideText}
    </Button>
  );
};
export default CustomButton;

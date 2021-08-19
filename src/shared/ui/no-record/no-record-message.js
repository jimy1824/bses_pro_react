import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import TitleBar from "../titlebar/titlebar";
const useStyle = makeStyles((theme) => ({
  outerDiv: {
    margin: "2em auto",
    textAlign: "center",
  },
  noRecordText: {
    color: theme.palette.primary.main,
    fontSize: "2em",
    fontWeight: "bold",
  },
}));

const NoRecordMessage = (props) => {
  const { title = "No Record Found" } = props;
  const classes = useStyle();
  return (
    <div className={classes.outerDiv}>
      <h2 className={classes.noRecordText}>{title}</h2>
    </div>
  );
};

export default NoRecordMessage;

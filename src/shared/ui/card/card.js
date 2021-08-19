import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles, Grid, IconButton, Paper } from "@material-ui/core";
import CancelIcon from "@material-ui/icons/Cancel";

import Logo from "../../../assets/logo.jpg";

const useStyles = makeStyles((theme) => ({
  mainCard: {
    width: "32em",

    position: "relative",
    borderRadius: "2px",
    [theme.breakpoints.down("md")]: {
      width: "19em",
    },
  },
  mainDiv: {
    width: "100vh",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  gridContainer: {
    marginTop: "5em",
    [theme.breakpoints.down("md")]: {
      marginTop: "4em",
    },
  },
  upperHeading: {
    height: "6em",
    background: "#a3c3f2",

    [theme.breakpoints.down("md")]: {
      height: "4em",
    },
  },
  upperImage: {
    margin: "0 auto",
    display: "block",
    height: "4em",
    [theme.breakpoints.down("md")]: {
      height: "2em",
    },
  },
  mainText: {
    textAlign: "center",
    color: "#335b5a",
    fontSize: "1.5rem",
    fontWeight: "bold",
    margin: "1.6em 0",
    [theme.breakpoints.down("md")]: {
      fontSize: "1rem",
      margin: "0.6em 0",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.9rem",
      margin: "0.6em 0",
    },
  },
  okButton: {
    background: theme.palette.secondary.main,
    margin: "0 auto",
    width: "22em",
    textTransform: "none",
    color: "white",
    border: "none",
    fontWeight: "bold",
    borderRadius: "3px",
    lineHeight: "42px",
    marginBottom: "16px",
    [theme.breakpoints.down("md")]: {
      width: "16em",
      textTransform: "none",
      color: "white",
      lineHeight: "30px",
    },
  },
  textContainer: {
    padding: "0 10%",
  },
  cancelButton: {
    background: "#e1251a",
    margin: "0 auto",
    width: "22em",
    textTransform: "none",
    color: "white",
    border: "none",
    fontWeight: "bold",
    borderRadius: "5px",
    lineHeight: "42px",
    [theme.breakpoints.down("md")]: {
      width: "16em",
      textTransform: "none",
      lineHeight: "30px",
      color: "white",
    },
    "& :hover": {
      background: "#e35f57",
      color: "white !important",
      opacity: 0.7,
      outline: "none",
      border: "none",
    },
  },
  buttonDiv: {
    width: "100%",
    display: "flex",
    marginTop: "10px",
  },
  icon: {
    position: "absolute",
    top: "0",
    right: "0",
    padding: "3px",
  },
}));

const CardForSubmission = (props) => {
  const classes = useStyles();
  const history = useHistory();

  const { ok = "Ok" } = props;
  const okHandler = () => {};
  return (
    <div>
      <Grid
        container
        justify={"space-around"}
        className={classes.gridContainer}
      >
        <Grid item>
          <Card elevation={6} className={classes.mainCard}>
            <CardContent className={classes.upperHeading}>
              {props.close && (
                <IconButton
                  className={classes.icon}
                  onClick={() => history.push("/")}
                >
                  <CancelIcon />
                </IconButton>
              )}
              <img src={Logo} alt="" className={classes.upperImage} />
            </CardContent>
            <CardContent className={classes.textContainer}>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                className={classes.mainText}
              >
                {props.title}
              </Typography>
            </CardContent>
            <div>
              <div className={classes.buttonDiv} style={{ width: "100%" }}>
                <button
                  className={classes.okButton}
                  onClick={() => history.push(props.route)}
                >
                  {ok}
                </button>
              </div>
              <div className={classes.buttonDiv} style={{ width: "100%" }}>
                {props.cancel && (
                  <button
                    className={classes.cancelButton}
                    onClick={() => history.push("/")}
                  >
                    cancel
                  </button>
                )}
              </div>
            </div>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default CardForSubmission;

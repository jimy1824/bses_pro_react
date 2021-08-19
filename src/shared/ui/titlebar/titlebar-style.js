import { makeStyles } from "@material-ui/core/styles";

export const useStyle = makeStyles((theme) => ({
  appbarWrapper: {
    marginTop: theme.spacing(2),
    background: theme.palette.secondary.main,
    borderRadius: "10px",
    height: "3em",
    position: "relative",
    zIndex: 20,
  },

  toolBar: {
    minHeight: "3em",
  },
  titleText: {
    background: theme.palette.secondary.main,

    fontSize: "1.2rem",
    fontWeight: "bold",
    textShadow: "5px 1px 6px #000000",
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8em",
      fontWeight: "bold",
    },
  },
  paperWrapper: {
    backgroundColor: "#fafafa",
    margin: "0.4em",
    paddingTop: "1.2em",
    marginTop: "-15px",
    borderRadius: "3px",
    padding: theme.spacing(1),
  },
}));

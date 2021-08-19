import { makeStyles } from "@material-ui/core/styles";

export const useNavbarStyle = makeStyles((theme) => ({
  root: {
    borderRadius: "10px",
    background: theme.palette.secondary.main,
    "& .MuiTypography-h4": {
      fontSize: "1.6rem",
      fontWeight: "600",
      [theme.breakpoints.down("xs")]: {
        fontSize: "1rem",
        fontWeight: "600",
      },
    },
  },
  navText: {
    textShadow: "5px 1px 6px #000000",
  },
  navLogo: {
    height: "5em",
    margin: "8px 10px 8px 0px",
    [theme.breakpoints.down("xs")]: {
      height: "4em",
    },
  },
  logoutButton: {
    marginLeft: "auto",
    color: "white",
  },
  outerDiv: {
    display: "inline-block",

    height: "4.5em",
    backgroundColor: "#2D579E",
    borderRadius: "10px",
    width: "140px",
    marginLeft: "auto",
    padding: "4px",
    [theme.breakpoints.down("xs")]: {
      height: "4em",
    },
    link: {},
  },
}));

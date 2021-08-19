import { makeStyles } from "@material-ui/styles";

export const confirmEmailStyles = makeStyles((theme) => ({
  outerDivConfirmEmail: {
    textAlign: "center",
  },
  verfiedHeading: {
    color: theme.palette.primary.main,
  },
  innerDivVerified: {},
  innerParagraph: {
    display: "inline-block",
  },
  innerButton: {
    display: "inline-block",
  },
  errorHeading: {
    color: theme.palette.error.main,
  },
}));

export const confirmRegistrationStyles = makeStyles((theme) => ({
  outerContainer: {
    textAlign: "center",
    marginTop: "5rem",
    color: theme.palette.primary.main,
  },
  heading: {},
}));

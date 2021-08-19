import { makeStyles } from "@material-ui/core";

export const datePickerStyles = makeStyles((theme) => ({
  paragraph: {
    padding: "0 8px",
    fontSize: "1rem",
    fontWeight: "500",
    color: theme.palette.primary.main,
    textAlign: "right",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.9rem",
      lineHeight: "1",
      letterSpacing: "0",
    },
    "& p": {
      margin: "0",
    },
  },
  insideContainer: {
    minWidth: "0",
    width: "100%",
    padding: "0 8px",
    "& .MuiOutlinedInput-adornedEnd": {
      paddingRight: "0px",
    },
    "& .MuiFormControl-root": {
      width: "100%",
    },
    "& .MuiOutlinedInput-inputAdornedEnd": {
      color: theme.palette.primary.light,
    },
    "& .MuiSvgIcon-root": {
      color: "#CECFD2",
    },
  },
  root: {
    width: "100%",
  },
  label: {
    color: "#9EA0A5",
    fontSize: "0.87rem",
  },
}));

export const autoCompleteStyles = makeStyles((theme) => ({
  paragraph: {
    fontSize: "0.87rem",
    fontWeight: "500",
    color: theme.palette.primary.main,
    textAlign: "right",
    marginLeft: "10px",
    marginBottom: "4px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.87rem",
      lineHeight: "1",
      letterSpacing: "0",
    },
  },
  insideContainer: {
    minWidth: "0",
    width: "100%",
    padding: "0 8px",
    "& .MuiAutocomplete-root.MuiAutocomplete-hasClearIcon.MuiAutocomplete-hasPopupIcon": {
      width: "100%",
    },
    '& .MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"]': {
      padding: "2px",
    },
    "& #combo-box-demo-label": {
      marginTop: "-9px",
    },
  },
  root: {
    width: "100%",
  },
}));

export const radioButtonWithSideStyles = makeStyles((theme) => ({
  paragraph: {
    fontSize: "1rem",
    fontWeight: "500",
    color: theme.palette.primary.main,
    textAlign: "right",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.9rem",
      lineHeight: "1",
      letterSpacing: "0",
    },
  },
  insideContainer: {
    minWidth: "0",
    width: "100%",
    padding: "0 8px",
    "& .MuiTypography-body1": {
      fontSize: "0.87rem",
      color: "#9EA0A5",
    },
  },
  root: {
    width: "100%",
  },
  label: {
    fontSize: "0.87rem",
    marginLeft: theme.spacing(1),
    color: "#9EA0A5",
  },
}));

export const selectStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    paddingRight: "16px !important",
    width: "100%",
    borderRadius: "3px",
    "& .MuiInputLabel-outlined": {
      transform: "translate(16px, 12px) scale(1)",
    },
  },
  label: {},
}));

export const selectWithSideStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    paddingRight: "16px !important",
    width: "100%",
    borderRadius: "3px",
    "& .MuiInputLabel-outlined": {
      transform: "translate(16px, 12px) scale(1)",
    },
  },
  paragraph: {
    fontSize: "1rem",
    fontWeight: "500",
    color: theme.palette.primary.main,
    textAlign: "right",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.9rem",
      lineHeight: "1",
      letterSpacing: "0",
    },
  },
  insideContainer: {
    minWidth: "0",
    width: "100%",
    "& .MuiFormHelperText-contained": {
      marginLeft: 0,
    },
  },
  label: {
    fontSize: "0.87rem",

    color: "#9EA0A5",
  },
}));

export const sideViewStyles = makeStyles((theme) => ({
  sideLabelParagraph: {
    fontSize: "1rem",
    fontWeight: "500",
    color: theme.palette.primary.main,
    textAlign: "right",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.9rem",
      lineHeight: "1",
      letterSpacing: "0",
    },
  },
  insideContainer: {
    width: "100%",
    padding: "0 8px",
  },
  insideContainer1: {
    width: "100%",
    padding: "0 8px",
  },
  mainTextParagraph: {
    fontSize: "0.9rem",
    fontWeight: "300",
    color: theme.palette.primary.main,
    textAlign: "left",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.9rem",
      lineHeight: "1",
      letterSpacing: "0",
    },
  },
  outerContainerForSide: {},
  root: {
    width: "100%",
  },
}));

export const textFieldWithSideStyles = makeStyles((theme) => ({
  paragraph: {
    fontSize: "1rem",
    fontWeight: "500",
    color: theme.palette.primary.main,
    textAlign: "right",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.9rem",
      lineHeight: "1",
      letterSpacing: "0",
    },
  },
  insideContainer: {
    minWidth: "0",
    width: "100%",
    padding: "0 8px",
  },
  root: {
    width: "100%",
  },
  label: {
    color: "#9EA0A5",
    fontSize: "0.87rem",
  },
}));

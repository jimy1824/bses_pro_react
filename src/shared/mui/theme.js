import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#7a7a7a",
    },
    secondary: {
      main: "#1a69df",
    },
  },
  zIndex: {
    appBar: 5000,
  },
  typography: {
    fontFamily: ['"Helvetica"', "Roboto", "Arial", "sans-serif"].join(","),
  },
});

export default theme;

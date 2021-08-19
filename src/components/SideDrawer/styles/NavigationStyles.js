import { makeStyles } from "@material-ui/core";

export const navigationStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    [theme.breakpoints.down("md")]: {
      flexGrow: 1,
    },
  },
  root1: {
    display: "flex",
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  },
  appBarTopNav: {
    zIndex: "10 !important",
    borderBottom: "1px solid #f0f0f0",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "#343434",
    [theme.breakpoints.down("md")]: {
      fontSize: "0.9rem",
    },
  },
  paragraphDiv: {
    marginLeft: "1em",
  },
  image: {
    height: "5em",
    margin: "0.3em",
  },
  colorClass: {
    color: "black",
  },
  sideDiv: {
    display: "inline-flex",
    marginLeft: "auto",
    marginTop: "10px",
  },
  outerSpan: {
    margin: "auto 0",
  },
  nameText: {
    color: "#1665D8",
    marginTop: "9px",
    cursor: "pointer",
  },
  textDiv: {
    position: "relative",
  },
  profileImage: {
    marginRight: "15px",
    cursor: "pointer",
  },

  drawer: {
    width: 240,
    flexShrink: 0,
    zIndex: "9 !important",
  },
  drawerPaper: {
    width: 240,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  content1: {
    flexGrow: 1,
    padding: 0,
  },
  emptyToolbar: {
    minHeight: "71px",
  },
  emptyToolbar1: {
    minHeight: "77px",
  },

  menuImage: {
    margin: "auto",
    background: "#1464d7",
    padding: "8px 13px",
    borderRadius: "4px",
  },
  pieImage: {
    margin: "auto",
    background: "#f6ab2e",
    padding: "8px 10px",
    borderRadius: "4px",
    width: "43px",
    height: "36px",
  },
  listItemIcon: {
    marginRight: "5px",
    "& :hover": {
      background: "#1464d7",
    },
  },
  listItem: {
    height: "73px",
    "& .MuiTypography-displayBlock": {
      fontSize: "0.9rem",
      fontWeight: "bold",
    },
    "& .MuiListItemText-secondary": {
      fontWeight: "100",
      fontSize: "0.8rem",
    },
  },
  requestImage: {
    margin: "auto",
    background: "#6a78ff",
    padding: "8px 10px",
    borderRadius: "4px",
  },
  listRequestItemIcon: {
    marginRight: "5px",
    "& :hover": {
      background: "#6a78ff",
    },
  },
  personImage: {
    margin: "auto",
    background: "#f6ab2e",
    padding: "8px 10px",
    borderRadius: "4px",
  },
  listPersonItemIcon: {
    marginRight: "5px",
    "& :hover": {
      background: "#f6ab2e",
    },
  },
  aboutusImage: {
    margin: "auto",
    background: "#44a852",
    padding: "8px 10px",
    borderRadius: "4px",
  },
  listAboutItemIcon: {
    marginRight: "5px",
    "& :hover": {
      background: "#44a852",
    },
  },
  labelForReacent: {
    marginLeft: theme.spacing(2),
    color: theme.palette.primary.light,
    fontWeight: "bold",
    fontSize: "0.8rem",
  },
  divCardOuterTotal: {
    height: "165px",
    backgroundColor: "#1565d8",
    borderRadius: "5px",
    position: "relative",
  },
  divCardOuterCompleted: {
    height: "165px",
    backgroundColor: "#33aa44",
    borderRadius: "5px",
    position: "relative",
  },
  divCardOuterProgress: {
    height: "165px",
    backgroundColor: "#f6ab2e",
    borderRadius: "5px",
    position: "relative",
  },
  divCardOuterServices: {
    height: "165px",
    backgroundColor: "#6758f3",
    borderRadius: "5px",
    position: "relative",
  },
  outerForImage: {
    position: "relative",
  },
  imgCards: {
    position: "absolute",
    bottom: "0",
    right: "0",
    zIndex: "5",
  },
  backgroundImgCard: {
    position: "absolute",
    right: "20px",
    top: 0,
  },
  outerTextDiv: {
    color: "white",
  },
  hr: {
    background: "white",
    opacity: "0.2",
    margin: "10px 0 10px 0",
  },
  spanForDate: {
    fontSize: "0.7rem",
    margin: 0,
  },
  above: {
    position: "relative",
    zIndex: "6",
  },
  activeTabDesktop: {
    backgroundColor: "#f6f9fe !important",
    color: "#1665D8",
    "&  > div > p": {
      color: "#1665D8",
    },
  },
  hamBurger: {
    height: "40px",
    width: "50px",
    color: "#1565d8",
    pointer: "cursor",
    outline: "none",
    "&:hover": {
      backgroundColor: "transparent",
    },
    "& :focus": {
      outline: "none",
    },
  },
  burgerButton: {
    outline: "none",
    "& :focus": {
      outline: "none",
      backgroundColor: "transparent",
    },
    "& :hover": {
      outline: "none",
      backgroundColor: "transparent",
    },
  },
  nameForSide: {
    marginBottom: "4px",
    fontSize: "0.85rem",
  },
  added: {
    color: theme.palette.primary.light,
  },
  forLine: {
    color: theme.palette.secondary.main,
  },
  additionalInformation: {
    color: theme.palette.secondary.main,
    fontSize: "0.85rem",
    marginBottom: "5px",
  },
  dateForRecent: {
    color: theme.palette.primary.light,
    fontSize: "0.84rem",
  },
}));

import React, { useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {
  Typography,
  Link,
  Avatar,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

import Logo from "../../../assets/logo.jpg";
import { useNavbarStyle } from "./Navbar-style";
import { AuthContext } from "../../context/auth-context";
import AvatarImage from "../../../assets/avatar.png";

const Navbar = (props) => {
  const classes = useNavbarStyle();
  const history = useHistory();
  const auth = useContext(AuthContext);
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down("sm"));
  const handleLogout = () => {
    auth.logout();
    history.push("/");
  };

  let logout;
  if (auth.isLoggedIn) {
    if (match) {
      logout = (
        <div className={classes.outerDiv}>
          <div style={{ margin: "5px 5px" }}>
            <div style={{ marginTop: "8%", textAlign: "center" }}>
              <div style={{ margin: "5px 0" }}>
                <Typography
                  variant={"p"}
                  style={{ fontSize: "0.7em", fontWeight: "bold" }}
                >
                  {'Admin'}
                </Typography>
              </div>
              <div>
                <Link
                  onClick={handleLogout}
                  component="button"
                  style={{
                    fontSize: "0.7em",
                    fontWeight: "bold",
                    color: "white",
                    textDecoration: "none",
                  }}
                >
                  {" "}
                  Logout
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      logout = (
        <div
          style={{
            display: "inline-block",

            height: "4.5em",
            backgroundColor: "#2D579E",
            borderRadius: "10px",
            width: "190px",
            marginLeft: "auto",
            padding: "4px",
          }}
        >
          <div style={{ margin: "10px 10px" }}>
            <div style={{ float: "left" }}>
              <Avatar
                variant="square"
                style={{ width: "50px", height: "50px" }}
              >
                <img
                  src={AvatarImage}
                  alt=""
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "10px",
                  }}
                />
              </Avatar>
            </div>
            <div style={{ marginLeft:'4.5em',paddingTop:'1px', alignItems: "center" }}>
              <div style={{ margin: "5px 0" }}>
                <Typography
                  variant={"p"}
                  style={{ fontSize: "1em", fontWeight: "bold" }}
                >
                  {'Admin'}
                </Typography>
              </div>
              <div>
                <Link
                  onClick={handleLogout}
                  component="button"
                  style={{
                    fontSize: "1em",
                    fontWeight: "bold",
                    color: "white",
                    textDecoration: "none",
                  }}
                >
                  {" "}
                  Logout
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  // <Button className={classes.logoutButton} onClick={handleLogout}>
  //   Logout
  // </Button>

  return (
    <div>
      <AppBar position="static" elevation={0} className={classes.root}>
        <Toolbar style={{ paddingRight: "10px" }}>
          <img src={Logo} alt="Dededo Mayors" className={classes.navLogo} />
          <Typography variant="h4" className={classes.navText}>
            Dededo Mayor's Office Service Center
          </Typography>
          {logout}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;

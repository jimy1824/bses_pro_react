import React, {useState, useEffect, useContext, Fragment} from "react";
import {useHistory} from "react-router-dom";
import {
    AppBar,
    Toolbar,
    Typography,
    Menu,
    MenuItem,
    Avatar,
    Drawer,
    CssBaseline,
    useMediaQuery,
    useTheme,
    SwipeableDrawer,
} from "@material-ui/core";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import {Link} from "react-router-dom";
import MenuIconClose from "@material-ui/icons/Menu";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import IconButton from "@material-ui/core/IconButton";
import {useDispatch, useSelector} from "react-redux";

import {AuthContext} from "../../../shared/context/auth-context";
import {navigationStyles} from "../styles/NavigationStyles";
import Logo from "../../../assets/logo.jpg";
import MenuIcon from "../../../assets/icons/dashboard icons/home.svg";
import AboutusIcon from "../../../assets/icons/dashboard icons/About us.svg";
import ContactusIcon from "../../../assets/icons/dashboard icons/Contact us.svg";
import AvatarImage from "../../../assets/avatar.png";

import Dialog from "../../../shared/ui/dialog/dialog";
import {initialValueCreatePerson} from "../../../shared/utils/initialValues";
import ChangePassword from "../components/ChangePassword";

const Nav = (props) => {
    const auth = useContext(AuthContext);
    const history = useHistory();
    const {features} = auth;
    const [anchorEl, setAnchorEl] = React.useState(null);
    const path = history.location.pathname.split("/");

    const {userId, isLoggedIn} = auth;

    const classes = navigationStyles();
    const theme = useTheme();
    const match = useMediaQuery(theme.breakpoints.down("md"));
    const [value, setValue] = useState();
    const [openDrawer, setOpenDrawer] = useState(false);
    const [openPersonProfile, setOpenPersonProfile] = useState(false);
    const [openChangePassword, setOpenChangePassword] = useState(false);

    const {data} = useSelector((state) => state.dashboard);

    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

    useEffect(() => {
        switch (window.location.pathname) {
            case `/dashboard`:
                value !== 0 && setValue(0);
                break;
            case `/contactus`:
                value !== 1 && setValue(1);
                break;
            default:
                break;
        }
        return () => {
        };
    }, [value, userId]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const logoutHandler = () => {
        setOpenDrawer(false);
        auth.logout();
        history.push("/");
    };
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const editPerson = () => {
        setOpenDrawer(false);
        setOpenPersonProfile(true);
        setAnchorEl(null);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const changePassword = () => {
        setAnchorEl(null);
        setOpenDrawer(false);
        setOpenChangePassword(true);
    };

    let sideNav;
    if (!match) {
        sideNav = (
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <Toolbar className={classes.emptyToolbar}/>
                <div className={classes.drawerContainer}>
                    <List>
                        {features.Navbar_Dashboard && (
                            <ListItem
                                button
                                className={`${classes.listItem} ${
                                    value === 0 && classes.activeTabDesktop
                                }`}
                                component={Link}
                                to={`/dashboard`}
                                onClick={(e) => handleChange(e, 0)}
                                selected={value === 0}
                            >
                                <ListItemIcon className={classes.listItemIcon}>
                                    <img src={MenuIcon} alt="" className={classes.menuImage}/>
                                </ListItemIcon>
                                <ListItemText primary={"Dashboard"} secondary={"Statistics"}/>
                            </ListItem>
                        )}
                        {features.Navbar_Contactus && (
                            <ListItem
                                button
                                className={`${classes.listItem} ${
                                    value === 1 && classes.activeTabDesktop
                                }`}
                                component={Link}
                                to={`/contactus`}
                                onClick={(e) => handleChange(e, 1)}
                                selected={value === 1}
                            >
                                <ListItemIcon className={classes.listAboutItemIcon}>
                                    <img
                                        src={ContactusIcon}
                                        alt=""
                                        className={classes.aboutusImage}
                                    />
                                </ListItemIcon>
                                <ListItemText
                                    primary={"Contact us"}
                                    secondary={"Be in touch"}
                                />
                            </ListItem>
                        )}
                    </List>
                </div>
            </Drawer>
        );
    } else {
        sideNav = (
            <SwipeableDrawer
                disableBackdropTransition={!iOS}
                disableDiscovery={iOS}
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
                onOpen={() => setOpenDrawer(true)}
                classes={{paper: classes.drawer}}
            >
                <Toolbar className={classes.emptyToolbar1}>
                    <Avatar
                        alt="Remy Sharp"
                        aria-controls="simple-menu"
                        aria-haspopup="true"
                        onClick={handleClick}
                        src={`${
                            typeof auth.user.detail === "undefined"
                                ? AvatarImage
                                : auth.user.detail.photo !== null &&
                                process.env.REACT_APP_BACKEND_URL + auth.user.detail.photo
                        }`}
                        className={classes.profileImage}
                    />
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={editPerson}>Profile</MenuItem>
                        <MenuItem onClick={changePassword}>Change password</MenuItem>
                    </Menu>

                    <div className={classes.textDiv}>
                        <p className={classes.nameText}>
                            {typeof auth.user.first_name !== "undefined" &&
                            auth.user.first_name+' '+ auth.user.last_name}{" "}
                            <span onClick={logoutHandler}>Logout</span>
                        </p>
                    </div>
                </Toolbar>
                <List disablePadding>
                    {features.Navbar_Dashboard && (
                        <ListItem
                            button
                            className={`${classes.listItem} ${
                                value === 0 && classes.activeTabDesktop
                            }`}
                            component={Link}
                            to={`/dashboard`}
                            onClick={(e) => {
                                handleChange(e, 0);
                                setOpenDrawer(false);
                            }}
                            selected={value === 0}
                        >
                            <ListItemIcon className={classes.listItemIcon}>
                                <img src={MenuIcon} alt="" className={classes.menuImage}/>
                            </ListItemIcon>
                            <ListItemText primary={"Dashboard"} secondary={"Statistics"}/>
                        </ListItem>
                    )}
                    {features.Navbar_Contactus && (
                        <ListItem
                            button
                            className={`${classes.listItem} ${
                                value === 1 && classes.activeTabDesktop
                            }`}
                            component={Link}
                            to={`/contactus`}
                            onClick={(e) => {
                                handleChange(e, 1);
                                setOpenDrawer(false);
                            }}
                            selected={value === 1}
                        >
                            <ListItemIcon className={classes.listAboutItemIcon}>
                                <img
                                    src={ContactusIcon}
                                    alt=""
                                    className={classes.aboutusImage}
                                />
                            </ListItemIcon>
                            <ListItemText primary={"Contact us"} secondary={"Be in touch"}/>
                        </ListItem>
                    )}

                </List>
            </SwipeableDrawer>
        );
    }
    return (
        <div className={classes.root}>
            <Dialog
                title={"CHANGE PASSWORD"}
                openPopup={openChangePassword}
                setOpenPopup={setOpenChangePassword}
            >
                <ChangePassword
                    openPopup={openChangePassword}
                    setOpenPopup={setOpenChangePassword}
                    token={auth.token}
                />
            </Dialog>
            <Dialog
                openPopup={openPersonProfile}
                setOpenPopup={setOpenPersonProfile}
                title="EDIT YOUR PROFILE"
            >
            </Dialog>
            <div className={classes.root1}>
                <CssBaseline/>
                <AppBar
                    elevation={0}
                    position="fixed"
                    className={`${classes.appBarTopNav} color-fix-nav`}
                >
                    {isLoggedIn && auth.token ? (
                        <Toolbar>
                            <div>
                                <Link to={auth.token ? `/dashboard` : "/"}>
                                    <img src={Logo} alt="Mayors Logo" className={classes.image}/>
                                </Link>
                            </div>
                            <div className={classes.paragraphDiv}>
                                <Typography variant="h6" className={classes.title}>
                                    Samaritan
                                </Typography>
                            </div>

                            <div className={classes.sideDiv}>
                                {auth.token && match  && (
                                    <IconButton
                                        disableRipple={true}
                                        disableTouchRipple={true}
                                        disableFocusRipple={true}
                                        focusRipple={false}
                                        className={classes.burgerButton}
                                        onClick={() => {
                                            setOpenDrawer(!openDrawer);
                                        }}
                                    >
                                        {openDrawer ? (
                                            <MenuOpenIcon className={classes.hamBurger}/>
                                        ) : (
                                            <MenuIconClose className={classes.hamBurger}/>
                                        )}
                                    </IconButton>
                                )}
                                {auth.token && !match && (
                                    <Fragment>
                                        <Avatar
                                            alt="Remy Sharp"
                                            aria-controls="simple-menu"
                                            onClick={handleClick}
                                            src={`${
                                                typeof auth.user.detail === "undefined"
                                                    ? AvatarImage
                                                    : auth.user.detail.photo !== null &&
                                                    process.env.REACT_APP_BACKEND_URL +
                                                    auth.user.detail.photo
                                            }`}
                                            className={classes.profileImage}
                                        />
                                        <Menu
                                            id="simple-menu"
                                            anchorEl={anchorEl}
                                            keepMounted
                                            open={Boolean(anchorEl)}
                                            onClose={handleClose}
                                        >
                                            <MenuItem onClick={editPerson}>Profile</MenuItem>
                                            <MenuItem onClick={changePassword}>
                                                Change password
                                            </MenuItem>
                                        </Menu>
                                        <div className={classes.textDiv}>
                                            <p className={classes.nameText}>
                                                {typeof auth.user.first_name !== "undefined" &&
                                                auth.user.first_name+' '+auth.user.last_name}{" "}
                                                <span onClick={logoutHandler}>Logout</span>
                                            </p>
                                        </div>
                                    </Fragment>
                                )}
                            </div>
                        </Toolbar>
                    ) : null}
                </AppBar>

                {auth.token  && sideNav}
                {
                    <main
                        style={
                            auth.token
                                ? {maxWidth: window.screen.width}
                                : {maxWidth: window.screen.width, padding: "0px"}
                        }
                        className={classes.content}
                    >
                        {isLoggedIn ? <Toolbar className={classes.emptyToolbar1}/> : null}
                        {props.children}
                    </main>
                }

            </div>
        </div>
    );
};

export default Nav;

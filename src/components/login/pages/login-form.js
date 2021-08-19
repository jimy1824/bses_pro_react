import React, { useState, useContext, Fragment } from "react";
import { Grid } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";
import Logo from "../../../assets/logo.jpg";
import loginImage from "../../../assets/loginImage.png";
import Controls from "../../../shared/form-elements/controls";
import { AuthContext } from "../../../shared/context/auth-context";
import Spinner from "../../../shared/ui/spinner/spinner";
import { error } from "../../../shared/ui/toast/toast";
import useStyle from "../../../styles/signup-login-form";
import { useLoginStyle } from "../styles/login-form-style";
import { initialValueLoginForm } from "../../../shared/utils/initialValues";
import FacebookLog from "./SocialLogin/FacebookLogin";
import GoogleLog from "./SocialLogin/GoogleLogin";
const Login = (props) => {
    const history = useHistory();
    const auth = useContext(AuthContext);
    const classes = useStyle();
    const loginClasses = useLoginStyle();
    const [values, setValues] = useState(initialValueLoginForm);
    const [open, setOpen] = useState(false);
    const inputChangeHandler = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };
    const submitHandler = (e) => {
        setOpen(true);
        const data = {
            email: values.userName,
            password: values.password,
        };
        axios
            .post(`${process.env.REACT_APP_BACKEND_URL}/login/`, data)
            .then(res => {
                auth.login(res.data.user.pk, res.data.access_token, res.data.user,res.data.refresh_token);
                if (res.statusText === "OK") {
                    history.push(`/dashboard`);
                }
                setOpen(false);
            })
            .catch(e => {
                setOpen(false);
                for (let [key, value] of Object.entries(e.response.data)) {
                    if(Array.isArray(value)){
                        error(value[0])
                    }else {
                        error(value)
                    }
                }
            });
        e.preventDefault();
    };
    return (
        <Fragment>
            <Spinner open={open} />
            <div className={classes.main}>
                <Grid container item className={classes.imageContainer}>
                    <img
                        src={loginImage}
                        alt="Side Image"
                        className={classes.sideImage}
                    />
                </Grid>
                <Card container className={classes.cardWrapper}>
                    <div>
                        <Grid container className={classes.logo} justify="center">
                            <Grid item>
                                <img
                                    src={Logo}
                                    alt="Dededo Mayor Office"
                                    className={classes.image}
                                />
                            </Grid>
                        </Grid>
                        <form
                            autoComplete="off"
                            className={classes.root}
                            onSubmit={submitHandler}
                        >
                            <Grid
                                container
                                className={classes.formContainer}
                                justify="center"
                            >
                                <Grid item md={10} xs={10} justify="center">
                  <span className={loginClasses.socialIcon}>
                    <GoogleLog />
                    <FacebookLog />
                  </span>
                                    <br />
                                    <br />
                                    <Divider variant="fullWidth" aria-label="OR" />
                                    <br />
                                </Grid>
                                <Grid item xs={10} md={10}>
                                    <Grid container spacing={2} direction="column">
                                        <Grid item xs={12}>
                                            <Controls.TextField
                                                label="Username"
                                                value={values.userName}
                                                required
                                                name="userName"
                                                type="text"
                                                inputChangeHandler={inputChangeHandler}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Controls.TextField
                                                label="Password"
                                                value={values.password}
                                                required
                                                name="password"
                                                type="password"
                                                inputChangeHandler={inputChangeHandler}
                                            />
                                            <span className={loginClasses.textWrapper}>
                        {" "}
                                                <Link to="/forgotPassword">Forgot Password</Link>
                      </span>
                                        </Grid>
                                        <Grid item>
                                            <Grid container justify="space-between" spacing={2}>
                                                <Grid item md={12} xs={12}>
                                                    <Controls.Button
                                                        insideText="Login"
                                                        type="submit"
                                                        size="small"
                                                        elivation={false}
                                                        extraClass={loginClasses.buttonWrapper}
                                                    />
                                                    <div>
                                                        <div className={loginClasses.textWrapperSignup}>
                                                            New User?
                                                            <Link to="/signup"> Sign Up</Link>
                                                        </div>
                                                    </div>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                </Card>
            </div>
        </Fragment>
    );
};

export default Login;

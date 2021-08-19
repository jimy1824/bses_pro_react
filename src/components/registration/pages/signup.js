import React, {Fragment, useState} from "react";
import SignUpForm from "./signup-form";
import Spinner from "../../../shared/ui/spinner/spinner";
import {Grid} from "@material-ui/core";
import loginImage from "../../../assets/loginImage.png";
import Card from "@material-ui/core/Card";
import Logo from "../../../assets/logo.jpg";
import useStyle from "../../../styles/signup-login-form";

const SignUp = (props) => {
    const classes = useStyle();
    const [open, setOpen] = useState(false);

    return (
        <Fragment>
            <Spinner open={open} />
            <div className={classes.main}>
                <Card container >
                    <div>
                        <Grid container className={classes.logo} justify="center">
                            <Grid item>
                                <img
                                    src={Logo}
                                    alt="Samaritan"
                                    className={classes.image}
                                />
                            </Grid>
                        </Grid>
                        <SignUpForm />
                    </div>

                </Card>

            </div>
        </Fragment>
    );

}

export default SignUp;

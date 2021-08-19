import React, {Suspense, lazy, useEffect} from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import SignUp from "../registration/pages/signup";
import Login from "../login/pages/login-form";
import {AuthContext} from "../../shared/context/auth-context";
import useAuth from "../../shared/hooks/auth-hook";
import Spinner from "../../shared/ui/spinner/spinner";
import ConfirmEmail from "../registration/components/confirm-email";
import ForgotPasswordEmail from "../login/pages/forgot-password-email";
import ConfirmPassword from "../login/pages/confirm-password";
import CardForSubmission from "../../shared/ui/card/card";
import Nav from "../../components/SideDrawer/page/Nav";
import Dashboard from "../dashdoard/pages/dashboard";
import ContactUs from "../dashdoard/pages/contactus";
import {useDispatch} from "react-redux";
import * as Actions from "../../store/actions";


const Main = (props) => {
    const {
        login,
        logout,
        token,
        user,
        userId,
        features,
        setForceRefresh,
        details,
    } = useAuth();
    const dispatch = useDispatch();
    useEffect(() => {
        if (token !== null) {
            // dispatch(Actions.fetchGraphs(token));
        }
    }, [token]);

    let routes;
    const genParam = window.location.pathname.split("/");
    if (genParam[2] === "confirm-email" ||genParam[4] === "confirm" ) {
        routes = (
            <Switch>
                <Route exact path="/accounts/confirm-email/:MTY" component={ConfirmEmail}/>
                <Route exact path="/" component={Login}/>
                <Route exact path="/forgotPassword" component={ForgotPasswordEmail}/>
                <Route exact path="/api/password/reset/confirm/:uid/:token/" component={ConfirmPassword}/>
                <Route exact path="/signup" component={SignUp}/>
                <Route path="*" render={() => <h2>Page Not Found</h2>}/>
            </Switch>
        );
    } else if (token) {
        routes = (
            <Switch>
                {features.Navbar_Dashboard && (
                    <Route exact path="/dashboard" component={Dashboard}/>
                )}
                {features.Navbar_Contactus && (
                    <Route exact path="/contactus" component={ContactUs}/>
                )}
            </Switch>
        );
    } else {
        routes = (
            <Switch>
                <Route
                    exact
                    path="/verify_email"
                    component={() => (
                        <CardForSubmission
                            ok={"Ok"}
                            title={
                                "A verification link has been sent to your email, click on that link to verify your account."
                            }
                            route="/"
                        />
                    )}
                />
                <Route exact path="/" component={Login}/>
                <Route exact path="/forgotPassword" component={ForgotPasswordEmail}/>
                <Route exact path="/reset_password/:code" component={ConfirmPassword}/>
                <Route exact path="/signup" component={SignUp}/>
            </Switch>
        );
    }
    return (
        <AuthContext.Provider
            value={{
                isLoggedIn: !!token,
                token: token,
                user: user,
                userId: userId,
                login: login,
                logout: logout,
                features: features,
                details: details,
                setForceRefresh: setForceRefresh,
            }}
        >
            <Suspense fallback={<Spinner open/>}>
                 <Nav>{routes}</Nav>
            </Suspense>
        </AuthContext.Provider>
    );
};

export default Main;


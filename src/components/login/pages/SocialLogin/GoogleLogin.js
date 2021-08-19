import React, { useContext } from "react";
import GoogleLogin from "react-google-login";
import "../../styles/CustomSocialLogin.css";
import axios from "axios";
import { AuthContext } from "../../../../shared/context/auth-context";
import { error } from "../../../../shared/ui/toast/toast";

const GoogleLog = (props) => {
    const auth = useContext(AuthContext);
    const responseGoogle = (response) => {
        const data = {
            userName: response.profileObj.name.replace(/\s/g, ""),
            email: response.profileObj.email,
            type: "gmail",
            social_id: response.profileObj.googleId,
            access_token:response.accessToken,
            profile: {
                first_name: response.profileObj.name.replace(/\s/g, ""),
                last_name: '',
            }
        };


        axios
            .post(`${process.env.REACT_APP_BACKEND_URL}/rest-auth/google/`, data)
            .then((res) => {
                console.log(res)
                auth.login(res.data.user.id, res.data.token, res.data.user);
                if (res.statusText === "OK") {

                }
                // setOpen(false);
            })
            .catch((e) => {
                error("Invalid credentials");
                // setOpen(false);
            });


    };

    const errorGoogle = (response) => {};

    return (
        <>
            <GoogleLogin
                render={(renderProps) => (
                    <p onClick={renderProps.onClick} className="google btn-social">
                        <i style={{ float: "left" }} className="fa fa-google fa-fw" />
                        Log In With Google
                    </p>
                )}
                className="btn-social google"
                clientId= "289767845561-t4uklkd0p09klqopn0njid36u9dat68m.apps.googleusercontent.com" //"289767845561-t4uklkd0p09klqopn0njid36u9dat68m.apps.googleusercontent.com"
                onSuccess={responseGoogle}
                onFailure={errorGoogle}
                icon={true}
                cookiePolicy={"single_host_origin"}
            />
        </>
    );
};
export default GoogleLog;

import React from "react";
import FacebookLogin from "react-facebook-login";
import "../../styles/CustomSocialLogin.css";

const FacebookLog = (props) => {
    const responseFacebook = (response) => {
        console.log("response", response);
        const data = {
            access_token: response.accessToken,
        };
    };
    return (
        <>
            <FacebookLogin
                render={(renderProps) => (
                    <p onClick={renderProps.onClick} className="fb btn-social">
                        Sign In With Facebook
                    </p>
                )}
                appId="417940979213944"
                autoLoad={false}
                isMobile={false}
                fields="name,email,picture"
                scope="public_profile,email"
                icon={<i style={{ float: "left" }} className="fa fa-facebook fa-fw" />}
                callback={(res) => responseFacebook(res)}
                cssClass="fb btn-social"
            />
        </>
    );
};
export default FacebookLog;

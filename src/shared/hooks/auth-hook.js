import { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { error } from "../ui/toast/toast";

import { NormalUser } from "../utils/important-variables";

const useAuth = () => {
    const [token, setToken] = useState(null);
    const [userId, setUserId] = useState(false); //false orignal values
    const [user, setUser] = useState({});
    const [features, setFeatures] = useState({});
    const [details, setDetails] = useState({});
    const [forceRefresh, setForceRefresh] = useState();

    const history = useHistory();

    const setPeronDetails = useCallback((details) => {
        setDetails(details);
    }, []);
    const login = useCallback((uid, token,user,refresh_token) => {
        setToken(token);
        setUserId(uid);
        setUser(user);
        setDetails(user.detail);
        setFeatures({
            Navbar_Dashboard: true,
            Navbar_Contactus: true,
        });

        localStorage.setItem(
            "userData",
            JSON.stringify({
                userId: uid,
                token,
                user: user,
                refresh_token,
            })
        );
    }, []);

    const logout = useCallback(() => {
        setToken(null);
        setUser({});
        setUserId(false);
        localStorage.removeItem("userData");
    }, []);

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem("userData"));
        if (storedData !== null) {
            axios
                .post(`${process.env.REACT_APP_BACKEND_URL}/token/refresh/`, {
                    refresh: `${storedData.refresh_token}`,
                })
                .then((response) => {
                    if(response.status===200){
                        if (storedData && storedData.token) {
                            login(
                                storedData.userId,
                                response.data.access,
                                storedData.user,
                                storedData.refresh_token,
                            );
                        }

                    }
                    if (response.status===401) {
                        error(response.detail);
                        logout()
                    }
                })
                .catch((err) => {
                    error('something went wrong');
                });
        }
    }, [login, forceRefresh]);

    return {
        login,
        logout,
        token,
        userId,
        user,
        features,
        details,
        setPeronDetails,
        setForceRefresh,
    };
};
export default useAuth;

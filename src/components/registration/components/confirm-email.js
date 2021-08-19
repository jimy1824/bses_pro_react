import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { Button } from "@material-ui/core";

import Spinner from "../../../shared/ui/spinner/spinner";
import CardForSubmission from "../../../shared/ui/card/card";
import { confirmEmailStyles } from "../styles/component-styles";

const ConfirmEmail = (props) => {

  const classes = confirmEmailStyles();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const paths = useParams();
  useEffect(() => {
    const data = {
      key: paths.MTY,
    };
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/verify-email/`, data)
      .then(response => {
        setLoading(false);
        if(response.status===200){
          setError("");
        }else {
          setError('invalid Url');
        }
      })
      .catch(err => {
        setError('invalid Url');
        setLoading(false);
      });
  }, []);

  let display;
  if (loading) {
    display = <Spinner open />;
  } else {
    if (error === "") {
      display = (
        <CardForSubmission
          title={
            "Congratulations, your account has been verified! Please login to your account and complete registration details to activate the account"
          }
          ok={"Login"}
          route={"/"}
        />
      );
    } else {
      display = <CardForSubmission title={error} route={"/"} />;
    }
  }
  return <React.Fragment>{display}</React.Fragment>;
};

export default ConfirmEmail;

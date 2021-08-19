import React, { Fragment, useEffect } from "react";
import { Grid, TextField } from "@material-ui/core";
import { Formik, Field } from "formik";
import Button from "@material-ui/core/Button";
import { useSelector, useDispatch } from "react-redux";
import * as Yup from "yup";
import { useParams } from "react-router-dom";

import Spinner from "../../../shared/ui/spinner/spinner";
import Logo from "../../../assets/logo.jpg";
import useStyle from "../../../styles/signup-login-form";
import { useLoginStyle } from "../styles/login-form-style";
import CardForSubmission from "../../../shared/ui/card/card";
import * as Actions from "../../../store/actions/index";

const ConfirmPassword = (props) => {
  const { success, loading, error } = useSelector((state) => state.login);
  const dispatch = useDispatch();

  const { uid,token } = useParams();
  const classes = useStyle();
  const loginClasses = useLoginStyle();

  const validation = Yup.object({
    password1: Yup.string()
      .required("password is required")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
    password2: Yup.string().oneOf(
      [Yup.ref("password1"), null],
      "Password does not match"
    ),
  });

  useEffect(() => {
    return () => {
      dispatch(Actions.resetDispatcherLogin());
    };
  }, []);

  const submitHandler = (values, actions) => {
    const data = {
      uid,
      token,
      new_password1:values.password1,
      new_password2:values.password2,
    };
    dispatch(Actions.confirmPassword(data));
  };

  return (
    <Fragment>
      <Spinner open={loading} />

      {/*<form*/}
      {/*  autoComplete="off"*/}
      {/*  className={classes.root}*/}
      {/*  onSubmit={submitHandler}*/}
      {/*>*/}
        <Grid
          container
          justifyContent="space-around"
          className={classes.formContainer}
        >
          <Formik
            initialValues={{
              email: "",
            }}
            validationSchema={validation}
            onSubmit={(values, actions) => submitHandler(values, actions)}
          >
            {({ handleSubmit, handleChange, values, errors, touched }) => (
              <Grid item xs={10} md={6}>
                <form autoComplete="Off" onSubmit={handleSubmit}>
                  <Grid container spacing={2} direction="column">
                    {error !== "" ? (
                      <CardForSubmission title={error} route={"/"} />
                    ) : success ? (
                      <CardForSubmission title={success} route="/" />
                    ) : (
                      <Fragment>
                        <Grid container justifyContent="center">
                          <Grid item>
                            <img
                              src={Logo}
                              alt="Dededo Mayor Office"
                              className={classes.image}
                            />
                          </Grid>
                        </Grid>
                        <Grid item xs={12}>
                          <Field
                            label="Enter new password"
                            required
                            name="password1"
                            type="password"
                            variant="outlined"
                            as={TextField}
                            error={touched.password1 && !!errors.password1}
                            helperText={
                              touched.password1 &&
                              errors.password1 &&
                              errors.password1
                            }
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Field
                            label="Confirm password"
                            required
                            name="password2"
                            type="password"
                            variant="outlined"
                            as={TextField}
                            error={touched.password2 && !!errors.password2}
                            helperText={
                              touched.password2 &&
                              errors.password2 &&
                              errors.password2
                            }
                          />
                        </Grid>
                        <Grid item>
                          <Grid container justifyContent="space-between" spacing={2}>
                            <Grid item></Grid>
                            <Grid item>
                              <Button
                                disableElevation
                                type="submit"
                                color="secondary"
                                variant="contained"
                                className={loginClasses.submitButton}
                              >
                                Submit
                              </Button>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Fragment>
                    )}
                  </Grid>
                </form>
              </Grid>
            )}
          </Formik>
        </Grid>
      {/*</form>*/}
    </Fragment>
  );
};

export default ConfirmPassword;

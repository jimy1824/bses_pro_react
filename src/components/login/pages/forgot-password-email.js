import React, { Fragment, useEffect } from "react";
import { Grid, TextField, Card } from "@material-ui/core";
import { Formik, Field, ErrorMessage } from "formik";
import Button from "@material-ui/core/Button";
import { useSelector, useDispatch } from "react-redux";
import * as Yup from "yup";

import Spinner from "../../../shared/ui/spinner/spinner";
import Logo from "../../../assets/logo.jpg";
import useStyle from "../../../styles/signup-login-form";
import { useLoginStyle } from "../styles/login-form-style";
import CardForSubmission from "../../../shared/ui/card/card";
import * as Actions from "../../../store/actions/index";
import { Link } from "react-router-dom";

const ForgotPasswordEmail = (props) => {
  const { success, loading, error } = useSelector((state) => state.login);
  const dispatch = useDispatch();

  const classes = useStyle();
  const loginClasses = useLoginStyle();

  const validation = Yup.object({
    email: Yup.string().required("Email is required").email("Invalid email"),
  });

  useEffect(() => {
    return () => {
      dispatch(Actions.resetDispatcherLogin());
    };
  }, []);

  const submitHandler = (values, actions) => {
    dispatch(Actions.forgotEmail(values));
  };
  return (
    <Fragment>
      <Spinner open={loading} />
      <Grid container justify="center" className={classes.forgotImageParent}>
        <Grid item>
          <img src={Logo} alt="Dededo Mayor Office" className={classes.image} />
        </Grid>
      </Grid>
      <Card container className={classes.ForgotCard}>
        {/*<form*/}
        {/*  autoComplete="off"*/}
        {/*  className={classes.root}*/}
        {/*  onSubmit={submitHandler}*/}
        {/*>*/}
          <Grid
            container
            justify="space-around"
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
                <Grid item sm={12} xs={12} md={10}>
                  <form autoComplete="Off" onSubmit={handleSubmit}>
                    <Grid container spacing={2} direction="column">
                      {error !== "" ? (
                        <CardForSubmission title={error} route={"/"} />
                      ) : success ? (
                        <CardForSubmission title={success} route="/" />
                      ) : (
                        <Fragment>
                          <Grid item xs={12}>
                            <Field
                              label="Enter your registered email"
                              required
                              name="email"
                              type="text"
                              variant="outlined"
                              as={TextField}
                              error={touched.email && !!errors.email}
                              helperText={
                                touched.email && errors.email && errors.email
                              }
                            />
                          </Grid>
                          <Grid item>
                            <Grid container justify="space-between" spacing={2}>
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
                                <div>
                                  <div
                                    className={loginClasses.textWrapperSignup}
                                  >
                                    Already User?
                                    <Link to="/"> Login</Link>
                                  </div>
                                </div>
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
      </Card>
    </Fragment>
  );
};

export default ForgotPasswordEmail;

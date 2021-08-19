import React, { Fragment, useState } from "react";
import { Formik, Field } from "formik";
import { Grid, TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import * as Yup from "yup";

import useStyle from "../../../styles/signup-login-form";
import axios from "axios";
import { error, success } from "../../../shared/ui/toast/toast";
import Spinner from "../../../shared/ui/spinner/spinner";

const ChangePassword = (props) => {
  const { token, setOpenPopup, openPopup } = props;
  const classes = useStyle();
  const [open, setOpen] = useState(false);

  const submitHandler = (values, options) => {
    const data = {
      old_password: values.old_password,
      new_password1: values.new_password1,
      new_password2: values.new_password2,
    };
    setOpen(true);
    axios
      .put(`${process.env.REACT_APP_BACKEND_URL}/password_change/`, data, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((response) => {
        success("Password updated successfully");
        setOpen(false);
        setOpenPopup(false);
      })
      .catch((e) => {
        setOpen(false);
        error(e.response.data.message);
      });
  };

  const validationSchemaForSignup = Yup.object({
    old_password: Yup.string().required("Old password is required"),
    new_password1: Yup.string()
      .required("Password is required")
      .notOneOf([Yup.ref("old_password"), null], "Cannot enter old password")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
    new_password2: Yup.string()
      .required("Confirm password is required")
      .oneOf([Yup.ref("new_password1"), null], "Password does not match"),
  });
  return (
    <Fragment>
      <Spinner open={open} />
      <Grid
        container
        justify="space-around"
        className={classes.fromContainerChangePassword}
      >
        <Formik
          initialValues={{
            old_password: "",
            new_password1: "",
            new_password2: "",
          }}
          validationSchema={validationSchemaForSignup}
          onSubmit={(values, options) => submitHandler(values, options)}
        >
          {({ values, errors, handleSubmit, touched }) => (
            <form
              className={classes.root}
              onSubmit={handleSubmit}
              autoComplete="off"
            >
              <Grid item xs={12}>
                <Grid item>
                  <Field
                    label="Old password"
                    required
                    name="old_password"
                    type="password"
                    variant="outlined"
                    as={TextField}
                    error={touched.old_password && !!errors.old_password}
                    helperText={
                      touched.old_password &&
                      errors.old_password &&
                      errors.old_password
                    }
                  />
                </Grid>
                <Grid item>
                  <Field
                    label="New password"
                    required
                    name="new_password1"
                    type="password"
                    variant="outlined"
                    as={TextField}
                    error={touched.new_password1 && !!errors.new_password1}
                    helperText={
                      touched.new_password1 &&
                      errors.new_password1 &&
                      errors.new_password1
                    }
                  />
                </Grid>
                <Grid item>
                  <Field
                    label="Confrim password"
                    required
                    name="new_password2"
                    type="password"
                    variant="outlined"
                    as={TextField}
                    error={touched.new_password2 && !!errors.new_password2}
                    helperText={
                      touched.new_password2 &&
                      errors.new_password2 &&
                      errors.new_password2
                    }
                  />
                </Grid>
                <Grid item>
                  <Grid container justify="flex-end">
                    <Grid item>
                      <Button
                        type="submit"
                        disableElevation
                        color="secondary"
                        variant="contained"
                        className={classes.submitButton}
                      >
                        Submit                      </Button>{" "}
                      <Button
                        disableElevation
                        className={classes.cancelButton}
                        onClick={() => setOpenPopup(false)}
                      >
                        Cancel
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </form>
          )}
        </Formik>
      </Grid>
    </Fragment>
  );
};

export default ChangePassword;

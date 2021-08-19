import React, { useState, useContext, Fragment } from "react";
import { Grid, TextField, Checkbox, FormControlLabel } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { Formik, Field } from "formik";
import * as Yup from "yup";
// import loginImage from "../../../assets/loginImage.png";
import Card from "@material-ui/core/Card";
// import Logo from "../../../assets/logo.jpg";
import useStyle from "../../../styles/signup-login-form";
import { AuthContext } from "../../../shared/context/auth-context";
import Spinner from "../../../shared/ui/spinner/spinner";
import { error } from "../../../shared/ui/toast/toast";
import Button from "@material-ui/core/Button";
import Alert from "@material-ui/lab/Alert";



const validationSchemaForSignup = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string().required("Email is required").email("Invalid email"),
    phoneNo: Yup.string()
        .required("Phone no is required")
        .min(10, "Please enter valid phone number"), //  .matches(phoneNoRegex, "Phone number not valid")
    password: Yup.string()
        .required("Password is required")
        .min(8, "Password is too short - should be 8 chars minimum.")
        .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
    confirmPassword: Yup.string()
        .required("Confirm password is required")
        .oneOf([Yup.ref("password"), null], "Password does not match"),
    term: Yup.boolean()
        .required("Please accept the terms for signup.")
        .oneOf([true], "Please accept the terms for signup."),
});

const RegistrationForm = (props) => {
    const auth = useContext(AuthContext);
    const history = useHistory();
    const classes = useStyle();

    const [open, setOpen] = useState(false);

    const  submitHandler =(values, options) =>{
        const data = {
            username: values.email,
            email: values.email,
            password1: values.password,
            password2: values.confirmPassword,
            first_name: values.firstName,
            last_name: values.lastName,
            phone_no_cell: values.phoneNo,
        };

        setOpen(true);
          axios
            .post(`${process.env.REACT_APP_BACKEND_URL}/register/`, data)
            .then(response => {
                setOpen(false);
                if (response.status === 201) {
                    history.push(`/verify_email`);
                }
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
    };

    return (
        <Fragment>
            <Spinner open={open} />
            <div className={classes.main}>
                <Grid container item className={classes.imageContainer}>
                    {/*<img*/}
                    {/*    src={loginImage}*/}
                    {/*    alt="Side Image"*/}
                    {/*    className={classes.sideImage}*/}
                    {/*/>*/}
                </Grid>
                <Card className={classes.cardWrapper2}>
                    <div style={{ width: "100%" }}>
                        <Grid container className={classes.logo} justify="center">
                            <Grid item>
                                {/*<img*/}
                                {/*    src={Logo}*/}
                                {/*    alt="Dededo Mayor Office"*/}
                                {/*    className={classes.image}*/}
                                {/*/>*/}
                            </Grid>
                        </Grid>
                        <Grid container justify="center" className={classes.formContainer}>
                            <Grid item xs={10} md={10}>
                                <Formik
                                    initialValues={{
                                        firstName: "",
                                        lastName: "",
                                        email: "",
                                        phoneNo: "",
                                        password: "",
                                        confirmPassword: "",
                                        term: "",
                                    }}
                                    validationSchema={validationSchemaForSignup}
                                    onSubmit={(values, options) => submitHandler(values, options)}
                                >
                                    {({
                                          values,
                                          handleChange,
                                          errors,
                                          handleSubmit,
                                          touched,
                                          setFieldError,
                                      }) => (
                                        <form
                                            className={classes.root}
                                            onSubmit={handleSubmit}
                                            autoComplete="off"
                                        >
                                            <Grid direction="column" container alignItems="center">
                                                <Grid item xs={12}>
                                                    <Grid container spacing={1} alignItems="center">
                                                        <Grid item xs={12} md={6}>
                                                            <Field
                                                                label="First Name"
                                                                name="firstName"
                                                                required
                                                                type="text"
                                                                variant="outlined"
                                                                as={TextField}
                                                                error={touched.firstName && !!errors.firstName}
                                                                helperText={
                                                                    touched.firstName &&
                                                                    errors.firstName &&
                                                                    errors.firstName
                                                                }
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12} md={6}>
                                                            <Field
                                                                label="Last Name"
                                                                required
                                                                name="lastName"
                                                                type="text"
                                                                variant="outlined"
                                                                as={TextField}
                                                                error={touched.lastName && !!errors.lastName}
                                                                helperText={
                                                                    touched.lastName &&
                                                                    errors.lastName &&
                                                                    errors.lastName
                                                                }
                                                            />
                                                        </Grid>
                                                    </Grid>
                                                    <Grid item>
                                                        <Field
                                                            label="Phone No"
                                                            required
                                                            name="phoneNo"
                                                            type="number"
                                                            variant="outlined"
                                                            as={TextField}
                                                            onChange={(e) => {
                                                                if (e.target.value.length > 10) {
                                                                    return false;
                                                                } else {
                                                                    handleChange(e);
                                                                }
                                                            }}
                                                            error={touched.phoneNo && !!errors.phoneNo}
                                                            helperText={
                                                                touched.phoneNo &&
                                                                errors.phoneNo &&
                                                                errors.phoneNo
                                                            }
                                                        />
                                                    </Grid>
                                                    <Grid item>
                                                        <Field
                                                            label="Email Address"
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
                                                        <Field
                                                            label="Password"
                                                            required
                                                            name="password"
                                                            type="password"
                                                            variant="outlined"
                                                            as={TextField}
                                                            error={touched.password && !!errors.password}
                                                            helperText={
                                                                touched.password &&
                                                                errors.password &&
                                                                errors.password
                                                            }
                                                        />
                                                    </Grid>
                                                    <Grid item>
                                                        <Field
                                                            label="Confrim Password"
                                                            required
                                                            name="confirmPassword"
                                                            type="password"
                                                            variant="outlined"
                                                            as={TextField}
                                                            error={
                                                                touched.confirmPassword &&
                                                                !!errors.confirmPassword
                                                            }
                                                            helperText={
                                                                touched.confirmPassword &&
                                                                errors.confirmPassword &&
                                                                errors.confirmPassword
                                                            }
                                                        />
                                                    </Grid>
                                                    <Grid item>
                                                        <Field
                                                            label="I accept the terms of use for the Dededo Mayor's Office Service Center."
                                                            name="term"
                                                            className={classes.label}
                                                            as={FormControlLabel}
                                                            control={
                                                                <Checkbox color="primary" name={"term"} />
                                                            }
                                                            labelPlacement="end"
                                                            error={touched.term && !!errors.term}
                                                            helperText={
                                                                touched.term && errors.term && errors.term
                                                            }
                                                        />
                                                        {touched.term && errors.term && (
                                                            <Alert severity="error">{errors.term}</Alert>
                                                        )}
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
                                                                    Sign Up
                                                                </Button>

                                                                <div>
                                                                    <div className={classes.textWrapperSignup}>
                                                                        Already User?
                                                                        <Link to="/"> Login</Link>
                                                                    </div>
                                                                </div>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </form>
                                    )}
                                </Formik>
                            </Grid>
                        </Grid>
                    </div>
                </Card>
            </div>
        </Fragment>
    );
};

export default RegistrationForm;

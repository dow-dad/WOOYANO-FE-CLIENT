"use client";

import Link from "next/link";
import { useContext, useState } from "react";
import { Button, Grid, Divider, TextField, Box, Alert } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { AxiosError } from "axios";
import { useFormik } from "formik";
import * as Yup from "yup"; // CUSTOM DEFINED HOOK

import useNavigate from "hooks/useNavigate"; // CUSTOM COMPONENTS

import { H5, H6, Paragraph } from "components/typography"; // CUSTOM SESSIONS LAYOUT

import Layout from "page-sections/sessions/Layout"; // JWT CONTEXT FILE

import { AuthContext } from "contexts/jwtContext";

const RegisterView = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    isAuthenticated,
    user
  } = useContext(AuthContext);
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    remember: true
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().max(100).required("Name is required"),
    email: Yup.string().email("Must be a valid email").max(255).required("Email is required"),
    password: Yup.string().min(6, "Password should be of minimum 6 characters length").required("Password is required"),
    confirmPassword: Yup.string().required("Please re-type your password").oneOf([Yup.ref("password")], "Passwords does not match")
  });
  const {
    errors,
    values,
    touched,
    handleBlur,
    handleChange,
    handleSubmit
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async values => {
      try {
        setIsLoading(true);
        await register(values.name, values.email, values.password);
        setError(null);
        setIsLoading(false);
      } catch (error) {
        console.log("register error -> ", error);

        if (error instanceof AxiosError) {
          setError(error.response?.data.message);
        }

        setIsLoading(false);
      }
    }
  });
  console.log({
    user,
    isAuthenticated
  });
  return <Layout>
      <Box maxWidth={550} p={4}>
        <H5 fontSize={{
        sm: 30,
        xs: 25
      }}>Sign up for 14 days free trial</H5>

        <Paragraph mt={1} mb={6} color="text.secondary">
          No risk, no obligations, no credit-card required.
        </Paragraph>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              {error && <Alert severity="error" sx={{
              mb: 3
            }}>
                  {error}
                </Alert>}

              <H6 fontSize={16} mb={2}>
                Register with your email id
              </H6>

              <TextField fullWidth placeholder="Enter your name" name="name" onBlur={handleBlur} value={values.name} onChange={handleChange} helperText={touched.name && errors.name} error={Boolean(touched.name && errors.name)} />
            </Grid>

            <Grid item xs={12}>
              <TextField fullWidth placeholder="Enter your work email" name="email" type="email" onBlur={handleBlur} value={values.email} onChange={handleChange} helperText={touched.email && errors.email} error={Boolean(touched.email && errors.email)} />
            </Grid>

            <Grid item xs={12}>
              <TextField fullWidth type="password" placeholder="Enter your password" name="password" onBlur={handleBlur} value={values.password} onChange={handleChange} helperText={touched.password && errors.password} error={Boolean(touched.password && errors.password)} />
            </Grid>

            <Grid item xs={12}>
              <TextField fullWidth type="password" placeholder="Confirm your password" name="confirmPassword" onBlur={handleBlur} onChange={handleChange} value={values.confirmPassword} helperText={touched.confirmPassword && errors.confirmPassword} error={Boolean(touched.confirmPassword && errors.confirmPassword)} />
            </Grid>

            <Grid item xs={12}>
              <LoadingButton loading={isLoading} type="submit" variant="contained" fullWidth>
                Sign up via Email
              </LoadingButton>

              <Paragraph mt={1} color="text.secondary">
                By signing up, you agree{" "}
                <Box fontWeight={500} component={Link} href="#">
                  Terms of Service
                </Box>{" "}
                & your consent to receiving email communications from Sales handy.
              </Paragraph>
            </Grid>
          </Grid>
        </form>

        <Divider sx={{
        my: 4,
        borderColor: "grey.200",
        borderWidth: 1
      }}>
          <Paragraph color="text.secondary" px={1}>
            Already have an account?
          </Paragraph>
        </Divider>

        <Button fullWidth variant="text" onClick={() => navigate("/jwt/login")} sx={{
        backgroundColor: "primary.50"
      }}>
          Log In
        </Button>
      </Box>
    </Layout>;
};

export default RegisterView;
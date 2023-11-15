"use client";

import Link from "next/link";
import { useContext, useState } from "react";
import { Grid, TextField, Box, Checkbox } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import LoadingButton from "@mui/lab/LoadingButton";
import * as Yup from "yup";
import { useFormik } from "formik"; // CUSTOM LAYOUT COMPONENT

import Layout from "page-sections/sessions/Layout"; // CUSTOM COMPONENTS

import { H5, H6, Paragraph } from "components/typography";
import { FlexBetween, FlexBox, FlexRowAlign } from "components/flexbox"; // JWT CONTEXT FILE

import { AuthContext } from "contexts/jwtContext";

const LoginView = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const {
    login,
    logout,
    user,
    isAuthenticated
  } = useContext(AuthContext);
  const initialValues = {
    email: "nabed420@gmail.com",
    password: "123456",
    remember: true
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Must be a valid email").max(255).required("Email is required"),
    password: Yup.string().min(6, "Password should be of minimum 6 characters length").required("Password is required")
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
        await login(values.email, values.password);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.log("login error -> ", error);
      }
    }
  });
  const INPUT_PROPS = {
    endAdornment: <FlexRowAlign onClick={() => setShowPassword(!showPassword)} sx={{
      cursor: "pointer"
    }}>
        {showPassword ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
      </FlexRowAlign>
  };

  if (isAuthenticated && user) {
    return <Layout login>
        <Box maxWidth={550} p={4} width="100%">
          <H5 fontSize={{
          sm: 30,
          xs: 25
        }}>Welcome Back</H5>

          <Paragraph mt={1} mb={6} color="text.secondary">
            Hello! Mr. {user.name}
          </Paragraph>

          <LoadingButton fullWidth color="error" loading={isLoading} variant="contained" onClick={logout}>
            Logout
          </LoadingButton>
        </Box>
      </Layout>;
  }

  return <Layout login>
      <Box maxWidth={550} p={4}>
        <H5 fontSize={{
        sm: 30,
        xs: 25
      }}>Sign In</H5>

        <Paragraph mt={1} mb={6} color="text.secondary">
          New user?{" "}
          <Box fontWeight={500} component={Link} href="/jwt/register">
            Create an Account
          </Box>
        </Paragraph>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <H6 fontSize={16} mb={1.5}>
                Login with your email id
              </H6>

              <TextField fullWidth placeholder="Enter your work email" name="email" onBlur={handleBlur} value={values.email} onChange={handleChange} helperText={touched.email && errors.email} error={Boolean(touched.email && errors.email)} />
            </Grid>

            <Grid item xs={12}>
              <TextField fullWidth placeholder="Password" type={showPassword ? "text" : "password"} name="password" onBlur={handleBlur} value={values.password} onChange={handleChange} helperText={touched.password && errors.password} error={Boolean(touched.password && errors.password)} InputProps={INPUT_PROPS} />

              <FlexBetween my={1}>
                <FlexBox alignItems="center" gap={1}>
                  <Checkbox sx={{
                  p: 0
                }} name="remember" value={values.remember} onChange={handleChange} checked={values.remember} />
                  <Paragraph fontWeight={500}>Remember me</Paragraph>
                </FlexBox>

                <Box href="#" fontSize={13} component={Link} sx={{
                color: "error.500",
                fontWeight: 500
              }}>
                  Forget Password?
                </Box>
              </FlexBetween>
            </Grid>

            <Grid item xs={12}>
              <LoadingButton loading={isLoading} type="submit" variant="contained" fullWidth>
                Sign In
              </LoadingButton>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Layout>;
};

export default LoginView;
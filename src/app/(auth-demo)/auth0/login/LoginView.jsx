"use client";

import Link from "next/link";
import { useContext } from "react";
import { Box, Button } from "@mui/material"; // CUSTOM LAYOUT COMPONENT

import Layout from "page-sections/sessions/Layout"; // CUSTOM COMPONENTS

import { H5, Paragraph } from "components/typography"; // AUTH0 CONTEXT FILE

import { AuthContext } from "contexts/auth0Context";

const LoginView = () => {
  const {
    isAuthenticated,
    isInitialized,
    user,
    loginWithPopup,
    logout
  } = useContext(AuthContext);

  const handleSingIn = () => {
    loginWithPopup();
  };

  const handleSingOut = () => {
    logout();
  };

  console.log({
    isAuthenticated,
    isInitialized,
    user
  });
  return <Layout login>
      <Box maxWidth={550} p={4} width="100%">
        {isAuthenticated ? <H5 fontSize={{
        sm: 30,
        xs: 25
      }}>Welcome Back</H5> : <H5 fontSize={{
        sm: 30,
        xs: 25
      }}>Sign In</H5>}

        {isAuthenticated ? <Paragraph mt={1} mb={6} color="text.secondary">
            Hello! {user?.email}
          </Paragraph> : <Paragraph mt={1} mb={6} color="text.secondary">
            New user?{" "}
            <Box fontWeight={500} component={Link} href="/register">
              Create an Account
            </Box>
          </Paragraph>}

        {isAuthenticated ? <Button fullWidth size="large" color="error" onClick={handleSingOut}>
            Sign Out
          </Button> : <Button fullWidth size="large" onClick={handleSingIn}>
            Sign In
          </Button>}
      </Box>
    </Layout>;
};

export default LoginView;
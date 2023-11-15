"use client";

import { Box, Container, useTheme } from "@mui/material"; // CUSTOM COMPONENTS

import Footer from "./Footer";
import Header from "./Header"; // CUSTOM UTILS METHOD

import { isDark } from "utils/constants";

const MainLayout = ({
  children
}) => {
  return <Box bgcolor={isDark(useTheme()) ? "background.default" : "white"}>
      {
      /* HEADER SECTION */
    }
      <Container maxWidth="lg">
        <Header />
      </Container>

      {
      /* MAIN CONTENT RENDER SECTION */
    }
      {children}

      {
      /* FOOTER SECTION */
    }
      <Footer />
    </Box>;
};

export default MainLayout;
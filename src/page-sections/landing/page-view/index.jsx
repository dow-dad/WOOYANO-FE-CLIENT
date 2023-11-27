"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container"; // CUSTOM PAGE SECTIONS COMPONENTS

import Footer from "../Footer";
import Section1 from "../Section1";
import Section2 from "../Section2";
import Section3 from "../Section3";
import Section4 from "../Section4";
import HeaderDark from "../HeaderDark";

const LandingPageView = () => {
  return <Box height="100%" sx={{
    overflowX: "hidden",
    backgroundColor: "background.default"
  }}>
      {
      /* DARK HEADER AREA */
    }
      <Box bgcolor="#1C113D">
        <Container maxWidth="lg">
          <HeaderDark />
        </Container>
      </Box>

      {
      /* ONION HERO AREA */
    }
      <Section1 />

      {
      /* CORE FEATURES AREA */
    }
      <Section2 />

      {
      /* VAST COLLECTION COMPONENTS AREA */
    }
      <Section3 />

      {
      /* APPS & PAGES AREA */
    }
      <Section4 />

      {
      /* FOOTER AREA */
    }
      <Footer />
    </Box>;
};

export default LandingPageView;
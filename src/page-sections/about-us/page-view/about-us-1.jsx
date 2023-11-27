"use client";

import { Fragment } from "react";
import Container from "@mui/material/Container"; // CUSTOM PAGE SECTION COMPONENTS

import Section1 from "../Section1";
import Section2 from "../Section2";
import Section3 from "../Section3";
import Section4 from "../Section4";

const AboutUs1PageView = () => {
  return <Fragment>
      {
      /* HERO SECTION */
    }
      <Section1 />

      <Container maxWidth="lg">
        {
        /* WHO ARE WE SECTION */
      }
        <Section2 />

        {
        /* MEET OUR TEAM SECTION */
      }
        <Section3 />
      </Container>

      {
      /* CUSTOMER SAYS SECTION */
    }
      <Section4 />
    </Fragment>;
};

export default AboutUs1PageView;
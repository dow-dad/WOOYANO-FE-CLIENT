"use client";

import { Fragment } from "react";
import Divider from "@mui/material/Divider"; // CUSTOM PAGE SECTION COMPONENTS

import Section1 from "../Section1";
import Section2 from "../Section2";

const FaqPageView = () => {
  return <Fragment>
      {
      /* WE HELP YOU SECTION */
    }
      <Section1 />

      {
      /* FREQUENTLY QUESTION SECTION */
    }
      <Section2 />

      <Divider />
    </Fragment>;
};

export default FaqPageView;
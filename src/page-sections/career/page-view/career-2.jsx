"use client";

import { Fragment } from "react";
import Divider from "@mui/material/Divider"; // CUSTOM PAGE SECTION COMPONENTS

import Section1 from "../Section1";
import Section2 from "../Section2";

const Career2PageView = () => {
  return <Fragment>
      {
      /* FIND YOUR JOB SECTION */
    }
      <Section1 />

      {
      /* AVAILABLE JOB SECTION */
    }
      <Section2 />

      <Divider />
    </Fragment>;
};

export default Career2PageView;
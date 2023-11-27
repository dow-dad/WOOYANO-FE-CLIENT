"use client";

import { Fragment } from "react"; // CUSTOM PAGE SECTION COMPONENTS

import Section1 from "../Section1";
import Section2 from "../Section2";

const ContactUsPageView = () => {
  return <Fragment>
      {
      /* EXPLORE OUR WORLD SECTION */
    }
      <Section1 />

      {
      /* CONTACT FORM SECTION */
    }
      <Section2 />
    </Fragment>;
};

export default ContactUsPageView;
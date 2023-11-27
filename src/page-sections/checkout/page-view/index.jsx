"use client";

import { Fragment, useState } from "react";
import { Box, Grid, Divider, Container } from "@mui/material"; // CUSTOM COMPONENTS

import Summery from "../Summery";
import CheckoutForm from "../CheckoutForm";
import { H1, Paragraph } from "components/typography";

const CheckoutPageView = () => {
  const [selectedPayment, setSelectedPayment] = useState("card");

  const activeMethod = method => selectedPayment === method;

  const handleSelectedPayment = method => setSelectedPayment(method);

  return <Fragment>
      <Container maxWidth="lg" sx={{
      my: 10
    }}>
        {
        /* PAGE HEADING SECTION */
      }
        <Box textAlign="center" mb={6}>
          <H1 fontSize={{
          sm: 52,
          xs: 42
        }}>Checkout</H1>
          <Paragraph fontSize={18} color="text.primary">
            Complete Your Transaction in Just a Few Clicks.
          </Paragraph>
        </Box>

        <Grid container spacing={3}>
          {
          /* CHECKOUT FORM SECTION */
        }
          <Grid item lg={8} md={7} xs={12}>
            <CheckoutForm activeMethod={activeMethod} handleSelectedPayment={handleSelectedPayment} />
          </Grid>

          {
          /* CHECKOUT SUMMERY SECTION */
        }
          <Grid item lg={4} md={5} xs={12}>
            <Summery />
          </Grid>
        </Grid>
      </Container>

      <Divider />
    </Fragment>;
};

export default CheckoutPageView;
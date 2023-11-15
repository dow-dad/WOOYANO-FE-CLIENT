"use client";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack"; // CUSTOM PAGE SECTION COMPONENTS

import Audits from "../Audits";
import Reports from "../Reports";
import Balance from "../Balance";
import Footer from "../../_common/Footer";
import DebitCard from "../DebitCard";
import MySavings from "../MySavings";
import Investment from "../Investment";
import Installment from "../Installment";
import TopActivity from "../TopActivity";
import Transactions from "../Transactions";
import QuickTransfer from "../QuickTransfer";
import CurrentCurrency from "../CurrentCurrency";
import CustomerTransaction from "../CustomerTransaction";

const Finance1PageView = () => {
  return <Box pt={2} pb={4}>
      <Grid container spacing={3}>
        {
        /* MY BALANCE CARD */
      }
        <Grid item md={6} xs={12}>
          <Balance />
        </Grid>

        {
        /* CURRENT CURRENCY CHART CARD */
      }
        <Grid item md={6} xs={12}>
          <CurrentCurrency />
        </Grid>

        {
        /* TRANSACTION CHART CARD */
      }
        <Grid item md={8} xs={12}>
          <Transactions />
        </Grid>

        {
        /* YOUR CARD  */
      }
        <Grid item md={4} xs={12}>
          <DebitCard />
        </Grid>

        {
        /* QUICK TRANSFER AND INSTALLMENT CARD */
      }
        <Grid item md={4} xs={12}>
          <Stack spacing={3}>
            <QuickTransfer />
            <Installment />
          </Stack>
        </Grid>

        {
        /* CUSTOMER TRANSACTION TABLE */
      }
        <Grid item md={8} xs={12}>
          <CustomerTransaction />
        </Grid>

        {
        /* INVESMENT CHART CARD */
      }
        <Grid item md={8} xs={12}>
          <Investment />
        </Grid>

        {
        /* TOP ACTIVITY CARD */
      }
        <Grid item md={4} xs={12}>
          <TopActivity />
        </Grid>

        {
        /* MY SAVINGS CARD */
      }
        <Grid item md={4} xs={12}>
          <MySavings />
        </Grid>

        {
        /* AUDITS CARD */
      }
        <Grid item md={4} xs={12}>
          <Audits />
        </Grid>

        {
        /* REPORTS CARD */
      }
        <Grid item md={4} xs={12}>
          <Reports />
        </Grid>

        {
        /* FOOTER CARD */
      }
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </Box>;
};

export default Finance1PageView;
"use client";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack"; // CUSTOM PAGE SECTION COMPONENTS

import Footer from "../../_common/Footer";
import TopQueries from "../TopQueries";
import TopReferral from "../TopReferral";
import ChartFilters from "../ChartFilters";
import CompleteGoal from "../CompleteGoal";
import CompleteRate from "../CompleteRate";
import TopPerforming from "../TopPerforming";
import SessionBrowser from "../SessionBrowser";
import SalesByCountry from "../SalesByCountry";
import AveragePosition from "../AveragePosition";

const Analytics2PageView = () => {
  return <Box pt={2} pb={4}>
      <Grid container spacing={3}>
        {
        /* AVERAGE POSITION CHART CARD */
      }
        <Grid item md={4} xs={12}>
          <AveragePosition />
        </Grid>

        {
        /* DIFFERENT DATA SHOW WITH CHART */
      }
        <Grid item md={8} xs={12}>
          <ChartFilters type="line" />
        </Grid>

        {
        /* VISIT BY TOP REFERRAL SOURCE CHART CARD */
      }
        <Grid item md={8} xs={12}>
          <TopReferral />
        </Grid>

        {
        /* SESSION BY BROWSER CHART CARD */
      }
        <Grid item md={4} xs={12}>
          <SessionBrowser />
        </Grid>

        {
        /* COMPLETE GOAL AND RATES CARDS */
      }
        <Grid item lg={3} xs={12}>
          <Stack spacing={3} sx={{
          "& > div": {
            flex: 1
          }
        }} direction={{
          lg: "column",
          sm: "row",
          xs: "column"
        }}>
            <CompleteGoal chart="area" />
            <CompleteRate />
          </Stack>
        </Grid>

        {
        /* SALES BY COUNTRY CHART CARD */
      }
        <Grid item lg={9} xs={12}>
          <SalesByCountry chartHorizontal />
        </Grid>

        {
        /* TOP PERFORMING PAGE TABLE CARD */
      }
        <Grid item md={6} xs={12}>
          <TopPerforming />
        </Grid>

        {
        /* TOP QUERIES TABLE CARD */
      }
        <Grid item md={6} xs={12}>
          <TopQueries />
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

export default Analytics2PageView;
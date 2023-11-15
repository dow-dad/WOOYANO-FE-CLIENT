"use client";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid"; // CUSTOM PAGE SECTION COMPONENTS

import Order from "../Order";
import Sales from "../Sales";
import Footer from "../../_common/Footer";
import Earnings from "../Earnings";
import TopSeller from "../TopSeller";
import DailySales from "../DailySales";
import ReturnRate from "../ReturnRate";
import TopProducts from "../TopProducts";
import RecentOrders from "../RecentOrders";
import DailyVisitors from "../DailyVisitors";
import CustomerReview from "../CustomerReview";

const EcommercePageView = () => {
  return <Box pt={2} pb={4}>
      <Grid container spacing={3}>
        {
        /* DAILY VISITORS CARD */
      }
        <Grid item lg={3} sm={6} xs={12}>
          <DailyVisitors />
        </Grid>

        {
        /* AVERAGE DAILY SALES CARD */
      }
        <Grid item lg={3} sm={6} xs={12}>
          <DailySales />
        </Grid>

        {
        /* ORDER THIS MONTH CARD */
      }
        <Grid item lg={3} sm={6} xs={12}>
          <Order />
        </Grid>

        {
        /* MONTHLY EARNINGS CARD */
      }
        <Grid item lg={3} sm={6} xs={12}>
          <Earnings />
        </Grid>

        {
        /* SALES CARD */
      }
        <Grid item md={8} xs={12}>
          <Sales />
        </Grid>

        {
        /* TOTAL CUSTOMER REVIEW CARD */
      }
        <Grid item md={4} xs={12}>
          <CustomerReview />
        </Grid>

        {
        /* RECENT ORDERS CARD */
      }
        <Grid item md={8} xs={12}>
          <RecentOrders />
        </Grid>

        {
        /* TOP SELLER CARD */
      }
        <Grid item md={4} xs={12}>
          <TopSeller />
        </Grid>

        {
        /* RETURNING RATE CARD */
      }
        <Grid item md={4} xs={12}>
          <ReturnRate />
        </Grid>

        {
        /* TOP PRODUCTS CARD */
      }
        <Grid item md={8} xs={12}>
          <TopProducts />
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

export default EcommercePageView;
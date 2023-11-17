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

        
        
      </Grid>
    </Box>;
};

export default EcommercePageView;
"use client";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack"; // CUSTOM PAGE SECTION COMPONENTS

import Footer from "../../_common/Footer";
import Shipments from "../Shipments";
import QuickGuide from "../QuickGuide";
import ShippingOrders from "../ShippingOrders";
import RoleManagement from "../RoleManagement";
import CompanyProgress from "../CompanyProgress";
import VisitsByCountry from "../VisitsByCountry";
import ShipmentHistory from "../ShipmentHistory";
import OurTransportation from "../OurTransportation";
import TopSellingCategories from "../TopSellingCategories";

const LogisticsPageView = () => {
  return <Box pt={2} pb={4}>
      <Grid container spacing={3}>
        {
        /* LAST MONTH SHIPMENT CARD */
      }
        <Grid item lg={5} md={12} xs={12}>
          <Shipments />
        </Grid>

        {
        /* SHIPPING ORDERS CHART AND QUICK GUIDE CARD */
      }
        <Grid item lg={7} md={12} xs={12}>
          <Stack spacing={3}>
            <ShippingOrders />
            <QuickGuide />
          </Stack>
        </Grid>

        {
        /* COMPANY PROGRESS CARD */
      }
        <Grid item md={8} xs={12}>
          <CompanyProgress />
        </Grid>

        {
        /* ROLE MANAGEMENT CARD  */
      }
        <Grid item md={4} xs={12}>
          <RoleManagement />
        </Grid>

        {
        /* OUR TRANSPORTATION CARD */
      }
        <Grid item md={4} xs={12}>
          <OurTransportation />
        </Grid>

        {
        /* TOP SELLING CATEGORIES CARD */
      }
        <Grid item md={8} xs={12}>
          <TopSellingCategories />
        </Grid>

        {
        /* VISITS BY COUNTRY CARD */
      }
        <Grid item md={4} xs={12}>
          <VisitsByCountry />
        </Grid>

        {
        /* SHIPMENT HISTORY CARD */
      }
        <Grid item md={8} xs={12}>
          <ShipmentHistory />
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

export default LogisticsPageView;
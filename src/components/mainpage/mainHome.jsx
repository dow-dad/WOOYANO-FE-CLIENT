'use client'
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid"; // CUSTOM PAGE SECTION COMPONENTS
import Sales from "page-sections/dashboards/ecommerce/Sales";
import TopSeller from "page-sections/dashboards/ecommerce/TopSeller";
import RecentOrders from "page-sections/dashboards/ecommerce/RecentOrders";
import CustomerReview from "page-sections/dashboards/ecommerce/CustomerReview";

const MainHome = () => {
  
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

export default MainHome;
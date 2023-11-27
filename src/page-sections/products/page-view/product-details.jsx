"use client";

import { useState } from "react";
import { Box, Card, Grid, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab"; // CUSTOM PAGE SECTION COMPONENTS

import ProductView from "../ProductView";
import { ProductReviews } from "../product-review";
import ProductDescription from "../ProductDescription";

const ProductDetailsPageView = () => {
  const [tab, setTab] = useState("1");

  const tabChange = (_, value) => setTab(value);

  return <Box pt={2} pb={4}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <ProductView />
        </Grid>

        <Grid item xs={12}>
          <Card>
            <TabContext value={tab}>
              <TabList onChange={tabChange} sx={{
              pl: 3,
              minHeight: 50,
              pt: 0.5
            }}>
                <Tab disableRipple label="Description" value="1" />
                <Tab disableRipple label="Reviews" value="2" />
              </TabList>

              <TabPanel value="1">
                <ProductDescription />
              </TabPanel>

              <TabPanel value="2">
                <ProductReviews />
              </TabPanel>
            </TabContext>
          </Card>
        </Grid>
      </Grid>
    </Box>;
};

export default ProductDetailsPageView;
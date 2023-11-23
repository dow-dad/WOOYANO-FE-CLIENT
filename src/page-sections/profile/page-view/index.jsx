"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import { TabContext, TabPanel } from "@mui/lab"; // CUSTOM PAGE SECTION COMPONENTS

import { Layout } from "../layout";
import StoreInfo from "../storeinfo";
import Review from "../review";
import StoreTime from "../storetime";


const ProfilePageView = () => {
  const [tabValue, setTabValue] = useState("1");

  const handleTabChange = (_, value) => setTabValue(value);

  return <Box pt={2} pb={4}>
      <TabContext value={tabValue}>
        <Layout handleTabList={handleTabChange}>
          <TabPanel value="1">
            <StoreInfo />
          </TabPanel>
          <TabPanel value="2">
            <Review />
          </TabPanel>
          <TabPanel value="3">
            <StoreTime />
          </TabPanel>
          
        </Layout>
      </TabContext>
    </Box>;
};

export default ProfilePageView;
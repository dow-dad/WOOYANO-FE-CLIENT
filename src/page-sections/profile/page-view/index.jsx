"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import { TabContext, TabPanel } from "@mui/lab"; // CUSTOM PAGE SECTION COMPONENTS

import { Layout } from "../layout";
import Overview from "../overview";
import Projects from "../projects";
import Activity from "../activity";
import Campaigns from "../campaigns";
import Documents from "../documents";
import Connections from "../connections";

const ProfilePageView = () => {
  const [tabValue, setTabValue] = useState("1");

  const handleTabChange = (_, value) => setTabValue(value);

  return <Box pt={2} pb={4}>
      <TabContext value={tabValue}>
        <Layout handleTabList={handleTabChange}>
          <TabPanel value="1">
            <Overview />
          </TabPanel>

          <TabPanel value="2">
            <Projects />
          </TabPanel>

          <TabPanel value="3">
            <Campaigns />
          </TabPanel>

          <TabPanel value="4">
            <Documents />
          </TabPanel>

          <TabPanel value="5">
            <Connections />
          </TabPanel>

          <TabPanel value="6">
            <Activity />
          </TabPanel>
        </Layout>
      </TabContext>
    </Box>;
};

export default ProfilePageView;
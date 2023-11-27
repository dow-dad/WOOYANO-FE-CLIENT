import { useState } from "react";
import { Favorite, PersonPin, Phone, PhoneMissed } from "@mui/icons-material";
import { Box, Grid, Tab, Tabs } from "@mui/material"; // CUSTOM COMPONENTS

import ComponentPageLayout from "../../ComponentPageLayout";
import { Paragraph } from "components/typography";
import { Block } from "components/block"; // CUSTOM UTILS METHOD

import { isDark } from "utils/constants";

function TabPanel({
  children,
  value,
  index,
  ...props
}) {
  return <Box mt={2} role="tabpanel" hidden={value !== index} {...props}>
      {value === index && <Box p={3} boxShadow={1} borderRadius={2} bgcolor={theme => isDark(theme) ? "grey.700" : "white"}>
          <Paragraph>{children}</Paragraph>
        </Box>}
    </Box>;
}

const MuiTabsPageView = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_, newValue) => setValue(newValue);

  return <ComponentPageLayout title="Tabs">
      <Grid container spacing={3}>
        <Grid item lg={6} xs={12}>
          <Block title="Basic">
            <Tabs value={value} onChange={handleChange}>
              <Tab label="Item One" />
              <Tab label="Item Two" />
              <Tab label="Item Three" />
            </Tabs>

            <TabPanel value={value} index={0}>
              Item One
            </TabPanel>

            <TabPanel value={value} index={1}>
              Item Two
            </TabPanel>

            <TabPanel value={value} index={2}>
              Item Three
            </TabPanel>
          </Block>
        </Grid>

        <Grid item lg={6} xs={12}>
          <Block title="Secondary Color">
            <Tabs value={value} onChange={handleChange} textColor="secondary" indicatorColor="secondary">
              <Tab label="Item One" />
              <Tab label="Item Two" />
              <Tab label="Item Three" />
            </Tabs>

            <TabPanel value={value} index={0}>
              Item One
            </TabPanel>

            <TabPanel value={value} index={1}>
              Item Two
            </TabPanel>

            <TabPanel value={value} index={2}>
              Item Three
            </TabPanel>
          </Block>
        </Grid>

        <Grid item lg={6} xs={12}>
          <Block title="Scrollable">
            <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="auto">
              <Tab label="Item One" />
              <Tab label="Item Two" />
              <Tab label="Item Three" />
              <Tab label="Item Four" />
              <Tab label="Item Five" />
              <Tab label="Item Six" />
              <Tab label="Item Seven" />
            </Tabs>
          </Block>
        </Grid>

        <Grid item lg={6} xs={12}>
          <Block title="Icon">
            <Tabs value={value} onChange={handleChange}>
              <Tab icon={<Phone />} aria-label="phone" />
              <Tab icon={<Favorite />} aria-label="favorite" />
              <Tab icon={<PersonPin />} aria-label="person" />
            </Tabs>
          </Block>
        </Grid>

        <Grid item lg={6} xs={12}>
          <Block title="Icon With Label">
            <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example">
              <Tab icon={<Phone />} label="RECENT" />
              <Tab icon={<Favorite />} label="FAVORITES" />
              <Tab icon={<PersonPin />} label="NEARBY" />
            </Tabs>
          </Block>
        </Grid>

        <Grid item lg={6} xs={12}>
          <Block title="Icon position">
            <Tabs value={value} onChange={handleChange} aria-label="icon position tabs example">
              <Tab icon={<Phone />} label="TOP" />
              <Tab icon={<PhoneMissed />} iconPosition="start" label="START" />
              <Tab icon={<Favorite />} iconPosition="end" label="END" />
              <Tab icon={<PersonPin />} iconPosition="bottom" label="BOTTOM" />
            </Tabs>
          </Block>
        </Grid>
      </Grid>
    </ComponentPageLayout>;
};

export default MuiTabsPageView;
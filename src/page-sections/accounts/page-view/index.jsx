"use client";

import { Fragment, useState } from "react";
import { Box, Card, Grid, styled, Drawer, Button, useTheme, IconButton, useMediaQuery } from "@mui/material"; // CUSTOM COMPONENTS

import { H5 } from "components/typography";
import { FlexBox } from "components/flexbox"; // CUSTOM PAGE SECTION COMPONENTS

import TabComponent from "page-sections/accounts"; // CUSTOM ICON COMPONENTS

import Apps from "icons/Apps";
import Icons from "icons/account"; // STYLED COMPONENTS

const StyledButton = styled(Button)(({
  theme
}) => ({
  borderRadius: 0,
  fontWeight: 500,
  position: "relative",
  padding: "0.6rem 1.5rem",
  justifyContent: "flex-start",
  color: theme.palette.grey[500]
}));

const AccountsPageView = () => {
  const theme = useTheme();
  const [openDrawer, setOpenDrawer] = useState(false);
  const [active, setActive] = useState(tabList[0]);
  const downMd = useMediaQuery(theme => theme.breakpoints.down("md")); // COMMON TAB LIST ITEM STYLE

  const STYLE = {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.action.selected,
    "&:hover": {
      backgroundColor: theme.palette.action.hover
    },
    "&::before": {
      left: 0,
      width: 4,
      content: '""',
      height: "100%",
      borderRadius: 4,
      position: "absolute",
      transition: "all 0.3s",
      backgroundColor: theme.palette.primary.main
    }
  }; // HANDLE LIST ITEM ON CLICK

  const handleListItemBtn = tab => () => {
    setActive(tab);
    setOpenDrawer(false);
  }; // SIDEBAR LIST CONTENT


  const TabListContent = <FlexBox flexDirection="column">
      {tabList.map(tab => <StyledButton key={tab.id} variant="text" startIcon={<tab.Icon />} onClick={handleListItemBtn(tab)} sx={active.name === tab.name ? STYLE : {
      "&:hover": STYLE
    }}>
          {tab.name}
        </StyledButton>)}
    </FlexBox>;
  return <Box pt={2} pb={4}>
      <Grid container spacing={3}>
        {
        /* SIDEBAR AREA */
      }
        <Grid item md={3} xs={12}>
          {downMd ? <Fragment>
              <FlexBox alignItems="center" gap={1} onClick={() => setOpenDrawer(true)}>
                <IconButton sx={{
              padding: 0
            }}>
                  <Apps sx={{
                color: "text.primary"
              }} />
                </IconButton>

                <H5 fontSize={16}>More</H5>
              </FlexBox>

              <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
                <Box padding={1}>{TabListContent}</Box>
              </Drawer>
            </Fragment> : <Card sx={{
          p: "1rem 0"
        }}>{TabListContent}</Card>}
        </Grid>

        {
        /* CONTENT AREA */
      }
        <Grid item md={9} xs={12}>
          <active.Component />
        </Grid>
      </Grid>
    </Box>;
};

const tabList = [{
  id: 1,
  name: "Basic Information",
  Icon: Icons.UserOutlined,
  Component: TabComponent.BasicInformation
}, {
  id: 2,
  name: "Password",
  Icon: Icons.LockOutlined,
  Component: TabComponent.Password
}, {
  id: 3,
  name: "Preferences",
  Icon: Icons.SettingsOutlined,
  Component: TabComponent.Preferences
}, {
  id: 4,
  name: "Recent Devices",
  Icon: Icons.DevicesApple,
  Component: TabComponent.RecentDevices
}, {
  id: 5,
  name: "Notifications",
  Icon: Icons.NotificationOutlined,
  Component: TabComponent.Notifications
}, {
  id: 6,
  name: "Two-step verification",
  Icon: Icons.Fingerprint,
  Component: TabComponent.TwoStepVerification
}, {
  id: 7,
  name: "Connected accounts",
  Icon: Icons.Link,
  Component: TabComponent.ConnectedAccounts
}, {
  id: 8,
  name: "Social Account",
  Icon: Icons.Instagram,
  Component: TabComponent.SocialAccounts
}, {
  id: 9,
  name: "Billing",
  Icon: Icons.DollarOutlined,
  Component: TabComponent.Billing
}, {
  id: 10,
  name: "Statements",
  Icon: Icons.FileOutlined,
  Component: TabComponent.Statements
}, {
  id: 11,
  name: "Referrals",
  Icon: Icons.PremiumOutlined,
  Component: TabComponent.Referrals
}, {
  id: 12,
  name: "API Keys",
  Icon: Icons.Key,
  Component: TabComponent.ApiKeys
}, {
  id: 13,
  name: "Delete account",
  Icon: Icons.DeleteOutlined,
  Component: TabComponent.DeleteAccount
}];
export default AccountsPageView;
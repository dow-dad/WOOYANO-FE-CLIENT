import { Grid, Box, useTheme } from "@mui/material"; // CUSTOM ICON COMPONENT

import CampaignCard from "./CampaignCard"; // CUSTOM ICON COMPONENTS

import Reddit from "icons/Reddit";
import Twitch from "icons/Twitch";
import Twitter from "icons/Twitter";
import Youtube from "icons/Youtube";
import PinterestCircle from "icons/PinterestCircle";

const Campaigns = () => {
  const theme = useTheme(); // CUSTOM DUMMY DATA

  const CAMPAIGN_LIST = [{
    id: 1,
    icon: Twitch,
    amount: 5000,
    impression: -40.5,
    progressValue: 40,
    title: "Twitch Post",
    color: theme.palette.primary.main
  }, {
    id: 2,
    amount: 2350,
    impression: 26.5,
    progressValue: 40,
    icon: PinterestCircle,
    title: "Pinterest Posts",
    color: theme.palette.success.main
  }, {
    id: 3,
    icon: Twitter,
    amount: 1356,
    impression: 26.5,
    progressValue: 40,
    title: "Twitter Followers",
    color: theme.palette.primary.main
  }, {
    id: 4,
    icon: Reddit,
    amount: 4000,
    impression: -40.5,
    progressValue: 40,
    title: "Reddit Awards",
    color: theme.palette.error.main
  }, {
    id: 5,
    icon: Youtube,
    amount: 968,
    impression: -40.5,
    progressValue: 40,
    title: "Youtube Subscribers",
    color: theme.palette.grey[500]
  }, {
    id: 6,
    icon: Twitch,
    amount: 3650,
    impression: -40.5,
    progressValue: 40,
    title: "Twitch Post",
    color: theme.palette.primary[700]
  }, {
    id: 7,
    icon: Twitter,
    amount: 680,
    impression: 26.5,
    progressValue: 40,
    title: "Twitter Followers",
    color: theme.palette.primary[500]
  }, {
    id: 8,
    icon: Reddit,
    amount: 1340,
    impression: -40.5,
    progressValue: 40,
    title: "Reddit Awards",
    color: theme.palette.success.main
  }, {
    id: 9,
    amount: 4120,
    impression: 26.5,
    progressValue: 40,
    icon: PinterestCircle,
    title: "Pinterest Posts",
    color: theme.palette.error.main
  }];
  return <Box py={3}>
      <Grid container spacing={3}>
        {CAMPAIGN_LIST.map(item => <Grid item md={4} sm={6} xs={12} key={item.id}>
            <CampaignCard Icon={item.icon} title={item.title} color={item.color} amount={item.amount} impression={item.impression} progressValue={item.progressValue} />
          </Grid>)}
      </Grid>
    </Box>;
};

export default Campaigns;
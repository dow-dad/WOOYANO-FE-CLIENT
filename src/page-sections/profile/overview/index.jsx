import { Grid, Stack, Box } from "@mui/material"; // CUSTOM COMPONENTS

import Post from "./Post";
import Teams from "./Teams";
import Skills from "./Skills";
import Hobbies from "./Hobbies";
import Summery from "./Summery";
import Portfolio from "./Portfolio";
import MyConnections from "./MyConnections";
import AdditionalDetails from "./AdditionalDetails";

const Overview = () => {
  return <Box mt={3}>
      <Grid container spacing={3}>
        <Grid item lg={9} md={8} xs={12}>
          <Stack spacing={3}>
            <Summery />
            <Skills />
            <Teams />
            <Hobbies />
            <Post />
            <Portfolio />
          </Stack>
        </Grid>

        <Grid item lg={3} md={4} xs={12}>
          <Stack spacing={3}>
            <MyConnections />
            <AdditionalDetails />
          </Stack>
        </Grid>
      </Grid>
    </Box>;
};

export default Overview;
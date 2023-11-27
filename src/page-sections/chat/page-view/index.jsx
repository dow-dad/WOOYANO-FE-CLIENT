"use client";

import { useState } from "react";
import { Box, Card, Grid, Drawer, styled, Divider, IconButton, useMediaQuery } from "@mui/material";
import Add from "@mui/icons-material/Add"; // CUSTOM COMPONENTS

import PinChats from "../PinChats";
import AllMessages from "../AllMessages";
import Conversation from "../Conversation";
import { H6 } from "components/typography";
import { FlexBetween } from "components/flexbox";
import { SearchInput } from "components/search-input"; // CUSTOM UTIL METHOD

import { isDark } from "utils/constants"; // STYLED COMPONENTS

const StyledSearchInput = styled(SearchInput)(({
  theme
}) => ({
  backgroundColor: theme.palette.action.selected,
  border: `1px solid ${theme.palette.grey[isDark(theme) ? 600 : 200]}`
}));
const StyledIconButton = styled(IconButton)(({
  theme
}) => ({
  backgroundColor: theme.palette.action.selected,
  border: `1px solid ${theme.palette.divider}`
}));

const ChatPageView = () => {
  const [openLeftDrawer, setOpenLeftDrawer] = useState(false);
  const downMd = useMediaQuery(theme => theme.breakpoints.down("md"));

  const handleOpen = () => setOpenLeftDrawer(true); // RECENT CONVERSATION LIST


  const MESSAGE_CONTENT = <Card sx={{
    height: "100%",
    pb: 1
  }}>
      <Box p={3}>
        <FlexBetween mb={3}>
          <H6 fontSize={18}>Messages</H6>

          <StyledIconButton size="small">
            <Add />
          </StyledIconButton>
        </FlexBetween>

        <StyledSearchInput placeholder="Search..." />
      </Box>

      {
      /* PINNED ITEMS */
    }
      <PinChats />

      <Divider />

      {
      /* ALL MESSAGES */
    }
      <AllMessages />
    </Card>;
  return <Box pt={2} pb={4}>
      <Grid container spacing={3}>
        {downMd ? <Drawer anchor="left" open={openLeftDrawer} onClose={() => setOpenLeftDrawer(false)}>
            <Box width={300} padding={1}>
              {MESSAGE_CONTENT}
            </Box>
          </Drawer> : <Grid item xl={4} md={4}>
            {MESSAGE_CONTENT}
          </Grid>}

        <Grid item xl={8} md={8} xs={12}>
          <Conversation handleOpen={handleOpen} />
        </Grid>
      </Grid>
    </Box>;
};

export default ChatPageView;
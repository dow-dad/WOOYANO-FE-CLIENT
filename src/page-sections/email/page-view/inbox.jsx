"use client";

import { Box, Avatar, styled, Checkbox, IconButton, useMediaQuery } from "@mui/material";
import StarBorder from "@mui/icons-material/StarBorder"; // CUSTOM COMPONENTS

import { Paragraph, Small } from "components/typography";
import { FlexBetween, FlexBox } from "components/flexbox"; // CUSTOM DEFINED HOOK

import useNavigate from "hooks/useNavigate"; // CUSTOM ICON COMPONENTS

import Trash from "icons/duotone/Trash";
import Archive from "icons/duotone/Archive";
import UnreadMail from "icons/duotone/UnreadMail"; // CUSTOM UTILS METHOD

import { isDark } from "utils/constants"; // STYLED COMPONENTS

const MailActionWrapper = styled(Box)(({
  theme
}) => ({
  right: 24,
  top: "50%",
  zIndex: 11,
  display: "none",
  position: "absolute",
  transform: "translateY(-50%)",
  backgroundColor: theme.palette.grey[isDark(theme) ? 900 : 100]
}));
const MailItem = styled(FlexBetween)(({
  theme
}) => ({
  cursor: "pointer",
  position: "relative",
  borderBottom: `1px solid ${theme.palette.divider}`,
  ":hover": {
    backgroundColor: theme.palette.grey[isDark(theme) ? 900 : 100],
    "& .actions": {
      display: "block"
    }
  }
}));

const MailInboxPageView = () => {
  const navigate = useNavigate();
  const upSm = useMediaQuery(theme => theme.breakpoints.up("sm"));
  return Array.from({
    length: 5
  }).map((_, i) => <MailItem p={3} gap={3} key={i} flexWrap="wrap" onClick={() => navigate("/dashboard/email/details")}>
      <FlexBox alignItems="center" gap={2}>
        {upSm && <Checkbox size="small" sx={{
        p: 0
      }} />}

        {upSm && <IconButton size="small" sx={{
        p: 0
      }}>
            <StarBorder />
          </IconButton>}

        <Avatar src="/static/user/user-11.png" sx={{
        width: 25,
        height: 25
      }} />

        {upSm && <Paragraph fontWeight={600}>Penni Nojel</Paragraph>}
      </FlexBox>

      <Paragraph flex={1} color="text.secondary" ellipsis={upSm}>
        How to Choose the Perfect Shopify Theme and Build Your Online Store Fast!
      </Paragraph>

      <Small className="time" color="text.secondary">
        1:45 PM
      </Small>

      <MailActionWrapper className="actions">
        <IconButton color="secondary">
          <Archive fontSize="small" />
        </IconButton>

        <IconButton color="secondary">
          <Trash fontSize="small" />
        </IconButton>

        <IconButton color="secondary">
          <UnreadMail fontSize="small" />
        </IconButton>
      </MailActionWrapper>
    </MailItem>);
};

export default MailInboxPageView;
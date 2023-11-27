import { Avatar, AvatarGroup, Button, Chip, Stack, styled } from "@mui/material";
import { TimelineDot, TimelineItem, TimelineContent, TimelineSeparator, TimelineConnector } from "@mui/lab"; // CUSTOM COMPONENTS

import FlexBetween from "components/flexbox/FlexBetween";
import { Paragraph, Small } from "components/typography"; // CUSTOM ICON COMPONENT

import Chat from "icons/Chat"; // STYLED COMPONENTS

const StyledAvatarGroup = styled(AvatarGroup)(({
  theme
}) => ({
  justifyContent: "flex-end",
  "& .MuiAvatarGroup-avatar": {
    width: 25,
    height: 25,
    fontSize: 12,
    color: theme.palette.primary.main,
    borderColor: theme.palette.common.white,
    backgroundColor: theme.palette.primary[100]
  }
}));
const StyledFlexBetween = styled(FlexBetween)(({
  theme
}) => ({
  padding: 16,
  marginTop: 16,
  borderRadius: 16,
  border: `1px solid ${theme.palette.divider}`
}));

const ChatItem = () => {
  return <TimelineItem sx={{
    "&::before": {
      display: "none"
    }
  }}>
      <TimelineSeparator>
        <TimelineDot>
          <Chat sx={{
          fontSize: 16
        }} />
        </TimelineDot>

        <TimelineConnector />
      </TimelineSeparator>

      <TimelineContent sx={{
      pb: 3
    }}>
        <Paragraph fontWeight={600} mb={0.5}>
          There are 2 new tasks for you in Alphp Plus project:
        </Paragraph>

        <Stack direction="row" alignItems="center" spacing={1}>
          <Small color="text.secondary">Added at 4.23 PM by</Small>
          <Avatar src="/static/user/user-11.png" sx={{
          width: 17,
          height: 17
        }} />
        </Stack>

        <ListItem title="Meeting with customer" status="In Progress" />
        <ListItem title="Project Delivery" status="Complete" />
      </TimelineContent>
    </TimelineItem>;
};

export default ChatItem; // ======================================================================

// ======================================================================
function ListItem({
  title,
  status
}) {
  return <StyledFlexBetween>
      <Paragraph>{title}</Paragraph>

      <Stack direction="row" alignItems="center" spacing={2}>
        <Chip label="Application" color="secondary" sx={{
        borderRadius: 4
      }} />

        <StyledAvatarGroup max={4}>
          <Avatar src="/static/user/user-11.png" />
          <Avatar src="/static/user/user-10.png" />
          <Avatar src="/static/user/user-9.png" />
          <Avatar src="/static/user/user-8.png" />
          <Avatar src="/static/user/user-7.png" />
        </StyledAvatarGroup>
      </Stack>

      <Stack direction="row" alignItems="center" spacing={1}>
        <Button size="small" color={status === "Complete" ? "success" : "primary"} sx={{
        py: 0.3
      }}>
          {status}
        </Button>

        <Button size="small" variant="outlined" color="secondary" sx={{
        py: 0.3
      }}>
          View
        </Button>
      </Stack>
    </StyledFlexBetween>;
}
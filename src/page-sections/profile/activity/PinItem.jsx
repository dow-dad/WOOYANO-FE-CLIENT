import { TimelineDot, TimelineItem, TimelineContent, TimelineSeparator, TimelineConnector } from "@mui/lab";
import { Avatar, Stack } from "@mui/material";
import { Paragraph, Small } from "components/typography";
import Pin from "icons/Pin";

const PinItem = () => {
  return <TimelineItem sx={{
    "&::before": {
      display: "none"
    }
  }}>
      <TimelineSeparator>
        <TimelineDot>
          <Pin sx={{
          fontSize: 16
        }} />
        </TimelineDot>

        <TimelineConnector />
      </TimelineSeparator>

      <TimelineContent sx={{
      pb: 3
    }}>
        <Paragraph fontWeight={600}>
          Invitation for crafting engaging designs that speak human workshop
        </Paragraph>

        <Stack mt={0.5} direction="row" alignItems="center" spacing={1}>
          <Small color="text.secondary">Added at 4.23 PM by</Small>
          <Avatar src="/static/user/user-11.png" sx={{
          width: 17,
          height: 17
        }} />
        </Stack>
      </TimelineContent>
    </TimelineItem>;
};

export default PinItem;
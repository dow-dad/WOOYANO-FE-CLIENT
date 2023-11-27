import { Stack, Box, Avatar } from "@mui/material";
import { TimelineDot, TimelineItem, TimelineContent, TimelineSeparator, TimelineConnector } from "@mui/lab"; // CUSTOM COMPONENT

import { H6, Small } from "components/typography"; // CUSTOM ICON COMPONENT

import Edit from "icons/Edit";

const EditItem = () => {
  return <TimelineItem sx={{
    "&::before": {
      display: "none"
    }
  }}>
      <TimelineSeparator>
        <TimelineDot>
          <Edit sx={{
          fontSize: 16
        }} />
        </TimelineDot>

        <TimelineConnector />
      </TimelineSeparator>

      <TimelineContent>
        <H6 fontSize={14} mb={0.5}>
          3 new application design concepts added:
        </H6>

        <Stack direction="row" alignItems="center" spacing={1}>
          <Small color="text.secondary">Created at 4.30 by</Small>
          <Avatar src="/static/user/user-10.png" sx={{
          width: 17,
          height: 17
        }} />
        </Stack>

        <Stack spacing={2} direction="row" sx={{
        padding: 2,
        marginTop: 2,
        borderRadius: 4,
        border: "1px solid",
        borderColor: "divider"
      }}>
          <Box sx={{
          width: 235
        }}>
            <img src="/static/post/1.png" width="100%" alt="Post" />
          </Box>

          <Box sx={{
          width: 235
        }}>
            <img src="/static/post/2.png" width="100%" alt="Post" />
          </Box>

          <Box sx={{
          width: 235
        }}>
            <img src="/static/post/3.png" width="100%" alt="Post" />
          </Box>
        </Stack>
      </TimelineContent>
    </TimelineItem>;
};

export default EditItem;
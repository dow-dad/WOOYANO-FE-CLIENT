import Timeline from "@mui/lab/Timeline";
import { Card, Divider, Box, Select, MenuItem } from "@mui/material"; // CUSTOM COMPONENTS

import { H6, Span } from "components/typography";
import { Scrollbar } from "components/scrollbar";
import FlexBetween from "components/flexbox/FlexBetween"; // CUSTOM SECTION COMPONENTS

import PinItem from "./PinItem";
import ChatItem from "./ChatItem";
import EditItem from "./EditItem";
import FileItem from "./FileItem";
import LayerItem from "./LayerItem";

const Activity = () => {
  return <Box py={3}>
      <Scrollbar autoHide={false}>
        <Box component={Card} minWidth={900}>
          <FlexBetween flexWrap="wrap" p={3}>
            <H6 fontSize={16}>
              My Connections{" "}
              <Span fontSize={14} fontWeight={400} color="text.secondary">
                (100+ Resources)
              </Span>
            </H6>

            <Select defaultValue="today" size="small">
              <MenuItem value="today">Today</MenuItem>
              <MenuItem value="month">Month</MenuItem>
              <MenuItem value="year">Year</MenuItem>
            </Select>
          </FlexBetween>

          <Divider />

          <Box my={2}>
            <Timeline>
              <ChatItem />
              <PinItem />
              <FileItem />
              <LayerItem />
              <EditItem />
            </Timeline>
          </Box>
        </Box>
      </Scrollbar>
    </Box>;
};

export default Activity;
import { Avatar, Card, Table, TableHead, TableRow, TableBody, Chip } from "@mui/material";
import { nanoid } from "nanoid"; // CUSTOM COMPONENTS

import { Scrollbar } from "components/scrollbar";
import { FlexBetween, FlexBox } from "components/flexbox";
import { H6, Paragraph, Small } from "components/typography"; // COMMON STYLED COMPONENTS

import { HeadTableCell, BodyTableCell, BodyTableRow } from "./common/styles"; // CUSTOM DUMMY DATA SET

const ACTIVITY_LIST = [{
  id: nanoid(),
  current: true,
  recentActivity: "Now",
  device: "Dell XPS 12",
  location: "New York, USA",
  browser: "Chrome on Windows",
  browserIcon: "/static/browser/chrome.svg"
}, {
  id: nanoid(),
  device: "Acer Aspire 300",
  location: "New York, USA",
  browser: "Mozilla Firefox",
  recentActivity: "15 June 2020",
  browserIcon: "/static/browser/mozilla.svg"
}, {
  id: nanoid(),
  location: "London, UK",
  browser: "Safari Browser",
  device: "Macbook Pro 2020",
  recentActivity: "05 October 2020",
  browserIcon: "/static/browser/safari.svg"
}, {
  id: nanoid(),
  browser: "Apple Browser",
  location: "Manchester, UK",
  device: "IPhone 13 Pro Max",
  recentActivity: "05 October 2020",
  browserIcon: "/static/browser/apple.svg"
}];

const RecentDevices = () => {
  return <Card sx={{
    pb: 1
  }}>
      <FlexBetween padding={3} flexWrap="wrap">
        <H6 fontSize={14}>Recent Devices</H6>
        <Small>View and manage devices where you're currently logged in.</Small>
      </FlexBetween>

      <Scrollbar autoHide={false}>
        <Table sx={{
        minWidth: 800
      }}>
          <TableHead>
            <TableRow>
              <HeadTableCell>Browser</HeadTableCell>
              <HeadTableCell>Device</HeadTableCell>
              <HeadTableCell>Location</HeadTableCell>
              <HeadTableCell>Recent Activity</HeadTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {ACTIVITY_LIST.map(item => <BodyTableRow key={item.id}>
                <BodyTableCell>
                  <FlexBox alignItems="center" gap={1}>
                    <Avatar src={item.browserIcon} sx={{
                  width: 20,
                  height: 20
                }} />
                    <Paragraph>{item.browser}</Paragraph>
                  </FlexBox>
                </BodyTableCell>

                <BodyTableCell>{item.device}</BodyTableCell>

                <BodyTableCell>
                  <FlexBox gap={1} alignItems="center">
                    <Paragraph>{item.location}</Paragraph>
                    {item.current && <Chip label="current" size="small" color="success" variant="outlined" />}
                  </FlexBox>
                </BodyTableCell>

                <BodyTableCell>{item.recentActivity}</BodyTableCell>
              </BodyTableRow>)}
          </TableBody>
        </Table>
      </Scrollbar>
    </Card>;
};

export default RecentDevices;
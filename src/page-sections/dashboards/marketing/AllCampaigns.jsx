import { Box, Card, Table, Avatar, TableRow, TableBody, TableHead, AvatarGroup } from "@mui/material";
import { nanoid } from "nanoid"; // CUSTOM COMPONENTS

import { Scrollbar } from "components/scrollbar";
import { MoreButton } from "components/more-button";
import { StatusBadge } from "components/status-badge";
import { Paragraph, Small } from "components/typography";
import { FlexBetween, FlexBox } from "components/flexbox"; // COMMON DASHBOARD RELATED COMPONENTS

import { BodyTableCell, HeadTableCell } from "../_common"; // CUSTOM DUMMY DATA SET

const DATA = [{
  id: nanoid(),
  status: "Live Now",
  status_type: "success",
  title: "Valentine Day",
  createdAt: "14th February, 2022",
  duration: "14 Feb - 21 Feb, 2022",
  image: "/static/thumbnail/6.png"
}, {
  id: nanoid(),
  status: "Reviewing",
  status_type: "primary",
  title: "Mother’s Day",
  createdAt: "2nd April, 2022",
  duration: "2 Apr - 5 Apr, 2022",
  image: "/static/thumbnail/5.png"
}, {
  id: nanoid(),
  status: "Paused",
  status_type: "warning",
  title: "Cyber Monday",
  createdAt: "17th January, 2022",
  duration: "17 Jan - 21 Jan, 2022",
  image: "/static/thumbnail/4.png"
}, {
  id: nanoid(),
  status: "Live Now",
  status_type: "success",
  title: "Valentine Day",
  createdAt: "14th February, 2022",
  duration: "14 Feb - 21 Feb, 2022",
  image: "/static/thumbnail/6.png"
}];

const AllCampaigns = () => {
  return <Card sx={{
    height: "100%"
  }}>
      <FlexBetween p={3}>
        <Box>
          <Paragraph lineHeight={1} fontSize={18} fontWeight={500}>
            All Campaigns
          </Paragraph>

          <Paragraph mt={0.3} color="text.secondary">
            20+ Active Campaign
          </Paragraph>
        </Box>

        <MoreButton size="small" />
      </FlexBetween>

      <Scrollbar>
        <Table sx={{
        minWidth: 600,
        mt: 1
      }}>
          <TableHead>
            <TableRow>
              <HeadTableCell>NAME</HeadTableCell>
              <HeadTableCell>TEAM MEMBER</HeadTableCell>
              <HeadTableCell align="center">STATUS</HeadTableCell>
              <HeadTableCell align="center">DURATION</HeadTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {DATA.map((item, index) => <TableRow key={index}>
                <BodyTableCell>
                  <FlexBox gap={2}>
                    <Avatar variant="rounded" src={item.image} alt={item.title} />

                    <Box>
                      <Paragraph color="text.primary" fontWeight={500}>
                        {item.title}
                      </Paragraph>
                      <Small>{item.createdAt}</Small>
                    </Box>
                  </FlexBox>
                </BodyTableCell>

                <BodyTableCell>
                  <AvatarGroup max={4} sx={{
                "& .MuiAvatar-root": {
                  width: 30,
                  height: 30
                }
              }}>
                    <Avatar alt="Remy Sharp" src="/static/user/user-11.png" />
                    <Avatar alt="Travis Howard" src="/static/user/user-10.png" />
                    <Avatar alt="Cindy Baker" src="/static/user/user-13.png" />
                    <Avatar alt="Agnes Walker" src="/static/user/user-14.png" />
                    <Avatar alt="Trevor Henderson" src="/static/user/user-15.png" />
                  </AvatarGroup>
                </BodyTableCell>

                <BodyTableCell align="center">
                  <StatusBadge type={item.status_type}>{item.status}</StatusBadge>
                </BodyTableCell>

                <BodyTableCell align="center">{item.duration}</BodyTableCell>
              </TableRow>)}
          </TableBody>
        </Table>
      </Scrollbar>
    </Card>;
};

export default AllCampaigns;
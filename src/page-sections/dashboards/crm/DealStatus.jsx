import { Box, Card, Table, Avatar, TableRow, TableBody, TableHead } from "@mui/material";
import { nanoid } from "nanoid"; // CUSTOM COMPONENTS

import { Scrollbar } from "components/scrollbar";
import { MoreButton } from "components/more-button";
import { StatusBadge } from "components/status-badge";
import { Paragraph, Small } from "components/typography";
import { FlexBetween, FlexBox } from "components/flexbox"; // CUSTOM UTILS METHOD

import { format } from "utils/currency"; // COMMON DASHBOARD RELATED COMPONENTS

import { BodyTableCell, HeadTableCell } from "../_common"; // CUSTOM DUMMY DATA

const DATA = [{
  id: nanoid(),
  dealValue: 203500,
  status: "Deal won",
  status_type: "success",
  company: "Absternet LLC",
  user: {
    name: "Astole Banne",
    designation: "Sales Manager",
    image: "/static/user/user-11.png"
  }
}, {
  id: nanoid(),
  dealValue: 283500,
  status: "Stuck",
  status_type: "error",
  company: "Nike",
  user: {
    name: "Lisa Bee",
    designation: "Sales Manager",
    image: "/static/user/user-11.png"
  }
}, {
  id: nanoid(),
  dealValue: 243500,
  status: "Pending",
  status_type: "warning",
  company: "Absternet LLC",
  user: {
    name: "Stuward Canne",
    designation: "Sales Manager",
    image: "/static/user/user-11.png"
  }
}];

const DealStatus = () => {
  return <Card sx={{
    height: "100%"
  }}>
      <FlexBetween p={3}>
        <Paragraph fontSize={18} fontWeight={500}>
          Deal Status
        </Paragraph>

        <MoreButton size="small" />
      </FlexBetween>

      <Scrollbar>
        <Table sx={{
        minWidth: 600
      }}>
          <TableHead>
            <TableRow>
              <HeadTableCell>SALES REPRESENTATIVE</HeadTableCell>
              <HeadTableCell>COMPANY NAME</HeadTableCell>
              <HeadTableCell>STATUS</HeadTableCell>
              <HeadTableCell>DEAL VALUE</HeadTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {DATA.map(({
            id,
            dealValue,
            company,
            status,
            user,
            status_type
          }) => <TableRow key={id}>
                <BodyTableCell>
                  <FlexBox gap={2}>
                    <Avatar src={user.image} />

                    <Box>
                      <Paragraph color="text.primary" fontWeight={500}>
                        {user.name}
                      </Paragraph>
                      <Small>{user.designation}</Small>
                    </Box>
                  </FlexBox>
                </BodyTableCell>

                <BodyTableCell>
                  <Paragraph color="text.primary" fontWeight={500}>
                    {company}
                  </Paragraph>
                </BodyTableCell>

                <BodyTableCell>
                  <StatusBadge type={status_type}>{status}</StatusBadge>
                </BodyTableCell>

                <BodyTableCell>{format(dealValue, "0a.00")}</BodyTableCell>
              </TableRow>)}
          </TableBody>
        </Table>
      </Scrollbar>
    </Card>;
};

export default DealStatus;
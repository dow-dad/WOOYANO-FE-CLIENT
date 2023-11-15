import { Box, Card, Table, Avatar, TableRow, TableBody, TableHead } from "@mui/material";
import { nanoid } from "nanoid"; // CUSTOM COMPONENTS

import { Scrollbar } from "components/scrollbar";
import { MoreButton } from "components/more-button";
import { StatusBadge } from "components/status-badge";
import { Paragraph, Small } from "components/typography";
import { FlexBetween, FlexBox } from "components/flexbox"; // CUSTOM UTILS METHOD

import { format } from "utils/currency"; // COMMON DASHBOARD RELATED COMPONENTS

import { BodyTableCell, HeadTableCell } from "../_common"; // CUSTOM DUMMY DATA SET

const DATA = [{
  id: nanoid(),
  status: "Delivered",
  status_type: "success",
  title: "Apple Watch",
  address: "Rome, Italy.",
  image: "/static/products/apple-watch.png",
  user: {
    name: "Astole Banne",
    balance: 560
  }
}, {
  id: nanoid(),
  status: "Shipping",
  status_type: "primary",
  title: "Nike Shoes",
  address: "Bangkok, Singapore",
  image: "/static/products/shoe-1.png",
  user: {
    name: "Talon Abela",
    balance: 250.5
  }
}, {
  id: nanoid(),
  status: "Delayed",
  status_type: "error",
  title: "Ribbon Glass",
  address: "Paris, France",
  image: "/static/products/sunglass.png",
  user: {
    name: "Tofan Andy",
    balance: 150.25
  }
}, {
  id: nanoid(),
  status: "Delivered",
  status_type: "success",
  title: "Apple Watch",
  address: "New York, USA",
  image: "/static/products/headset.png",
  user: {
    name: "Jhon Ables",
    balance: 799.25
  }
}];

const ShipmentHistory = () => {
  return <Card sx={{
    height: "100%"
  }}>
      <FlexBetween p={3}>
        <Box>
          <Paragraph lineHeight={1} fontSize={18} fontWeight={500}>
            Shipment History
          </Paragraph>

          <Small color="text.secondary">50+ Active Shipments</Small>
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
              <HeadTableCell>NAME & ID</HeadTableCell>
              <HeadTableCell>CLIENTS NAME</HeadTableCell>
              <HeadTableCell align="center">ADDRESS</HeadTableCell>
              <HeadTableCell align="center">STATUS</HeadTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {DATA.map((item, index) => <TableRow key={index}>
                <BodyTableCell>
                  <FlexBox gap={2}>
                    <Avatar src={item.image} alt={item.title} />

                    <Box>
                      <Paragraph color="text.primary" fontWeight={500}>
                        {item.title}
                      </Paragraph>
                      <Small>#{item.id.substring(0, 10)}</Small>
                    </Box>
                  </FlexBox>
                </BodyTableCell>

                <BodyTableCell>
                  <Paragraph fontWeight={500} color="text.primary">
                    {item.user.name}
                  </Paragraph>

                  <Small>${format(item.user.balance, "0,0.00")}</Small>
                </BodyTableCell>

                <BodyTableCell align="center">{item.address}</BodyTableCell>

                <BodyTableCell align="center">
                  <StatusBadge type={item.status_type}>{item.status}</StatusBadge>
                </BodyTableCell>
              </TableRow>)}
          </TableBody>
        </Table>
      </Scrollbar>
    </Card>;
};

export default ShipmentHistory;
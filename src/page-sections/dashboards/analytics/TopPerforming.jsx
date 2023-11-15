import { Box, Card, Table, TableBody, TableHead, TableRow } from "@mui/material";
import { nanoid } from "nanoid"; // CUSTOM COMPONENTS

import { Scrollbar } from "components/scrollbar";
import { FlexBetween } from "components/flexbox";
import { MoreButton } from "components/more-button";
import { Paragraph, Span } from "components/typography"; // CUSTOM UTILS METHOD

import { numberFormat } from "utils/numberFormat"; // STYLED COMPONENTS

import { HeadTableCell, BodyTableCell } from "./styles"; // DUMMY DATA LIST

const DATA = [{
  id: nanoid(),
  page: "https://onion.com",
  click: 1369,
  views: "50M",
  click2: -165
}, {
  id: nanoid(),
  page: "https://onion/analytic.com",
  click: 1003,
  views: "28M",
  click2: 528
}, {
  id: nanoid(),
  page: "https://onion/ecommerce.com",
  click: 1987,
  views: "63M",
  click2: 898
}, {
  id: nanoid(),
  page: "https://onion/crm.com",
  click: 1462,
  views: "50M",
  click2: -369
}, {
  id: nanoid(),
  page: "https://onion/finance.com",
  click: 986,
  views: "70M",
  click2: -479
}, {
  id: nanoid(),
  page: "https://onion/projectm.com",
  click: 1028,
  views: "75M",
  click2: 669
}, {
  id: nanoid(),
  page: "https://onion/logistics.com",
  click: 369,
  views: "25M",
  click2: 215
}];

const TopPerforming = () => {
  return <Card sx={{
    padding: 3,
    pb: 1
  }}>
      <FlexBetween mb={4}>
        <Box>
          <Paragraph fontSize={18} fontWeight={500}>
            Top performing pages
          </Paragraph>
          <Paragraph color="text.secondary">Counted in Millions</Paragraph>
        </Box>

        <MoreButton size="small" />
      </FlexBetween>

      <Scrollbar>
        <Table sx={{
        minWidth: 470
      }}>
          <TableHead>
            <TableRow>
              <HeadTableCell>PAGES</HeadTableCell>
              <HeadTableCell>CLICKS</HeadTableCell>
              <HeadTableCell align="center">VIEWS</HeadTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {DATA.map(item => <TableRow key={item.id}>
                <BodyTableCell>{item.page}</BodyTableCell>

                <BodyTableCell>
                  <Paragraph fontWeight={500}>
                    {numberFormat(item.click)}{" "}
                    <Span color={item.click2 > 0 ? "success.main" : "error.main"} ml={1}>
                      {item.click2 > 0 && "+"}
                      {item.click2}
                    </Span>
                  </Paragraph>
                </BodyTableCell>

                <BodyTableCell align="center">{item.views}</BodyTableCell>
              </TableRow>)}
          </TableBody>
        </Table>
      </Scrollbar>
    </Card>;
};

export default TopPerforming;
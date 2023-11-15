import { Box, Card, Grid, Stack, Table, Alert, Button, Avatar, Divider, TableRow, TableBody, TableHead, IconButton, AlertTitle, LinearProgress, Chip } from "@mui/material";
import Info from "@mui/icons-material/Info"; // CUSTOM ICON COMPONENTS

import Edit from "icons/Edit";
import Delete from "icons/Delete"; // CUSTOM COMPONENTS

import { Scrollbar } from "components/scrollbar";
import { FlexBetween } from "components/flexbox";
import NewAddressCard from "./common/NewAddressCard";
import { H6, Paragraph } from "components/typography";
import BillingAddressListItem from "./common/BillingAddressListItem"; // COMMON STYLED COMPONENTS

import { BodyTableCell, BodyTableCellV2, BodyTableRow, HeadTableCell } from "./common/styles";

const Billing = () => {
  return <Card>
      <H6 fontSize={14} p={3}>
        Billing
      </H6>

      <Divider />

      {
      /* BILLING DETAILS */
    }
      <Box padding={3}>
        <Alert severity="info" variant="outlined" icon={<Info />} action={<Button>Add Payment Method</Button>}>
          <AlertTitle>We Need Your Attention</AlertTitle>
          Your payment was declined. To start using tools, please add Payment Method
        </Alert>

        <Stack spacing={2.5} maxWidth={400} py={4}>
          <Box>
            <FlexBetween mb={0.5}>
              <Paragraph fontWeight={500}>Users</Paragraph>
              <Paragraph fontWeight={500} color="primary.main">
                50%
              </Paragraph>
            </FlexBetween>

            <LinearProgress value={50} variant="determinate" />

            <Paragraph fontSize={13} mt={1} color="text.secondary">
              14 Users remaining until your plan requires update
            </Paragraph>
          </Box>

          <Box>
            <Paragraph fontWeight={500}>Active until Dec 09, 2021</Paragraph>
            <Paragraph fontSize={13} mt={0.5} color="text.secondary">
              We will send you a notification upon Subscription expiration
            </Paragraph>
          </Box>

          <Box>
            <Paragraph fontWeight={500}>$24.99 Per Month</Paragraph>
            <Paragraph fontSize={13} mt={0.5} color="text.secondary">
              Extended Pro Package. Up to 100 Agents & 25 Projects
            </Paragraph>
          </Box>
        </Stack>

        <Stack direction="row" spacing={3}>
          <Button variant="contained">Upgrade Plan</Button>
          <Button variant="outlined">Cancel</Button>
        </Stack>
      </Box>

      {
      /* PAYMENT METHODS */
    }
      <Box my={2}>
        <H6 fontSize={14} p={3} pt={0}>
          Payment Methods
        </H6>

        <Scrollbar autoHide={false}>
          <Table sx={{
          minWidth: 700
        }}>
            <TableHead>
              <TableRow>
                <HeadTableCell>Card</HeadTableCell>
                <HeadTableCell>Name</HeadTableCell>
                <HeadTableCell>Expire Date</HeadTableCell>
                <HeadTableCell>Action</HeadTableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {[1, 2, 3].map(item => <BodyTableRow key={item}>
                  <BodyTableCell>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Avatar src="/static/payment/paypal-with-bg.svg" sx={{
                    borderRadius: "4px",
                    height: 27
                  }} />
                      <Paragraph fontWeight={500}>Paypal **** 1679</Paragraph>
                    </Stack>
                  </BodyTableCell>

                  <BodyTableCellV2>Marcus Morris</BodyTableCellV2>

                  <BodyTableCellV2>09/24/2022</BodyTableCellV2>

                  <BodyTableCellV2>
                    <IconButton size="small" color="inherit">
                      <Edit fontSize="small" />
                    </IconButton>

                    <IconButton color="inherit">
                      <Delete fontSize="small" />
                    </IconButton>
                  </BodyTableCellV2>
                </BodyTableRow>)}
            </TableBody>
          </Table>
        </Scrollbar>
      </Box>

      {
      /* BILLING ADDRESS */
    }
      <Box padding={3}>
        <H6 fontSize={14} mb={3}>
          Billing Address
        </H6>

        <Grid container spacing={3}>
          <Grid item md={6} xs={12}>
            <BillingAddressListItem />
          </Grid>

          <Grid item md={6} xs={12}>
            <BillingAddressListItem />
          </Grid>

          <Grid item md={6} xs={12}>
            <BillingAddressListItem />
          </Grid>

          <Grid item md={6} xs={12}>
            <NewAddressCard />
          </Grid>
        </Grid>
      </Box>

      {
      /* BILLING HISTORY */
    }
      <Box mb={2}>
        <H6 fontSize={14} padding={3} pt={2}>
          Billing History
        </H6>

        <Scrollbar autoHide={false}>
          <Table sx={{
          minWidth: 700
        }}>
            <TableHead>
              <TableRow>
                <HeadTableCell>Description</HeadTableCell>
                <HeadTableCell>Amount</HeadTableCell>
                <HeadTableCell>Invoice</HeadTableCell>
                <HeadTableCell>Date</HeadTableCell>
                <HeadTableCell>Action</HeadTableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {billingHistory.map(item => <BodyTableRow key={item.id}>
                  <BodyTableCellV2>{item.description}</BodyTableCellV2>
                  <BodyTableCellV2>${item.amount}</BodyTableCellV2>

                  <BodyTableCellV2>
                    <Chip label={item.invoice} color="secondary" size="small" />
                  </BodyTableCellV2>

                  <BodyTableCellV2>{item.date}</BodyTableCellV2>

                  <BodyTableCellV2>
                    <IconButton>
                      <Edit fontSize="small" sx={{
                    color: "text.secondary"
                  }} />
                    </IconButton>

                    <IconButton>
                      <Delete fontSize="small" sx={{
                    color: "text.secondary"
                  }} />
                    </IconButton>
                  </BodyTableCellV2>
                </BodyTableRow>)}
            </TableBody>
          </Table>
        </Scrollbar>
      </Box>
    </Card>;
};

const billingHistory = [{
  id: 1,
  amount: 890,
  invoice: "PDF",
  date: "Nov 12, 2021",
  description: "Invoice for Octavia"
}, {
  id: 2,
  amount: 420,
  invoice: "DOC",
  date: "Nov 10, 2021",
  description: "Invoice for Uko"
}, {
  id: 3,
  amount: 590,
  invoice: "PDF",
  date: "Nov 24, 2021",
  description: "Invoice for Stocky"
}, {
  id: 4,
  amount: 750,
  invoice: "DOC",
  date: "Nov 19, 2021",
  description: "Invoice for Aatrox"
}, {
  id: 5,
  amount: 890,
  invoice: "PDF",
  date: "Nov 12, 2021",
  description: "Invoice for Octavia"
}];
export default Billing;
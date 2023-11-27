"use client";

import Link from "next/link";
import { Box, Chip, Card, Grid, Stack, Table, Button, styled, Divider, TableRow, TableBody, TableCell, TableHead } from "@mui/material"; // CUSTOM COMPONENTS

import { Scrollbar } from "components/scrollbar";
import FlexBetween from "components/flexbox/FlexBetween";
import { H6, Paragraph, Span } from "components/typography"; // CUSTOM ICON COMPONENT

import DownloadTo from "icons/DownloadTo"; // CUSTOM UTILS METHODS

import { isDark } from "utils/constants";
import { numberFormat } from "utils/numberFormat"; // STYLED COMPONENTS

const HeadTableCell = styled(TableCell)(({
  theme
}) => ({
  padding: 0,
  fontWeight: 400,
  paddingBottom: 5,
  color: theme.palette.text.secondary,
  borderBottom: `1px solid ${theme.palette.divider}`,
  "&:last-of-type": {
    textAlign: "right"
  }
}));
const BodyTableCell = styled(TableCell)(({
  theme
}) => ({
  padding: "10px 0",
  color: theme.palette.text.primary,
  "&:last-of-type": {
    textAlign: "right",
    fontWeight: 500
  },
  "&:first-of-type": {
    fontWeight: 500
  }
}));
const StyledBox = styled(Box)(({
  theme
}) => ({
  padding: 24,
  height: "100%",
  borderRadius: 8,
  backgroundColor: theme.palette.grey[isDark(theme) ? 700 : 100]
}));

const InvoiceDetailsPageView = () => {
  return <Box pt={2} pb={4}>
      <Card sx={{
      padding: 3
    }}>
        <Grid container spacing={3}>
          <Grid item md={7} xs={12}>
            <FlexBetween>
              <Box width={60}>
                <img src="/static/payment/FedEx_Express.svg" height="36px" alt="" />
              </Box>

              <Stack textAlign="right">
                <H6 fontSize={16}>Invoice #</H6>
                <Paragraph>3682303</Paragraph>
              </Stack>
            </FlexBetween>

            <FlexBetween my={3}>
              <Stack spacing={0.5}>
                <Paragraph fontWeight={600}>Bill To:</Paragraph>
                <H6 fontSize={16}>Pixy Krovasky</H6>
                <Paragraph color="text.secondary">
                  8692 Wild Rose Drive <br /> Livonia, MI 48150
                </Paragraph>
              </Stack>

              <Paragraph lineHeight={1.6} textAlign="right">
                45 Roker Terrace <br /> Latheronwheel <br /> KW5 8NW, London <br /> United Kingdom
              </Paragraph>
            </FlexBetween>

            <H6 fontSize={14} mb={1}>
              Issue Date: <Span sx={{
              color: "text.secondary",
              fontWeight: 400
            }}>03/10/2018</Span>
            </H6>

            <H6 fontSize={14}>
              Due date: <Span sx={{
              color: "text.secondary",
              fontWeight: 400
            }}>07/10/2018</Span>
            </H6>

            <Scrollbar>
              <Table sx={{
              mt: 3,
              minWidth: 375
            }}>
                <TableHead>
                  <TableRow>
                    <HeadTableCell>Description</HeadTableCell>
                    <HeadTableCell>Hours</HeadTableCell>
                    <HeadTableCell>Rate</HeadTableCell>
                    <HeadTableCell>Amount</HeadTableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  <TableRow>
                    <BodyTableCell>Minimal Design</BodyTableCell>
                    <BodyTableCell>80</BodyTableCell>
                    <BodyTableCell>$40.00</BodyTableCell>
                    <BodyTableCell>$3200.00</BodyTableCell>
                  </TableRow>

                  <TableRow>
                    <BodyTableCell>Logo Design</BodyTableCell>
                    <BodyTableCell>32</BodyTableCell>
                    <BodyTableCell>$50.00</BodyTableCell>
                    <BodyTableCell>$2200.00</BodyTableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Scrollbar>

            <Divider />

            <Stack mt={3} spacing={1} maxWidth={200} marginLeft="auto">
              <FlexBetween>
                <Paragraph fontWeight={500}>Subtotal:</Paragraph>
                <Paragraph fontWeight={500}>$ {numberFormat(20600.0)}</Paragraph>
              </FlexBetween>

              <FlexBetween>
                <Paragraph fontWeight={500}>Vat 0%:</Paragraph>
                <Paragraph fontWeight={500}>$ 00.00</Paragraph>
              </FlexBetween>

              <FlexBetween>
                <Paragraph fontWeight={500}>Sub total 0%:</Paragraph>
                <Paragraph fontWeight={500}>$ {numberFormat(20600.0)}</Paragraph>
              </FlexBetween>

              <FlexBetween>
                <Paragraph fontWeight={500}>Total:</Paragraph>
                <Paragraph fontWeight={500}>$ {numberFormat(20600.0)}</Paragraph>
              </FlexBetween>
            </Stack>

            <Stack direction="row" justifyContent="flex-end" mt={4} spacing={2}>
              <Button variant="outlined" color="secondary" startIcon={<DownloadTo />}>
                PDF
              </Button>

              <Button>Print Invoice</Button>
            </Stack>
          </Grid>

          <Grid item md={5} xs={12}>
            <StyledBox sx={{}}>
              <Stack spacing={2} direction="row" alignItems="center">
                <Chip size="small" color="success" label="Approved" />
                <Chip size="small" label="Pending Payment" />
              </Stack>

              <Stack mt={3} spacing={2}>
                <H6 fontSize={16}>Payment Details:</H6>

                <ListItem text="Paypal:" description="UI.lib@gmail.com" />
                <ListItem text="Account:" description="Nl24IBAN34553477847370033 AMB NLANBZTC" />
                <ListItem text="Payment Term:" description="14 Days . Due in 7 days" />
              </Stack>

              <Stack mt={3} spacing={2}>
                <H6 fontSize={16}>Payment Overview:</H6>

                <ListItem text="Project Name:" description={<>
                      UI Lib Dashboard <Link href="#">View Project</Link>
                    </>} />
                <ListItem text="Completed By:" description="UI.lib" />
                <ListItem text="Time Spent:" description="120 Hours . 20$ / h rate" />
              </Stack>
            </StyledBox>
          </Grid>
        </Grid>
      </Card>
    </Box>;
}; // ==============================================================


function ListItem({
  text,
  description
}) {
  return <Paragraph color="text.secondary">
      {text} <br />
      <Span fontWeight={500} color="text.primary">
        {description}
      </Span>
    </Paragraph>;
}

export default InvoiceDetailsPageView;
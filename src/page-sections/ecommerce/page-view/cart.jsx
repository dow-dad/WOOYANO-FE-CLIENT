"use client";

import { Box, Card, Grid, Stack, Table, styled, Button, Avatar, TableRow, useTheme, TableBody, TableCell, TableHead, IconButton } from "@mui/material"; // CUSTOM COMPONENTS

import { Counter } from "components/counter";
import { Scrollbar } from "components/scrollbar";
import FlexBox from "components/flexbox/FlexBox";
import { H6, Paragraph, Span } from "components/typography"; // CUSTOM DEFINED HOOK

import useNavigate from "hooks/useNavigate"; // CUSTOM PAGE SECTION COMPONENTS

import Stepper from "../Stepper";
import OrderSummery from "../OrderSummery"; // CUSTOM ICON COMPONENTS

import Clear from "icons/Clear";
import ChevronLeft from "icons/ChevronLeft"; // CUSTOM UTILS METHOD

import { isDark } from "utils/constants"; // STYLED COMPONENTS

const HeadTableCell = styled(TableCell)({
  padding: "10px 16px",
  "&:first-of-type": {
    paddingLeft: 24
  },
  "&:last-of-type": {
    paddingRight: 24
  }
});
const BodyTableCell = styled(HeadTableCell)({
  padding: "24px 16px",
  ":nth-of-type(1)": {
    minWidth: 250
  },
  ":nth-of-type(2)": {
    minWidth: 120
  }
});

const CartPageView = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  return <Box pt={2} pb={4}>
      <Grid container spacing={3}>
        {
        /* STEPPER SECTION */
      }
        <Grid item xs={12}>
          <Box mt={3} maxWidth={700}>
            <Stepper stepNo={0} />
          </Box>
        </Grid>

        {
        /* CART LIST TABLE */
      }
        <Grid item md={8} xs={12}>
          <Card>
            <H6 fontSize={16} p={3}>
              Cart{" "}
              <Span color="text.secondary" fontSize={14} fontWeight={400}>
                (3 item)
              </Span>
            </H6>

            <Scrollbar autoHide={false}>
              <Table sx={{
              minWidth: 600
            }}>
                <TableHead sx={{
                backgroundColor: isDark(theme) ? "grey.700" : "grey.100"
              }}>
                  <TableRow>
                    <HeadTableCell>Product</HeadTableCell>
                    <HeadTableCell>Quantity</HeadTableCell>
                    <HeadTableCell>Price</HeadTableCell>
                    <HeadTableCell>Action</HeadTableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {[1, 2, 3].map(item => <TableRow key={item}>
                      <BodyTableCell>
                        <FlexBox gap={1.5} alignItems="center">
                          <Avatar alt="product" variant="rounded" src="/static/products/shoe-2.png" sx={{
                        width: 65,
                        height: 65
                      }} />

                          <Stack spacing={0.3}>
                            <H6 color="text.primary" fontSize={16}>
                              Nike Air Jordan
                            </H6>

                            <Paragraph>
                              Color: <Span color="text.primary">White</Span>
                            </Paragraph>

                            <Paragraph>
                              Size: <Span color="text.primary">09</Span>
                            </Paragraph>
                          </Stack>
                        </FlexBox>
                      </BodyTableCell>

                      <BodyTableCell>
                        <Counter />
                        <Paragraph mt={0.5}>Available: 12</Paragraph>
                      </BodyTableCell>

                      <BodyTableCell>
                        <Paragraph color="text.primary">$230</Paragraph>
                      </BodyTableCell>

                      <BodyTableCell>
                        <IconButton>
                          <Clear sx={{
                        color: "text.secondary"
                      }} />
                        </IconButton>
                      </BodyTableCell>
                    </TableRow>)}
                </TableBody>
              </Table>
            </Scrollbar>
          </Card>

          <Box mt={2}>
            <Button disableRipple variant="text" startIcon={<ChevronLeft />} onClick={() => navigate("/dashboards/shop")}>
              Continue Shopping
            </Button>
          </Box>
        </Grid>

        {
        /* ORDER SUMMERY SECTION */
      }
        <Grid item md={4} xs={12}>
          <OrderSummery showCoupon buttonText="Check Out Now" handleClick={() => navigate("/dashboards/billing-address")} />
        </Grid>
      </Grid>
    </Box>;
};

export default CartPageView;
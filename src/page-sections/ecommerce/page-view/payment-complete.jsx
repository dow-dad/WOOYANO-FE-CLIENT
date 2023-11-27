"use client";

import { Box, Button, Card, Divider, useMediaQuery } from "@mui/material"; // CUSTOM COMPONENTS

import { H6, Paragraph } from "components/typography";
import FlexBox from "components/flexbox/FlexBox"; // CUSTOM DEFINED HOOK

import useNavigate from "hooks/useNavigate"; // CUSTOM ICON COMPONENTS

import ChevronLeft from "icons/ChevronLeft";
import DownloadTo from "icons/DownloadTo";
import { NextImage } from "components/next-image";

const PaymentCompletePageView = () => {
  const navigate = useNavigate();
  const down500 = useMediaQuery(theme => theme.breakpoints.down(512));
  return <Card sx={{
    mt: 1,
    padding: 4,
    minHeight: 600,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }}>
      <Box maxWidth={400} textAlign="center">
        <NextImage src={require("../../../../public/static/illustration/payment-complete.svg")} alt="Payment Complete" />

        <H6 mt={4}>Thanks for placing order 🎉</H6>

        <Paragraph color="primary.main" my={1} fontSize={16}>
          #AOSIDY2
        </Paragraph>

        <Paragraph fontSize={16}>
          We will contact you soon <br /> when the shipment arrives
        </Paragraph>

        <Divider sx={{
        my: 3
      }} />

        <FlexBox gap={2} flexWrap="wrap">
          <Button color="secondary" variant="outlined" fullWidth={down500} startIcon={<ChevronLeft />} onClick={() => navigate("/dashboard/shop")}>
            Continue Shopping
          </Button>

          <Button color="success" variant="contained" fullWidth={down500} startIcon={<DownloadTo />}>
            Download as PDF
          </Button>
        </FlexBox>
      </Box>
    </Card>;
};

export default PaymentCompletePageView;
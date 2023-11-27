"use client";

import { useState } from "react";
import { Box, Grid, Stack, Button } from "@mui/material"; // CUSTOM COMPONENTS

import { Modal } from "components/modal";
import { H6 } from "components/typography";
import { FlexBetween } from "components/flexbox"; // CUSTOM DEFINED HOOK

import useNavigate from "hooks/useNavigate"; // CUSTOM ICON COMPONENTS

import Add from "icons/Add";
import ChevronLeft from "icons/ChevronLeft"; // CUSTOM PAGE SECTION COMPONENTS

import Stepper from "../Stepper";
import OrderSummery from "../OrderSummery";
import BillingAddressCard from "../BillingAddressCard";
import AddBillingAddressForm from "../AddBillingAddressForm";

const BillingAddressPageView = () => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);

  const handleClose = () => setOpenModal(false);

  return <Box pt={2} pb={4}>
      <Grid container spacing={3}>
        {
        /* STEPPER SECTION */
      }
        <Grid item xs={12}>
          <Box mt={3} mb={1} maxWidth={700}>
            <Stepper stepNo={1} />
          </Box>
        </Grid>

        {
        /* BILLING ADDRESS LIST */
      }
        <Grid item md={8} xs={12}>
          <FlexBetween flexWrap="wrap" gap={1.5} mb={3}>
            <H6 fontSize={16}>Billing & address</H6>

            <Button variant="contained" startIcon={<Add />} onClick={() => setOpenModal(true)}>
              Add New Address
            </Button>
          </FlexBetween>

          <Modal open={openModal} handleClose={handleClose}>
            <AddBillingAddressForm handleCancel={handleClose} />
          </Modal>

          <Stack gap={2}>
            <BillingAddressCard selected />
            <BillingAddressCard />
            <BillingAddressCard />
          </Stack>

          <Box mt={2}>
            <Button disableRipple variant="text" startIcon={<ChevronLeft />} onClick={() => navigate("/dashboard/cart")}>
              Back
            </Button>
          </Box>
        </Grid>

        {
        /* ORDER SUMMERY SECTION */
      }
        <Grid item md={4} xs={12}>
          <OrderSummery buttonText="Payment" handleClick={() => navigate("/dashboard/payment")} />
        </Grid>
      </Grid>
    </Box>;
};

export default BillingAddressPageView;
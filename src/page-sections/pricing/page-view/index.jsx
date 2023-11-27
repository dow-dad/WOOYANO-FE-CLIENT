"use client";

import { Fragment } from "react";
import { Box, Grid, Stack, Switch, Divider, Container } from "@mui/material"; // CUSTOM COMPONENTS

import PricingCard from "../PricingCard";
import { H1, Paragraph } from "components/typography"; // CUSTOM DUMMY DATA

import { DATA } from "../data";

const PricingPageView = () => {
  return <Fragment>
      <Container maxWidth="lg" sx={{
      my: 8
    }}>
        <Box textAlign="center">
          <H1 mb={2} fontSize={{
          sm: 52,
          xs: 42
        }}>
            Our Flexible Price Plan
          </H1>

          <Paragraph fontSize={18} color="text.secondary">
            Our Free Plan lets you get going right away. Switch <br /> to a Pro plan to get more
            features.
          </Paragraph>

          <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" py={6}>
            <Paragraph fontSize={16} fontWeight={500}>
              MONTHLY
            </Paragraph>

            <Switch />

            <Paragraph fontSize={16} fontWeight={500}>
              YEARLY (Save 15%)
            </Paragraph>
          </Stack>
        </Box>

        <Grid container spacing={4}>
          {DATA.map(item => <Grid item xs={12} sm={6} md={4} key={item.id}>
              <PricingCard icon={item.icon} price={item.price} title={item.title} popular={item.popular} features={item.features} />
            </Grid>)}
        </Grid>
      </Container>

      <Divider />
    </Fragment>;
};

export default PricingPageView;
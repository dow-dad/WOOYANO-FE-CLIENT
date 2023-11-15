import Link from "next/link";
import { Box, Grid, Stack, Breadcrumbs } from "@mui/material";
import { Home, KeyboardTabOutlined, ShoppingCartOutlined } from "@mui/icons-material"; // CUSTOM COMPONENT

import { Block } from "components/block";
import { Paragraph } from "components/typography";
import ComponentPageLayout from "../../ComponentPageLayout";

const MuiBreadcrumbsPageView = () => {
  return <ComponentPageLayout title="Breadcrumbs">
      <Grid container spacing={3}>
        <Grid item lg={6} xs={12}>
          <Block title="Basic">
            <Stack direction="row" spacing={2} justifyContent="center">
              <Breadcrumbs>
                <Box component={Link} href="#" fontSize={16} color="inherit">
                  Home
                </Box>

                <Box component={Link} href="#" fontSize={16} color="inherit">
                  Product Page
                </Box>

                <Paragraph fontSize={16} color="grey.400">
                  Active
                </Paragraph>
              </Breadcrumbs>
            </Stack>
          </Block>
        </Grid>

        <Grid item lg={6} xs={12}>
          <Block title="With Dot">
            <Stack direction="row" spacing={2} justifyContent="center">
              <Breadcrumbs aria-label="breadcrumb" separator={<Box className="dot" />}>
                <Box component={Link} href="#" fontSize={16} color="inherit">
                  Home
                </Box>

                <Box component={Link} href="#" fontSize={16} color="inherit">
                  Product Page
                </Box>

                <Paragraph fontSize={16} color="grey.400">
                  Active
                </Paragraph>
              </Breadcrumbs>
            </Stack>
          </Block>
        </Grid>

        <Grid item lg={6} xs={12}>
          <Block title="With Icon">
            <Stack direction="row" spacing={2} justifyContent="center">
              <Breadcrumbs aria-label="breadcrumb">
                <Box component={Link} href="/" display="flex" alignItems="center" color="inherit">
                  <Home sx={{
                  mr: 0.5
                }} fontSize="inherit" />
                  Home
                </Box>

                <Box component={Link} href="/" display="flex" alignItems="center" color="inherit">
                  <ShoppingCartOutlined fontSize="inherit" sx={{
                  mr: 0.5
                }} />
                  Product Page
                </Box>

                <Box display="flex" alignItems="center" color="grey.400">
                  <KeyboardTabOutlined fontSize="inherit" sx={{
                  mr: 0.5
                }} />
                  Active
                </Box>
              </Breadcrumbs>
            </Stack>
          </Block>
        </Grid>
      </Grid>
    </ComponentPageLayout>;
};

export default MuiBreadcrumbsPageView;
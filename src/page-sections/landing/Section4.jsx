import { Box, Grid, Button, Container, Card, Stack } from "@mui/material";
import KeyboardTab from "@mui/icons-material/KeyboardTab"; // CUSTOM COMPONENTS

import { NextImage } from "components/next-image";
import { H2, Paragraph } from "components/typography"; // CUSTOM DEFINED HOOK

import useNavigate from "hooks/useNavigate";

const Section4 = () => {
  const navigate = useNavigate();
  return <Container maxWidth="lg" sx={{
    mb: 8,
    mt: {
      sm: 24,
      xs: 12
    }
  }}>
      <Grid container spacing={2}>
        <Grid item lg={5} md={6} xs={12}>
          <Box maxWidth={450} position="sticky" top={0} pt={4} mb={{
          xs: 4,
          mb: 0
        }}>
            <H2 fontSize={36}>
              Ready to use <br /> apps and pages
            </H2>

            <Paragraph mt={1} mb={3} fontSize={18} color="text.secondary">
              Save thousands of development hours with QuickFrame’s well crafted features and clean code
            </Paragraph>

            <Button color="secondary" variant="outlined" startIcon={<KeyboardTab />} onClick={() => navigate("/dashboard/products/product-list-view")}>
              Browse pages & apps
            </Button>
          </Box>
        </Grid>

        <Grid item lg={7} md={6} xs={12}>
          <Stack spacing={6}>
            <Card width={1178} height={1024} alt="dashboard" component={NextImage} src="/static/landing/profile.jpg" />

            <Card width={1178} height={1024} component={NextImage} src="/static/landing/email.jpg" alt="dashboard 2" />

            <Card width={1178} height={1024} component={NextImage} src="/static/landing/chat.jpg" alt="user list" />

            <Card width={1178} height={1024} component={NextImage} src="/static/landing/users.jpg" alt="profile" />
          </Stack>
        </Grid>
      </Grid>
    </Container>;
};

export default Section4;
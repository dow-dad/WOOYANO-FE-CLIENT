"use client";

import { Box, Button, Container, TextField } from "@mui/material"; // CUSTOM COMPONENTS

import { H1, Paragraph } from "components/typography";

const ComingSoonPageView = () => {
  return <Container>
      <Box textAlign="center" py={6}>
        <H1 fontSize={{
        sm: 52,
        xs: 42
      }}>Coming Soon!</H1>
        <Paragraph mt={0.5} fontSize={18} color="text.secondary">
          Stay tuned for the big reveal
        </Paragraph>

        <Box py={10} maxWidth={700} margin="auto">
          <img src="/static/pages/coming-soon.svg" alt="maintenance" width="100%" />
        </Box>

        <TextField placeholder="Enter your email" InputProps={{
        endAdornment: <Button>Notify Me</Button>
      }} sx={{
        maxWidth: 500,
        width: "100%",
        ".MuiInputBase-root": {
          padding: 1
        },
        ".MuiButtonBase-root": {
          flexBasis: 120
        }
      }} />
      </Box>
    </Container>;
};

export default ComingSoonPageView;
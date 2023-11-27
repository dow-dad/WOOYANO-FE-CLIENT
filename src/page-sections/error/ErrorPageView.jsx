"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container"; // CUSTOM COMPONENTS

import { H1, Paragraph } from "components/typography"; // CUSTOM DEFINED HOOK

import useNavigate from "hooks/useNavigate";

const ErrorPageView = () => {
  const navigate = useNavigate();
  return <Container>
      <Box textAlign="center" py={6}>
        <H1 fontSize={{
        sm: 52,
        xs: 42
      }}>Page Not Found!</H1>
        <Paragraph mt={1} fontSize={18} color="text.secondary">
          Don't Panic! Learn How to Turn Page Not Found into a <br /> Roadmap for Online Success.
        </Paragraph>

        <Box py={10} maxWidth={600} margin="auto">
          <img src="/static/pages/error.svg" alt="error" width="100%" />
        </Box>

        <Button onClick={() => navigate("/")}>Go Home</Button>
      </Box>
    </Container>;
};

export default ErrorPageView;
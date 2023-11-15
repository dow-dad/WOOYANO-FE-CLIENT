"use client";

import { useState } from "react";
import { Box, Button, Container } from "@mui/material";
import OtpInput from "react-otp-input"; // CUSTOM COMPONENTS

import { H1, Paragraph, Span } from "components/typography";
import ChevronLeft from "icons/ChevronLeft"; // CUSTOM UTILS METHOD

import { isDark } from "utils/constants";

const VerifyCodePageView = () => {
  const [otp, setOtp] = useState("5");
  return <Container>
      <Box textAlign="center" py={{
      sm: 6,
      xs: 4
    }}>
        <Box maxWidth={120} margin="auto">
          <img src="/static/pages/email.svg" alt="email" width="100%" />
        </Box>

        <H1 mt={{
        sm: 4,
        xs: 2
      }} mb={2} fontSize={{
        sm: 52,
        xs: 36
      }}>
          Check your email!
        </H1>

        <Paragraph mt={0.5} margin="auto" maxWidth={650} color="text.secondary" fontSize={{
        sm: 18,
        xs: 14
      }}>
          Please check your email inbox for a 5-digit verification code we have sent to your
          registered email address. Enter the code in the field below to confirm your email and
          complete the verification process.
        </Paragraph>

        <Box maxWidth={450} margin="auto" mt={6}>
          <OtpInput value={otp} numInputs={5} onChange={setOtp} placeholder="-----" renderInput={props => <Box component="input" {...props} sx={{
          all: "unset",
          width: 70,
          height: 70,
          fontSize: 18,
          flexBasis: 70,
          borderRadius: 4,
          fontWeight: 600,
          backgroundColor: theme => isDark(theme) ? "grey.800" : "white",
          input: {
            textAlign: "center"
          },
          "::placeholder": {
            color: "text.primary"
          }
        }} />} containerStyle={{
          gap: "1rem",
          justifyContent: "center",
          marginBottom: "3rem"
        }} />

          <Button fullWidth>Verify</Button>
        </Box>

        <Paragraph mt={4} fontSize={16}>
          Don’t have a code?{" "}
          <Span color="error.main" fontWeight={500}>
            Resend code
          </Span>
        </Paragraph>

        <Button variant="text" disableRipple>
          <ChevronLeft /> Return to sign in
        </Button>
      </Box>
    </Container>;
};

export default VerifyCodePageView;
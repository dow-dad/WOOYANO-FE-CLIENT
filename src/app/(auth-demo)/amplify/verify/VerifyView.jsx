"use client";

import { useState, useContext } from "react";
import { useSearchParams } from "next/navigation";
import { Box, Button, Container } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import OtpInput from "react-otp-input"; // CUSTOM DEFINED HOOK

import useNavigate from "hooks/useNavigate"; // CUSTOM COMPONENTS

import { H1, Paragraph, Span } from "components/typography";
import ChevronLeft from "icons/ChevronLeft"; // CUSTOM UTILS METHOD

import { isDark } from "utils/constants"; // AMPLIFY CONTEXT FILE

import { AuthContext } from "contexts/amplifyContext";

const VerifyView = () => {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const searchParams = useSearchParams();
  const {
    resendCode,
    emailVerify
  } = useContext(AuthContext);
  const email = searchParams.get("email");

  const handleSubmit = async () => {
    setLoading(true);

    try {
      if (otp.length !== 6) {
        alert("Invalid Code!");
        setLoading(false);
        return;
      }

      if (email && otp) {
        await emailVerify(email, otp);
        navigate("/amplify/login");
      }

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleResendCode = async () => {
    try {
      await resendCode(email);
    } catch (error) {
      console.log(error);
    }
  };

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
          Please check your email inbox for a 6-digit verification code we have sent to your
          registered email address. Enter the code in the field below to confirm your email and
          complete the verification process.
        </Paragraph>

        <Box maxWidth={450} margin="auto" mt={6}>
          <OtpInput value={otp} numInputs={6} onChange={setOtp} placeholder="------" renderInput={props => <Box component="input" {...props} sx={{
          all: "unset",
          width: 70,
          height: 70,
          fontSize: 18,
          flexBasis: 70,
          borderRadius: 4,
          fontWeight: 600,
          backgroundColor: theme => isDark(theme) ? "grey.800" : "grey.100",
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

          <LoadingButton loading={loading} fullWidth onClick={handleSubmit}>
            Verify
          </LoadingButton>
        </Box>

        <Paragraph mt={4} fontSize={16}>
          Don’t have a code?{" "}
          <Span fontWeight={500} color="error.main" onClick={handleResendCode} sx={{
          cursor: "pointer"
        }}>
            Resend code
          </Span>
        </Paragraph>

        <Button variant="text" disableRipple>
          <ChevronLeft /> Return to sign in
        </Button>
      </Box>
    </Container>;
};

export default VerifyView;
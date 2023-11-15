"use client";

import { Box, Button, Stack, TextField } from "@mui/material";
import NavigateBefore from "@mui/icons-material/NavigateBefore"; // CUSTOM DEFINED HOOK

import useNavigate from "hooks/useNavigate"; // CUSTOM COMPONENTS

import { H5, Paragraph } from "components/typography";
import FlexRowAlign from "components/flexbox/FlexRowAlign";

const ForgetPasswordPageView = () => {
  const navigate = useNavigate();
  return <FlexRowAlign height="100%" bgcolor="background.paper">
      <Box textAlign="center" maxWidth={550} width="100%" padding={4}>
        <img src="/static/forget-passwod.svg" alt="Logo" />

        <H5 mt={2}>Forgot your password?</H5>

        <Paragraph color="text.secondary" mt={1} px={4}>
          Please enter the email address associated with your account and We will email you a link
          to reset your password.
        </Paragraph>

        <form>
          <Stack gap={3} mt={5}>
            <TextField fullWidth label="Email" type="email" />

            <Button fullWidth>Send Link</Button>

            <Button disableRipple variant="text" color="secondary" onClick={() => navigate("/login")}>
              <NavigateBefore fontSize="small" /> Back to Sign In
            </Button>
          </Stack>
        </form>
      </Box>
    </FlexRowAlign>;
};

export default ForgetPasswordPageView;
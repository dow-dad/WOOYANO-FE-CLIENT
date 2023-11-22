"use client";

import { Box, Button, Stack, TextField, Grid } from "@mui/material";
import NavigateBefore from "@mui/icons-material/NavigateBefore"; // CUSTOM DEFINED HOOK

import useNavigate from "hooks/useNavigate"; // CUSTOM COMPONENTS

import { H5, Paragraph } from "components/typography";
import FlexRowAlign from "components/flexbox/FlexRowAlign";

const ForgetEmailPageView = () => {
  const navigate = useNavigate();
  return (
    <FlexRowAlign height="100%" bgcolor="background.paper">
      <Box textAlign="center" maxWidth={550} width="100%" padding={4}>
        <img src="/static/forget-passwod.svg" alt="Logo" />

        <H5 mt={2}>이메일을 잊으셨나요?</H5>

        <Paragraph color="text.secondary" mt={1.5} px={4}>
          저희 서비스에 가입된
        </Paragraph>
        <Paragraph color="text.secondary" mt={1} px={4}>
          대표자 명과 사업자등록번호를 통해 찾을 수 있어요.
        </Paragraph>
        <form>
          <Stack gap={3} mt={5}>
            <Grid>
              <TextField fullWidth label="Name" type="name" />
              <Grid mt={3}>
                <TextField
                  fullWidth
                  label="Registration Number"
                  type="number"
                />
              </Grid>
            </Grid>
            <Button fullWidth>Find Email</Button>
            <Button
              disableRipple
              variant="text"
              color="secondary"
              onClick={() => navigate("/login")}
            >
              <NavigateBefore fontSize="small" /> Back to Sign In
            </Button>
          </Stack>
        </form>
      </Box>
    </FlexRowAlign>
  );
};

export default ForgetEmailPageView;

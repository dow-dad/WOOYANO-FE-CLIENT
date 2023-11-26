"use client";
import { Box, Button, Stack } from "@mui/material";
import NavigateBefore from "@mui/icons-material/NavigateBefore"; // CUSTOM DEFINED HOOK
import useNavigate from "hooks/useNavigate"; // CUSTOM COMPONENTS
import { H5, Paragraph } from "components/typography";
import FlexRowAlign from "components/flexbox/FlexRowAlign";

import { useSearchParams } from "next/navigation";

const ForgetEmailResultPageView = () => {
  const SearchParams = useSearchParams();
  const email = SearchParams.get('email')

  const navigate = useNavigate();
  return (
    <FlexRowAlign height="100%" bgcolor="background.paper">
      <Box textAlign="center" maxWidth={550} width="100%" padding={2}>
        <Box display="flex" justifyContent={"center"}>
          <img src="/static/forget-passwod.svg" alt="Logo" />
        </Box>
        <H5 mt={2}>이메일을 찾았습니다!</H5>

        <Paragraph color="text.secondary" mt={4} px={4}>
          저희 서비스에 가입된 이메일은
        </Paragraph>
        <Paragraph color="text.primary" mt={1} px={4} fontSize={"25px"}>
          {`${email}`}
        </Paragraph>
        <Paragraph color="text.secondary" mt={1} px={4}>
          입니다.
        </Paragraph>
        <form>
          <Stack gap={3} mt={5}>
            <Button fullWidth onClick={() => navigate("/login")}>
              Login
            </Button>
            <Button
              disableRipple
              variant="text"
              color="secondary"
              onClick={() => navigate("/forget-password")}
            >
              <NavigateBefore fontSize="small" />
              혹시 비밀번호도 기억나지 않으신가요?
            </Button>
          </Stack>
        </form>
      </Box>
    </FlexRowAlign>
  );
};

export default ForgetEmailResultPageView;

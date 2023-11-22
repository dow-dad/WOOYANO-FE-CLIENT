"use client";
import { Box, Stack, TextField, Grid } from "@mui/material";
import { H5, Paragraph } from "components/typography";
import FlexRowAlign from "components/flexbox/FlexRowAlign";

function ForgetPassword(props) {
  const { forgetPasswordData, setForgetPasswordData } = props;

  const handleOnChange = (e) => {
    const value = e.target.value;
    const id = e.target.id;
    setForgetPasswordData({
      ...forgetPasswordData,
      [id]: value,
    });
    console.log(forgetPasswordData);
  };

  const handleSendCode = async () => {
    console.log(forgetPasswordData);
  };

  return (
    <FlexRowAlign height="100%" bgcolor="background.paper">
      <Box textAlign="center" maxWidth={550} width="100%" padding={2}>
        <Box display="flex" justifyContent={"center"}>
        <img src="/static/forget-passwod.svg" alt="Logo" />
        </Box>
        <H5 mt={2}>비밀번호를 잊으셨나요?</H5>
        <Paragraph color="text.secondary" mt={1.5} px={4}>
          저희 서비스에 가입된 사업자등록번호와 이메일을 입력해주세요.
        </Paragraph>{" "}
        <Paragraph color="text.secondary" mt={1} px={4}>
          인증 후, 비밀번호를 변경하실 수 있어요.
        </Paragraph>
        <form>
          <Stack gap={3} mt={5}>
            <Grid>
              <TextField
                fullWidth
                id = "registerationNumber"
                label="Registration Number"
                type="number"
                onChange={handleOnChange}
                value={forgetPasswordData.registerationNumber}
              />
              <Grid mt={3}>
                <TextField
                  fullWidth
                  id="email"
                  label="Email"
                  type="email"
                  onChange={handleOnChange}
                  value={forgetPasswordData.email}
                />
              </Grid>
            </Grid>
          </Stack>
        </form>
      </Box>
    </FlexRowAlign>
  );
};

export default ForgetPassword;

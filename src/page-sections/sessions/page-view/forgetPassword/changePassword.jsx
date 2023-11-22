"use client";
import { Box, Stack, TextField, Grid } from "@mui/material";
import { H5, Paragraph } from "components/typography";
import FlexRowAlign from "components/flexbox/FlexRowAlign";

function ChangePassword(props) {
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

  return (
    <FlexRowAlign height="100%" bgcolor="background.paper">
      <Box textAlign="center" maxWidth={550} width="100%" padding={2}>
        <Box display="flex" justifyContent={"center"}>
          <img src="/static/forget-passwod.svg" alt="Logo" />
        </Box>
        <H5 mt={2}>새로운 비밀번호를 입력해주세요.</H5>
        <Paragraph color="text.secondary" mt={1.5} px={4}>
          비밀번호는 최소 6자리 이상입니다.
        </Paragraph>
        <Paragraph color="text.secondary" mt={1.5} px={4}>
          비밀번호 확인까지 전부 입력해주세요.
        </Paragraph>
        <form>
          <Stack gap={3} mt={5}>
            <Grid>
              <TextField
                fullWidth
                id="newPassword"
                label="New Password"
                type="password"
                onChange={handleOnChange}
              />
              <Grid mt={3}>
                <TextField
                  fullWidth
                  id="checkPassword"
                  label="Check Password"
                  type="password"
                  onChange={handleOnChange}
                />
              </Grid>
            </Grid>
          </Stack>
        </form>
      </Box>
    </FlexRowAlign>
  );
}

export default ChangePassword;

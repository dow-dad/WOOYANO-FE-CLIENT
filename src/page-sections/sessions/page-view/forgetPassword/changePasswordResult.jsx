"use client";
import { Box, Stack, TextField, Grid } from "@mui/material";
import { H5, Paragraph } from "components/typography";
import FlexRowAlign from "components/flexbox/FlexRowAlign";

function ChangePasswordResult(props) {
  const { forgetPasswordData, setForgetPasswordData } = props;

  return (
    <FlexRowAlign height="100%" bgcolor="background.paper">
      <Box textAlign="center" maxWidth={550} width="100%" padding={2}>
        <Box display="flex" justifyContent={"center"}>
          <img src="/static/forget-passwod.svg" alt="Logo" />
        </Box>
        <H5 mt={2}>비밀번호가 변경되었습니다.</H5>
        <Paragraph color="text.secondary" mt={4} px={4}>
          {forgetPasswordData.name}님께서 가입하신
        </Paragraph>
        <Paragraph color="text.secondary" mt={4} px={4}>
          {forgetPasswordData.email}의 비밀번호가 변경되었습니다.
        </Paragraph>
      </Box>
    </FlexRowAlign>
  );
}

export default ChangePasswordResult;

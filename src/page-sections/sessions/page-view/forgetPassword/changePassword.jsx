"use client";
import { Box, Stack, TextField, Grid } from "@mui/material";
import { H5, Paragraph } from "components/typography";
import FlexRowAlign from "components/flexbox/FlexRowAlign";

import * as Yup from "yup";
import { useFormik } from "formik"; // CUSTOM DEFINED HOOK
import { useEffect } from 'react';

function ChangePassword(props) {
  const { forgetPasswordData, setForgetPasswordData } = props;

  const initialValues = {
    newPassword : "",
    checkPassword: "",
  }
  const validationSchema = Yup.object().shape({
    newPassword: Yup.string().min(6, "비밀번호는 최소 6자리입니다.").required("새로운 비밀번호를 입력해주세요."),
    checkPassword: Yup.string().min(6, "비밀번호는 최소 6자리입니다.").required("확인을 위해 한번 더 입력해주세요."),
  });

  const { errors, values, touched, handleBlur, handleChange} = useFormik({
    initialValues,
    validationSchema})

  useEffect(() => {
      Object.keys(values).forEach((name) => {
        const id = name;
        const value = values[name];
        setForgetPasswordData((prevData) => ({
          ...prevData,
          [id]: value,
          }));
          console.log(forgetPasswordData);
      })
  }, [values]);
  
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
                label="New Password"
                id="newPassword"
                name="newPassword"
                type="password"
                onBlur={handleBlur}
                value={values.newPassword}
                onChange={handleChange}
                helperText={touched.newPassword && errors.newPassword}
                error={Boolean(touched.newPassword && errors.newPassword)}
              />
              <Grid mt={3}>
              <TextField
                fullWidth
                label="Check Password"
                id="checkPassword"
                name="checkPassword"
                type="password"
                onBlur={handleBlur}
                value={values.checkPassword}
                onChange={handleChange}
                helperText={touched.checkPassword && errors.checkPassword}
                error={Boolean(touched.checkPassword && errors.checkPassword)}
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

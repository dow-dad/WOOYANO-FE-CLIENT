"use client";
import { Box, Stack, TextField, Grid } from "@mui/material";
import { H5, Paragraph } from "components/typography";
import FlexRowAlign from "components/flexbox/FlexRowAlign";

import * as Yup from "yup";
import { useFormik } from "formik"; // CUSTOM DEFINED HOOK
import { useEffect } from 'react';

function ForgetPassword(props) {
  const { forgetPasswordData, setForgetPasswordData } = props;

  const initialValues = {
    name : "",
    email: "",
    registrationNumber: "",
  }
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("이름을 입력해주세요."),
    registrationNumber: Yup.number().typeError("숫자만 입력이 가능합니다.").required("사업자등록번호를 하이픈('-')제외하여 입력해주세요."),
    email: Yup.string().email("이메일 형식을 지켜주세요.").max(255).required("이메일을 입력해주세요."),
  });

  const { errors, values, touched, isValid, handleBlur, handleChange} = useFormik({
    initialValues,
    validationSchema})

  useEffect(() => {
    if(!isValid) {
      setForgetPasswordData((prevData) => ({
        ...prevData,
        email: '',
      }));
    } else {
      Object.keys(values).forEach((name) => {
        const id = name;
        const value = values[name];
        setForgetPasswordData((prevData) => ({
          ...prevData,
          [id]: value,
          }));
          console.log(forgetPasswordData);
      })
    }
  }, [values]);

  return (
    <FlexRowAlign height="100%" bgcolor="background.paper">
      <Box textAlign="center" maxWidth={550} width="100%" padding={2}>
        <Box display="flex" justifyContent={"center"}>
        <img src="/static/forget-passwod.svg" alt="Logo" />
        </Box>
        <H5 mt={2}>비밀번호를 잊으셨나요?</H5>
        <Paragraph color="text.secondary" mt={3} px={4}>
          저희 서비스에 가입된
        </Paragraph>
        <Paragraph color="text.secondary" mt={1} px={2}>
        이름, 이메일, 사업자등록번호를 입력해주세요.
        </Paragraph>
        <Paragraph color="text.secondary" mt={1} px={4}>
          인증 후, 비밀번호를 변경하실 수 있어요.
        </Paragraph>
        <form>
          <Stack gap={3} mt={5}>
            <Grid>
              <TextField
                fullWidth
                label="Name"
                type="name"
                name="name"
                id="name"
                onBlur={handleBlur}
                value={values.name}
                onChange={handleChange}
                helperText={touched.name && errors.name}
                error={Boolean(touched.name && errors.name)}
              />
              <Grid mt={2}>
              <TextField
                fullWidth
                label="Email"
                type="email"
                name="email"
                id="email"
                onBlur={handleBlur}
                value={values.email}
                onChange={handleChange}
                helperText={touched.email && errors.email}
                error={Boolean(touched.email && errors.email)}
              />
              </Grid>
              <Grid mt={2}>
              <TextField
                fullWidth
                label="Registration Number"
                type="registrationNumber"
                name="registrationNumber"
                id="registrationNumber"
                onBlur={handleBlur}
                value={values.registrationNumber}
                onChange={handleChange}
                helperText={touched.registrationNumber && errors.registrationNumber}
                error={Boolean(touched.registrationNumber && errors.registrationNumber)}
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

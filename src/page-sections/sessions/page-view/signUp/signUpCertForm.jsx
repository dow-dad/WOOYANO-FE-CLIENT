"use client";
import { Grid, TextField, Box, DialogContentText } from "@mui/material";
import React, { useEffect } from "react";
import { H5, Paragraph } from "components/typography"; // CUSTOM SESSIONS LAYOUT

import { useFormik } from "formik";
import * as Yup from "yup"; // CUSTOM DEFINED HOOK

export default function SignUpCertForm(props) {
  const { signUpData, setSignUpData } = props;

  const initialValues = {
    email : "",
    name: "",
  }
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("이메일 형식으로 입력해주세요.").max(255).required("이메일을 입력해주세요."),
    name: Yup.string().required("이름을 입력해주세요.")
  });
  const { errors, values, touched, isValid, handleBlur, handleChange } =
  useFormik({
    initialValues,
    validationSchema,
  });

  useEffect(() => {
    if(!isValid) {
      setSignUpData((prevData) => ({
        ...prevData,
        email: '',
      }));
    } else {
      Object.keys(values).forEach((name) => {
        const id = name;
        const value = values[name];
        setSignUpData((prevData) => ({
          ...prevData,
          [id]: value,
          }));
          console.log(signUpData);
      })
    }
  }, [values]);

    return (
      <Box p={2}>
        <H5
          fontSize={{
            sm: 30,
            xs: 25,
          }}
        >
          Sign up
        </H5>
    
        <Paragraph mt={1} mb={6} color="text.secondary">
          Welcome to Wooyano! 우야노에 오신걸 환영합니다!
        </Paragraph>
        <Paragraph mt={1} mb={1.5} color="text.secondary">
          사업자등록증에 기재된 대표자 명(사장님)과 회사 대표 이메일을 입력해주세요.
        </Paragraph>
    
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="name"
              type="name"
              variant="outlined"
              label="Name"
              placeholder="사장님 성함을 입력해주세요."
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.name && errors.name}
              error={Boolean(touched.name && errors.name)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="email"
              type="email"
              variant="outlined"
              label = "Email"
              placeholder="ex) wooyano@example.com"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.email && errors.email}
              error={Boolean(touched.email && errors.email)}
            />
          </Grid>
          <Grid item xs={12}>
            <Paragraph mt={1.5} mb={4} textAlign={"center"} color="text.secondary">
              입점 신청시, 우야노 서비스 이용약관과
              <Box mt={1} fontWeight={500} textAlign={"center"} component="span" href="#">
                <br />
                개인정보 처리방침에 동의합니다.
              </Box>{" "}
              <Box mt={1} fontWeight={500} textAlign={"center"} component="span" href="#">
                <br />
                입점 신청 완료 이후, 가입 승인까지 3~5일 소요됩니다.
              </Box>{" "}
            </Paragraph>
          </Grid>
        </Grid>
      </Box>
    );
}

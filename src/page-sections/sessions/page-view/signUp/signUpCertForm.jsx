"use client";
import { Grid, TextField, Box, DialogContentText } from "@mui/material";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup"; // CUSTOM DEFINED HOOK
import { H5, H6, Paragraph } from "components/typography"; // CUSTOM SESSIONS LAYOUT

export default function SignUpCertForm(props) {
  const { signUpData, setSignUpData } = props;

  //이메일 유효성 검사 변수
  const [checkEmail, setCheckEmail] = useState(false);

  const handleOnChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    const id = e.target.id;
    // 이메일 유효성 검사 정규식
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    //이메일 유효성 검사
    if (id === "email") {
      const checkedEmail = emailRegex.test(value);
      setCheckEmail(checkedEmail);
      if (checkedEmail) {
        setSignUpData((prevData) => ({
          ...prevData,
          emailformcheck: true,
          [id]: value,
        }));
      } else {
        setSignUpData((prevData) => ({
          ...prevData,
          emailformcheck: false,
          [id]: value,
        }));
      }
      console.log("Email Form Check:", checkedEmail);
    } else {
      setSignUpData({
        ...signUpData,
        [id]: value,
      });
    }
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Must be a valid email")
      .max(255)
      .required("Email is required"), // password: Yup.string()
  });

  const { errors, values, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      validationSchema,
    });

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
            <DialogContentText>Name</DialogContentText>
            <TextField
              fullWidth
              id="username"
              type="name"
              placeholder="사장님 성함을 입력해주세요."
              value={signUpData.username}
              onChange={handleOnChange}
            />
          </Grid>
          <Grid item xs={12}>
            <DialogContentText>Company Email</DialogContentText>
            <TextField
              fullWidth
              id="email"
              type="text"
              placeholder="ex) wooyano@example.com"
              value={signUpData.email}
              onChange={handleOnChange}
              onBlur={handleBlur}
              helperText={touched.email && errors.email}
              error={Boolean(touched.email && errors.email)}
            />
          </Grid>
          <Grid item xs={12}>
            <Paragraph mt={0} textAlign={"center"} color="text.secondary">
              회원가입시, 우야노 서비스 이용약관과
              <Box mt={1} fontWeight={500} textAlign={"center"} component="span" href="#">
                개인정보 처리방침에 동의합니다.
              </Box>{" "}
              <Box mt={1} fontWeight={500} textAlign={"center"} component="span" href="#">
                회원가입 완료 이후, 가입 승인까지 3~5일 소요됩니다.
              </Box>{" "}
            </Paragraph>
          </Grid>
        </Grid>
      </Box>
    );
}

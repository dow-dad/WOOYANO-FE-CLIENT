"use client";
import React, { useEffect, useState } from "react";
import PostCodeDaum from "components/findAddress/postCodeDaum";
import {Divider} from "@mui/material";
import {Button,Grid,TextField,Box,OutlinedInput,NativeSelect} from "@mui/material";
import { H5, Paragraph } from "components/typography"; // CUSTOM SESSIONS LAYOUT

import * as Yup from "yup";
import { useFormik } from "formik"; // CUSTOM DEFINED HOOK

const SignUpForm = (props) => {
  const [isView, setIsView] = useState(false);
  const [addressInfo, setAddressInfo] = useState();
  const { signUpData, setSignUpData } = props;
  const [pwType, setPwType] = useState(true);

  const initialValues = {
    password: "",
    secondPassword: "",
    extraAddress:"",
    companyName: "",
    companyPhone: "",
    registrationNumber: "",
    bankHolder: "",
    bankAccount: "",
    bankName: "",
    bankImage: "",
    registrationImage: "",
  }
  const validationSchema = Yup.object().shape({
    password: Yup.string().min(6, "비밀번호는 최소 6자리 이상입니다.").required("비밀번호를 입력해주세요."),
    secondpassword: Yup.string().min(6, "비밀번호는 최소 6자리 이상입니다.").required("한번 더 입력해주세요."),
    conpanyName : Yup.string().required("업체명을 입력해주세요."),
    companyPhone: Yup.number("숫자만 입력해주세요.").required("대표 전화번호를 입력해주세요."),
    registrationNumber: Yup.number("숫자만 입력해주세요.").required("사업자등록번호를 입력해주세요."),
    bankHolder: Yup.string().required("예금주를 입력해주세요."),
    bankAccount: Yup.number("숫자만 입력해주세요.").required("정산용 계좌번호를 입력해주세요."),
    bankName: Yup.string().required("은행을 선택해주세요."),
    bankImage: Yup.string().required("통장 사본 이미지를 추가해주세요."),
    registrationImage: Yup.string().required("사업자등록증 사본 이미지를 추가해주세요."),
    extraAddress:Yup.string().required("상세주소를 입력해주세요."),
  });

  const { errors, values, touched, isValid, handleBlur, handleChange} = useFormik({
    initialValues,
    validationSchema})

  //모달창 상태
  const handleOpenModal = () => {
    setIsView(!isView);
  };

  const bankList = [
    "국민은행",
    "신한은행",
    "우리은행",
    "하나은행",
    "기업은행",
    "외환은행",
    "수협은행",
    "한국씨티은행",
    "KEB하나은행",
    "케이뱅크",
    "경남은행",
    "광주은행",
    "대구은행",
    "부산은행",
    "전북은행",
    "제주은행",
    "카카오뱅크",
    "케이뱅크",
    "새마을금고",
    "우체국",
  ];

  useEffect(() => {
      Object.keys(values).forEach((name) => {
        const id = name;
        const value = values[name];
        setSignUpData((prevData) => ({
          ...prevData,
          [id]: value,
          }));
          console.log(signUpData);
      })
  }, [values]);

  //주소 검색결과 두 값이 모두 있을 경우 지역주소와 시군구 코드 업데이트
  useEffect(() => {
    if (addressInfo?.address && addressInfo?.sigunguCode) {
      const localCodeset = parseInt(addressInfo.sigunguCode);
      setSignUpData((prevForm) => ({
        ...prevForm,
        localCode: localCodeset,
        localAddress: addressInfo.address,
      }));
    }
  }, [addressInfo]);

  return (
    <Box p={2}>
      <H5 fontSize={{ sm: 30, xs: 25 }}>
        Sign up
      </H5>
      <Paragraph mt={1} mb={6} color="text.secondary">
        빈칸없이 전부 작성해주세요.
      </Paragraph>
      <Box my={2}>
        <Paragraph mt={1} mb={1.5} color="text.secondary">
          이름과 이메일은 수정할 수 없습니다.
        </Paragraph>
        <Paragraph mt={1} mb={1.5} color="text.secondary">
          사업자 등록증과 은행 사본은 사업자 정보 확인을 위한 용도로 사용됩니다.
        </Paragraph>
        <Paragraph mt={1} mb={1.5} color="text.secondary">
          입점 신청 시, 승인까지 3~5 영업일 소요됩니다.
        </Paragraph>
      </Box>

      <Divider
        sx={{ mt: 6, mb: 1, mx: 2, borderColor: "grey.200", borderWidth: 1 }}>
        <Paragraph color="text.secondary">
          User Information
        </Paragraph>
      </Divider>

      {/* 이름, 이메일 */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 1.5,
          mt: 1.5,
        }}
      >
        <Box sx={{ flexBasis: "100%" }}>
          <Paragraph>Name</Paragraph>
          <TextField
            fullWidth
            id="name"
            type="text"
            value={signUpData.name}
            inputProps={{ readOnly: true }}
          />
        </Box>

        <Box sx={{ flexBasis: "100%" }}>
          <Paragraph>Email</Paragraph>
          <TextField
            fullWidth
            id="email"
            type="text"
            value={signUpData.email}
            inputProps={{ readOnly: true }}
          />
        </Box>
      </Box>

      {/* 비밀번호 설정 */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 1.5,
          mt: 1.5,
        }}
      >
        <Box sx={{ flexBasis: "100%" }}>
          <Paragraph>Password</Paragraph>
          <TextField
            fullWidth
            placeholder="사용하실 비밀번호를 입력해주세요."
            id="password"
            type="password"
            value={values.password}
            onChange={handleChange}
            name="password"
            onBlur={handleBlur}
            helperText={touched.password && errors.password}
            error={Boolean(touched.password && errors.password)}
          />
        </Box>
        <Box sx={{ flexBasis: "100%" }}>
          <Paragraph>Password Check</Paragraph>
          <TextField
            fullWidth
            placeholder="비밀번호를 한번 더 입력해주세요."
            id="secondPassword"
            type="password"
            value={values.secondPassword}
            onChange={handleChange}
            name="secondPassword"
            onBlur={handleBlur}
            helperText={touched.secondPassword && errors.secondPassword}
            error={Boolean(touched.secondPassword && errors.secondPassword)}
          />
        </Box>
      </Box>
      <Divider
        sx={{
          mt : 6,
          mb: 1,
          mx: 2,
          borderColor: "grey.200",
          borderWidth: 1,
        }}
      >
        <Paragraph color="text.secondary">
        Company Information
        </Paragraph>
      </Divider>
      <Box mt={1.5}>
        <Paragraph>Company Name</Paragraph>
        <Box gap={1.5}>
          <TextField
            fullWidth
            placeholder="업체명을 작성해주세요."
            id="companyName"
            type="text"
            value={values.companyName}
            onChange={handleChange}
            name="companyName"
            onBlur={handleBlur}
            helperText={touched.companyName && errors.companyName}
            error={Boolean(touched.companyName && errors.companyName)}
          />
        </Box>
      </Box>
      <Box mt={1.5}>
        <Paragraph>Company Phone Number</Paragraph>
        <TextField
          fullWidth
          placeholder="하이픈(-)을 제외하고 숫자로만 입력해 주세요."
          id="companyPhone"
          type="text"
          value={values.companyPhone}
          onChange={handleChange}
          name="companyPhone"
          onBlur={handleBlur}
          helperText={touched.companyPhone && errors.companyPhone}
          error={Boolean(touched.companyPhone && errors.companyPhone)}
        />
      </Box>

      {/* 주소입력 */}
      <Box mt={1.5}>
        <Grid>
          <Paragraph>Addess</Paragraph>
          <PostCodeDaum
            isView={isView}
            setIsView={setIsView}
            setAddressInfo={setAddressInfo}
          />
        </Grid>
        <Box display="flex" gap={1.5}>
          <TextField
            fullWidth
            placeholder="Find 버튼을 통해 주소를 검색해주세요."
            id="localAddress"
            type="text"
            value={signUpData.localAddress}
            onChange={handleChange}
            inputProps={{ readOnly: true }}
          />
          <Button
            onClick={() => {
              handleOpenModal();
            }}
          >
            Find
          </Button>
        </Box>
        <Grid mt={1}>
          <TextField
            fullWidth
            placeholder="상세주소를 입력해주세요."
            id="extraAddress"
            type="text"
            value={values.extraAddress}
            onChange={handleChange}
            name="extraAddress"
            onBlur={handleBlur}
            helperText={touched.extraAddress && errors.extraAddress}
            error={Boolean(touched.extraAddress && errors.extraAddress)}
          />
        </Grid>
      </Box>

      <Box sx={{ flexBasis: "100%", mt: 1.5 }}>
        <Paragraph>Registration Number</Paragraph>
        <TextField
          fullWidth
          placeholder="하이픈(-)을 제외하고 숫자로만 입력해 주세요."
          id="registrationNumber"
          type="number"
          value={values.registrationNumber}
          onChange={handleChange}
          name="registrationNumber"
          onBlur={handleBlur}
          helperText={touched.registrationNumber && errors.registrationNumber}
          error={Boolean(touched.registrationNumber && errors.registrationNumber)}
        />
      </Box>

      <Box sx={{ flexBasis: "100%", mt: 1.5 }}>
        <Paragraph>Registration Certificate</Paragraph>
        <OutlinedInput
          fullWidth
          placeholder="사업자 등록증 이미지를 첨부해주세요."
          id="registrationImage"
          type="file"
          accept="image/*"
          value={values.registrationImage}
          onChange={handleChange}
          inputProps={{
            style: {
              padding: 11,
            },
          }}
          name="registrationImage"
          onBlur={handleBlur}
          helperText={touched.registrationImage && errors.registrationImage}
          error={Boolean(touched.registrationImage && errors.registrationImage)}
        />
      </Box>

      <Divider
        sx={{
          mt: 6,
          mb: 1,
          mx: 2,
          borderColor: "grey.200",
          borderWidth: 1,
        }}
      >
        <Paragraph color="text.secondary">
        Bank Information
        </Paragraph>
      </Divider>
      {/* 정신 계좌 입력 */}
      <Box mt={1.5}>
        <Paragraph>Bank Holder</Paragraph>
        <TextField
          fullWidth
          placeholder="예금주를 입력해주세요."
          id="bankHolder"
          type="text"
          value={values.bankHolder}
          onChange={handleChange}
          name="bankHolder"
          onBlur={handleBlur}
          helperText={touched.bankHolder && errors.bankHolder}
          error={Boolean(touched.bankHolder && errors.bankHolder)}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 1.5,
          mt: 1.5,
        }}
      >
        <Box maxWidth={{ xs: "30%", md: "40%" }}>
          <Paragraph>Bank Name</Paragraph>
          <NativeSelect
            fullWidth
            id="bankName"
            value={values.bankName}
            onChange={handleChange}
            inputProps={{
              style: {
                padding: 11,
              },
            }}
            name="bankName"
            onBlur={handleBlur}
            helperText={touched.bankName && errors.bankName}
            error={Boolean(touched.bankName && errors.bankName)}
          >
            <option value="" disabled>
              은행
            </option>
            {bankList.map((bank, index) => (
              <option key={index} placeholder="은행을 선택해주세요.">
                {bank}
              </option>
            ))}
          </NativeSelect>
        </Box>
        <Box sx={{ flexBasis: "100%" }}>
          <Paragraph>Bank Account</Paragraph>
          <TextField
            fullWidth
            placeholder="하이픈(-)을 제외하고 숫자로만 입력해 주세요."
            id="bankAccount"
            type="number"
            value={values.bankAccount}
            onChange={handleChange}
            name="bankAccount"
            onBlur={handleBlur}
            helperText={touched.bankAccount && errors.bankAccount}
            error={Boolean(touched.bankAccount && errors.bankAccount)}
          />
        </Box>
      </Box>
      <Box mt={1.5}>
        <Paragraph>Copy of Bankbook</Paragraph>
        <OutlinedInput
          fullWidth
          placeholder="통장사본을 올려주세요."
          id="bankImage"
          type="file"
          accept="image/*"
          value={values.bankImage}
          onChange={handleChange}
          inputProps={{
            style: {
              padding: 11,
            },
          }}
          name="bankImage"
          onBlur={handleBlur}
          helperText={touched.bankImage && errors.bankImage}
          error={Boolean(touched.bankImage && errors.bankImage)}
        />
      </Box>
    </Box>
  );
};

export default SignUpForm;

"use client";
import React, { ChangeEvent, FC, useEffect, useState } from "react";
// import { DaumAddressType } from "@/types/DaumAddrssType";
import Swal from "sweetalert2";
// import PostCodeDaum from "@/components/widget/postCodeDaum";
import {
  Button,
  Grid,
  TextField,
  Box,
  Select,
  MenuItem,
  OutlinedInput,
  NativeSelect,
} from "@mui/material";
import { H5, Paragraph } from "components/typography"; // CUSTOM SESSIONS LAYOUT

const SignUpForm = (props) => {
  const [isView, setIsView] = useState(false);
  const [addressInfo, setAddressInfo] = useState();
  const { signUpData, setSignUpData } = props;
  const [pwType, setPwType] = useState(true);

  //회원가입 정보 업데이트
  const handleOnChange = (e) => {
    const value = e.target.value;
    const id = e.target.id;
    //비밀번호 체크
    if (signUpData.password === signUpData.secondPassword) {
      setSignUpData({
        ...signUpData,
        passwordCheck: true,
      });
    } else {
      setSignUpData({
        ...signUpData,
        passwordCheck: false,
      });
    }
    setSignUpData({
      ...signUpData,
      [id]: value,
    });
    console.log(signUpData);
  };

  //모달창 상태
  const handleOpenModal = () => {
    setIsView(!isView);
  };

  const handlePwType = () => {
    setPwType(!pwType);
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

  const [selectedBank, setSelectedBank] = useState("");

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
      <H5
        fontSize={{
          sm: 30,
          xs: 25,
        }}
      >
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
          회원가입 신청 시, 승인까지 3~5 영업일 소요됩니다.
        </Paragraph>
      </Box>

      <Box mt={1.5}>
        <Paragraph mt={4} mb={1.5} color="text.secondary">
          User Information
        </Paragraph>
        <Paragraph>Name</Paragraph>
        <TextField
          fullWidth
          id="username"
          type="text"
          value={signUpData.username}
          onChange={handleOnChange}
          inputProps={{ readOnly: true }}
        />
      </Box>
      <Box mt={1.5}>
        <Paragraph>Email</Paragraph>
        <TextField
          fullWidth
          id="email"
          type="text"
          value={signUpData.email}
          onChange={handleOnChange}
          inputProps={{ readOnly: true }}
        />
      </Box>
      <Box mt={1.5}>
        <Paragraph>Password</Paragraph>
        <TextField
          fullWidth
          placeholder="사용하실 비밀번호를 입력해주세요."
          id="password"
          type="password"
          value={signUpData.password}
          onChange={handleOnChange}
        />
        <Box>
          {/* <PasswordViewButton pwType={pwType} onClick={handlePwType} /> */}
        </Box>
      </Box>
      <Box mt={1.5}>
        <Paragraph>Password Check</Paragraph>
        <TextField
          fullWidth
          placeholder="비밀번호를 한번 더 입력해주세요."
          id="secondPassword"
          type="password"
          value={signUpData.secondPassword}
          onChange={handleOnChange}
        />
      </Box>

      <Box mt={1.5}>
        <Paragraph mt={4} mb={1.5} color="text.secondary">
          Company Information
        </Paragraph>
        <Paragraph>Company Name</Paragraph>
        <Box gap={1.5}>
          <TextField
            fullWidth
            placeholder="업체명을 작성해주세요."
            id="companyName"
            type="text"
            value={signUpData.companyName}
            onChange={handleOnChange}
            maxLength={8}
          />
        </Box>
      </Box>
      <Box mt={1.5}>
        <Paragraph>ComePany Phone Number</Paragraph>
        <TextField
          fullWidth
          placeholder="'-' 빼고 전부 입력해주세요."
          id="companyPhone"
          type="text"
          value={signUpData.companyPhone}
          onChange={handleOnChange}
        />
      </Box>
      <Box mt={1.5}>
        <Grid>
          <Paragraph>Addess</Paragraph>

          {/* <div>
            <PostCodeDaum
                  isView={isView}
                  setIsView={setIsView}
                  setAddressInfo={setAddressInfo}
                />
          </div> */}
        </Grid>
        <Box display="flex" gap={1.5}>
          <TextField
            fullWidth
            placeholder="Find 버튼을 통해 주소를 검색해주세요."
            id="localAddress"
            type="text"
            value={signUpData.localAddress}
            onChange={handleOnChange}
            readOnly
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
            value={signUpData.extraAddress}
            onChange={handleOnChange}
          />
        </Grid>
      </Box>
      <Box mt={1.5}>
        <Paragraph>Registration Number</Paragraph>
        <TextField
          fullWidth
          placeholder="사업자 등록번호를'-' 빼고 전부 입력해주세요."
          id="registerationNumber"
          type="number"
          value={signUpData.registerationNumber}
          onChange={handleOnChange}
        />
      </Box>
      <Box mt={1.5} maxWidth={{ xs: "100%", sm: "50%", md: "33%" }}>
        <Paragraph>Registration Certificate</Paragraph>
        <OutlinedInput
          fullWidth
          placeholder="사업자 등록증 이미지를 첨부해주세요."
          id="registerationImage"
          type="file"
          accept="image/*"
          value={signUpData.registerationImage}
          onChange={handleOnChange}
        />
      </Box>

      <Paragraph mt={4} mb={1.5} color="text.secondary">
        Bank Information
      </Paragraph>
      <Box mt={1.5} maxWidth={{ xs: "100%", sm: "50%", md: "33%" }}>
        <Paragraph>Bank Name</Paragraph>
        <NativeSelect
          fullWidth
          id="bankName"
          value={signUpData.bankName}
          onChange={handleOnChange}
        >
          <option value="" disabled>
            은행을 선택해주세요.
          </option>
          {bankList.map((bank, index) => (
            <option key={index} placeholder="은행을 선택해주세요.">
              {bank}
            </option>
          ))}
        </NativeSelect>
      </Box>
      <Box mt={1.5}>
        <Paragraph>Bank Account</Paragraph>
        <TextField
          fullWidth
          placeholder="계좌번호를 '-' 는 제외하고 입력해주세요"
          id="bankAccount"
          type="number"
          value={signUpData.bankAccount}
          onChange={handleOnChange}
        />
      </Box>
      <Box mt={1.5}>
        <Paragraph>Bank Holder</Paragraph>
        <TextField
          fullWidth
          placeholder="예금주를 입력해주세요."
          id="bankHolder"
          type="text"
          value={signUpData.bankHolder}
          onChange={handleOnChange}
        />
      </Box>
      <Box mt={1.5} maxWidth={{ xs: "100%", sm: "50%", md: "33%" }}>
        <Paragraph>Copy of bankbook</Paragraph>
        <OutlinedInput
          fullWidth
          placeholder="통장사본을 올려주세요."
          id="bankImage"
          type="file"
          accept="image/*"
          value={signUpData.bankImage}
          onChange={handleOnChange}
        />
      </Box>
    </Box>
  );
};

export default SignUpForm;

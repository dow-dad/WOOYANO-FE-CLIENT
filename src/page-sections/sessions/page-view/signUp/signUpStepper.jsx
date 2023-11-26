"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import StepperBtn from "./stepperBtn";
import SignUpCertNumber from "./signUpCertNumber";
import SignUpForm from "./signUpForm";
import SignUpResult from "./signUpResult";
import SignUpCertForm from "./signUpCertForm";
import { Button, Divider, Box, Grid } from "@mui/material";
import { Paragraph } from "components/typography";
import { FlexRowAlign, FlexBox } from "components/flexbox";

export default function SignUpStepper() {
  const router = useRouter();
  const [stepId, setStepId] = useState(1);

  const [signUpData, setSignUpData] = useState({
    email: "",
    password: "",
    secondPassword: "",
    name: "",

    localAddress: "",
    extraAddress: "",
    localCode: 0,

    companyName: "",
    companyPhone: "",
    registerationNumber: "",
    registerationImage: "",

    bankHolder: "",
    bankAccount: "",
    bankName: "",
    bankImage: "",

    emailCertNumber: "",
    passwordCheck: false,
    nicknameCheck: false,
    emailformcheck: false,
  });

  const stepperComponent = [
    {
      1: (
        <SignUpCertForm signUpData={signUpData} setSignUpData={setSignUpData} />
      ),
      btnTxt: "Continue",
    },
    {
      2: (
        <SignUpCertNumber
          signUpData={signUpData}
          setSignUpData={setSignUpData}
        />
      ),
      btnTxt: "Continue",
    },
    {
      3: <SignUpForm signUpData={signUpData} setSignUpData={setSignUpData} />,
      btnTxt: "Continue",
    },
    {
      4: <SignUpResult signUpData={signUpData} setSignUpData={setSignUpData} />,
      btnTxt: "Wooyano Login",
    },
  ];

  useEffect(() => {}, [signUpData]);

  return (
    <div>
      <Box maxWidth={{ md: '60%', xs: '100%'}} mx={"auto"} my={{md:"6vh",xs:"2vh"}}>
        {stepperComponent[stepId - 1][stepId]}
        <StepperBtn
          signUpData={signUpData}
          setSignUpData={setSignUpData}
          btnText={stepperComponent[stepId - 1]["btnTxt"]}
          stepId={stepId}
          setStepId={setStepId}
        />
        {stepId === 1 || stepId === 2 ? (
          <>
            <Divider
              sx={{
                my: 4,
                mx: 6,
                borderColor: "grey.200",
                borderWidth: 1,
              }}
            >
              <Paragraph color="text.secondary" px={1}>
                이미 회원이신가요?
              </Paragraph>
            </Divider>
            <Box mx={2}>
              <Button
              fullWidth
                variant="text"
                onClick={() => router.push("/login")}
                sx={{
                  backgroundColor: "primary.50",
                }}
              >
                Log In
              </Button>
            </Box>
          </>
        ) : null}
      </Box>
      </div>
  );
}

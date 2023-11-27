"use client";
import React, { SetStateAction } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { Box, Button } from "@mui/material";
import SwalBasic from "components/error/SwalBasic";

export default function StepperBtn({
  btnText,
  stepId,
  setStepId,
  signUpData,
  setSignUpData,
}) {
  const router = useRouter();

  //이메일 확인 및 인증코드 전송
  const handleEmailSendFetch = async () => {
    const checkEmailURL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/client/email/check?email=${signUpData.email}`;
    const sendVerifyCodeURL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/auth/send/client/join/code?name=${signUpData.name}&email=${signUpData.email}`;
    try {
      const res = await fetch(checkEmailURL);
      if (res.ok) {
        const checkResult = await res.json();
        // 중복검사 결과 중복없음
        if (checkResult.result.checkResult === false) {
          //인증코드 전송 요청
          const sendVerifyCode = await fetch(sendVerifyCodeURL);
          const sendResult = await sendVerifyCode.json();
          if (sendVerifyCode.ok && sendResult.success === true) {
            setStepId(stepId + 1);
          } else {
            SwalBasic({
              text: "인증코드 요청에 실패하였습니다.",
              position: "center",
            });
          }
        } else {
          SwalBasic({
            text: "이미 가입된 정보가 있습니다.",
            position: "center",
          });
        }
      } else if (!res.ok){
        SwalBasic({ text: "이미 가입된 정보가 있습니다.", position: "center" });
      } else {
        SwalBasic({ text: "서버 통신에 실패하였습니다.", position: "center" });
      }
    } catch (error) {
      console.log(error);
    }
  };
  //인증코드 확인
  const handleVerifyCode = async () => {
    const verifyCheckURL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/auth/confirm/code?email=${signUpData.email}&code=${signUpData.emailCertNumber}`;
    try {
      const verifyCheck = await fetch(verifyCheckURL);
      const checkResult = await verifyCheck.json();
      if (verifyCheck.ok) {
        setStepId(stepId + 1);
      } else {
        console.log(checkResult);
        SwalBasic({ text: "인증코드가 일치하지않습니다.", position: "center" });
      }
    } catch (error) {
      console.log(error);
    }
  };

  //입력값 초기화 및 인증 이전단계로 이동
  const handleEmailCertAgain = async () => {
    Swal.fire({
      text: "현재 단계에서 벗어나시면, 이메일 재인증이 필요합니다.",
      toast: false,
      position: "center",
      showConfirmButton: true,
      showCancelButton: true,
      customClass: {
        container: "my-swal",
        popup: "my-swal-position",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        (signUpData.email = ""),
          (signUpData.password = ""),
          (signUpData.secondPassword = ""),
          (signUpData.name = ""),
          (signUpData.localAddress = ""),
          (signUpData.extraAddress = ""),
          (signUpData.localCode = 0),
          (signUpData.companyName = ""),
          (signUpData.companyPhone = ""),
          (signUpData.registrationNumber = ""),
          (signUpData.registrationImage = ""),
          (signUpData.bankHolder = ""),
          (signUpData.bankAccount = ""),
          (signUpData.bankName = ""),
          (signUpData.bankImage = ""),
          (signUpData.emailCertNumber = ""),
          (signUpData.passwordCheck = false),
          (signUpData.nicknameCheck = false),
          (signUpData.emailformcheck = false),
          setStepId(stepId - 2);
        //모든 입력값 초기화
      } else {
      }
    });
  };

  const handleSignUpPost = async () => {
    const postSignUpURL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/client/join`;
    const address =  `${signUpData.localAddress} ${signUpData.extraAddress}`
    try {
      const postSignUp = await fetch(postSignUpURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: `${signUpData.email}`,
          password: `${signUpData.password}`,
          ceoName: `${signUpData.name}`,
          clientName: `${signUpData.companyName}`,
          clientPhone: `${signUpData.companyPhone}`,
          clientAddress: address,
          clientRegistrationNumber: `${signUpData.registrationNumber}`,
          bankName: `${signUpData.bankName}`,
          bankAccount: `${signUpData.bankAccount}`,
          bankHolder: `${signUpData.bankHolder}`,
          bankImgUrl: "https://wooyano.s3.ap-northeast-2.amazonaws.com/profile/profile.png",
          clientRegistrationImgUrl: "https://wooyano.s3.ap-northeast-2.amazonaws.com/profile/profile.png",
          // bankImgUrl: `${signUpData.bankImgUrl}`,
          // clientRegistrationImgUrl: `${signUpData.registrationImage}`,
        }),
      });
      if (postSignUp.ok) {
        const postSignUpResult = await postSignUp.json();
        console.log(postSignUpResult)
        if (postSignUpResult.success === true) {
          setStepId(stepId + 1);
        } else {
          SwalBasic({
            text: "입점 신청에 실패하였습니다. 잠시후 다시 시도해주세요.",
            position: "center",
          });
          console.log(postSignUpResult)
        }
      }
    } catch (error) {
      SwalBasic({
        text: "입점 신청에 실패하였습니다. 잠시후 다시 시도해주세요.",
        position: "center",
      });
      console.log(error);
    }
  };

  const handleSignUpFetch = async () => {
    let errorText = {
      message: "",
    };

    if (stepId == 1) {
      if (signUpData.email === "" ) {
        errorText.message = "형식에 맞춰 모든 정보를 입력해주세요.";
      }
      if (errorText.message != "") {
        SwalBasic({ text: errorText.message, position: "center" });
      } else {
        handleEmailSendFetch();
      }
    } else if (stepId === 2) {
      if (signUpData.emailCertNumber.length !== 4) {
        SwalBasic({
          text: "인증코드를 전부 입력해주세요.",
          position: "center",
        });
      } else {
        handleVerifyCode();
      }
    } else if (stepId === 3) {
      console.log(signUpData.password.length, signUpData.secondPassword.length)
      if (
        signUpData.password === "" ||
        signUpData.secondPassword === "" ||
        setSignUpData.localAddress === "" ||
        signUpData.extraAddress === "" ||
        signUpData.companyName === "" ||
        setSignUpData.companyPhone === "" ||
        signUpData.registrationNumber === "" ||
        signUpData.registrationImage === "" ||
        setSignUpData.bankHolder === "" ||
        signUpData.bankAccount === "" ||
        signUpData.bankName === "" ||
        setSignUpData.bankImage === ""
      ) {
        SwalBasic({ text: "빈칸 없이 모두 입력해주세요.", position: "center" });
      }
      else if (signUpData.password.length < 6 || signUpData.secondPassword.length < 6 ) {
        SwalBasic({
          text: "비밀번호는 최소 6자리 이상이어야 합니다.",
          position: "center",
        });
      }
      else if (signUpData.password != signUpData.secondPassword) {
        SwalBasic({
          text: "입력하신 비밀번호가 서로 일치하지 않습니다.",
          position: "center",
        });
      } else {
        handleSignUpPost()
      }
    }
  };

  return (
    <div>
      <Box
        mx={2}
        display={"flex"}
        gap={"10px"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {stepId === 4 ? null : (
          <Button
            fullWidth
            onClick={
              stepId === 1
                ? () => router.push("/login")
                : stepId === 3
                ? handleEmailCertAgain
                : () => setStepId(stepId - 1)
            }
          >
            Back
          </Button>
        )}
        <Button
          fullWidth
          onClick={
            stepId === 4
              ? () => router.push("/login")
              : stepId === 1 || stepId === 2 || stepId === 3
              ? handleSignUpFetch
              : () => setStepId(stepId + 1)
          }
        >
          {btnText}
        </Button>
      </Box>
    </div>
  );
}

"use client";
import React from "react";
import Swal from "sweetalert2";
import { Box, Button } from "@mui/material";
import { NavigateBefore } from "@mui/icons-material";
import { FlexBox, FlexRowAlign } from "components/flexbox";

import SwalBasic from "components/error/SwalBasic";
import { useRouter } from "next/navigation";

export default function StepperBtn({
  btnText,
  stepId,
  setStepId,
  forgetPasswordData,
  setForgetPasswordData,
}) {
  const router = useRouter();
  
  async function sendVerifyCode() {
    const emailCheckURL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/client/exist/check?registrationNumber=${forgetPasswordData.registrationNumber}&email=${forgetPasswordData.email}`
    const sendVerifyCodeURL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/auth/send/change/password/code?name=${forgetPasswordData.name}&email=${forgetPasswordData.email}`
    const emailCheckFetch = await fetch(emailCheckURL);
    //API 404오류 해결 후 원복
    // if(emailCheckFetch.ok) {
    //   emailCheckFetch.json().then(async (data) => {
    //     if(data.result.checkResult === true) {
    //       const sendVerifyCode = await fetch(sendVerifyCodeURL)
    //       if(sendVerifyCode.ok) {
    //         sendVerifyCode.json().then((data) => {
    //           if(data.code === 200) {
    //             setStepId(stepId + 1);
    //           } else {
    //             SwalBasic({ text: "인증코드 요청에 실패하였습니다.", position: "center" });
    //           }
    //         })
    //       } else {
    //         SwalBasic({ text: "인증코드 요청에 실패하였습니다.", position: "center" });
    //       }
    //     } else {
    //       SwalBasic({ text: "가입정보가 없습니다.", position: "center" });
    //     }
    //   })
    // } else {
    //   SwalBasic({ text: "가입정보가 없습니다.", position: "center" });
    // }

    const sendVerifyCode = await fetch(sendVerifyCodeURL)
    if(sendVerifyCode.ok) {
      sendVerifyCode.json().then((data) => {
        if(data.code === 200) {
          setStepId(stepId + 1);
        } else {
          SwalBasic({ text: "인증코드 요청에 실패하였습니다.", position: "center" });
        }
      })
    } else {
      SwalBasic({ text: "인증코드 요청에 실패하였습니다.", position: "center" });
    }
  }

  async function checkVerifyCode() {
    const checkVerifyCodeURL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/auth/confirm/code?email=${forgetPasswordData.email}&code=${forgetPasswordData.emailCertNumber}`
    const checkVerifyCodeFetch = await fetch(checkVerifyCodeURL)
    if(checkVerifyCodeFetch.ok) {
      checkVerifyCodeFetch.json().then((data) => {
        if(data.code === 200) {
          setStepId(stepId + 1);
        } else {
          SwalBasic({ text: "인증에 실패하였습니다.", position: "center" });
        }
      })
    } else {
      SwalBasic({ text: "인증코드가 일치하지 않습니다.", position: "center" });
    }
  }

  async function changePassword() {
    if(forgetPasswordData.newPassword === "" ||  forgetPasswordData.checkPassword === "") {
      SwalBasic({ text: "모두 입력해주세요.", position: "center" });
    }
    else if(forgetPasswordData.newPassword !== forgetPasswordData.checkPassword) {
      SwalBasic({ text: "비밀번호가 서로 일치하지 않습니다.", position: "center" });
    }
    else {
      const changePasswordURL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/client/password`
      const changePasswordFetch = await fetch(changePasswordURL,{
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "email" : `${forgetPasswordData.email}`,
          "password" : `${forgetPasswordData.newPassword}`,
        }), 
      });
      if (changePasswordFetch.ok) {
        changePasswordFetch.json().then((data)=> {
          if(data.code === 200) {
            setStepId(stepId + 1);
          } else {
            SwalBasic({ text: "비밀번호변경을 실패하였습니다.", position: "center" });
          }
        })
      }
    }
  }

  async function handleForgetPasswordFetch() {
    let errorText = {
      message: "",
    };

    if (stepId == 1) {
      if(forgetPasswordData.email === "") {
        SwalBasic({ text: "형식에 맞게 모두 입력해주세요.", position: "center" });
      } else {
        sendVerifyCode()
      }
    } else if (stepId == 2) {
      if(forgetPasswordData.emailCertNumber.length !== 4) {
        SwalBasic({ text: "인증코드를 전부 입력해주세요. ", position: "center" });
      } else {
        checkVerifyCode();
      }
    } else if (stepId == 3) {
      changePassword();
    } else if (stepId == 4) {
      router.push("/login")
    }
  };


  const handleBackBtn = () => {
    if (stepId === 3) {
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
          (forgetPasswordData.emailCertNumber = ""),
            (forgetPasswordData.newPassword = ""),
            (forgetPasswordData.checkPassword = "");
          setStepId(stepId - 2);
        } else {
        }
      });
    } else {
        setStepId(stepId - 1);
    }
  };

  return (
    <>
      <Box maxWidth={1000} mx={"auto"}>
        <FlexRowAlign height="100%" bgcolor="background.paper">
          <Box textAlign="center" maxWidth={550} width="100%" padding={2}>
            <FlexBox gap={2}>
              {stepId === 1 ? null : (
                <Button color="secondary" fullWidth onClick={handleBackBtn}>
                  Back
                </Button>
              )}
              <Button fullWidth onClick={handleForgetPasswordFetch}>
                {btnText}
              </Button>
            </FlexBox>
            <Box mt={3}>
              <Button
                disableRipple
                variant="text"
                color="secondary"
                onClick={() => navigate("/login")}
              >
                <NavigateBefore fontSize="small" /> 로그인하기
              </Button>
            </Box>
          </Box>
        </FlexRowAlign>
      </Box>
    </>
  );
}

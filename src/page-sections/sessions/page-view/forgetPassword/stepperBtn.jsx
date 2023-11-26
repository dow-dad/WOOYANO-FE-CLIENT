"use client";
import React from "react";
import Swal from "sweetalert2";
import { Box, Button } from "@mui/material";
import { NavigateBefore } from "@mui/icons-material";
import { FlexBox, FlexRowAlign } from "components/flexbox";

import SwalBasic from "components/error/SwalBasic";

export default function StepperBtn({
  btnText,
  stepId,
  setStepId,
  forgetPasswordData,
  setForgetPasswordData,
}) {
  async function sendVerfyCode() {
    const emailCheckURL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/client/exist/check?registrationNumber=${forgetPasswordData.registerationNumber}&email=${forgetPasswordData.email}`
    const emailCheckFetch = await fetch(emailCheckURL);
    if(!emailCheckFetch.ok) {
      emailCheckFetch.json().then((data) => {
        console.log(data);
      })
    } else {
      SwalBasic({ text: "가입정보가 없습니다.", position: "center" });
    }
  }

  async function handleForgetPasswordFetch() {
    let errorText = {
      message: "",
    };

    if (stepId == 1) {
      if(forgetPasswordData.email === "" || forgetPasswordData.registerationNumber === "") {
        SwalBasic({ text: "모두 입력해주세요.", position: "center" });
      } else {
        sendVerfyCode()
      }
    } else if (stepId == 2) {
      setStepId(stepId + 1);
    } else if (stepId == 3) {
      setStepId(stepId - 2);
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

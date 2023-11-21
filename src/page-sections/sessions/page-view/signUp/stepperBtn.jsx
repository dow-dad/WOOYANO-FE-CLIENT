"use client";
import React, { SetStateAction } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { Box, Button } from "@mui/material";

export default function StepperBtn({
  btnText,
  stepId,
  setStepId,
  signUpData,
  setSignUpData,
}) {
  const router = useRouter();

  const handleSignUpFetch = async () => {
    let errorText = {
      message: "",
    };

    if (stepId == 1) {
      console.log(signUpData.email);
      if (signUpData.email === "" || signUpData.username === "") {
        errorText.message = "모든 정보를 입력해주세요.";
      }
      if (errorText.message != "") {
        Swal.fire({
          text: errorText.message,
          toast: false,
          position: "center",
          showConfirmButton: false,
          timer: 1000,
          timerProgressBar: false,
          customClass: {
            container: "my-swal",
            popup: "my-swal-position",
          },
        });
      } else {
        setStepId(stepId + 1);
      }
    } else if (stepId === 2) {
      console.log(signUpData.emailCertNumber.length);
      // setStepId(stepId + 1);
      if (signUpData.emailCertNumber.length !== 4) {
        Swal.fire({
          text: `인증번호를 정확히 입력해주세요.`,
          toast: false,
          position: "center",
          showConfirmButton: false,
          timer: 1000,
          timerProgressBar: false,
          customClass: {
            container: "my-swal",
            popup: "my-swal-position",
          },
        });
      } else {
        Swal.fire({
          text: `인증이 완료되었습니다.`,
          toast: false,
          position: "center",
          showConfirmButton: false,
          timer: 1000,
          timerProgressBar: false,
          customClass: {
            container: "my-swal",
            popup: "my-swal-position",
          },
        });
        setStepId(stepId + 1);
      }
    } else if (stepId === 3) {
      setStepId(stepId + 1);
      console.log(signUpData);
    }
  };

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
        setStepId(stepId - 2);
        //모든 입력값 초기화
      } else {
      }
    });
  };

  return (
    <div>
      <Box
        maxWidth={1000}
        mx={2}
        mt={10}
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

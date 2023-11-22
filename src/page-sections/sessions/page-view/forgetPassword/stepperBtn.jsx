"use client";
import React from "react";
import Swal from "sweetalert2";
import { Box, Button } from "@mui/material";
import { NavigateBefore } from "@mui/icons-material";
import { FlexBox, FlexRowAlign } from "components/flexbox";

export default function StepperBtn({
  btnText,
  stepId,
  setStepId,
  forgetPasswordData,
  setForgetPasswordData,
}) {

  const handleForgetPasswordFetch = async () => {
    let errorText = {
      message: "",
    };

    if (stepId == 1) {
      setStepId(stepId + 1);
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

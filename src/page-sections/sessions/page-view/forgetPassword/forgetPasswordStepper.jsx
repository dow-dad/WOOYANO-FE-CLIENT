"use client";
import React, { useState, useEffect } from "react";

import StepperBtn from "./stepperBtn";
import ForgetPassword from "./forgetPassword";
import VerifyCode from "./verifyCode";
import ChangePassword from "./changePassword";
import ChangePasswordResult from "./changePasswordResult";

export default function ForgetPasswordStepper() {
  const [stepId, setStepId] = useState(1);
  const [forgetPasswordData, setForgetPasswordData] = useState({
    name : "",
    email: "",
    registrationNumber:"",
    emailCertNumber: "",
    newPassword: "",
    checkPassword: "",
  });

  const stepperComponent = [
    {
      1: (
        <ForgetPassword
          forgetPasswordData={forgetPasswordData}
          setForgetPasswordData={setForgetPasswordData}
        />
      ),
      btnTxt: "Send Code",
    },
    {
      2: (
        <VerifyCode
          forgetPasswordData={forgetPasswordData}
          setForgetPasswordData={setForgetPasswordData}
        />
      ),
      btnTxt: "Verify",
    },
    {
      3: (
        <ChangePassword
          forgetPasswordData={forgetPasswordData}
          setForgetPasswordData={setForgetPasswordData}
        />
      ),
      btnTxt: "Continue",
    },
    {
      4: (
        <ChangePasswordResult
          forgetPasswordData={forgetPasswordData}
          setForgetPasswordData={setForgetPasswordData}
        />
      ),
      btnTxt: "Sign In",
    }
  ];

  useEffect(() => {}, [forgetPasswordData]);

  return (
    <div>
      {stepperComponent[stepId - 1][stepId]}
      <StepperBtn
        forgetPasswordData={forgetPasswordData}
        setForgetPasswordData={setForgetPasswordData}
        btnText={stepperComponent[stepId - 1]["btnTxt"]}
        stepId={stepId}
        setStepId={setStepId}
      />
    </div>
  );
}

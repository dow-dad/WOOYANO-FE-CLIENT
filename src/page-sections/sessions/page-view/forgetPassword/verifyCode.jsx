"use client";
import { useState,useEffect } from "react";
import { Box, Container,LinearProgress } from "@mui/material";
import OtpInput from "react-otp-input"; // CUSTOM COMPONENTS
import { H1, Paragraph } from "components/typography";
import { isDark } from "utils/constants";

function VerifyCode(props){
  const { forgetPasswordData, setForgetPasswordData } = props;
  const [remainTime, setRemainTime] = useState(180);

  //3분 타이머 및 progress bar 남은 시간 표시
  useEffect(() => {
    const timer = setInterval(() => {
      setRemainTime((oldProgress) => {
        if (oldProgress <= 0) {
          clearInterval(timer);
          return 0;
        }
        return oldProgress - (100 / 180);
      });
    }, 1000);
  
    return () => {
      clearInterval(timer);
    };
  }, []);

  const [otp, setOtp] = useState("");

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}분 ${String(remainingSeconds).padStart(2, "0")}초`;
  };

  useEffect(()=>{
      setForgetPasswordData({
        ...forgetPasswordData,
        emailCertNumber: otp,
      });
  },[otp])


  return <Container>
      <Box textAlign="center" pt={{
      sm: 6,
      xs: 4
    }}>
        <Box maxWidth={120} margin="auto">
          <img src="/static/pages/email.svg" alt="email" width="100%" />
        </Box>

        <H1 mt={{
        sm: 4,
        xs: 2
      }} mb={2} fontSize={{
        sm: 52,
        xs: 36
      }}>
          Check your email!
        </H1>

        <Paragraph mt={0.5} margin="auto" maxWidth={650} color="text.secondary" fontSize={{
        sm: 18,
        xs: 14
      }}>  
      {`${forgetPasswordData.email}`}
      <br />
      위의 메일로 인증코드가 발송되었습니다.
        </Paragraph>

        <Box maxWidth={500} mt={6} display="flex" flexDirection="column" gap={3} mx={"auto"}>
        <p>{formatTime(Math.floor(remainTime))}후 인증코드가 만료됩니다.</p>
        <LinearProgress variant="determinate" value={(remainTime / 180) * 100}/>      
        </Box>
        <Box maxWidth={450} margin="auto" mt={6}>
          <OtpInput value={otp} numInputs={4} onChange={setOtp} placeholder="----" renderInput={props => <Box component="input" {...props} sx={{
          all: "unset",
          width: 70,
          height: 70,
          fontSize: 18,
          flexBasis: 70,
          borderRadius: 4,
          fontWeight: 600,
          backgroundColor: theme => isDark(theme) ? "grey.800" : "white",
          input: {
            textAlign: "center"
          },
          "::placeholder": {
            color: "text.primary"
          }
        }} />} containerStyle={{
          gap: "1rem",
          justifyContent: "center",
          marginBottom: "3rem"
        }} />
        </Box>
      </Box>
    </Container>;
};

export default VerifyCode;
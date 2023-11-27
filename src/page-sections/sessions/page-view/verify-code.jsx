"use client";
import { useState,useEffect } from "react";
import { Box, Button, Container,LinearProgress } from "@mui/material";
import OtpInput from "react-otp-input"; // CUSTOM COMPONENTS
import { H1, Paragraph, Span } from "components/typography";
import ChevronLeft from "icons/ChevronLeft"; // CUSTOM UTILS METHOD
import { isDark } from "utils/constants";

const VerifyCodePageView = () => {
  const [remainTime, setRemainTime] = useState(100);

  //3분 타이머 및 progress bar 남은 시간 표시
  useEffect(() => {
    const timer = setInterval(() => {
      setRemainTime((oldProgress) => {
        if (oldProgress === 0) {
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
  return <Container>
      <Box textAlign="center" py={{
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
      {`${`wooyano@example.com`}`}
      <br />
      위의 메일로 인증코드가 발송되었습니다.
        </Paragraph>

        <Box maxWidth={500} mt={6} display="flex" mx={"auto"}>
        <LinearProgress variant="determinate" value={remainTime}/>      
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

          <Button fullWidth onClick={()=>{console.log(otp)}}>Verify</Button>
        </Box>

        <Paragraph mt={4} fontSize={16}>
          인증코드가 오지 않거나 인증시간이 만료되었나요?{" "}
          <Span color="error.main" fontWeight={500}>
            인증코드 다시 보내기
          </Span>
        </Paragraph>

        <Button variant="text" disableRipple>
          <ChevronLeft /> 로그인하기
        </Button>
      </Box>
    </Container>;
};

export default VerifyCodePageView;
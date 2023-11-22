"use client";
import { H5, Paragraph } from "components/typography"; // CUSTOM SESSIONS LAYOUT
import { Box } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useState, ChangeEvent, useRef, useEffect } from "react";

export default function SignUpCertNumber(props) {
  const { signUpData, setSignUpData } = props;
  const [certNumbers, setCertNumbers] = useState(["", "", "", ""]);
  const inputRefs = useRef([null, null, null, null]);

  const handleInputChange = (index, value) => {
    const newCertNumbers = [...certNumbers];
    newCertNumbers[index] = value;
    setCertNumbers(newCertNumbers);

    if (index < 3 && value !== "") {
      inputRefs.current[index + 1]?.focus();
    }

    const certNumber = newCertNumbers.join("");
    setSignUpData((prevData) => ({ ...prevData, emailCertNumber: certNumber }));
  };

  const handleKeyDown = (index, event) => {
    if (event.key === "Backspace" && index > 0 && certNumbers[index] === "") {
      const prevInput = inputRefs.current[index - 1];
      if (prevInput) {
        prevInput.focus();
      }
    }
  };

  //제한시간 관련
  const [countdown, setCountdown] = useState(180);
  const [timer, setTimer] = useState(null);
  const [formTime, setFormTime] = useState("3:00");
  const router = useRouter();

  const startCountdown = () => {
    setTimer(
      setInterval(() => {
        setCountdown((prevCountdown) => {
          if (prevCountdown === -1) {
            clearInterval(timer);
            return 0;
          }

          // 0:00 형식으로 시각화
          const minutes = Math.floor(prevCountdown / 60);
          const seconds = prevCountdown % 60 > 0 ? prevCountdown % 60 : 0;
          const formattedSeconds =
            seconds < 10
              ? `0${seconds}`
              : seconds == 0
              ? "00"
              : String(seconds);
          setFormTime(`${minutes}:${formattedSeconds}`);
          return prevCountdown - 1;
        });
      }, 1000)
    );
  };

  useEffect(() => {
    startCountdown();
  }, []);

  const NumStyle = {
    display: "block",
    border: "1px solid #CBD5E0", // neutral-200
    fontSize: "40px", // text-40px
    backgroundColor: "white", // bg-gray-200
    width: "7vh",
    height: "10vh", // h-20
    fontWeight: "bold", // md:font-bold
    borderRadius: "2xl", // rounded-2xl
    textAlign: "center", // text-center,
    borderRadius: "12px",
  };

  return (
    <Box p={2}>
      <H5
        fontSize={{
          sm: 30,
          xs: 25,
        }}
      >
        Email Authentication
      </H5>

      <Paragraph mt={4} color="text.secondary">
        <strong>{signUpData.email}</strong>로 발송되었습니다.
      </Paragraph>
      <Paragraph mt={1} color="text.secondary">
        {formTime} 이후 인증코드가 만료됩니다.
      </Paragraph>
      <Paragraph mt={1} mb={4} color="text.secondary">
        이메일로 받으신 인증코드를 입력해주세요.
      </Paragraph>
      <Box
        pt={6}
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap={1.5}
      >
        {[0, 1, 2, 3].map((index) => (
          <input
            key={index}
            id={`certInput_${index}`}
            type="text"
            value={certNumbers[index]}
            style={NumStyle}
            maxLength={1}
            onChange={(e) => handleInputChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            ref={(el) => (inputRefs.current[index] = el)}
          />
        ))}
      </Box>
    </Box>
  );
}

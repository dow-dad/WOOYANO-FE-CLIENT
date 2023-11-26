"use client";
import React, { ChangeEvent, FC, useEffect, useState } from "react";
// import { DaumAddressType } from "@/types/DaumAddrssType";
import Swal from "sweetalert2";
// import PostCodeDaum from "@/components/widget/postCodeDaum";
import {
  Button,
  Grid,
  TextField,
  Box,
  Select,
  MenuItem,
  OutlinedInput,
  Divider,
} from "@mui/material";
import { H5, Paragraph } from "components/typography";

export default function SignUpResult(props) {
  const { signUpData } = props;

  return (
    <Box p={2}>
      <H5
        fontSize={{
          sm: 30,
          xs: 25,
        }}
      >
        Sign up Result
      </H5>
      <Paragraph mt={1} mb={4} color="text.secondary">
        저희 우야노에 가입해주셔서 감사합니다!
      </Paragraph>

      <Box my={2}>
        <Paragraph mt={1} mb={1.5} color="text.secondary">
          회원가입 신청이 완료되었습니다.
        </Paragraph>
        <Paragraph mt={1} mb={1.5} color="text.secondary">
          승인까지 3~5 영업일 소요됩니다.
        </Paragraph>
        <Paragraph mt={1} mb={1.5} color="text.secondary">
          결과는 아래 기재된 번호 혹은 이메일로 연락드립니다.
        </Paragraph>
      </Box>

      {/* 로그인 정보 */}
      <Divider
        sx={{
          mt : 6,
          mb: 1,
          mx: 2,
          borderColor: "grey.200",
          borderWidth: 1,
        }}
      >
        <Paragraph color="text.secondary">
        CEO Information
        </Paragraph>
      </Divider>

      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 1.5,
            mt: 1.5,
          }}
        >
          <Grid sx={{ flexBasis: "100%" }}>
            <Paragraph>Name</Paragraph>
            <TextField
              fullWidth
              className="mt-1.5 "
              defaultValue={`${signUpData.name}`}
              inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid sx={{ flexBasis: "100%" }}>
            <Paragraph>Email</Paragraph>
            <TextField
              className="mt-1.5 "
              fullWidth
              defaultValue={`${signUpData.email}`}
              inputProps={{ readOnly: true }}
              sx={{ flexGrow: 1 }}
            />
          </Grid>
        </Box>
      </Box>

      {/* 회사 정보 */}
      <Divider
        sx={{
          mt : 3,
          mb: 1,
          mx: 2,
          borderColor: "grey.200",
          borderWidth: 1,
        }}
      >
        <Paragraph color="text.secondary">
        Company Information
        </Paragraph>
      </Divider>
      <Box>
        <Grid maxWidth={1 / 2} mt={1.5}>
          <Paragraph>Company Name</Paragraph>
          <TextField
            fullWidth
            className="mt-1.5 "
            defaultValue={`${signUpData.companyName}`}
            inputProps={{ readOnly: true }}
          />
        </Grid>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 1.5,
            mt: 1.5,
          }}
        >
          <Grid sx={{ flexBasis: "100%" }}>
            <Paragraph>Company Phone Number</Paragraph>
            <TextField
              fullWidth
              className="mt-1.5 "
              defaultValue={`${signUpData.companyPhone}`}
              inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid sx={{ flexBasis: "100%" }}>
            <Paragraph>Registration Number</Paragraph>
            <TextField
              className="mt-1.5 "
              fullWidth
              defaultValue={`${signUpData.registrationNumber}`}
              inputProps={{ readOnly: true }}
              sx={{ flexGrow: 1 }}
            />
          </Grid>
        </Box>
        {/* 주소*/}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 1.5,
            mt: 1.5,
          }}
        >
          <Grid sx={{ flexBasis: "100%" }} mt={1.5}>
            <Paragraph>Address</Paragraph>
            <TextField
              fullWidth
              className="mt-1.5 "
              defaultValue={`${signUpData.localAddress}`}
              inputProps={{ readOnly: true }}
            />
            <Grid mt={1}>
              <TextField
                fullWidth
                className="mt-1.5 "
                defaultValue={`${signUpData.extraAddress}`}
                inputProps={{ readOnly: true }}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* 은행 정보 */}
      <Divider
        sx={{
          mt : 3,
          mb: 1,
          mx: 2,
          borderColor: "grey.200",
          borderWidth: 1,
        }}
      >
        <Paragraph color="text.secondary">
        Bank Information
        </Paragraph>
      </Divider>
      <Box>
        <Box>
          <Grid maxWidth={1 / 2} mt={1.5}>
            <Paragraph>Bank Holder</Paragraph>
            <TextField
              fullWidth
              className="mt-1.5 "
              defaultValue={`${signUpData.bankHolder}`}
              inputProps={{ readOnly: true }}
            />
          </Grid>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 1.5,
              mt: 1.5,
            }}
          >
            <Grid sx={{ flexBasis: "100%" }}>
              <Paragraph>Bank Name</Paragraph>
              <TextField
                fullWidth
                className="mt-1.5 "
                defaultValue={`${signUpData.bankName}`}
                inputProps={{ readOnly: true }}
              />
            </Grid>
            <Grid sx={{ flexBasis: "100%" }}>
              <Paragraph>Bank Account</Paragraph>
              <TextField
                className="mt-1.5 "
                fullWidth
                defaultValue={`${signUpData.bankAccount}`}
                inputProps={{ readOnly: true }}
                sx={{ flexGrow: 1 }}
              />
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

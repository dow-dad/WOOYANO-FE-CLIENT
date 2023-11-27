"use client";
import { Box, Button, Stack, TextField, Grid } from "@mui/material";
import NavigateBefore from "@mui/icons-material/NavigateBefore"; // CUSTOM DEFINED HOOK
import useNavigate from "hooks/useNavigate"; // CUSTOM COMPONENTS
import { H5, Paragraph } from "components/typography";
import FlexRowAlign from "components/flexbox/FlexRowAlign";
import { useRouter } from "next/navigation";

import * as Yup from "yup";
import { useFormik } from "formik"; // CUSTOM DEFINED HOOK
import SwalBasic from "components/error/SwalBasic";


const ForgetEmailPageView = () => {
  const navigate = useNavigate();
  const router = useRouter();

  //유효성 검사
  const initialValues = {
    name: "",
    registrationNumber: "",
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("이름을 입력해주세요."),
    registrationNumber: Yup.number().typeError("숫자만 입력이 가능합니다.").required("사업자등록번호를 하이픈('-')제외하여 입력해주세요.")
  });
  const { errors, values, touched, isValid, handleBlur, handleChange } = useFormik({
    initialValues,
    validationSchema,
    isValid: false
  })

  
  async function findEmail() {
    const findEmailURL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/client/email/find?ceoName=${values.name}&registrationNumber=${values.registrationNumber}`
    const findEmailFetch = await fetch(findEmailURL);
    if (findEmailFetch.ok) {
      findEmailFetch.json().then((data) => {
        const resultEmail = data.result.email;
        router.push(
          `/forget-email/result?email=${resultEmail}`
        )
      })
    } else {
      SwalBasic({ text: "가입정보가 없습니다.", position: "center" });
    }
  }
  const handleFindEmail = () => {
      if (values.name === "" || values.registrationNumber === "" ) {
        SwalBasic({ text: "모두 입력해주세요.", position: "center" });
      } else if(!isValid) {
        SwalBasic({ text: "입력 형식을 지켜주세요.", position: "center" });
      } else {
        findEmail()
      }
  };

  return (
    <FlexRowAlign height="100%" bgcolor="background.paper">
      <Box textAlign="center" maxWidth={550} width="100%" padding={2}>
        <Box display="flex" justifyContent={"center"}>
          <img src="/static/forget-passwod.svg" alt="Logo" />
        </Box>
        <H5 mt={2}>이메일을 잊으셨나요?</H5>

        <Paragraph color="text.secondary" mt={1.5} px={4}>
          저희 서비스에 가입된
        </Paragraph>
        <Paragraph color="text.secondary" mt={1} px={4}>
          대표자 명과 사업자등록번호를 통해 찾을 수 있어요.
        </Paragraph>
        <form>
          <Stack gap={3} mt={5}>
            <Grid mb={1}>
              <TextField
                fullWidth
                label="Name"
                type="name"
                name="name"
                onBlur={handleBlur}
                value={values.name}
                onChange={handleChange}
                helperText={touched.name && errors.name}
                error={Boolean(touched.name && errors.name)}
              />
              <Grid mt={3}>
                <TextField
                  fullWidth
                  label="Registration Number"
                  type="registrationNumber"
                  name="registrationNumber"
                  onBlur={handleBlur}
                  value={values.registrationNumber}
                  onChange={handleChange}
                  helperText={touched.registrationNumber && errors.registrationNumber}
                  error={Boolean(touched.registrationNumber && errors.registrationNumber)}
                />
              </Grid>
            </Grid>
            <Button
              fullWidth
              onClick={handleFindEmail}
              variant="contained">
              Find Email
            </Button>
            <Button
              disableRipple
              variant="text"
              color="secondary"
              onClick={() => navigate("/login")}
            >
              <NavigateBefore fontSize="small" /> 로그인하기
            </Button>
          </Stack>
        </form>
      </Box>
    </FlexRowAlign>
  );
};

export default ForgetEmailPageView;

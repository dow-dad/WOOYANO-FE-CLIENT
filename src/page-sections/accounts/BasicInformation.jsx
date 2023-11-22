'use client'
import { Fragment, useState } from "react";
import { Box, Button, Card, Divider, Grid, styled, TextField, useTheme, Badge, Stack, alpha } from "@mui/material";
import * as Yup from "yup";
import { useFormik } from "formik"; // CUSTOM ICON COMPONENTS
import DateRange from "icons/DateRange";
import MapMarkerIcon from "icons/MapMarkerIcon"; // CUSTOM COMPONENTS
import { FlexBetween, FlexBox } from "components/flexbox";
import { H6, Paragraph, Small } from "components/typography";
import Globe from "icons/Globe";
import UserOutlined from "icons/UserOutlined";
import EmailOutlined from "icons/EmailOutlined";
import BriefcaseOutlined from "icons/BriefcaseOutlined";
import Call from "icons/Call";

const ContentWrapper = styled(Box)(({
  theme
}) => ({
  zIndex: 1,
  marginTop: 55,
  position: "relative",
  [theme.breakpoints.down("sm")]: {
    paddingLeft: 20,
    paddingRight: 20
  }
}));
const CoverPicWrapper = styled(Box)(({
  theme
}) => ({
  top: 0,
  left: 0,
  height: 125,
  width: "100%",
  overflow: "hidden",
  position: "absolute",
  backgroundColor: theme.palette.background.default
}));

const BasicInformation = () => {
  const theme = useTheme();
  const [isOpenModal, setIsOpenModal] = useState(false)

  const hadleOpenModal = () => {
    setIsOpenModal(!isOpenModal)
  }


  const initialValues = {
    ceo_name: "임찬섭",
    client_name: "(주)우야노 주식회사",
    client_id: "wooyano@gmail.com",
    client_phone: "010-9999-8888",
    client_registration: "09-1234-5678",
    client_address: "부산 광역시 해운대구 우동 리더스마크빌 스파로스 아카데미",

  };
  const validationSchema = Yup.object({
    ceo_name: Yup.string().min(2, "2자 이상 작성해 주세요.").required("대표자명을 입력해 주세요."),
    client_name: Yup.string().required("상호명을 입력해 주세요."),
    client_id: Yup.string().email("유효한 이메일이 아닙니다.").required("이메일이 필요합니다."),
    client_phone: Yup.string().min(9).required("사업자 전화번호를 입력해주세요."),
    client_registration: Yup.string().required("사업자 번호를 입력해주세요."),
    client_address: Yup.string().required("사업자 주소를 제대로 입력해주세요."),
  });
  const {
    values,
    errors,
    handleSubmit,
    handleChange,
    handleBlur,
    touched
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: values => console.log(values)
  });

  // console.log(values);

  const renderClientEdit = () => {
    return <>
      <div onClick={() => hadleOpenModal()} style={{ background: "black", width: "100vw", height: "100vh", position: "fixed", top: 0, left: 0, zIndex: 1200, opacity: 0.6 }}></div>
      <div style={{ backgroundColor: "white", position: "fixed", width: "70vw", height: "70vh", zIndex: 1201, borderRadius: "10px", left: "15%", top: "10%" }}>
        {
          /* BASIC INFORMATION FORM SECTION */
        }
        <Card sx={{
          mt: 3
        }}>
          <H6 fontSize={14} px={3} py={2}>
            회원 정보
          </H6>

          <Divider />

          <form onSubmit={handleSubmit}>
            <Box margin={3}>
              <Grid container spacing={3}>
                <Grid item sm={6} xs={12}>
                  <TextField fullWidth InputProps={{readOnly:true}} name="ceo_name" label="대표자명" variant="outlined" onBlur={handleBlur} onChange={handleChange} value={values.ceo_name} helperText={touched.ceo_name && errors.ceo_name} error={Boolean(touched.ceo_name && errors.ceo_name)} />
                </Grid>

                <Grid item sm={6} xs={12}>
                  <TextField fullWidth InputProps={{readOnly:true}} name="client_name" label="상호명" variant="outlined" onBlur={handleBlur} onChange={handleChange} value={values.client_name} helperText={touched.client_name && errors.client_name} error={Boolean(touched.client_name && errors.client_name)} />
                </Grid>

                <Grid item sm={6} xs={12}>
                  <TextField fullWidth InputProps={{readOnly:true}} name="client_id" label="이메일" variant="outlined" onBlur={handleBlur} value={values.client_id} helperText={touched.client_id && errors.client_id} error={Boolean(touched.client_id && errors.client_id)} />
                </Grid>

                <Grid item sm={6} xs={12}>
                  <TextField fullWidth name="client_phone" label="사업자 전화번호" variant="outlined" onBlur={handleBlur} onChange={handleChange} value={values.client_phone} helperText={touched.client_phone && errors.client_phone} error={Boolean(touched.client_phone && errors.client_phone)} />
                </Grid>

                <Grid item sm={6} xs={12}>
                  <TextField fullWidth InputProps={{readOnly:true}} name="client_registration" label="사업자 번호" variant="outlined" onBlur={handleBlur} onChange={handleChange} value={values.client_registration} helperText={touched.client_registration && errors.client_registration} error={Boolean(touched.client_registration && errors.client_registration)} />
                </Grid>

                <Grid item sm={6} xs={12}>
                  <TextField fullWidth name="client_address" label="사업자 주소" variant="outlined" onBlur={handleBlur} onChange={handleChange} value={values.client_address} helperText={touched.client_address && errors.client_address} error={Boolean(touched.client_address && errors.client_address)} />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained">
                    저장
                  </Button>
                  <Button 
                  variant="outlined" 
                  sx={{
                    ml: 2
                  }}
                  onClick={()=>hadleOpenModal()}
                  >
                    취소
                  </Button>
                </Grid>


              </Grid>
            </Box>
          </form>
        </Card>
      </div>
    </>
  }
  return <Fragment>
    {isOpenModal ? renderClientEdit() : null}
    <Card sx={{
      padding: 3,
      position: "relative",
    }}>
      {
        /* COVER IMAGE SECTION */
      }
      <CoverPicWrapper>
        <img width="100%" height="100%" alt="Team Member" src="/static/cover/user-cover-pic.png" style={{
          objectFit: "cover"
        }} />
      </CoverPicWrapper>

      {
        /* USER INFO SECTION */
      }
      <ContentWrapper>


        <Box mt={9}>
          <H6 fontSize={18} textAlign="center">
            (주)우야노 주식회사
          </H6>

          <FlexBetween maxWidth={330} flexWrap="wrap" margin="auto" mt={1}>
            <FlexBox alignItems="center" gap={1} color="grey.500">
              <MapMarkerIcon sx={{
                fontSize: 18
              }} />
              <Paragraph>사업자 주소:{initialValues.client_address}</Paragraph>
            </FlexBox>

            <FlexBox alignItems="center" gap={1} color="grey.500">
              <DateRange sx={{
                fontSize: 18
              }} />
              <Paragraph>가입일:</Paragraph>
            </FlexBox>
          </FlexBetween>


          <FlexBox mt={3} gap={1} justifyContent={"end"}>
            <Badge color="secondary">
              <Box fullWidth sx={{ border: 1, padding: 1, fontSize: 11, borderRadius: 2, color: "grey.500", backgroundColor: "grey.100", border: "grey" }}>
                사업자 상태
              </Box>
            </Badge>

          </FlexBox>

        </Box>
      </ContentWrapper>
    </Card>



    <Card sx={{
      padding: 3
    }}>
      <FlexBetween>
        <H6 fontSize={16}>업체 상세 정보</H6>
      </FlexBetween>

      <Stack mt={3} spacing={2}>
        <ListItem title="이메일" Icon={EmailOutlined} subTitle={`${initialValues.client_id}`} color={theme.palette.grey[400]} />

        <ListItem Icon={Globe} title="Language" subTitle="English, Spanish" color={theme.palette.primary.main} />

        <ListItem title="사업자 이름" subTitle={`${initialValues.client_name}`} Icon={UserOutlined} color={theme.palette.warning[600]} />

        <ListItem Icon={MapMarkerIcon} title="주소" subTitle={`${initialValues.client_address}`} color={theme.palette.success.main} />

        <ListItem title="사업자 번호" subTitle={`${initialValues.client_phone}`} Icon={Call} color={theme.palette.error.main} />

        <ListItem Icon={BriefcaseOutlined} title="사업자 번호" subTitle={`${initialValues.client_registration}`} color={theme.palette.warning.main} />
      </Stack>
      <Button sx={{ marginTop: 3 }} type="submit" variant="contained" onClick={() => { hadleOpenModal() }}>
        수정하기
      </Button>
    </Card>
  </Fragment>
};

function ListItem({
  title,
  subTitle,
  Icon,
  color
}) {
  return <Stack direction="row" alignItems="center" spacing={1.5}>
    <Stack alignItems="center" justifyContent="center" sx={{
      width: 30,
      height: 30,
      borderRadius: "4px",
      backgroundColor: alpha(color, 0.2)
    }}>
      <Icon sx={{
        color
      }} />
    </Stack>

    <Box>
      <Small lineHeight={1} color="text.secondary">
        {title}
      </Small>
      <H6 fontSize={14}>{subTitle}</H6>
    </Box>
  </Stack>;
}

export default BasicInformation;
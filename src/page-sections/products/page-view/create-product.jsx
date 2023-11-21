"use client";

import { useCallback, useState } from "react";
import { KeyboardArrowDown } from "@mui/icons-material";
import { Box, Button, Card, Grid, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup"; // CUSTOM COMPONENTS

import { H6 } from "components/typography";
import { DropZone } from "components/dropzone";
import FlexBox from "components/flexbox/FlexBox";
import { QuillEditor } from "components/quill-editor";
import { IconWrapper } from "components/icon-wrapper"; // CUSTOM ICON COMPONENT

import ShoppingBasket from "icons/ShoppingBasket";

const CreateProductPageView = ({ createProductModal, setCreateProdjctModal }) => {

  const handleChangeDescription = value => {
    if (value.length > 20)
      console.log(value);
  };


  const validationSchema = Yup.object({
    manufacturer: Yup.string().max(10).required("상품이름을 작성해주세요."),
    model: Yup.string().required("Model is Required!"),
    id: Yup.string().required("ID Number is Required!"),
    priority: Yup.string().min(9).required("Prority is required!"),
    name: Yup.string().required("Name is Required!"),
    pro_model: Yup.string().required("Model is Required!"),
    meta_title: Yup.string().required("Meta Title is Required!"),
    meta_tags: Yup.string().required("Meta Tags is Required!"),
    address: Yup.string().required("Address is Required!"),
    zipCode: Yup.number().required("Zip Code is Required!")
  });
  const initialValues = {
    manufacturer: "",
    model: "",
    id: "",
    priority: "",
    name: "",
    pro_model: ""
  };
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: () => { }
  });
  return <Box pt={2} pb={4}>
    <form onSubmit={handleSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card sx={{
            p: 3
          }}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <FlexBox gap={0.5} alignItems="center">
                  <IconWrapper>
                    <ShoppingBasket sx={{
                      color: "primary.main"
                    }} />
                  </IconWrapper>

                  <H6 fontSize={16} >상품등록</H6>
                </FlexBox>
              </Grid>

              <Grid item md={6} xs={12}>
                <H6 fontSize={16} mb={3}>
                  상품내용
                </H6>

                <Grid container spacing={2}>


                  <Grid item sm={6} xs={12}>
                    <TextField select fullWidth label="대분류" SelectProps={{
                      native: true,
                      IconComponent: KeyboardArrowDown
                    }}>
                      <option value="electronics">서비스 타입</option>
                      <option value="gadget">가사도우미</option>
                      <option value="shoes">이사/입주</option>
                      <option value="shoes">사무실</option>
                      <option value="shoes">가전제품</option>
                    </TextField>
                  </Grid>

                  <Grid item sm={6} xs={12}>
                    <TextField select fullWidth label="중분류" SelectProps={{
                      native: true,
                      IconComponent: KeyboardArrowDown
                    }}>
                      <option value="electronics">서비스 대상</option>
                      <option value="gadget">단독</option>
                      <option value="gadget">원룸</option>
                      <option value="gadget">빌라</option>
                      <option value="gadget">아파트</option>
                      <option value="gadget">사무실</option>
                      <option value="gadget">세탁기</option>
                      <option value="gadget">에어컨</option>
                    </TextField>
                  </Grid>

                  <Grid item sm={6} xs={12}>
                    <TextField select fullWidth label="소분류" SelectProps={{
                      native: true,
                      IconComponent: KeyboardArrowDown
                    }}>
                      <option value="electronics">서비스 대상</option>
                      <option value="gadget">10평 미만</option>
                      <option value="gadget">20평 미만</option>
                      <option value="gadget">30평 미만</option>
                      <option value="gadget">40평 미만</option>
                      <option value="gadget">50평 미만</option>
                      <option value="gadget">50평 이상</option>
                      <option value="gadget">시간 추가</option>
                      <option value="gadget">시스템 에어컨</option>
                      <option value="gadget">벽걸이 에어컨</option>
                      <option value="gadget">스탠드 에어컨</option>
                      <option value="gadget">통돌이 세탁기</option>
                      <option value="gadget">드럼 세탁기</option>
                    </TextField>
                  </Grid>



                  <Grid item sm={6} xs={12}>
                    <TextField fullWidth name="manufacturer" label="상품 이름" onBlur={handleBlur} onChange={handleChange} value={values.manufacturer} helperText={touched.manufacturer && errors.manufacturer} error={Boolean(touched.manufacturer && errors.manufacturer)} />
                  </Grid>
                </Grid>
              </Grid>

              {/* 가격 및 시간설정 */}
              <Grid item md={6} xs={12}>
                <H6 fontSize={16} mb={3}>
                  가격 및 최소시간
                </H6>

                <Grid container spacing={2}>
                  <Grid item sm={6} xs={12}>
                    <TextField label="가격" fullWidth />
                  </Grid>

                  <Grid item sm={6} xs={12}>
                    <TextField label="최소시간" fullWidth />
                  </Grid>
                </Grid>
              </Grid>

              {/* 상품 설명 */}
              <Grid item xs={12} sx={{ marginTop:14 }}>
                <FlexBox flexWrap="wrap" gap={2}>
                  <Button type="submit" variant="contained">
                    상품 등록
                  </Button>

                  <Button variant="outlined" color="secondary" style={{ background: "white", color: "black" }} onClick={() => { setCreateProdjctModal(!createProductModal) }}>
                    취소
                  </Button>
                </FlexBox>
              </Grid>
            </Grid>
          </Card>
        </Grid>




      </Grid>
    </form>
  </Box>;
};

export default CreateProductPageView;
'use client'
import React, { useState, useCallback } from 'react';
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import {Box, Grid, Stack, Button, Avatar, TextField, IconButton, useMediaQuery, NativeSelect, Divider} from "@mui/material";
import { CameraAlt } from "@mui/icons-material";
import { useFormik } from "formik";
import * as Yup from "yup"; // CUSTOM COMPONENTS
import { H5, Paragraph } from "components/typography"; // CUSTOM ICON COMPONENTS
import { Scrollbar } from "components/scrollbar";
import { AvatarBadge } from "components/avatar-badge";

const EditWorkerForm = ({ handleCancel, data }) => {
  const downSm = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const initialValues = {
    name: data?.name || "",
    phone: data?.phone || "",
    description: data?.description || "",
    workingInfo: data?.workingInfo || [
      ["", ""],
      ["", ""],
      ["", ""],
    ],
  };
  const validationSchema = Yup.object({
    name: Yup.string().min(3, "성씨를 포함하여 전부 입력해주세요.").required("이름을 입력해주세요."),
    phone: Yup.number().min(9).required("전화번호를 입력해주세요."),
  });

  const workingDateList = ["평일(월~금)", "토요일", "일요일"];

  const {values,errors,handleSubmit,handleChange,handleBlur,touched,setFieldValue} = useFormik({
    initialValues,validationSchema,onSubmit: (values) => console.log(values)});

  const handleAddButtonClick = () => {
    
  }

  return (
    <Box>
      <H5 fontSize={16} mb={4}>
        Edit Worker
      </H5>

      <form onSubmit={handleSubmit}>
        <Scrollbar
          autoHide={false}
          style={{
            maxHeight: downSm ? 300 : "",
          }}
        >
          <Stack direction="row" justifyContent="center" mb={6}>
            <AvatarBadge
              badgeContent={
                <label htmlFor="icon-button-file">
                  <input
                    type="file"
                    accept="image/*"
                    id="icon-button-file"
                    style={{
                      display: "none",
                    }}
                  />

                  <IconButton aria-label="upload picture" component="span">
                    <CameraAlt
                      sx={{
                        fontSize: 16,
                        color: "background.paper",
                      }}
                    />
                  </IconButton>
                </label>
              }
            >
              <Avatar
                src={data?.avatar || "/static/avatar/001-man.svg"}
                sx={{
                  width: 80,
                  height: 80,
                  backgroundColor: "grey.100",
                }}
              />
            </AvatarBadge>
          </Stack>

          <Grid container spacing={3}>
            <Grid item sm={6} xs={12}>
              <TextField
                fullWidth
                name="name"
                label="Name"
                variant="outlined"
                onBlur={handleBlur}
                value={values.name}
                onChange={handleChange}
                error={Boolean(errors.name && touched.name)}
                helperText={touched.name && errors.name}
              />
            </Grid>

            <Grid item sm={6} xs={12}>
              <TextField
                fullWidth
                name="phone"
                label="Phone"
                variant="outlined"
                onBlur={handleBlur}
                value={values.phone}
                onChange={handleChange}
                error={Boolean(errors.phone && touched.phone)}
                helperText={touched.phone && errors.phone}
              />
            </Grid>

            {/* 근무 요일 및 시간 설정 */}
            <Grid ml={4} mt={6}>
              <Paragraph fontWeight={600} fontSize={{ xs: 14, sm: 16 , md: 18}}>근무 요일 및 시간 설정</Paragraph>
            </Grid>
            <Grid item sm={12} xs={12} mx={1} display={"flex"} gap={2}>
              <NativeSelect id="workingDate">
                <option value="" disabled>
                  근무 요일을 선택해주세요.
                </option>
                {workingDateList.map((date, index) => (
                  <option key={index} placeholder="은행을 선택해주세요.">
                    {date}
                  </option>
                ))}
              </NativeSelect>
              <TimePicker
              id = "startTime"
                views={["hours"]}
                label="Start"
              />
              <TimePicker
              id = "endTime"
                views={["hours"]}
                label="End"
              />
              <Button onClick={handleAddButtonClick}>Add</Button>
            </Grid>

             {/* 추가된 근무 요일 및 시간 표시 */}
            {/* {workingTimes.map((time, index) => (
              <Grid key={index} item sm={12} xs={12} mx={1} display={'flex'} gap={2}>
                <Paragraph>{time.day}</Paragraph>
                <Paragraph>{time.startTime}</Paragraph>
                <Paragraph>{time.endTime}</Paragraph>
              </Grid>
            ))} */}
            {/*  */}

            {/* 소개글 */}
            <Grid item sm={12} xs={12}>
              <TextField
                fullWidth
                name="description"
                label="Description"
                variant="outlined"
                value={values.description}
                onChange={handleChange}
                placeholder="최대 80자까지 입력가능합니다"
                multiline
                rowsmax={Infinity} // 다중 행으로 설정
                inputProps={{maxLength : 80}}
                
              />
            </Grid>
          </Grid>
        </Scrollbar>

        <Stack direction="row" alignItems="center" spacing={1} mt={4}>
          <Button type="submit" size="small">
            Save
          </Button>

          <Button
            variant="outlined"
            size="small"
            color="secondary"
            onClick={handleCancel}
          >
            Cancel
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default EditWorkerForm;

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

const AddWorkerForm = ({ handleCancel }) => {
  const downSm = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const initialValues = {
    name:"",
    phone:"",
    avatar:"",
    description:"",
    workingInfo:[
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
  const [selectDate, setSelectDate] = useState(0)

  const {values,errors,handleSubmit,handleChange,handleBlur,touched,setFieldValue} = useFormik({
    initialValues,validationSchema,onSubmit: (values) => console.log(values)});

  const handleTimeChange = (newTime) => {
    setFieldValue('workingInfo', [
      ...values.workingInfo.slice(0, selectDate),
      [newTime, values.workingInfo[selectDate][1]],
      ...values.workingInfo.slice(selectDate + 1),
    ])};

  const handleAddWorker = async () => {
    // console.log(values)
  }

  const handleAddScheduleClick = () => {

  }

  return (
    <Box>
      <H5 fontSize={16} mb={4}>
        Add Worker
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
                src={""}
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
              <NativeSelect id="workingDate" onChange={(e) => setSelectDate(workingDateList.indexOf(e.target.value))}>
                <option value="" disabled>
                  근무 요일을 선택해주세요.
                </option>
                {workingDateList.map((date, index) => (
                  <option key={index}>
                    {date}
                  </option>
                ))}
              </NativeSelect>
              <TimePicker
              id = "startTime"
              value={values.workingInfo[selectDate][0]}
                views={["hours"]}
                label="Start"
                onChange={handleTimeChange}
              />
              <TimePicker
              id = "endTime"
              value = {values.workingInfo[selectDate][1]}
                views={["hours"]}
                label="End"
                onChange={handleTimeChange}
              />
              <Button onClick={handleAddScheduleClick}>Add</Button>
            </Grid>

             {/* 추가된 근무 요일 및 시간 표시 */}
             {values.workingInfo.map((index) => (
              <Grid key={index} item sm={12} xs={12} mx={1} display={'flex'} gap={2}>
                <Paragraph>{workingDateList[index]} :  {new Date(values.workingInfo[selectDate][0]).toLocaleTimeString()} ~ {new Date(values.workingInfo[selectDate][1]).toLocaleTimeString()}</Paragraph>
              </Grid>
             ))}

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
          <Button type="submit" size="small" onClick={handleAddWorker}>
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

export default AddWorkerForm;

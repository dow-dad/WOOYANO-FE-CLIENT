"use client";

import { Fragment } from "react";
import { Box, Button, Divider, Grid, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup"; // CUSTOM COMPONENTS

import { H6 } from "components/typography";
import { FlexBox } from "components/flexbox";
import { DropZone } from "components/dropzone";

const ComposeMailPageView = () => {
  const validationSchema = Yup.object({
    toEmail: Yup.string().email().required("Email is Required!"),
    subject: Yup.string().required("Subject is Required!"),
    message: Yup.string().required("Message is required!")
  });
  const initialValues = {
    cc: "",
    toEmail: "",
    subject: "",
    message: ""
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
    onSubmit: () => {}
  });
  return <Fragment>
      <H6 p={3} fontSize={18}>
        Compose Mail
      </H6>

      <Divider />

      <Box p={3}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField fullWidth name="toEmail" onBlur={handleBlur} value={values.toEmail} onChange={handleChange} placeholder="To email*" helperText={touched.toEmail && errors.toEmail} error={Boolean(touched.toEmail && errors.toEmail)} />
            </Grid>

            <Grid item xs={12}>
              <TextField fullWidth name="cc" value={values.cc} onBlur={handleBlur} onChange={handleChange} placeholder="CC (If any)" helperText={touched.cc && errors.cc} error={Boolean(touched.cc && errors.cc)} />
            </Grid>

            <Grid item xs={12}>
              <TextField fullWidth name="subject" onBlur={handleBlur} value={values.subject} placeholder="Subject*" onChange={handleChange} helperText={touched.subject && errors.subject} error={Boolean(touched.subject && errors.subject)} />
            </Grid>

            <Grid item xs={12}>
              <TextField fullWidth name="message" onBlur={handleBlur} value={values.message} placeholder="Message*" onChange={handleChange} helperText={touched.message && errors.message} error={Boolean(touched.message && errors.message)} />
            </Grid>

            <Grid item xs={12}>
              <DropZone onDrop={() => {}} />
            </Grid>

            <Grid item xs={12}>
              <FlexBox alignItems="center" gap={2}>
                <Button type="submit">Send</Button>

                <Button variant="outlined" color="secondary">
                  Save as Draft
                </Button>
              </FlexBox>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Fragment>;
};

export default ComposeMailPageView;
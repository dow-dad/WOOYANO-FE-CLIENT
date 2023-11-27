import { Box, Button, Card, Grid, IconButton, Stack, TextField, useTheme } from "@mui/material";
import { GitHub, LinkedIn } from "@mui/icons-material";
import { useFormik } from "formik";
import Iframe from "react-iframe";
import * as Yup from "yup"; // CUSTOM COMPONENTS

import { H6 } from "components/typography";
import { FlexRowAlign } from "components/flexbox"; // CUSTOM ICON COMPONENTS

import Twitter from "icons/Twitter";
import Facebook from "icons/Facebook"; // CUSTOM UTILS METHOD

import { isDark } from "utils/constants";

const Contact = () => {
  const theme = useTheme();
  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: ""
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("First Name is Required!"),
    email: Yup.string().email("Invalid Email Address").required("Email is Required!"),
    subject: Yup.string().required("Subject is Required!")
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
  return <Card sx={{
    p: 3
  }}>
      <Grid container spacing={3}>
        <Grid item lg={6} xs={12}>
          <H6 fontSize={18} mb={4}>
            Send us Email
          </H6>

          <form onSubmit={handleSubmit}>
            <Stack spacing={3} alignItems="start">
              <TextField fullWidth name="name" placeholder="Name*" onBlur={handleBlur} value={values.name} onChange={handleChange} helperText={touched.name && errors.name} error={Boolean(touched.name && errors.name)} />

              <TextField fullWidth name="email" onBlur={handleBlur} value={values.email} placeholder="Email*" onChange={handleChange} helperText={touched.email && errors.email} error={Boolean(touched.email && errors.email)} />

              <TextField fullWidth name="subject" onBlur={handleBlur} placeholder="Subject" value={values.subject} onChange={handleChange} helperText={touched.subject && errors.subject} error={Boolean(touched.subject && errors.subject)} />

              <TextField multiline fullWidth rows={4} name="message" onBlur={handleBlur} placeholder="Message" value={values.message} onChange={handleChange} helperText={touched.message && errors.message} error={Boolean(touched.message && errors.message)} />

              <Button type="submit" sx={{
              px: 6
            }}>
                Submit
              </Button>
            </Stack>
          </form>
        </Grid>

        <Grid item lg={6} xs={12}>
          <Card sx={{
          p: 1
        }}>
            <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.7375391255605!2d91.85643162915974!3d24.906932698467063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375055a8dba315db%3A0xfed40d384aacd295!2sUI%20Lib!5e0!3m2!1sen!2sbd!4v1676372525624!5m2!1sen!2sbd" allowFullScreen loading="lazy" styles={{
            border: 0
          }} width="100%" height="400" />
          </Card>
        </Grid>

        <Grid item xs={12}>
          <FlexRowAlign mt={3} py={3} borderRadius={4} flexDirection="column" bgcolor={isDark(theme) ? "grey.700" : "grey.100"}>
            <H6 fontSize={16}>Follow More</H6>

            <Box>
              <IconButton>
                <Facebook sx={{
                color: "grey.500"
              }} />
              </IconButton>

              <IconButton>
                <Twitter sx={{
                color: "grey.500"
              }} />
              </IconButton>

              <IconButton>
                <LinkedIn sx={{
                color: "grey.500"
              }} />
              </IconButton>

              <IconButton>
                <GitHub sx={{
                color: "grey.500"
              }} />
              </IconButton>
            </Box>
          </FlexRowAlign>
        </Grid>
      </Grid>
    </Card>;
};

export default Contact;
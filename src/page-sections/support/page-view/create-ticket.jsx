"use client";

import { Box, Button, Card, Grid, TextField } from "@mui/material";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import { useFormik } from "formik";
import * as Yup from "yup"; // CUSTOM COMPONENTS

import { FlexBox } from "components/flexbox";
import { H6, Paragraph } from "components/typography";

const CreateTicketPageView = () => {
  const DATA = ["Screenshots/Screen Recording is very helpful.", "You can use snipboard.io to share screenshots.", "And loom.com for screen recording."];
  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is Required!"),
    lastName: Yup.string().required("Last Name is Required!"),
    email: Yup.string().email().required("Email is Required!"),
    phone: Yup.string().min(9).required("Phone is required!")
  });
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    position: "",
    phone: ""
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
  return <Box py={3}>
      <Card sx={{
      p: 3,
      maxWidth: 900,
      margin: "auto"
    }}>
        <H6 fontSize={18}>Create Ticket</H6>

        <Paragraph color="text.secondary" mb={3}>
          Please include as many details as possible about your question or problem.
        </Paragraph>

        <Box component="ul" pl={2} mb={4}>
          {DATA.map(item => <Box key={item} component="li" fontSize={14} pb={0.5}>
              {item}
            </Box>)}
        </Box>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField fullWidth name="firstName" onBlur={handleBlur} onChange={handleChange} value={values.firstName} placeholder="First Name*" helperText={touched.firstName && errors.firstName} error={Boolean(touched.firstName && errors.firstName)} />
            </Grid>

            <Grid item md={6} xs={12}>
              <TextField fullWidth name="lastName" onBlur={handleBlur} onChange={handleChange} value={values.lastName} placeholder="Last Name*" helperText={touched.lastName && errors.lastName} error={Boolean(touched.lastName && errors.lastName)} />
            </Grid>

            <Grid item xs={12}>
              <TextField fullWidth name="email" onBlur={handleBlur} value={values.email} placeholder="Email*" onChange={handleChange} helperText={touched.email && errors.email} error={Boolean(touched.email && errors.email)} />
            </Grid>

            <Grid item xs={12}>
              <TextField select fullWidth SelectProps={{
              native: true,
              IconComponent: KeyboardArrowDown
            }}>
                <option value="biponi">Biponi</option>
                <option value="bazaar">Bazaar</option>
                <option value="stocky">Stocky</option>
              </TextField>
            </Grid>

            <Grid item xs={12}>
              <TextField fullWidth placeholder="Subject*" />
            </Grid>

            <Grid item xs={12}>
              <TextField multiline rows={6} fullWidth placeholder="Message*" />
            </Grid>

            <Grid item xs={12}>
              <FlexBox alignItems="center" gap={2}>
                <Button type="submit">Submit</Button>
                <Button variant="outlined" color="secondary">
                  Cancel
                </Button>
              </FlexBox>
            </Grid>
          </Grid>
        </form>
      </Card>
    </Box>;
};

export default CreateTicketPageView;
"use client";

import { useParams } from "next/navigation";
import { KeyboardArrowDown } from "@mui/icons-material";
import { Box, Button, Card, Grid, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup"; // CUSTOM DEFINED HOOK

import useNavigate from "hooks/useNavigate"; // CUSTOM COMPONENTS

import { FlexBox } from "components/flexbox";
import { DropZone } from "components/dropzone";
import { H6, Paragraph } from "components/typography";

const CareerApplyPageView = () => {
  const params = useParams();
  const navigate = useNavigate();
  console.log(params.id);
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
  return <Box maxWidth={900} margin="auto" py={3}>
      <Card sx={{
      p: 3
    }}>
        <H6 fontSize={18}>Apply for this Job</H6>
        <Paragraph color="text.secondary" mb={3}>
          You sit down. You stare at your screen. The cursor blinks
        </Paragraph>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField fullWidth name="firstName" onBlur={handleBlur} onChange={handleChange} value={values.firstName} placeholder="First Name*" helperText={touched.firstName && errors.firstName} error={Boolean(touched.firstName && errors.firstName)} />
            </Grid>

            <Grid item md={6} xs={12}>
              <TextField fullWidth name="lastName" onBlur={handleBlur} onChange={handleChange} value={values.lastName} placeholder="Last Name*" helperText={touched.lastName && errors.lastName} error={Boolean(touched.lastName && errors.lastName)} />
            </Grid>

            <Grid item md={6} xs={12}>
              <TextField fullWidth name="email" onBlur={handleBlur} value={values.email} placeholder="Email*" onChange={handleChange} helperText={touched.email && errors.email} error={Boolean(touched.email && errors.email)} />
            </Grid>

            <Grid item md={6} xs={12}>
              <TextField fullWidth name="phone" onBlur={handleBlur} value={values.phone} placeholder="Phone*" onChange={handleChange} helperText={touched.phone && errors.phone} error={Boolean(touched.phone && errors.phone)} />
            </Grid>

            <Grid item xs={12}>
              <TextField select fullWidth SelectProps={{
              native: true,
              IconComponent: KeyboardArrowDown
            }}>
                <option value="ui-ux">UI/UX Designer</option>
                <option value="front-end">Front End Developer</option>
                <option value="software">Software Engineer</option>
              </TextField>
            </Grid>

            <Grid item xs={12}>
              <TextField fullWidth placeholder="Website (if any)" />
            </Grid>

            <Grid item xs={12}>
              <TextField fullWidth placeholder="Portfolio*" />
            </Grid>

            <Grid item md={6} xs={12}>
              <TextField fullWidth type="number" placeholder="Age*" />
            </Grid>

            <Grid item md={6} xs={12}>
              <TextField fullWidth placeholder="Expected Salary*" />
            </Grid>

            <Grid item xs={12}>
              <DropZone onDrop={() => {}} />
            </Grid>

            <Grid item xs={12}>
              <FlexBox alignItems="center" gap={2}>
                <Button type="submit">Apply</Button>

                <Button color="secondary" variant="outlined" onClick={() => navigate("/dashboard/career")}>
                  Cancel
                </Button>
              </FlexBox>
            </Grid>
          </Grid>
        </form>
      </Card>
    </Box>;
};

export default CareerApplyPageView;
"use client";

import { Box, Button, Card, Grid, IconButton, styled, Switch, TextField } from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import * as Yup from "yup";
import { useFormik } from "formik"; // CUSTOM COMPONENTS

import { Paragraph, Small } from "components/typography";
import { FlexBetween, FlexRowAlign } from "components/flexbox"; // CUSTOM UTILS METHOD

import { isDark } from "utils/constants"; // STYLED COMPONENTS

const SwitchWrapper = styled(FlexBetween)({
  width: "100%",
  marginTop: 10
});
const StyledCard = styled(Card)({
  padding: 24,
  minHeight: 400,
  display: "flex",
  alignItems: "center",
  flexDirection: "column"
});
const ButtonWrapper = styled(FlexRowAlign)(({
  theme
}) => ({
  width: 100,
  height: 100,
  borderRadius: "50%",
  backgroundColor: theme.palette.grey[isDark(theme) ? 700 : 100]
}));
const UploadButton = styled(FlexRowAlign)(({
  theme
}) => ({
  width: 50,
  height: 50,
  borderRadius: "50%",
  backgroundColor: theme.palette.grey[isDark(theme) ? 600 : 200],
  border: `1px solid ${theme.palette.background.paper}`
}));

const AddNewUserPageView = () => {
  const initialValues = {
    fullName: "",
    email: "",
    phone: "",
    country: "",
    state: "",
    city: "",
    address: "",
    zip: "",
    about: ""
  };
  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Name is Required!"),
    email: Yup.string().email().required("Email is Required!"),
    phone: Yup.number().min(8).required("Phone is Required!"),
    country: Yup.string().required("Country is Required!"),
    state: Yup.string().required("State is Required!"),
    city: Yup.string().required("City is Required!"),
    address: Yup.string().required("Address is Required!"),
    zip: Yup.string().required("Zip is Required!"),
    about: Yup.string().required("About is Required!")
  });
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    touched
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: () => {}
  });
  return <Box pt={2} pb={4}>
      <Grid container spacing={3}>
        <Grid item md={4} xs={12}>
          <StyledCard>
            <ButtonWrapper>
              <UploadButton>
                <label htmlFor="upload-btn">
                  <input accept="image/*" id="upload-btn" type="file" style={{
                  display: "none"
                }} />
                  <IconButton component="span">
                    <PhotoCamera sx={{
                    fontSize: 26,
                    color: "grey.400"
                  }} />
                  </IconButton>
                </label>
              </UploadButton>
            </ButtonWrapper>

            <Paragraph marginTop={2} maxWidth={200} display="block" textAlign="center" color="text.secondary">
              Allowed *.jpeg, *.jpg, *.png, *.gif max size of 3.1 MB
            </Paragraph>

            <Box maxWidth={250} marginTop={5} marginBottom={1}>
              <SwitchWrapper>
                <Paragraph display="block" fontWeight={600}>
                  Public Profile
                </Paragraph>

                <Switch defaultChecked />
              </SwitchWrapper>

              <SwitchWrapper>
                <Paragraph display="block" fontWeight={600}>
                  Banned
                </Paragraph>
                <Switch defaultChecked />
              </SwitchWrapper>

              <Small display="block" color="text.secondary">
                Apply disable account
              </Small>

              <SwitchWrapper>
                <Paragraph display="block" fontWeight={600}>
                  Email Verified
                </Paragraph>

                <Switch defaultChecked />
              </SwitchWrapper>

              <Small display="block" color="text.secondary">
                Disabling this will automatically send the user a verification email
              </Small>
            </Box>
          </StyledCard>
        </Grid>

        <Grid item md={8} xs={12}>
          <Card sx={{
          padding: 3
        }}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item sm={6} xs={12}>
                  <TextField fullWidth name="fullName" label="Full Name" value={values.fullName} onChange={handleChange} helperText={touched.fullName && errors.fullName} error={Boolean(touched.fullName && errors.fullName)} />
                </Grid>

                <Grid item sm={6} xs={12}>
                  <TextField fullWidth name="email" label="Email Address" value={values.email} onChange={handleChange} helperText={touched.email && errors.email} error={Boolean(touched.email && errors.email)} />
                </Grid>

                <Grid item sm={6} xs={12}>
                  <TextField fullWidth name="phone" label="Phone Number" value={values.phone} onChange={handleChange} helperText={touched.phone && errors.phone} error={Boolean(touched.phone && errors.phone)} />
                </Grid>

                <Grid item sm={6} xs={12}>
                  <TextField fullWidth name="country" label="Country" value={values.country} onChange={handleChange} helperText={touched.country && errors.country} error={Boolean(touched.country && errors.country)} />
                </Grid>

                <Grid item sm={6} xs={12}>
                  <TextField fullWidth name="state" label="State/Region" value={values.state} onChange={handleChange} helperText={touched.state && errors.state} error={Boolean(touched.state && errors.state)} />
                </Grid>

                <Grid item sm={6} xs={12}>
                  <TextField fullWidth name="city" label="City" value={values.city} onChange={handleChange} helperText={touched.city && errors.city} error={Boolean(touched.city && errors.city)} />
                </Grid>

                <Grid item sm={6} xs={12}>
                  <TextField fullWidth name="address" label="Address" value={values.address} onChange={handleChange} helperText={touched.address && errors.address} error={Boolean(touched.address && errors.address)} />
                </Grid>

                <Grid item sm={6} xs={12}>
                  <TextField fullWidth name="zip" label="Zip/Code" value={values.zip} onChange={handleChange} helperText={touched.zip && errors.zip} error={Boolean(touched.zip && errors.zip)} />
                </Grid>

                <Grid item xs={12}>
                  <TextField multiline fullWidth rows={10} name="about" label="About" value={values.about} onChange={handleChange} helperText={touched.about && errors.about} error={Boolean(touched.about && errors.about)} sx={{
                  "& .MuiOutlinedInput-root textarea": {
                    padding: 0
                  }
                }} />
                </Grid>

                <Grid item xs={12}>
                  <Button type="submit" variant="contained">
                    Create User
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Card>
        </Grid>
      </Grid>
    </Box>;
};

export default AddNewUserPageView;
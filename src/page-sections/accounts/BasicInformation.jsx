import { Fragment } from "react";
import { Box, Button, Card, Divider, Grid, styled, TextField, useTheme } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import LinearProgress from "@mui/material/LinearProgress";
import { CameraAlt, KeyboardArrowDown, MoreHoriz } from "@mui/icons-material";
import * as Yup from "yup";
import { useFormik } from "formik"; // CUSTOM ICON COMPONENTS

import DateRange from "icons/DateRange";
import Bratislava from "icons/Bratislava";
import MapMarkerIcon from "icons/MapMarkerIcon"; // CUSTOM COMPONENTS

import { AvatarBadge } from "components/avatar-badge";
import { FlexBetween, FlexBox } from "components/flexbox";
import { H6, Paragraph, Small } from "components/typography";
import { AvatarLoading } from "components/avatar-loading"; // STYLED COMPONENTS

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
  const initialValues = {
    firstName: "Pixy",
    lastName: "Krovasky",
    email: "uilib@gmail.com",
    phone: "+443322221111",
    organization: "UiLib",
    department: "Develop",
    country: "usa",
    state: "New York",
    address: "Corverview, Michigan",
    zipCode: 4336
  };
  const validationSchema = Yup.object({
    firstName: Yup.string().min(3, "Must be greater then 3 characters").required("First Name is Required!"),
    lastName: Yup.string().required("Last Name is Required!"),
    email: Yup.string().email("Invalid email address").required("Email is Required!"),
    phone: Yup.string().min(9).required("Phone Number is required!"),
    organization: Yup.string().required("Organization is Required!"),
    department: Yup.string().required("Department is Required!"),
    country: Yup.string().required("Country is Required!"),
    state: Yup.string().required("State is Required!"),
    address: Yup.string().required("Address is Required!"),
    zipCode: Yup.number().required("Zip Code is Required!")
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
  return <Fragment>
      <Card sx={{
      padding: 3,
      position: "relative"
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
          <FlexBox justifyContent="center">
            <AvatarBadge badgeContent={<label htmlFor="icon-button-file">
                  <input type="file" accept="image/*" id="icon-button-file" style={{
              display: "none"
            }} />

                  <IconButton aria-label="upload picture" component="span">
                    <CameraAlt sx={{
                fontSize: 16,
                color: "grey.400"
              }} />
                  </IconButton>
                </label>}>
              <AvatarLoading borderSize={2} percentage={60} alt="Team Member" src="/static/user/user-11.png" sx={{
              width: 100,
              height: 100
            }} />
            </AvatarBadge>
          </FlexBox>

          <Box mt={2}>
            <H6 fontSize={18} textAlign="center">
              Pixy Krovasky
            </H6>

            <FlexBetween maxWidth={360} flexWrap="wrap" margin="auto" mt={1}>
              <FlexBox alignItems="center" gap={1} color="grey.500">
                <Bratislava sx={{
                fontSize: 18
              }} />
                <Paragraph>Developer</Paragraph>
              </FlexBox>

              <FlexBox alignItems="center" gap={1} color="grey.500">
                <MapMarkerIcon sx={{
                fontSize: 18
              }} />
                <Paragraph>New York</Paragraph>
              </FlexBox>

              <FlexBox alignItems="center" gap={1} color="grey.500">
                <DateRange sx={{
                fontSize: 18
              }} />
                <Paragraph>Joined March 17</Paragraph>
              </FlexBox>
            </FlexBetween>

            <FlexBetween marginTop={6} flexWrap="wrap">
              <Box minWidth={200} color="grey.500" sx={{
              [theme.breakpoints.down(600)]: {
                minWidth: "100%",
                mb: 2
              }
            }}>
                <Paragraph mb={0.5}>Profile Completion</Paragraph>

                <FlexBox alignItems="center" gap={1}>
                  <LinearProgress value={60} color="success" variant="determinate" />
                  <Small fontWeight={500}>60%</Small>
                </FlexBox>
              </Box>

              <FlexBox gap={1}>
                <Button size="small" color="secondary">
                  Follow
                </Button>

                <Button size="small">Hire Me</Button>

                <Button size="small" color="secondary" sx={{
                minWidth: 0
              }}>
                  <MoreHoriz fontSize="small" />
                </Button>
              </FlexBox>
            </FlexBetween>
          </Box>
        </ContentWrapper>
      </Card>

      {
      /* BASIC INFORMATION FORM SECTION */
    }
      <Card sx={{
      mt: 3
    }}>
        <H6 fontSize={14} px={3} py={2}>
          Basic Information
        </H6>

        <Divider />

        <form onSubmit={handleSubmit}>
          <Box margin={3}>
            <Grid container spacing={3}>
              <Grid item sm={6} xs={12}>
                <TextField fullWidth name="firstName" label="First Name" variant="outlined" onBlur={handleBlur} onChange={handleChange} value={values.firstName} helperText={touched.firstName && errors.firstName} error={Boolean(touched.firstName && errors.firstName)} />
              </Grid>

              <Grid item sm={6} xs={12}>
                <TextField fullWidth name="lastName" label="Last Name" variant="outlined" onBlur={handleBlur} onChange={handleChange} value={values.lastName} helperText={touched.lastName && errors.lastName} error={Boolean(touched.lastName && errors.lastName)} />
              </Grid>

              <Grid item sm={6} xs={12}>
                <TextField fullWidth name="email" label="Email" variant="outlined" onBlur={handleBlur} onChange={handleChange} value={values.email} helperText={touched.email && errors.email} error={Boolean(touched.email && errors.email)} />
              </Grid>

              <Grid item sm={6} xs={12}>
                <TextField fullWidth name="phone" label="Phone" variant="outlined" onBlur={handleBlur} onChange={handleChange} value={values.phone} helperText={touched.phone && errors.phone} error={Boolean(touched.phone && errors.phone)} />
              </Grid>

              <Grid item sm={6} xs={12}>
                <TextField fullWidth name="organization" variant="outlined" label="Organization" onBlur={handleBlur} onChange={handleChange} value={values.organization} helperText={touched.organization && errors.organization} error={Boolean(touched.organization && errors.organization)} />
              </Grid>

              <Grid item sm={6} xs={12}>
                <TextField fullWidth name="department" variant="outlined" label="Department" onBlur={handleBlur} onChange={handleChange} value={values.department} helperText={touched.department && errors.department} error={Boolean(touched.department && errors.department)} />
              </Grid>

              <Grid item sm={6} xs={12}>
                <TextField select fullWidth name="country" label="Country" variant="outlined" placeholder="Country" SelectProps={{
                native: true,
                IconComponent: KeyboardArrowDown
              }} onBlur={handleBlur} onChange={handleChange} value={values.country} helperText={touched.country && errors.country} error={Boolean(touched.country && errors.country)}>
                  <option value="usa">United States</option>
                  <option value="uk">United Kingdom</option>
                  <option value="uae">United Arab Emirates</option>
                </TextField>
              </Grid>

              <Grid item sm={6} xs={12}>
                <TextField fullWidth name="state" label="State" variant="outlined" onBlur={handleBlur} onChange={handleChange} value={values.state} helperText={touched.state && errors.state} error={Boolean(touched.state && errors.state)} />
              </Grid>

              <Grid item sm={6} xs={12}>
                <TextField fullWidth name="address" label="Address" variant="outlined" onBlur={handleBlur} onChange={handleChange} value={values.address} helperText={touched.address && errors.address} error={Boolean(touched.address && errors.address)} />
              </Grid>

              <Grid item sm={6} xs={12}>
                <TextField fullWidth type="number" name="zipCode" label="Zip Code" variant="outlined" onBlur={handleBlur} onChange={handleChange} value={values.zipCode} helperText={touched.zipCode && errors.zipCode} error={Boolean(touched.zipCode && errors.zipCode)} />
              </Grid>

              <Grid item xs={12}>
                <Button type="submit" variant="contained">
                  Save Changes
                </Button>
                <Button variant="outlined" sx={{
                ml: 2
              }}>
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </Box>
        </form>
      </Card>
    </Fragment>;
};

export default BasicInformation;
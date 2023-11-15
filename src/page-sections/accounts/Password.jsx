import { Box, Button, Card, Divider, Grid, Stack, styled, TextField } from "@mui/material";
import * as Yup from "yup";
import { useFormik } from "formik"; // CUSTOM COMPONENTS

import FlexBox from "components/flexbox/FlexBox";
import { H6, Paragraph, Small } from "components/typography"; // STYLED COMPONENT

const Dot = styled(Box)(({
  theme
}) => ({
  width: 8,
  height: 8,
  flexShrink: 0,
  borderRadius: "50%",
  backgroundColor: theme.palette.primary.main
}));

const Password = () => {
  const initialValues = {
    newPassword: "123456",
    currentPassword: "12345",
    confirmNewPassword: "123456"
  };
  const validationSchema = Yup.object({
    currentPassword: Yup.string().min(3, "Must be greater then 3 characters").required("Current Password is Required!"),
    newPassword: Yup.string().min(8).required("New Password is Required!"),
    confirmNewPassword: Yup.string().oneOf([Yup.ref("newPassword"), null], "Password doesn't matched")
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
  return <Card>
      <H6 fontSize={14} p={3}>
        Change Your Password
      </H6>

      <Divider />

      <Box p={3}>
        <Grid container spacing={5}>
          <Grid item sm={6} xs={12}>
            <form onSubmit={handleSubmit}>
              <Stack spacing={4}>
                <TextField fullWidth type="password" variant="outlined" name="currentPassword" label="Current Password" onBlur={handleBlur} onChange={handleChange} value={values.currentPassword} helperText={touched.currentPassword && errors.currentPassword} error={Boolean(touched.currentPassword && errors.currentPassword)} />

                <TextField fullWidth type="password" name="newPassword" variant="outlined" label="New Password" onBlur={handleBlur} onChange={handleChange} value={values.newPassword} helperText={touched.newPassword && errors.newPassword} error={Boolean(touched.newPassword && errors.newPassword)} />
                <TextField fullWidth type="password" variant="outlined" name="confirmNewPassword" label="Confirm Password" onBlur={handleBlur} onChange={handleChange} value={values.confirmNewPassword} helperText={touched.confirmNewPassword && errors.confirmNewPassword} error={Boolean(touched.confirmNewPassword && errors.confirmNewPassword)} />
              </Stack>

              <Stack direction="row" spacing={2} mt={4}>
                <Button type="submit" variant="contained">
                  Save Changes
                </Button>

                <Button variant="outlined">Cancel</Button>
              </Stack>
            </form>
          </Grid>

          <Grid item xs={12}>
            <Paragraph fontWeight={500}>Password requirements:</Paragraph>
            <Small color="grey.500">Ensure that these requirements are met:</Small>

            <Stack spacing={1} mt={2}>
              {REQUIREMENTS.map(item => <FlexBox alignItems="center" gap={1} key={item}>
                  <Dot />
                  <Small>{item}</Small>
                </FlexBox>)}
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Card>;
};

const REQUIREMENTS = ["Minimum 8 characters long - the more, the better", "At least one lowercase character", "At least one uppercase character", "At least one number, symbol, or whitespace character"];
export default Password;
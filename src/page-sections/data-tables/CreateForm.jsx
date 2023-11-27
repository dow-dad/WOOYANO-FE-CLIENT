import { Button, Grid, styled, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup"; // CUSTOM COMPONENTS

import { Modal } from "components/modal";
import { H6 } from "components/typography";
import { Scrollbar } from "components/scrollbar";
import FlexBox from "components/flexbox/FlexBox"; // STYLED COMPONENT

const StyledAppModal = styled(Modal)(({
  theme
}) => ({
  maxWidth: 450,
  minWidth: 200,
  [theme.breakpoints.down(325)]: {
    maxWidth: "100%"
  }
})); // ======================================================================================

// ======================================================================================
const CreateForm = ({
  open,
  onClose,
  edit,
  data
}) => {
  const initialValues = {
    name: data?.name || "",
    username: data?.username || "",
    email: data?.email || "",
    // avatar: data?.avatar || "",
    position: data?.role || "",
    experience: data?.experience || 1,
    team: data?.team || 1,
    phone: data?.phone || "",
    dateOfBirth: data?.dateOfBirth || "",
    address: data?.address || "",
    status: data?.status || ""
  };
  const fieldValidationSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too Short").required("Name is Required!"),
    username: Yup.string().min(3, "Too Short").required("Username is Required!"),
    email: Yup.string().required("Email is Required!"),
    position: Yup.string().required("Position is Required!"),
    phone: Yup.string().required("Phone is Required!"),
    address: Yup.string().required("Address is Required!"),
    dateOfBirth: Yup.string().required("Date Of Birth is Required!"),
    experience: Yup.number().required("Experience is Required!"),
    team: Yup.number().required("Team Member is Required!"),
    status: Yup.string().required("Status is Required!")
  });
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    touched
  } = useFormik({
    initialValues,
    validationSchema: fieldValidationSchema,
    onSubmit: values => {
      console.log(values);
      onClose();
    }
  });
  return <StyledAppModal open={open} handleClose={onClose}>
      <H6 fontSize={18} mb={2}>
        {edit ? "Edit User" : "Add New User"}
      </H6>

      <form onSubmit={handleSubmit}>
        <Scrollbar style={{
        maxHeight: 400
      }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField fullWidth size="small" name="name" label="Name" placeholder="Name" value={values.name} onChange={handleChange} error={Boolean(errors.name && touched.name)} helperText={touched.name && errors.name} />
            </Grid>

            <Grid item xs={6}>
              <TextField fullWidth size="small" name="username" label="Username" placeholder="Username" onChange={handleChange} value={values.username} error={Boolean(errors.username && touched.username)} helperText={touched.username && errors.username} />
            </Grid>

            <Grid item xs={6}>
              <TextField fullWidth size="small" name="email" label="Email" placeholder="uilib@gmail.com" onChange={handleChange} value={values.email} error={Boolean(errors.email && touched.email)} helperText={touched.email && errors.email} />
            </Grid>

            <Grid item xs={6}>
              <TextField fullWidth size="small" label="Date of Birth" name="dateOfBirth" placeholder="yyyy/mm/day" onChange={handleChange} value={values.dateOfBirth} error={Boolean(errors.dateOfBirth && touched.dateOfBirth)} helperText={touched.dateOfBirth && errors.dateOfBirth} />
            </Grid>

            <Grid item xs={6}>
              <TextField fullWidth size="small" name="phone" label="Phone" placeholder="Phone" onChange={handleChange} value={values.phone} error={Boolean(errors.phone && touched.phone)} helperText={touched.phone && errors.phone} />
            </Grid>

            <Grid item xs={6}>
              <TextField fullWidth size="small" name="address" label="Address" placeholder="Address" onChange={handleChange} value={values.address} error={Boolean(errors.address && touched.address)} helperText={touched.address && errors.address} />
            </Grid>

            <Grid item xs={6}>
              <TextField fullWidth size="small" name="position" label="Position" placeholder="developer" onChange={handleChange} value={values.position} error={Boolean(errors.position && touched.position)} helperText={touched.position && errors.position} />
            </Grid>

            <Grid item xs={6}>
              <TextField fullWidth size="small" type="number" name="experience" label="Experience" placeholder="Experience" onChange={handleChange} value={values.experience} error={Boolean(errors.experience && touched.experience)} helperText={touched.experience && errors.experience} />
            </Grid>

            <Grid item xs={6}>
              <TextField fullWidth name="team" size="small" type="number" label="Team Size" placeholder="10" value={values.team} onChange={handleChange} error={Boolean(errors.team && touched.team)} helperText={touched.team && errors.team} />
            </Grid>

            <Grid item xs={6}>
              <TextField fullWidth size="small" name="status" label="Status" placeholder="Full Time" value={values.status} onChange={handleChange} error={Boolean(errors.status && touched.status)} helperText={touched.status && errors.status} />
            </Grid>
          </Grid>
        </Scrollbar>

        <FlexBox justifyContent="flex-end" gap={2} marginTop={4}>
          <Button fullWidth variant="outlined" onClick={onClose}>
            Cancel
          </Button>

          <Button fullWidth type="submit" variant="contained">
            Save
          </Button>
        </FlexBox>
      </form>
    </StyledAppModal>;
};

export default CreateForm;
import {
  Box,
  Grid,
  Stack,
  Button,
  Avatar,
  TextField,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import { CameraAlt } from "@mui/icons-material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import DayPicker from "./DayPicker";
import { useFormik } from "formik";
import * as Yup from "yup"; // CUSTOM COMPONENTS

import { H5 } from "components/typography";
import { Scrollbar } from "components/scrollbar";
import { AvatarBadge } from "components/avatar-badge"; // ==========================================================================

// ==========================================================================
const AddWorkerForm = ({ handleCancel, data }) => {
  const downSm = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const initialValues = {
    name: data?.name || "",
    birthday: "",
    company: data?.company || "",
    email: data?.email || "",
    phone: data?.phone || "",
  };
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "성씨를 포함하여 전부 입력해주세요")
      .required("이름을 입력해주세요."),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is Required!"),
    birthday: Yup.date().required("Date of Birth is Required!"),
    phone: Yup.number().min(9).required("Phone Number is required!"),
    company: Yup.string().required("Company is Required!"),
  });
  const {
    values,
    errors,
    handleSubmit,
    handleChange,
    handleBlur,
    touched,
    setFieldValue,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => console.log(values),
  });
  return (
    <Box>
      <H5 fontSize={16} mb={4}>
        Add Contact
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
                label="name"
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
                label="phone"
                variant="outlined"
                onBlur={handleBlur}
                value={values.phone}
                onChange={handleChange}
                error={Boolean(errors.phone && touched.phone)}
                helperText={touched.phone && errors.phone}
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <DayPicker />
            </Grid>

            <Grid item sm={6} xs={12}>
              <TextField
                fullWidth
                name="company"
                label="Company"
                variant="outlined"
                onBlur={handleBlur}
                value={values.company}
                onChange={handleChange}
                error={Boolean(errors.company && touched.company)}
                helperText={touched.company && errors.company}
              />
            </Grid>

            <Grid item sm={6} xs={12}>
              <TextField
                fullWidth
                name="email"
                type="email"
                label="Email"
                variant="outlined"
                onBlur={handleBlur}
                value={values.email}
                onChange={handleChange}
                error={Boolean(errors.email && touched.email)}
                helperText={touched.email && errors.email}
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

export default AddWorkerForm;

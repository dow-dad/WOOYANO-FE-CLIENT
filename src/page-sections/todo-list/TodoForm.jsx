import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Box, Button, FormLabel, Radio, RadioGroup, Stack, TextField } from "@mui/material";
import Add from "@mui/icons-material/Add";
import { useFormik } from "formik";
import * as Yup from "yup"; // CUSTOM COMPONENTS

import { H6 } from "components/typography";
import FlexBox from "components/flexbox/FlexBox"; // ==================================================================

// ==================================================================
const TodoForm = ({
  show,
  handleClose,
  title,
  handleOpen
}) => {
  // form field validation
  const validationSchema = Yup.object().shape({
    title: Yup.string().min(3, "Too Short").required("Title is Required!"),
    date: Yup.date().required("Date is Required!"),
    description: Yup.string().min(10, "Too Short").required("Description is Required!")
  });
  const initialValues = {
    title: "",
    date: "",
    description: "",
    mentionClient: "",
    statusColor: "#61A9FF"
  };
  const {
    errors,
    values,
    touched,
    handleChange,
    handleSubmit,
    setFieldValue
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: values => {
      handleClose();
      console.log(values);
    }
  });
  return <Box padding="1rem">
      <H6 fontSize={16}>{title}</H6>

      <Button fullWidth variant="contained" onClick={handleOpen} sx={{
      my: "1rem",
      display: show ? "none" : "auto"
    }}>
        <Add />
      </Button>

      <form onSubmit={handleSubmit}>
        <Box sx={{
        marginTop: 2,
        display: show ? "auto" : "none"
      }}>
          <Stack spacing={1}>
            <TextField fullWidth size="small" name="title" placeholder="Title" value={values.title} onChange={handleChange} helperText={touched.title && errors.title} error={Boolean(touched.title && errors.title)} />

            <DatePicker value={values.date} onChange={newDate => setFieldValue("date", newDate)} renderInput={params => <TextField fullWidth size="small" {...params} name="date" helperText={touched.date && errors.date} error={Boolean(touched.date && errors.date)} />} />

            <TextField fullWidth size="small" name="mentionClient" onChange={handleChange} placeholder="@mention Client" value={values.mentionClient} />

            <TextField rows={5} fullWidth multiline size="small" name="description" onChange={handleChange} placeholder="Description" value={values.description} helperText={touched.description && errors.description} error={Boolean(touched.description && errors.description)} />

            <FlexBox alignItems="center">
              <FormLabel component="small" sx={{
              color: "text.secondary"
            }}>
                Select Color
              </FormLabel>

              <RadioGroup row name="statusColor" value={values.statusColor} onChange={handleChange}>
                <Radio value="#61A9FF" size="small" color="primary" />
                <Radio value="#2CC5BD" size="small" color="success" />
                <Radio value="#FD396D" size="small" color="error" />
                <Radio value="#A798FF" size="small" color="info" />
              </RadioGroup>
            </FlexBox>
          </Stack>

          <FlexBox gap={2} mt={2}>
            <Button fullWidth type="submit">
              Save
            </Button>

            <Button fullWidth color="secondary" variant="outlined" onClick={handleClose}>
              Cancel
            </Button>
          </FlexBox>
        </Box>
      </form>
    </Box>;
};

export default TodoForm;
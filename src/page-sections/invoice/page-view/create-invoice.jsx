"use client";

import { Fragment } from "react";
import { Box, Card, Grid, Radio, styled, Button, Divider, TextField, IconButton, RadioGroup, FormControlLabel } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { ErrorMessage, FieldArray, Formik } from "formik";
import * as Yup from "yup"; // CUSTOM COMPONENTS

import { FlexBetween } from "components/flexbox";
import { H6, Paragraph, Small } from "components/typography"; // CUSTOM DEFINED HOOK

import useNavigate from "hooks/useNavigate"; // CUSTOM ICON COMPONENT

import Delete from "icons/Delete"; // STYLED COMPONENTS

const StyledFormControl = styled(FormControlLabel)(({
  theme
}) => ({
  "& .MuiTypography-root": {
    fontSize: 14,
    fontWeight: 600,
    color: theme.palette.text.secondary
  },
  ":has(.Mui-checked) .MuiTypography-root": {
    color: theme.palette.text.primary
  }
}));
const StyledFlexBox = styled(FlexBetween)(({
  theme
}) => ({
  marginBottom: 30,
  [theme.breakpoints.down(750)]: {
    "& .MuiFormGroup-root": {
      marginBottom: 10
    }
  }
}));

const CreateInvoicePageView = () => {
  const navigate = useNavigate();

  const handleCancel = () => navigate("/dashboard/invoices/invoice-list");

  const initialValues = {
    orderNo: 204,
    billTo: "",
    billFrom: "",
    billToPhone: "",
    billToAddress: "",
    billFromPhone: "",
    status: "Pending",
    billFromAddress: "",
    orderDate: new Date(),
    items: [{
      id: 1,
      itemName: "",
      itemPrice: 0,
      itemQuantity: 0
    }]
  };
  const validationSchema = Yup.object().shape({
    billTo: Yup.string().required("Bill To is Required!"),
    billToAddress: Yup.string().required("Address is Required!"),
    billToPhone: Yup.number().positive().required("Phone is Required!"),
    billFrom: Yup.string().required("Bill From is Required!"),
    billFromAddress: Yup.string().required("Address is Required!"),
    billFromPhone: Yup.number().positive().required("Phone is Required!"),
    status: Yup.string().default(() => "Pending"),
    items: Yup.array().of(Yup.object().shape({
      itemName: Yup.string().required("Item Name Required"),
      itemPrice: Yup.number().required("Item Name Required"),
      itemQuantity: Yup.number().required("Item Name Required")
    }))
  });

  const handleSubmit = values => {
    console.log(values);
  };

  const handleAddItem = arrayHelper => () => {
    arrayHelper.push({
      id: Date.now(),
      itemName: "",
      itemPrice: 0,
      itemQuantity: 0
    });
  };

  return <Box pt={2} pb={4}>
      <Card sx={{
      padding: 3
    }}>
        <H6 fontSize={16} mb={2}>
          Order Status
        </H6>

        <Formik onSubmit={handleSubmit} initialValues={initialValues} validationSchema={validationSchema} children={({
        values,
        errors,
        touched,
        handleChange,
        handleSubmit,
        setFieldValue
      }) => {
        return <form onSubmit={handleSubmit}>
                <StyledFlexBox flexWrap="wrap">
                  <RadioGroup row name="status" onChange={handleChange} defaultValue={values.status}>
                    {["Pending", "Processing", "Delivered"].map(item => <StyledFormControl key={item} value={item} label={item} control={<Radio />} />)}
                  </RadioGroup>

                  <Box className="buttonWrapper">
                    <Button color="secondary" variant="outlined" onClick={handleCancel} sx={{
                mr: 1
              }}>
                      Cancel
                    </Button>

                    <Button type="submit" variant="contained">
                      Save
                    </Button>
                  </Box>
                </StyledFlexBox>

                <Grid container spacing={3}>
                  <Grid item md={4} sm={6} xs={12}>
                    <TextField fullWidth name="orderNo" label="Order Number" value={values.orderNo} onChange={handleChange} />
                  </Grid>

                  <Grid item md={4} sm={6} xs={12}>
                    <DatePicker label="Order Date" value={values.orderDate} onChange={newValue => setFieldValue("orderDate", newValue)} renderInput={params => <TextField {...params} fullWidth />} />
                  </Grid>
                </Grid>

                <Divider sx={{
            my: 4
          }} />

                <Grid container spacing={3}>
                  <Grid item md={4} sm={6} xs={12}>
                    <Box marginBottom={2}>
                      <TextField fullWidth name="billTo" label="Bill to" value={values.billTo} onChange={handleChange} helperText={touched.billTo && errors.billTo} error={Boolean(touched.billTo && errors.billTo)} />
                    </Box>

                    <Box marginBottom={2}>
                      <TextField fullWidth name="billToAddress" label="Bill to Address" onChange={handleChange} value={values.billToAddress} helperText={touched.billToAddress && errors.billToAddress} error={Boolean(touched.billToAddress && errors.billToAddress)} />
                    </Box>

                    <Box>
                      <TextField fullWidth type="number" name="billToPhone" label="Bill to Phone" onChange={handleChange} value={values.billToPhone} helperText={touched.billToPhone && errors.billToPhone} error={Boolean(touched.billToPhone && errors.billToPhone)} />
                    </Box>
                  </Grid>

                  <Grid item md={4} sm={6} xs={12}>
                    <Box marginBottom={2}>
                      <TextField fullWidth name="billFrom" label="Bill From" value={values.billFrom} onChange={handleChange} helperText={touched.billFrom && errors.billFrom} error={Boolean(touched.billFrom && errors.billFrom)} />
                    </Box>

                    <Box marginBottom={2}>
                      <TextField fullWidth name="billFromAddress" label="Bill from Address" onChange={handleChange} value={values.billFromAddress} helperText={touched.billFromAddress && errors.billTo} error={Boolean(touched.billFromAddress && errors.billFromAddress)} />
                    </Box>

                    <Box>
                      <TextField fullWidth type="number" name="billFromPhone" label="Bill from Phone" onChange={handleChange} value={values.billFromPhone} helperText={touched.billFromPhone && errors.billFromPhone} error={Boolean(touched.billFromPhone && errors.billFromPhone)} />
                    </Box>
                  </Grid>
                </Grid>

                <Divider sx={{
            my: 4
          }} />

                <Grid container spacing={2} alignItems="flex-end">
                  <FieldArray name="items" render={arrayHelper => {
              return <Fragment>
                          <Grid item xs={12}>
                            <Button variant="contained" onClick={handleAddItem(arrayHelper)} sx={{
                    marginBottom: 2
                  }}>
                              Add New Item
                            </Button>
                          </Grid>

                          {values.items.map((item, index) => <Grid item container key={item.id} spacing={1}>
                              <Grid item md={4} sm={4} xs={12}>
                                <TextField fullWidth size="small" label="Item Name" name={`items.${index}.itemName`} value={item.itemName} onChange={handleChange} />
                                <ErrorMessage name={`items.${index}.itemName`} render={msg => <Small color="secondary.red" mx={2}>
                                      {msg}
                                    </Small>} />
                              </Grid>

                              <Grid item md={2} sm={3} xs={5}>
                                <TextField fullWidth label="Item Price" size="small" type="number" name={`items.${index}.itemPrice`} value={item.itemPrice} onChange={handleChange} />
                              </Grid>

                              <Grid item md={2} sm={3} xs={5}>
                                <TextField type="number" fullWidth size="small" label="Item Quantity" name={`items.${index}.itemQuantity`} value={item.itemQuantity} onChange={handleChange} />
                              </Grid>

                              <Grid item md={2} sm={2} xs={2}>
                                <IconButton onClick={() => arrayHelper.remove(index)}>
                                  <Delete sx={{
                        color: "text.secondary"
                      }} />
                                </IconButton>
                              </Grid>
                            </Grid>)}
                        </Fragment>;
            }} />
                </Grid>

                <Divider sx={{
            my: 4
          }} />

                <Box maxWidth={320}>
                  <H6 fontSize={16}>Amount</H6>

                  <FlexBetween my={1}>
                    <Paragraph fontWeight={500}>Subtotal</Paragraph>
                    <Paragraph fontWeight={500}>$428.00</Paragraph>
                  </FlexBetween>

                  <FlexBetween my={1}>
                    <Paragraph fontWeight={500}>Discount (BLACKFRIDAY)</Paragraph>
                    <Paragraph fontWeight={500}>-$8.00</Paragraph>
                  </FlexBetween>

                  <FlexBetween my={1}>
                    <Paragraph fontWeight={500}>VAT</Paragraph>
                    <Paragraph fontWeight={500}>$20.00</Paragraph>
                  </FlexBetween>

                  <Divider sx={{
              my: 2
            }} />

                  <FlexBetween my={1}>
                    <H6 fontSize={16}>Total</H6>
                    <H6 fontSize={16}>$20.00</H6>
                  </FlexBetween>
                </Box>
              </form>;
      }} />
      </Card>
    </Box>;
};

export default CreateInvoicePageView;
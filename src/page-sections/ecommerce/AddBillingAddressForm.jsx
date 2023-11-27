import { useState } from "react";
import { Box, Grid, Radio, Button, styled, Checkbox, TextField, RadioGroup, FormControlLabel } from "@mui/material"; // CUSTOM COMPONENTS

import { H6, Paragraph } from "components/typography";
import { FlexBox } from "components/flexbox"; //  STYLED COMPONENT

const StyledFormControlLabel = styled(FormControlLabel)({
  "& .MuiTypography-root": {
    fontSize: 14,
    fontWeight: 500
  }
}); // ==============================================================

// ==============================================================
const AddBillingAddressForm = ({
  handleCancel
}) => {
  const [selectedValue, setSelectedValue] = useState("home");

  const handleChange = event => {
    setSelectedValue(event.target.value);
  };

  return <form>
      <H6 fontSize={16}>Add new address</H6>

      <Box py={2}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <RadioGroup row value={selectedValue} onChange={handleChange}>
              <StyledFormControlLabel value="home" control={<Radio />} label="Home" />
              <StyledFormControlLabel value="office" control={<Radio />} label="Office" />
            </RadioGroup>
          </Grid>

          <Grid item sm={6} xs={12}>
            <TextField fullWidth size="small" label="Full Name" />
          </Grid>

          <Grid item sm={6} xs={12}>
            <TextField fullWidth size="small" label="Phone" />
          </Grid>

          <Grid item xs={12}>
            <TextField fullWidth size="small" label="Address" />
          </Grid>

          <Grid item sm={6} xs={12}>
            <TextField fullWidth size="small" label="City" />
          </Grid>

          <Grid item sm={6} xs={12}>
            <TextField fullWidth size="small" label="Country" />
          </Grid>

          <Grid item xs={12}>
            <FlexBox alignItems="center" gap={1}>
              <Checkbox sx={{
              p: 0
            }} />
              <Paragraph>Use this address as default</Paragraph>
            </FlexBox>
          </Grid>
        </Grid>
      </Box>

      <FlexBox alignItems="center" justifyContent="end" gap={1} mt={1}>
        <Button variant="outlined" color="secondary" onClick={handleCancel}>
          Cancel
        </Button>
        <Button variant="contained">Deliver to this address</Button>
      </FlexBox>
    </form>;
};

export default AddBillingAddressForm;
import { useState } from "react";
import { IconButton, InputAdornment, MenuItem, Stack, TextField } from "@mui/material";
import { Password, Visibility, VisibilityOff } from "@mui/icons-material";
import { Masonry } from "@mui/lab"; // CUSTOM COMPONENT

import { Block } from "components/block";
const currencies = [{
  value: "USD",
  label: "$"
}, {
  value: "EUR",
  label: "€"
}, {
  value: "BTC",
  label: "฿"
}, {
  value: "JPY",
  label: "¥"
}];

const Filled = () => {
  const [visiblePassword, setVisiblePassword] = useState(false);

  const handlePasswordVisibleToggle = () => setVisiblePassword(state => !state);

  return <Masonry columns={{
    md: 2,
    xs: 1
  }} spacing={3}>
      <Block title="Basic" bgTransparent>
        <Stack spacing={3}>
          <TextField label="Name" size="medium" variant="filled" />
          <TextField variant="filled" label="Name" size="medium" defaultValue="Nabed Khan" />
          <TextField size="medium" type="password" variant="filled" label="Password" defaultValue="123456" />
          <TextField variant="filled" type="email" label="Email" size="medium" disabled />
        </Stack>
      </Block>

      <Block title="With Adornment" bgTransparent>
        <Stack spacing={3}>
          <TextField size="medium" variant="filled" label="With Normal TextField" id="outlined-start-adornment" InputProps={{
          startAdornment: <InputAdornment position="start">kg</InputAdornment>
        }} />

          <TextField size="medium" label="Password" variant="filled" type={visiblePassword ? "text" : "password"} InputProps={{
          endAdornment: <IconButton onClick={handlePasswordVisibleToggle} sx={{
            p: 0
          }}>
                  {visiblePassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
        }} />

          <TextField size="medium" variant="filled" label="Password" defaultValue="123456" type={visiblePassword ? "text" : "password"} InputProps={{
          endAdornment: <IconButton onClick={handlePasswordVisibleToggle} sx={{
            p: 0
          }}>
                  {visiblePassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>,
          startAdornment: <InputAdornment position="start">
                  <Password />
                </InputAdornment>
        }} />
        </Stack>
      </Block>

      <Block title="With Helper Text" bgTransparent>
        <Stack spacing={3}>
          <TextField size="medium" variant="filled" label="Helper text" id="outlined-helperText" defaultValue="Nabed Khan" helperText="Some important text" />

          <TextField error label="Error" size="medium" variant="filled" defaultValue="Hello World" helperText="Incorrect entry." id="outlined-error-helper-text" />
        </Stack>
      </Block>

      <Block title="Select" bgTransparent>
        <Stack spacing={3}>
          <TextField select variant="filled" size="medium" label="Select" defaultValue="EUR">
            {currencies.map(option => <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>)}
          </TextField>

          <TextField select size="medium" variant="filled" defaultValue="EUR" label="Native select" SelectProps={{
          native: true
        }}>
            {currencies.map(option => <option key={option.value} value={option.value}>
                {option.label}
              </option>)}
          </TextField>
        </Stack>
      </Block>

      <Block title="Size" bgTransparent>
        <Stack spacing={3}>
          <TextField label="Size" variant="filled" defaultValue="Small" />
          <TextField label="Size" variant="filled" defaultValue="Medium" size="medium" />
        </Stack>
      </Block>
    </Masonry>;
};

export default Filled;
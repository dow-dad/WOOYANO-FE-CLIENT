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

const Outlined = () => {
  const [visiblePassword, setVisiblePassword] = useState(false);

  const handlePasswordVisibleToggle = () => setVisiblePassword(state => !state);

  return <Masonry columns={{
    md: 2,
    xs: 1
  }} spacing={3}>
      <Block title="Basic">
        <Stack spacing={3}>
          <TextField label="Name" size="medium" />
          <TextField label="Name" size="medium" defaultValue="Nabed Khan" />
          <TextField type="password" label="Password" size="medium" defaultValue="123456" />
          <TextField type="email" label="Email" size="medium" disabled />
        </Stack>
      </Block>

      <Block title="With Adornment">
        <Stack spacing={3}>
          <TextField size="medium" label="With Normal TextField" id="outlined-start-adornment" InputProps={{
          startAdornment: <InputAdornment position="start">kg</InputAdornment>
        }} />

          <TextField size="medium" label="Password" type={visiblePassword ? "text" : "password"} InputProps={{
          endAdornment: <IconButton onClick={handlePasswordVisibleToggle} sx={{
            p: 0
          }}>
                  {visiblePassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
        }} />

          <TextField size="medium" label="Password" defaultValue="123456" type={visiblePassword ? "text" : "password"} InputProps={{
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

      <Block title="Select">
        <Stack spacing={3}>
          <TextField select size="medium" label="Select" defaultValue="EUR">
            {currencies.map(option => <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>)}
          </TextField>

          <TextField select size="medium" defaultValue="EUR" label="Native select" SelectProps={{
          native: true
        }}>
            {currencies.map(option => <option key={option.value} value={option.value}>
                {option.label}
              </option>)}
          </TextField>
        </Stack>
      </Block>

      <Block title="With Helper Text">
        <Stack spacing={3}>
          <TextField size="medium" label="Helper text" id="outlined-helperText" defaultValue="Nabed Khan" helperText="Some important text" />

          <TextField error label="Error" size="medium" defaultValue="Hello World" helperText="Incorrect entry." id="outlined-error-helper-text" />
        </Stack>
      </Block>

      <Block title="Size">
        <Stack spacing={3}>
          <TextField label="Size" defaultValue="Small" />
          <TextField label="Size" defaultValue="Medium" size="medium" />
        </Stack>
      </Block>
    </Masonry>;
};

export default Outlined;
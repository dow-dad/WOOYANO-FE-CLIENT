import { Box, Card, Grid, Stack, Switch, Button, Divider, Checkbox, TextField } from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";
import { nanoid } from "nanoid"; // CUSTOM COMPONENTS

import { FlexBetween } from "components/flexbox";
import { H6, Paragraph, Small } from "components/typography"; // CUSTOM DUMMY DATA SET

const PREFERENCES = [{
  id: nanoid(),
  checked: false,
  title: "Successful Payments",
  subtitle: "Receive a notification for every successful payment."
}, {
  id: nanoid(),
  checked: true,
  title: "Payouts",
  subtitle: "Receive a notification for every initiated payout."
}, {
  id: nanoid(),
  checked: true,
  title: "Fee Collection",
  subtitle: "Receive a notification for every initiated payout."
}, {
  id: nanoid(),
  checked: false,
  title: "Invoice Payments",
  subtitle: "Receive a notification for every initiated payout."
}];

const Preferences = () => {
  return <Card>
      <H6 fontSize={14} padding={3}>
        General Preferences
      </H6>

      <Divider />

      <Box padding={3}>
        <Grid container spacing={4}>
          <Grid item sm={6} xs={12}>
            <TextField select fullWidth value="english" label="Language" variant="outlined" placeholder="Language" SelectProps={{
            native: true,
            IconComponent: KeyboardArrowDown
          }}>
              <option value="english">English</option>
              <option value="bangla">Bangla</option>
              <option value="hindi">Hindi</option>
            </TextField>
          </Grid>

          <Grid item sm={6} xs={12}>
            <TextField variant="outlined" label="Time Zone" fullWidth value="12:00 AM" />
          </Grid>

          <Grid item sm={6} xs={12}>
            <FlexBetween>
              <Box>
                <Paragraph fontWeight={500}>Early release</Paragraph>
                <Small color="text.secondary">Get included on new features.</Small>
              </Box>

              <Switch defaultChecked />
            </FlexBetween>

            <FlexBetween mt={2}>
              <Box>
                <Paragraph fontWeight={500}>See info about people who view my profile</Paragraph>
                <Small color="text.secondary">More about viewer info.</Small>
              </Box>

              <Switch defaultChecked />
            </FlexBetween>
          </Grid>
        </Grid>
      </Box>

      {
      /* EMAIL PREFERENCES SECTION */
    }
      <H6 fontSize={14} p={3} pt={0}>
        Email Preferences
      </H6>

      <Divider />

      <Stack spacing={2} p={3} pl={2}>
        {PREFERENCES.map(({
        id,
        title,
        subtitle,
        checked
      }) => <Stack direction="row" alignItems="center" spacing={1} key={id}>
            <Checkbox checked={checked} />

            <Box>
              <Paragraph fontWeight={500} lineHeight={1}>
                {title}
              </Paragraph>

              <Small color="text.secondary">{subtitle}</Small>
            </Box>
          </Stack>)}
      </Stack>

      <Stack direction="row" spacing={3} padding={3}>
        <Button variant="contained">Save Changes</Button>
        <Button variant="outlined">Cancel</Button>
      </Stack>
    </Card>;
};

export default Preferences;
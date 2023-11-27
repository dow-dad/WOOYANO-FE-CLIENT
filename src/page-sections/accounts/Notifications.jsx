import { Box, Card, Stack, Table, Button, TableRow, Checkbox, TableBody, TableHead, TextField } from "@mui/material";
import Link from "next/link";
import { KeyboardArrowDown } from "@mui/icons-material"; // CUSTOM COMPONENTS

import { Scrollbar } from "components/scrollbar";
import { H6, Paragraph, Small } from "components/typography"; // COMMON STYLED COMPONENTS

import { BodyTableCell, BodyTableRow, HeadTableCell } from "./common/styles";

const Notifications = () => {
  return <Card>
      <Box padding={3}>
        <H6 fontSize={14}>Notifications</H6>

        <Small color="text.secondary">
          We need permission from your browser to show notifications.{" "}
          <Link href="#">Request permission</Link>
        </Small>
      </Box>

      <Scrollbar autoHide={false}>
        <Table sx={{
        minWidth: 600
      }}>
          <TableHead>
            <TableRow>
              <HeadTableCell>Type</HeadTableCell>
              <HeadTableCell>Email</HeadTableCell>
              <HeadTableCell>Browser</HeadTableCell>
              <HeadTableCell>App</HeadTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {NOTIFICATION_SETTINGS.map(item => <BodyTableRow key={item.id}>
                <BodyTableCell>{item.type}</BodyTableCell>

                <BodyTableCell>
                  <Checkbox defaultChecked={item.email} />
                </BodyTableCell>

                <BodyTableCell>
                  <Checkbox defaultChecked={item.browser} />
                </BodyTableCell>

                <BodyTableCell>
                  <Checkbox defaultChecked={item.app} />
                </BodyTableCell>
              </BodyTableRow>)}
          </TableBody>
        </Table>
      </Scrollbar>

      <Box padding={3}>
        <Box mb={6} mt={2}>
          <TextField select fullWidth value="always" variant="outlined" placeholder="Language" label="When should we send you notifications?" SelectProps={{
          native: true,
          IconComponent: KeyboardArrowDown
        }} sx={{
          maxWidth: 400
        }}>
            <option value="always">Always</option>
          </TextField>

          <Paragraph color="text.secondary" mt={2}>
            In order to cut back on noise, email notifications are grouped together and only sent
            when you're idle or offline.
          </Paragraph>
        </Box>

        <Stack direction="row" spacing={2}>
          <Button variant="contained">Save Changes</Button>
          <Button variant="outlined">Cancel</Button>
        </Stack>
      </Box>
    </Card>;
};

const NOTIFICATION_SETTINGS = [{
  id: 1,
  app: false,
  email: true,
  browser: false,
  type: "New for you"
}, {
  id: 2,
  app: true,
  email: true,
  browser: true,
  type: "Account activity"
}, {
  id: 3,
  app: true,
  email: true,
  browser: true,
  type: "A new browser used to sign in"
}, {
  id: 4,
  app: false,
  email: false,
  browser: true,
  type: "A new device is linked"
}, {
  id: 5,
  app: false,
  email: true,
  browser: false,
  type: "A new device connected"
}];
export default Notifications;
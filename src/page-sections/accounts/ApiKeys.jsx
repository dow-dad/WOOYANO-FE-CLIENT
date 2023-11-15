import { Box, Card, Grid, Chip, Alert, Table, Button, Switch, Divider, Select, MenuItem, TableRow, TableBody, TableHead, IconButton, AlertTitle, FormControlLabel } from "@mui/material";
import Link from "next/link";
import { CopyToClipboard } from "react-copy-to-clipboard"; // CUSTOM COMPONENTS

import { Scrollbar } from "components/scrollbar";
import { FlexBetween, FlexBox } from "components/flexbox";
import { H5, H6, Paragraph, Tiny } from "components/typography"; // CUSTOM ICON COMPONENTS

import Copy from "icons/Copy";
import Delete from "icons/Delete";
import NotificationAlert from "icons/NotificationAlert"; // COMMON STYLED COMPONENTS

import { BodyTableCellV2, BodyTableRow, HeadTableCell } from "./common/styles";

const ApiKeys = () => {
  return <Card>
      <FlexBetween px={3} py={2}>
        <H6 fontSize={14}>API Overview</H6>

        <FormControlLabel label="Test Mode" control={<Switch defaultChecked />} slotProps={{
        typography: {
          fontSize: 14
        }
      }} />
      </FlexBetween>

      <Divider />

      <Box padding={3}>
        {
        /* FEATURE SECTION */
      }
        <Grid container spacing={4} mb={3}>
          <Grid item sm={6} xs={12}>
            <H5 fontSize={14} mb={0.5}>
              How to set Api
            </H5>

            <Paragraph fontSize={12} mb={2}>
              Use images to enhance your post, improve its flow, add humor and explain complex
              topics
            </Paragraph>

            <Button variant="contained">Get Started</Button>
          </Grid>

          <Grid item sm={6} xs={12}>
            <H5 fontSize={14} mb={0.5}>
              Developer Tools
            </H5>

            <Paragraph fontSize={12} mb={2}>
              Plan your blog post by choosing a topic, creating an outline conduct research, and
              checking facts
            </Paragraph>

            <Button variant="contained">Create Rule</Button>
          </Grid>
        </Grid>

        {
        /* ALERT SECTION */
      }
        <Alert severity="info" variant="outlined" icon={<NotificationAlert />}>
          <AlertTitle>Two Factor Authentication</AlertTitle>
          Adds an extra layer of security to your account. To log in, in you'll need to provide a 4
          digit amazing and create outstanding products to serve your clients{" "}
          <Link href="#">Learn More</Link>.
        </Alert>
      </Box>

      {
      /* LOGIN SESSION TABLE SECTION */
    }
      <FlexBetween px={3} py={2}>
        <H5 fontSize={14}>Login Sessions</H5>

        <Select defaultValue={2022} size="small">
          <MenuItem value={2022}>2022</MenuItem>
          <MenuItem value={2021}>2021</MenuItem>
          <MenuItem value={2020}>2020</MenuItem>
        </Select>
      </FlexBetween>

      <Scrollbar autoHide={false}>
        <Table sx={{
        minWidth: 800
      }}>
          <TableHead>
            <TableRow>
              <HeadTableCell>Location</HeadTableCell>
              <HeadTableCell>Status</HeadTableCell>
              <HeadTableCell>Device</HeadTableCell>
              <HeadTableCell>IP Address</HeadTableCell>
              <HeadTableCell>Time</HeadTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {sessionList.map(item => <BodyTableRow key={item.id}>
                <BodyTableCellV2>{item.location}</BodyTableCellV2>
                <BodyTableCellV2>
                  <Chip size="small" label={item.status} color={item.status === "Error" ? "error" : "success"} />
                </BodyTableCellV2>
                <BodyTableCellV2>{item.device}</BodyTableCellV2>
                <BodyTableCellV2>{item.ip}</BodyTableCellV2>
                <BodyTableCellV2>{item.time}</BodyTableCellV2>
              </BodyTableRow>)}
          </TableBody>
        </Table>
      </Scrollbar>

      <Divider sx={{
      my: 2
    }} />

      {
      /* API KEYS TABLE SECTION */
    }
      <H5 fontSize={14} p={3}>
        API Keys
      </H5>

      <Scrollbar autoHide={false}>
        <Table sx={{
        minWidth: 800
      }}>
          <TableHead>
            <TableRow>
              <HeadTableCell>Label</HeadTableCell>
              <HeadTableCell>API Keys</HeadTableCell>
              <HeadTableCell>Created</HeadTableCell>
              <HeadTableCell>Status</HeadTableCell>
              <HeadTableCell>Action</HeadTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {keys.map((item, index) => <BodyTableRow key={index}>
                <BodyTableCellV2>{item.label}</BodyTableCellV2>

                <BodyTableCellV2>
                  <FlexBox alignItems="center">
                    <Tiny fontSize={12} minWidth={180}>
                      {item.key}
                    </Tiny>

                    <CopyToClipboard text={item.key} onCopy={() => true}>
                      <IconButton color="inherit">
                        <Copy fontSize="small" />
                      </IconButton>
                    </CopyToClipboard>
                  </FlexBox>
                </BodyTableCellV2>

                <BodyTableCellV2>{item.created}</BodyTableCellV2>

                <BodyTableCellV2>
                  <Chip size="small" label={item.status} color={item.status === "Inactive" ? "error" : "success"} />
                </BodyTableCellV2>

                <BodyTableCellV2>
                  <IconButton color="inherit">
                    <Delete fontSize="small" />
                  </IconButton>
                </BodyTableCellV2>
              </BodyTableRow>)}
          </TableBody>
        </Table>
      </Scrollbar>
    </Card>;
};

const sessionList = [{
  id: 1,
  location: "USA(5)",
  status: "Ok",
  device: "	Chrome - Windows",
  ip: "	236.125.56.78",
  time: "2 mins ago"
}, {
  id: 2,
  location: "United Kingdom(10)",
  status: "Ok",
  device: "Safari - Mac OS",
  ip: "236.125.56.79",
  time: "4 mins ago"
}, {
  id: 3,
  location: "Norway(8)",
  status: "Error",
  device: "Firefox - Windows",
  ip: "236.125.56.74",
  time: "10 mins ago"
}];
const keys = [{
  label: "none set",
  key: "fftt456765gjkkjhi83093985",
  created: "Nov 12, 2021",
  status: "Active"
}, {
  label: "Navitare",
  key: "jk076590ygghgh324vd33",
  created: "Nov 14, 2021",
  status: "Active"
}, {
  label: "Docs API Key",
  key: "fftt456765gjkkjhi83093985",
  created: "Nov 14, 2021",
  status: "Inactive"
}, {
  label: "Remore Interface",
  key: "jk076590ygghgh324vd33",
  created: "Nov 15, 2021",
  status: "Active"
}];
export default ApiKeys;
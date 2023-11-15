import { Box, Card, Grid, Table, Alert, styled, Button, Select, Divider, useTheme, MenuItem, TableRow, InputBase, TableBody, TableHead, AlertTitle, IconButton } from "@mui/material";
import { useState } from "react";
import { ContentCopy, Info } from "@mui/icons-material";
import { CopyToClipboard } from "react-copy-to-clipboard"; // CUSTOM COMPONENTS

import { FlexBetween } from "components/flexbox";
import { Scrollbar } from "components/scrollbar";
import { H5, H6, Paragraph } from "components/typography"; // CUSTOM ICON COMPONENTS

import SignIn from "icons/SignIn";
import ChartIcon from "icons/ChartIcon";
import DollarOutlined from "icons/DollarOutlined";
import CheckMarkCircleOutlined from "icons/CheckMarkCircleOutlined"; // COMMON STYLED COMPONENTS

import { BodyTableCellV2, BodyTableRow, HeadTableCell } from "./common/styles"; // CUSTOM UTILS METHOD

import { format } from "utils/currency"; // STYLED COMPONENT

const EarningBox = styled(Box)(({
  theme
}) => ({
  paddingBlock: 12,
  textAlign: "center",
  borderRadius: "8px",
  border: `1px solid ${theme.palette.divider}`
})); // CUSTOM DUMMY DATA SET

const REFER_LIST = [{
  orderId: "678935899",
  user: "Marcus Harris",
  date: "Nov 12, 2021",
  bonus: 15,
  profit: 1200
}, {
  orderId: "678935900",
  user: "Robert Smith",
  date: "Nov 14, 2021",
  bonus: 53,
  profit: 2400
}, {
  orderId: "678935901",
  user: "Williams Brown",
  date: "Nov 15, 2021",
  bonus: 76,
  profit: 1200
}, {
  orderId: "678935902",
  user: "Robert Smith",
  date: "Nov 14, 2021",
  bonus: 53,
  profit: 2400
}];

const Referrals = () => {
  const theme = useTheme();
  const [referLink] = useState("https://Example.com/reffer/?refid=345re66787k8"); // CUSTOM DUMMY DATA SET

  const EARNING_LIST = [{
    id: 1,
    amount: 85460,
    Icon: ChartIcon,
    name: "Net Earnings",
    iconColor: theme.palette.primary.main
  }, {
    id: 2,
    amount: 44550,
    Icon: DollarOutlined,
    name: "Balance",
    iconColor: theme.palette.success.main
  }, {
    id: 3,
    amount: 4550,
    Icon: CheckMarkCircleOutlined,
    name: "Avg Deal Size",
    iconColor: theme.palette.error.main
  }, {
    id: 4,
    amount: 4550,
    Icon: SignIn,
    name: "Referral Signup",
    iconColor: theme.palette.info.main
  }];
  return <Card sx={{
    pb: 2
  }}>
      <H6 fontSize={14} padding={3}>
        Referrals
      </H6>

      <Divider />

      <Box padding={3}>
        {
        /* DATA VISUALIZATION */
      }
        <Grid container spacing={3} mb={3}>
          {EARNING_LIST.map(item => <Grid item md={3} sm={6} xs={12} key={item.id}>
              <EarningBox key={item.id}>
                <item.Icon sx={{
              color: item.iconColor
            }} />
                <H5 fontSize={14} my={0.5}>
                  ${format(item.amount, "0,0")}
                </H5>

                <Paragraph color="text.secondary">{item.name}</Paragraph>
              </EarningBox>
            </Grid>)}
        </Grid>

        {
        /* ALERT AREA SECTION */
      }
        <Alert severity="info" variant="outlined" icon={<Info />} action={<Button>Withdraw $44,550</Button>}>
          <AlertTitle>We Need Your Attention</AlertTitle>
          Writing headlines for blog posts is as much an art as it is a science, and warrants its
          own post, but for now, all I’d advise is experimenting what works for your audience,
          especially if it’s not resonating with your audience
        </Alert>

        {
        /* REFERRAL LINK COPY CLIPBOARD */
      }
        <Box py={3}>
          <Grid container spacing={2}>
            <Grid item md={6} xs={12}>
              <H5 fontSize={14} mb={0.5}>
                Your Referral Link
              </H5>

              <Paragraph>
                Plan your blog post by choosing a topic, creating an outline conduct research, and
                checking facts
              </Paragraph>
            </Grid>

            <Grid item md={6} xs={12}>
              <InputBase fullWidth value={referLink} disabled sx={{
              fontSize: 12,
              fontWeight: 500,
              borderRadius: 4,
              padding: ".5rem 1rem",
              backgroundColor: "grey.100",
              ".MuiInputBase-input.Mui-disabled": {
                WebkitTextFillColor: theme.palette.grey[500]
              }
            }} endAdornment={<CopyToClipboard text={referLink} onCopy={() => true}>
                    <IconButton>
                      <ContentCopy fontSize="small" />
                    </IconButton>
                  </CopyToClipboard>} />
            </Grid>
          </Grid>
        </Box>
      </Box>

      {
      /* REFFED USERS TABLE */
    }
      <FlexBetween px={3} pb={2}>
        <H5 fontSize={14}>Referred Users</H5>

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
          <TableHead sx={{
          backgroundColor: "divider"
        }}>
            <TableRow>
              <HeadTableCell>Order ID</HeadTableCell>
              <HeadTableCell>User</HeadTableCell>
              <HeadTableCell>Date</HeadTableCell>
              <HeadTableCell>Bonus</HeadTableCell>
              <HeadTableCell>Profit</HeadTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {REFER_LIST.map(item => <BodyTableRow key={item.orderId}>
                <BodyTableCellV2>{item.orderId}</BodyTableCellV2>
                <BodyTableCellV2>{item.user}</BodyTableCellV2>
                <BodyTableCellV2>{item.date}</BodyTableCellV2>
                <BodyTableCellV2>{item.bonus}%</BodyTableCellV2>
                <BodyTableCellV2 sx={{
              color: "success.main"
            }}>
                  ${format(item.profit, "0,0.00")}
                </BodyTableCellV2>
              </BodyTableRow>)}
          </TableBody>
        </Table>
      </Scrollbar>
    </Card>;
};

export default Referrals;
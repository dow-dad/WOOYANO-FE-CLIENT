import { Box, Card, Stack, Table, styled, Button, Divider, useTheme, TableRow, TableBody, TableHead, Select, MenuItem } from "@mui/material"; // CUSTOM COMPONENTS

import { Scrollbar } from "components/scrollbar";
import { FlexBetween } from "components/flexbox";
import { H6, Paragraph, Span } from "components/typography"; // CUSTOM ICON COMPONENTS

import ChartIcon from "icons/ChartIcon";
import DownloadTo from "icons/DownloadTo";
import ReceiptOutlined from "icons/ReceiptOutlined";
import ChartDonut from "icons/sidebar/ChartDonutIcon"; // COMMON STYLED COMPONENTS

import { BodyTableCellV2, BodyTableRow, HeadTableCell } from "./common/styles"; // CUSTOM UTILS METHOD

import { format } from "utils/currency"; // STYLED COMPONENTS

const EarningBoxWrapper = styled(FlexBetween)(({
  theme
}) => ({
  [theme.breakpoints.down(555)]: {
    flexDirection: "column",
    "& > .MuiButton-root": {
      width: "100%"
    }
  },
  [theme.breakpoints.down(706)]: {
    "& > .MuiButton-root": {
      marginTop: 16
    }
  }
}));
const StyledStack = styled(Stack)(({
  theme
}) => ({
  [theme.breakpoints.down(555)]: {
    width: "100%",
    flexDirection: "column",
    "& > .MuiBox-root": {
      marginLeft: 0,
      width: "100%",
      marginBottom: 16
    }
  }
}));
const EarningBox = styled(Box)(({
  theme
}) => ({
  width: 130,
  paddingTop: 8,
  paddingBottom: 8,
  textAlign: "center",
  borderRadius: "8px",
  border: `1px solid ${theme.palette.grey[200]}`
}));
const BodyTableCell = styled(BodyTableCellV2)(() => ({
  "&:first-of-type": {
    fontWeight: 500
  },
  "&:last-of-type": {
    maxWidth: 100
  }
}));
const StyledHeadTableCell = styled(HeadTableCell)({
  "&:last-of-type": {
    maxWidth: 100
  }
});

const Statements = () => {
  const theme = useTheme(); // CUSTOM DUMMY DATA SET

  const EARNING_LIST = [{
    id: 1,
    amount: 4550,
    Icon: ChartIcon,
    name: "Net Earnings",
    iconColor: theme.palette.primary.main
  }, {
    id: 2,
    amount: 80,
    name: "Change",
    Icon: ChartDonut,
    iconColor: theme.palette.warning.main
  }, {
    id: 3,
    amount: 2800,
    name: "Fees",
    Icon: ReceiptOutlined,
    iconColor: theme.palette.info.main
  }];
  return <Card sx={{
    pb: 2
  }}>
      <H6 fontSize={14} padding={3}>
        Earnings
      </H6>

      <Divider />

      <Box padding={3}>
        <Paragraph color="grey.500">
          Last <Span color="primary.main">15</Span> day earnings calculated
        </Paragraph>

        <EarningBoxWrapper flexWrap="wrap" pt={2}>
          <StyledStack direction="row" flexWrap="wrap" spacing={2}>
            {EARNING_LIST.map(({
            id,
            Icon,
            amount,
            iconColor,
            name
          }) => <EarningBox key={id}>
                <Icon sx={{
              color: iconColor
            }} />

                <H6 fontSize={14} my={0.5}>
                  ${format(amount, "0,0")}
                </H6>

                <Paragraph color="text.secondary">{name}</Paragraph>
              </EarningBox>)}
          </StyledStack>

          <Button variant="contained">Withdraw $4,550</Button>
        </EarningBoxWrapper>
      </Box>

      <FlexBetween px={3} py={2}>
        <H6 fontSize={14}>Statement</H6>

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
              <StyledHeadTableCell>Date</StyledHeadTableCell>
              <StyledHeadTableCell>Order ID</StyledHeadTableCell>
              <StyledHeadTableCell>Order Details</StyledHeadTableCell>
              <StyledHeadTableCell>Amount</StyledHeadTableCell>
              <StyledHeadTableCell>Invoice</StyledHeadTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {[1, 2, 3, 4, 5, 6].map(item => <BodyTableRow key={item}>
                <BodyTableCell>Nov 12, 2021</BodyTableCell>
                <BodyTableCell>202745788</BodyTableCell>
                <BodyTableCell>The Icon of full icon set</BodyTableCell>
                <BodyTableCell>$650</BodyTableCell>

                <BodyTableCell>
                  <Button size="small" variant="contained" disabled={item === 1} startIcon={<DownloadTo />}>
                    Download
                  </Button>
                </BodyTableCell>
              </BodyTableRow>)}
          </TableBody>
        </Table>
      </Scrollbar>
    </Card>;
};

export default Statements;
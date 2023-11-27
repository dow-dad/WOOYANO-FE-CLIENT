import { Box, Card, Table, Avatar, styled, TableRow, useTheme, TableBody, TableCell, TableHead } from "@mui/material";
import Chart from "react-apexcharts";
import { nanoid } from "nanoid";
import merge from "lodash.merge"; // CUSTOM COMPONENTS

import { Title } from "components/title";
import { Scrollbar } from "components/scrollbar";
import { MoreButton } from "components/more-button";
import { FlexBetween, FlexBox } from "components/flexbox";
import { Paragraph, Small } from "components/typography"; // CUSTOM UTILS METHODS

import { numberFormat } from "utils/numberFormat";
import { baseChartOptions } from "utils/baseChartOptions"; // COMMON STYLED COMPONENTS

import { HeadTableCell } from "./styles"; // STYLED COMPONENTS

const StyledChart = styled(Chart)({
  "& .apexcharts-canvas": {
    marginLeft: "auto"
  },
  "& .apexcharts-tooltip-text-y-value": {
    marginLeft: 0
  },
  "& .apexcharts-xaxistooltip": {
    display: "none !important"
  }
});
const BodyTableCell = styled(TableCell)(({
  theme
}) => ({
  fontWeight: 600,
  color: theme.palette.grey[500],
  borderTop: `1px dashed ${theme.palette.divider}`
}));

const TopReferral = () => {
  const theme = useTheme();

  const chartCategories = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"]; // REACT CHART DATA SERIES

  const chartSeries = [{
    name: "Tasks",
    data: [0, 30, 16, 70, 26, 30, 12]
  }]; // REACT CHART OPTIONS

  const chartOptions = color => {
    const options = {
      colors: [color],
      stroke: {
        width: 2
      },
      tooltip: {
        enabled: false
      },
      xaxis: {
        categories: chartCategories
      }
    };
    return merge(baseChartOptions(theme), options);
  }; // CUSTOM DUMMY DATA


  const DATA = [{
    id: nanoid(),
    image: "/static/social-media/dribble.svg",
    title: "Dribbble",
    category: "Community",
    rate: 70,
    visit: 12350,
    chart: {
      series: chartSeries,
      option: chartOptions(theme.palette.success.main)
    }
  }, {
    id: nanoid(),
    image: "/static/social-media/linkedin.svg",
    title: "Linked In",
    category: "Social Media",
    rate: 60,
    visit: 10275,
    chart: {
      series: chartSeries,
      option: chartOptions(theme.palette.error.main)
    }
  }, {
    id: nanoid(),
    image: "/static/social-media/twitter.svg",
    title: "Twitter",
    category: "Social Media",
    rate: 50,
    visit: 20348,
    chart: {
      series: chartSeries,
      option: chartOptions(theme.palette.success.main)
    }
  }];
  return <Card sx={{
    padding: 3,
    pb: 0
  }}>
      <FlexBetween mb={4}>
        <Box>
          <Title title={1352} subtitle={t("Visits by Top Referral Source")} percentage="+12.5%" />
        </Box>

        <MoreButton size="small" />
      </FlexBetween>

      <Scrollbar>
        <Table sx={{
        minWidth: 500
      }}>
          <TableHead>
            <TableRow>
              <HeadTableCell>REFERRAL SOURCE</HeadTableCell>
              <HeadTableCell align="center">BOUNDCE RATE (%)</HeadTableCell>
              <HeadTableCell align="center">VISIT</HeadTableCell>
              <HeadTableCell align="right">CHART</HeadTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {DATA.map(item => <TableRow key={item.id}>
                <BodyTableCell>
                  <FlexBox alignItems="center" gap={1.5}>
                    <Avatar variant="square" src={item.image} />
                    <Box>
                      <Paragraph color="text.primary" fontWeight={600}>
                        {item.title}
                      </Paragraph>
                      <Small color="text.secondary">{item.category}</Small>
                    </Box>
                  </FlexBox>
                </BodyTableCell>

                <BodyTableCell align="center">{item.rate}%</BodyTableCell>

                <BodyTableCell align="center">{numberFormat(item.visit)}</BodyTableCell>

                <BodyTableCell align="right">
                  <StyledChart type="line" width={80} height={80} series={item.chart.series} options={item.chart.option} />
                </BodyTableCell>
              </TableRow>)}
          </TableBody>
        </Table>
      </Scrollbar>
    </Card>;
};

export default TopReferral;
import { Box, Card, useTheme } from "@mui/material";
import merge from "lodash.merge";
import Chart from "react-apexcharts";
// CUSTOM COMPONENTS
import { Percentage } from "components/percentage";
import { MoreButton } from "components/more-button";
import { H6, Paragraph } from "components/typography";
import { FlexBetween, FlexBox } from "components/flexbox"; // CUSTOM UTILS METHODS

import { format } from "utils/currency";
import { baseChartOptions } from "utils/baseChartOptions";

const YoutubeCampaign = () => {
  const theme = useTheme(); // REACT CHART CATEGORIES LABEL

  const chartCategories = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"]; // REACT CHART DATA SERIES

  const chartSeries = [{
    name: "Tasks",
    data: [22, 30, 46, 50, 46, 30, 22]
  }]; // REACT CHART OPTIONS

  const chartOptions = merge(baseChartOptions(theme), {
    stroke: {
      show: false
    },
    xaxis: {
      categories: chartCategories
    },
    colors: [theme.palette.divider, theme.palette.primary.main],
    plotOptions: {
      bar: {
        borderRadius: 10,
        distributed: true,
        columnWidth: "50%",
        borderRadiusApplication: "end"
      }
    },
    tooltip: {
      y: {
        formatter: (val, {
          dataPointIndex,
          w
        }) => {
          return `${w.globals.labels[dataPointIndex]} : ${val}`;
        }
      }
    }
  });
  return <Card>
      <FlexBetween p={3}>
        <Box>
          <Paragraph ellipsis lineHeight={1.3} fontSize={18} fontWeight={500}>
            YouTube Campaign
          </Paragraph>

          <Paragraph color="text.secondary">Active Campaign</Paragraph>
        </Box>

        <MoreButton size="small" />
      </FlexBetween>

      <FlexBetween flexWrap="wrap" px={3} pt={2} pb={1}>
        <Box>
          <FlexBox alignItems="center" gap={1}>
            <H6 fontSize={22} lineHeight={1}>
              {format(500000)}
            </H6>

            <Percentage type="error">-10.25%</Percentage>
          </FlexBox>

          <Paragraph color="text.secondary">Subscribers</Paragraph>
        </Box>

        <Box>
          <FlexBox alignItems="center" gap={1}>
            <H6 fontSize={22} lineHeight={1}>
              {format(1000000)}
            </H6>

            <Percentage type="success">+4.67%</Percentage>
          </FlexBox>

          <Paragraph color="text.secondary">Subscribers Goal</Paragraph>
        </Box>
      </FlexBetween>

      <Chart type="bar" series={chartSeries} options={chartOptions} height={230} />
    </Card>;
};

export default YoutubeCampaign;
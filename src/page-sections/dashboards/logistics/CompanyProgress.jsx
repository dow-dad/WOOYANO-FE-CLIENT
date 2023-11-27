import { Box, Card, useTheme } from "@mui/material";
import merge from "lodash.merge";
import Chart from "react-apexcharts";
// CUSTOM COMPONENTS
import { Paragraph } from "components/typography";
import { Percentage } from "components/percentage";
import { MoreButton } from "components/more-button";
import { FlexBetween, FlexBox } from "components/flexbox"; // CUSTOM UTILS METHOD

import { baseChartOptions } from "utils/baseChartOptions";

const CompanyProgress = () => {
  const theme = useTheme(); // REACT CHART DATA SERIES

  const chartSeries = [{
    name: "Sales",
    data: [8000, 4000, 4500, 17000, 18000, 40000, 18000, 10000, 6000, 20000]
  }]; // REACT CHART CATEGORIES LABEL

  const chartCategories = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]; // REACT CHART OPTIONS

  const chartOptions = merge(baseChartOptions(theme), {
    grid: {
      show: true,
      strokeDashArray: 3,
      borderColor: theme.palette.divider
    },
    colors: [theme.palette.primary.main, theme.palette.primary[300], theme.palette.primary[100]],
    xaxis: {
      categories: chartCategories,
      crosshairs: {
        show: true
      },
      labels: {
        show: true,
        style: {
          colors: theme.palette.text.secondary
        }
      }
    },
    yaxis: {
      min: 0,
      show: true,
      max: 50000,
      tickAmount: 5,
      labels: {
        formatter: value => value / 1000 + "K",
        style: {
          colors: theme.palette.text.secondary
        }
      }
    }
  });
  return <Card sx={{
    pt: 3,
    px: 2,
    pb: 1
  }}>
      <FlexBetween px={2}>
        <Paragraph fontSize={18} fontWeight={500}>
          Company Progress
        </Paragraph>

        <MoreButton size="small" />
      </FlexBetween>

      <FlexBox p={2} gap={2} alignItems="center" flexWrap="wrap">
        <Box>
          <FlexBox alignItems="center" gap={1}>
            <Paragraph fontWeight={600} fontSize={22} color="primary.main">
              $18,469
            </Paragraph>

            <Percentage type="error">-2.37%</Percentage>
          </FlexBox>

          <Paragraph color="text.secondary">This month</Paragraph>
        </Box>

        <Box>
          <FlexBox alignItems="center" gap={1}>
            <Paragraph fontWeight={600} fontSize={22}>
              $22,356
            </Paragraph>

            <Percentage>+4.67%</Percentage>
          </FlexBox>

          <Paragraph color="text.secondary">Last month</Paragraph>
        </Box>
      </FlexBox>

      <Chart type="area" height={270} series={chartSeries} options={chartOptions} />
    </Card>;
};

export default CompanyProgress;
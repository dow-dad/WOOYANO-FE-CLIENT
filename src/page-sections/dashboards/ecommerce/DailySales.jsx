import { Box, Card, useTheme } from "@mui/material";
import merge from "lodash.merge";
import Chart from "react-apexcharts";
// CUSTOM COMPONENTS
import { FlexBox } from "components/flexbox";
import { Percentage } from "components/percentage";
import { H6, Paragraph, Span } from "components/typography"; // CUSTOM UTILS METHODS

import { numberFormat } from "utils/numberFormat";
import { baseChartOptions } from "utils/baseChartOptions";

const DailySales = () => {
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
        borderRadius: 5,
        distributed: true,
        columnWidth: "40%",
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
      <Box p={3} pb={0}>
        <FlexBox alignItems="center" gap={1}>
          <H6>
            <Span fontWeight={500} fontSize={18} color="grey.400">
              $
            </Span>
            {numberFormat(51352)}
          </H6>
          <Percentage type="success">+12.5%</Percentage>
        </FlexBox>

        <Paragraph color="text.secondary">Average Daily Sales</Paragraph>
      </Box>

      <Chart type="bar" series={chartSeries} options={chartOptions} height={130} />
    </Card>;
};

export default DailySales;
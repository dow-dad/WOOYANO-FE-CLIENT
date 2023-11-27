import { Box, Card, useTheme } from "@mui/material";
import merge from "lodash.merge";
import Chart from "react-apexcharts";
// CUSTOM COMPONENT
import { Title } from "components/title"; // CUSTOM UTILS METHODS

import { baseChartOptions } from "utils/baseChartOptions";

const CompleteRate = () => {
  const theme = useTheme(); // REACT CHART CATEGORIES LABEL

  const chartCategories = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"]; // REACT CHART DATA SERIES

  const chartSeries = [{
    name: "Tasks",
    data: [70, 60, 90, 80, 100, 70, 80]
  }]; // REACT CHART OPTIONS

  const chartOptions = merge(baseChartOptions(theme), {
    chart: {
      offsetY: 30
    },
    stroke: {
      show: false
    },
    xaxis: {
      categories: chartCategories
    },
    colors: [theme.palette.divider, theme.palette.success[500]],
    plotOptions: {
      bar: {
        borderRadius: 7,
        columnWidth: "45%",
        distributed: true,
        borderRadiusApplication: "end"
      }
    },
    tooltip: {
      y: {
        formatter: function (val, {
          dataPointIndex,
          w
        }) {
          return `${w.globals.labels[dataPointIndex]} : ${val}`;
        }
      }
    }
  });
  return <Card>
      <Box p={3} pb={0}>
        <Title title="55%" subtitle="Complete Rates" percentage="+12.5%" />
      </Box>

      <Chart type="bar" options={chartOptions} series={chartSeries} height={120} />
    </Card>;
};

export default CompleteRate;
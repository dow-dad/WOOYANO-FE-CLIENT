import { Box, Card, useTheme } from "@mui/material";
import merge from "lodash.merge";
import Chart from "react-apexcharts";
// CUSTOM COMPONENTS
import { Title } from "components/title"; // CUSTOM UTILS METHODS

import { baseChartOptions } from "utils/baseChartOptions"; // ==============================================================

// ==============================================================
const CompleteGoal = ({
  chart = "bar"
}) => {
  const theme = useTheme(); // REACT CHART CATEGORIES LABEL

  const chartCategories = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"]; // REACT CHART DATA SERIES

  const chartSeries = [{
    name: "Tasks",
    data: [70, 60, 90, 80, 100, 70, 80]
  }]; // REACT BAR CHART OPTIONS

  const barChartOptions = merge(baseChartOptions(theme), {
    chart: {
      offsetY: 30
    },
    stroke: {
      show: false
    },
    xaxis: {
      categories: chartCategories
    },
    colors: [theme.palette.divider, theme.palette.primary.main],
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
  }); // REACT AREA CHART OPTIONS

  const areaChartOptions = merge(baseChartOptions(theme), {
    stroke: {
      show: true
    },
    colors: [theme.palette.primary.main, theme.palette.primary[100]],
    xaxis: {
      categories: chartCategories,
      crosshairs: {
        show: true
      }
    }
  });
  return <Card>
      <Box p={3} pb={0}>
        <Title title={41352} percentage="+12.5%" percentageType="primary" subtitle="Completed Goals" />
      </Box>

      {chart === "bar" ? <Chart type="bar" options={barChartOptions} series={chartSeries} height={120} /> : <Box sx={{
      "& > div": {
        minHeight: "0px !important"
      }
    }}>
          <Chart type="area" options={areaChartOptions} series={chartSeries} height={120} />
        </Box>}
    </Card>;
};

export default CompleteGoal;
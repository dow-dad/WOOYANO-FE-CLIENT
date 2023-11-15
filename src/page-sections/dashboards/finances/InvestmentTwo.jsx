import { Card, useTheme } from "@mui/material";
import merge from "lodash.merge";
import Chart from "react-apexcharts";
// CUSTOM COMPONENTS
import { FlexBetween } from "components/flexbox";
import { Paragraph } from "components/typography";
import { MoreButton } from "components/more-button"; // CUSTOM UTILS METHOD

import { baseChartOptions } from "utils/baseChartOptions";

const InvestmentTwo = () => {
  const theme = useTheme(); // REACT CHART CATEGORIES LABEL

  const chartCategories = ["SAT", "SUN", "MON", "TUE", "WED", "THU", "FRI"]; // REACT CHART DATA SERIES

  const chartSeries = [{
    name: "Sales",
    data: [28000, 13000, 18000, 22000, 11000, 30000, 20000]
  }]; // REACT CHART OPTIONS

  const chartOptions = merge(baseChartOptions(theme), {
    stroke: {
      width: 0
    },
    grid: {
      show: true,
      strokeDashArray: 3,
      borderColor: theme.palette.divider
    },
    colors: [theme.palette.primary.main, theme.palette.primary[300], theme.palette.primary[100]],
    xaxis: {
      categories: chartCategories,
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
    },
    plotOptions: {
      bar: {
        borderRadius: 9,
        columnWidth: "17%",
        borderRadiusApplication: "end",
        colors: {
          backgroundBarRadius: 9,
          backgroundBarOpacity: 0.4,
          backgroundBarColors: [theme.palette.grey[200]]
        }
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
  return <Card sx={{
    pt: 3,
    px: 2,
    pb: 1
  }}>
      <FlexBetween px={2}>
        <Paragraph fontSize={18} fontWeight={500}>
          Investment
        </Paragraph>

        <MoreButton size="small" />
      </FlexBetween>

      <Chart type="bar" height={300} series={chartSeries} options={chartOptions} />
    </Card>;
};

export default InvestmentTwo;
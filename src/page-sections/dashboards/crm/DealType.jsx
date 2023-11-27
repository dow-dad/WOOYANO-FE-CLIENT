import { Card, useTheme } from "@mui/material";
import merge from "lodash.merge";
import Chart from "react-apexcharts";
// CUSTOM COMPONENTS
import { FlexBetween } from "components/flexbox";
import { Paragraph } from "components/typography";
import { MoreButton } from "components/more-button"; // CUSTOM UTILS METHODS

import { isDark } from "utils/constants";
import { baseChartOptions } from "utils/baseChartOptions";

const DealType = () => {
  const theme = useTheme(); // REACT CHART OPTIONS

  const chartOptions = merge(baseChartOptions(theme), {
    labels: ["Pending", "Won", "Loss"],
    stroke: {
      colors: [isDark(theme) ? theme.palette.grey[800] : "#fff"]
    },
    colors: [theme.palette.primary.main, theme.palette.success[500], theme.palette.grey[500]],
    legend: {
      show: true,
      position: "bottom",
      itemMargin: {
        horizontal: 7
      },
      fontSize: "14px"
    },
    plotOptions: {
      pie: {
        expandOnClick: false,
        donut: {
          size: "75%",
          labels: {
            show: true,
            name: {
              offsetY: 0
            },
            total: {
              show: true,
              showAlways: true,
              label: "Total",
              fontSize: "12px",
              fontWeight: 500,
              color: theme.palette.text.secondary,
              formatter: function (w) {
                return w.globals.seriesTotals.reduce((a, b) => a + b) + "%";
              }
            },
            value: {
              show: true,
              offsetY: 4,
              fontSize: "18px",
              fontWeight: 500,
              formatter: val => val
            }
          }
        }
      }
    },
    tooltip: {
      y: {
        formatter: val => String(val),
        title: {
          formatter: series => series
        }
      }
    }
  });
  return <Card sx={{
    p: 3,
    height: "100%"
  }}>
      <FlexBetween pb={3}>
        <Paragraph fontSize={18} fontWeight={500}>
          Deal Type
        </Paragraph>

        <MoreButton size="small" />
      </FlexBetween>

      <Chart height={240} type="donut" options={chartOptions} series={[40, 20, 20]} />
    </Card>;
};

export default DealType;
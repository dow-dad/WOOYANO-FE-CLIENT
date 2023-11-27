import { Card, useTheme } from "@mui/material";
import merge from "lodash.merge";
import Chart from "react-apexcharts";
// CUSTOM COMPONENTS
import { FlexBetween } from "components/flexbox";
import { Paragraph } from "components/typography";
import { MoreButton } from "components/more-button"; // CUSTOM UTILS METHODS

import { baseChartOptions } from "utils/baseChartOptions";
import { numberFormat } from "utils/numberFormat";
import { isDark } from "utils/constants";

const Reports = () => {
  const theme = useTheme(); // REACT CHART OPTIONS

  const chartOptions = merge(baseChartOptions(theme), {
    stroke: {
      width: 2,
      colors: [isDark(theme) ? theme.palette.grey[800] : "#fff"]
    },
    labels: ["Expense", "Revenue"],
    colors: [theme.palette.grey[300], theme.palette.primary.main],
    plotOptions: {
      pie: {
        expandOnClick: false,
        donut: {
          size: "80%",
          labels: {
            show: true,
            total: {
              show: true,
              showAlways: true,
              label: "+20%",
              fontSize: "14px",
              fontWeight: 500,
              color: theme.palette.text.secondary,
              formatter: function (w) {
                return "$" + numberFormat(w.globals.seriesTotals.reduce((a, b) => a + b));
              }
            },
            name: {
              offsetY: 23
            },
            value: {
              show: true,
              offsetY: -15,
              fontSize: "20px",
              fontWeight: 600
            }
          }
        }
      }
    },
    tooltip: {
      style: {
        fontSize: "14px"
      },
      y: {
        title: name => name,
        formatter: val => `${val}`
      }
    },
    legend: {
      show: true,
      position: "bottom",
      fontSize: "14px"
    }
  });
  return <Card sx={{
    p: 3,
    height: "100%"
  }}>
      <FlexBetween mb={3}>
        <Paragraph fontSize={18} fontWeight={500}>
          Reports
        </Paragraph>

        <MoreButton size="small" />
      </FlexBetween>

      <Chart height={270} type="donut" series={[10000, 15000]} options={chartOptions} />
    </Card>;
};

export default Reports;
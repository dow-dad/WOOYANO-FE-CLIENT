import { Card, Grid, Box, useTheme, Stack } from "@mui/material";
import { AttachMoney, CurrencyPound, Euro } from "@mui/icons-material";
import { nanoid } from "nanoid";
import merge from "lodash.merge";
import Chart from "react-apexcharts";
// CUSTOM COMPONENTS
import ListItem from "./shared/ListItem";
import { FlexBetween } from "components/flexbox";
import { Paragraph } from "components/typography"; // CUSTOM UTILS METHOD

import { isDark } from "utils/constants";
import { baseChartOptions } from "utils/baseChartOptions"; // DUMMY DATA SET

const DATA = [{
  id: nanoid(),
  title: "USD",
  Icon: AttachMoney,
  value1: 94.65,
  value2: 2.5
}, {
  id: nanoid(),
  title: "EURO",
  Icon: Euro,
  value1: 26.37,
  value2: -1.56
}, {
  id: nanoid(),
  title: "GBP",
  Icon: CurrencyPound,
  value1: 55.24,
  value2: 3.23
}];

const CurrentCurrency = () => {
  const theme = useTheme(); // REACT CHART OPTIONS

  const chartOptions = merge(baseChartOptions(theme), {
    stroke: {
      width: 1,
      colors: [isDark(theme) ? theme.palette.grey[800] : "#fff"]
    },
    labels: ["USD", "EURO", "GBP"],
    colors: [theme.palette.primary.main, theme.palette.warning.main, theme.palette.success[500]],
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
              label: "Increase",
              fontSize: "14px",
              fontWeight: 500,
              color: theme.palette.text.secondary,
              formatter: function (w) {
                return w.globals.seriesTotals.reduce((a, b) => a + b) + "%";
              }
            },
            value: {
              show: true,
              offsetY: 4,
              fontSize: "24px",
              fontWeight: 700,
              formatter: val => val
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
    chart: {
      dropShadow: {
        top: -1,
        left: 3,
        blur: 3,
        opacity: 0.1,
        enabled: true,
        color: "#5D5D69"
      }
    }
  });
  return <Card sx={{
    p: 3,
    height: "100%"
  }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item sm={6} xs={12}>
          <Chart height={200} width="100%" type="donut" series={[33, 33, 33]} options={chartOptions} />
        </Grid>

        <Grid item sm={6} xs={12}>
          <Paragraph mb={2} fontSize={18} fontWeight={500}>
            Current Currency
          </Paragraph>

          <Stack spacing={2}>
            {DATA.map(({
            Icon,
            id,
            title,
            value1,
            value2
          }) => <FlexBetween key={id}>
                <ListItem title={title} Icon={<Icon fontSize="small" color={title === "EURO" ? "success" : title === "GBP" ? "warning" : "primary"} />} />

                <Box>
                  <Paragraph fontWeight={500}>{value1}%</Paragraph>
                  <Paragraph textAlign="end" color={value2 > 0 ? "success.500" : "error.main"}>
                    {value2 > 0 && "+"}
                    {value2}%
                  </Paragraph>
                </Box>
              </FlexBetween>)}
          </Stack>
        </Grid>
      </Grid>
    </Card>;
};

export default CurrentCurrency;
import { Box, Card, Stack, styled, useTheme } from "@mui/material";
import merge from "lodash.merge";
import Chart from "react-apexcharts";
// CUSTOM COMPONENTS
import { Title } from "components/title";
import { FlexBetween } from "components/flexbox";
import { Paragraph } from "components/typography"; // CUSTOM UTILS METHOD

import { isDark } from "utils/constants";
import { numberFormat } from "utils/numberFormat";
import { baseChartOptions } from "utils/baseChartOptions"; // STYLED COMPONENTS

const Wrapper = styled(Card)(({
  theme
}) => ({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr"
  }
}));
const BoxItem = styled(Box)(({
  theme
}) => ({
  padding: 24,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  [theme.breakpoints.up("md")]: {
    borderRight: `1px dashed ${theme.palette.divider}`
  }
})); // EARNING YEAR DUMMY DATA SET

const DATA = [{
  id: 1,
  title: "Truck",
  amount: 2658
}, {
  id: 2,
  title: "Ship",
  amount: 6687
}, {
  id: 3,
  title: "Flight",
  amount: 4348
}];

const ShippingOrders = () => {
  const theme = useTheme(); // REACT CHART CATEGORIES LABEL

  const chartCategories = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"]; // REACT CHART DATA SERIES

  const chartSeries = [{
    name: "Tasks",
    data: [22, 30, 46, 50, 46, 30, 22]
  }]; // THIS MONTH REACT CHART OPTIONS

  const monthChartOptions = merge(baseChartOptions(theme), {
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
        distributed: true,
        columnWidth: "60%",
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
  }); // EARNING YEAR REACT CHART OPTIONS

  const yearChartOptions = merge(baseChartOptions(theme), {
    labels: ["Truck", "Ship", "Flight"],
    stroke: {
      width: 2,
      colors: [isDark(theme) ? theme.palette.grey[800] : "#fff"]
    },
    colors: [theme.palette.primary.main, theme.palette.grey[600], theme.palette.grey[300]],
    plotOptions: {
      pie: {
        expandOnClick: false,
        donut: {
          size: "70%"
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
    }
  });
  return <Wrapper>
      {
      /* EXPECTED EARNING OF THE YEAR BOX */
    }
      <BoxItem>
        <Box>
          <Title title={51352} titlePrefix="$" percentage="+12.5%" subtitle="Expected Earning of this year" />
        </Box>

        <FlexBetween mt={6} gap={2}>
          <Box ml={-2}>
            <Chart width={130} height={130} type="donut" options={yearChartOptions} series={DATA.reduce((prev, curr) => [...prev, curr.amount], [])} />
          </Box>

          <Stack spacing={1} minWidth={120}>
            {DATA.map(item => <FlexBetween key={item.id}>
                <Paragraph fontWeight={500} color="text.secondary">
                  {item.title}
                </Paragraph>
                <Paragraph fontWeight={500}>${numberFormat(item.amount)}</Paragraph>
              </FlexBetween>)}
          </Stack>
        </FlexBetween>
      </BoxItem>

      {
      /* SHIPPING ORDER THIS MONTH */
    }
      <Box sx={{
      p: 3,
      mb: -3
    }}>
        <Paragraph fontSize={18} fontWeight={500}>
          Shipping orders
        </Paragraph>
        <Paragraph color="text.secondary">This Month</Paragraph>
        <Chart type="bar" series={chartSeries} options={monthChartOptions} height={200} />
      </Box>
    </Wrapper>;
};

export default ShippingOrders;
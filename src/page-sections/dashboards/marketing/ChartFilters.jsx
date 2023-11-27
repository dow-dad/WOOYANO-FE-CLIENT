import { useState } from "react";
import { Box, Card, Stack, styled, useTheme } from "@mui/material";
import merge from "lodash.merge";
import Chart from "react-apexcharts";
// CUSTOM COMPONENTS
import { Percentage } from "components/percentage";
import { MoreButton } from "components/more-button";
import { H6, Paragraph } from "components/typography";
import { FlexBetween, FlexBox } from "components/flexbox"; // CUSTOM UTILS METHODS

import { format } from "utils/currency";
import { baseChartOptions } from "utils/baseChartOptions"; // STYLED COMPONENTS

const ChartWrapper = styled(Box)({
  "& .apexcharts-tooltip-text-y-value": {
    marginLeft: 0
  },
  "& .apexcharts-xaxistooltip": {
    display: "none !important"
  }
});
const TopContentWrapper = styled(FlexBetween)(({
  theme
}) => ({
  [theme.breakpoints.down(730)]: {
    flexDirection: "column",
    "& .list-item": {
      flex: 1
    },
    "& .list": {
      width: "100%"
    },
    "& > button": {
      display: "none"
    }
  }
}));
const BoxWrapper = styled(Box)(({
  theme,
  active
}) => ({
  padding: "1.5rem",
  cursor: "pointer",
  borderRadius: "0 0 12px 12px",
  ...(active && {
    backgroundColor: theme.palette.action.selected
  })
}));

const ChartFilters = () => {
  const LIST = ["E-mail", "Social", "TV", "Google Ads", "Courses", "Holiday"];
  const theme = useTheme();
  const [selectedItem, setSelectedItem] = useState(LIST[0]);

  const handleChange = id => () => setSelectedItem(id); // REACT CHART DATA SERIES


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
      crosshairs: {
        show: true
      },
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
        formatter: value => format(value),
        style: {
          colors: theme.palette.text.secondary
        }
      }
    },
    tooltip: {
      y: {
        formatter: function (val, {
          dataPointIndex,
          w
        }) {
          return `${w.globals.categoryLabels[dataPointIndex]} : $${format(val)}`;
        }
      }
    }
  });
  return <Card>
      <TopContentWrapper gap={4}>
        <Stack className="list" gap={1} direction={{
        sm: "row",
        xs: "column"
      }}>
          {LIST.map(item => <BoxWrapper key={item} className="list-item" onClick={handleChange(item)} active={selectedItem === item ? 1 : 0}>
              <Paragraph ellipsis fontWeight={500} color="text.secondary">
                {item}
              </Paragraph>
            </BoxWrapper>)}
        </Stack>

        <MoreButton size="small" sx={{
        mr: 3
      }} />
      </TopContentWrapper>

      <FlexBox columnGap={6} rowGap={2} alignItems="center" flexWrap="wrap" px={3} pt={3} pb={1}>
        <Box>
          <FlexBox alignItems="center" gap={1}>
            <H6 fontSize={24} lineHeight={1}>
              ${format(10000)}
            </H6>

            <Percentage type="error">-3.25%</Percentage>
          </FlexBox>

          <Paragraph color="text.secondary">Last Month Social Campaign</Paragraph>
        </Box>

        <Box>
          <FlexBox alignItems="center" gap={1}>
            <H6 fontSize={24} lineHeight={1}>
              ${format(18000)}
            </H6>

            <Percentage type="success">+4.67%</Percentage>
          </FlexBox>

          <Paragraph color="text.secondary">This Month Social Campaign</Paragraph>
        </Box>
      </FlexBox>

      <ChartWrapper px={1}>
        <Chart type="area" height={290} series={chartSeries} options={chartOptions} />
      </ChartWrapper>
    </Card>;
};

export default ChartFilters;
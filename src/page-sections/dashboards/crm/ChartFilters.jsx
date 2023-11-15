import { useState } from "react";
import { Box, Card, Stack, styled, useTheme } from "@mui/material";
import merge from "lodash.merge";
import Chart from "react-apexcharts";
// CUSTOM COMPONENTS
import { Title } from "components/title";
import { FlexBetween } from "components/flexbox";
import { Paragraph } from "components/typography";
import { MoreButton } from "components/more-button"; // CUSTOM UTILS METHODS

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
  const LIST = ["Revenue", "Users", "Deals", "Profit"];
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
        formatter: value => format(value),
        style: {
          colors: theme.palette.text.secondary
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
              <Paragraph ellipsis lineHeight={1} fontWeight={500} color="text.secondary">
                {item}
              </Paragraph>
            </BoxWrapper>)}
        </Stack>

        <MoreButton size="small" sx={{
        mr: 3
      }} />
      </TopContentWrapper>

      <Box px={3} pt={2} pb={1}>
        <Title title={22356} subtitle="Last month" percentage="+4.67%" />
      </Box>

      <ChartWrapper px={2}>
        <Chart type="area" height={300} series={chartSeries} options={chartOptions} />
      </ChartWrapper>
    </Card>;
};

export default ChartFilters;
import { Box, Card, useTheme } from "@mui/material";
import merge from "lodash.merge";
import Chart from "react-apexcharts";
// CUSTOM COMPONENTS
import { FlexBetween } from "components/flexbox";
import { Paragraph } from "components/typography";
import { MoreButton } from "components/more-button"; // CUSTOM UTILS METHOD

import { baseChartOptions } from "utils/baseChartOptions";

const TopActivityTwo = () => {
  const theme = useTheme(); // REACT CHART OPTIONS

  const chartOptions = merge(baseChartOptions(theme), {
    labels: ["Asia", "Europe", "Africa"],
    colors: [theme.palette.primary.main, theme.palette.grey[400], theme.palette.grey[300]],
    stroke: {
      width: 0
    },
    legend: {
      show: true,
      fontSize: "14px",
      position: "bottom",
      itemMargin: {
        horizontal: 10
      },
      onItemClick: {
        toggleDataSeries: false
      },
      onItemHover: {
        highlightDataSeries: false
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
  return <Card sx={{
    p: 3,
    height: "100%"
  }}>
      <FlexBetween mb={4}>
        <Paragraph fontSize={18} fontWeight={500}>
          Top Activity
        </Paragraph>

        <MoreButton size="small" />
      </FlexBetween>

      <Box>
        <Chart type="pie" series={[55, 45, 33]} options={chartOptions} />
      </Box>
    </Card>;
};

export default TopActivityTwo;
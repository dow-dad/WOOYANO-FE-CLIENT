import { Box, Card, useTheme } from "@mui/material";
import merge from "lodash.merge";
import Chart from "react-apexcharts";
// CUSTOM COMPONENTS
import { FlexBetween } from "components/flexbox";
import { Paragraph } from "components/typography";
import { MoreButton } from "components/more-button"; // CUSTOM UTILS METHOD

import { baseChartOptions } from "utils/baseChartOptions";

const AvgCallDuration = () => {
  const theme = useTheme(); // REACT CHART CATEGORIES LABEL

  const chartCategories = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"]; // REACT CHART DATA SERIES

  const chartSeries = [{
    name: "Tasks",
    data: [70, 60, 90, 80, 100, 70, 80]
  }]; // REACT CHART OPTIONS

  const chartOptions = merge(baseChartOptions(theme), {
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
      <Box p={3}>
        <FlexBetween pb={3}>
          <Paragraph fontSize={18} fontWeight={500}>
            Avg. Call Duration
          </Paragraph>

          <MoreButton size="small" />
        </FlexBetween>

        <Paragraph lineHeight={1.2} fontSize={20} fontWeight={500} color="primary.main">
          10m: 52s
        </Paragraph>

        <Paragraph color="text.secondary">Base on 100 calls</Paragraph>
      </Box>

      <Box sx={{
      "& > div": {
        minHeight: "0px !important"
      }
    }}>
        <Chart type="area" options={chartOptions} series={chartSeries} height={150} />
      </Box>
    </Card>;
};

export default AvgCallDuration;
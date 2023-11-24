import { Box, Button, Card, useTheme } from "@mui/material";
import merge from "lodash.merge";
import Chart from "react-apexcharts";

import { FlexBetween } from "components/flexbox";
import { MoreButton } from "components/more-button";
import { H6, Paragraph, Span } from "components/typography"; // CUSTOM UTILS METHODS

import { baseChartOptions } from "utils/baseChartOptions";

const LiveUser = () => {
  const theme = useTheme();

  const chartSeries = [{
    name: "Tasks",
    data: [22, 30, 46, 50, 46, 30, 22]
  }]; // REACT CHART CATEGORIES LABEL

  const chartCategories = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"]; // REACT CHART OPTIONS

  const chartOptions = merge(baseChartOptions(theme), {
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
        columnWidth: "40%",
        distributed: true
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
  });
  return <Card sx={{
    p: 3,
    height: "100%"
  }}>
      <FlexBetween>
        <Box>
          <Paragraph color="text.secondary">{t("Live Online User")}</Paragraph>
          <H6>348</H6>
        </Box>

        <MoreButton size="small" />
      </FlexBetween>

      <Paragraph mt={4}>
        {"Page views"} <Span color="text.secondary">/ Second</Span>
      </Paragraph>

      <Chart type="bar" options={chartOptions} series={chartSeries} height={250} />

      <Button color="secondary" sx={{
      width: "100%"
    }}>
        {"View Details"}
      </Button>
    </Card>;
};

export default LiveUser;
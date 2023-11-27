import { Box, Card, LinearProgress, Stack, styled, useTheme } from "@mui/material";
import { nanoid } from "nanoid";
import merge from "lodash.merge";
import Chart from "react-apexcharts";
// CUSTOM COMPONENTS
import { Title } from "components/title";
import { FlexBetween } from "components/flexbox";
import { Paragraph } from "components/typography"; // CUSTOM UTILS METHODS

import { isDark } from "utils/constants";
import { numberFormat } from "utils/numberFormat";
import { baseChartOptions } from "utils/baseChartOptions"; // STYLED COMPONENTS

const Wrapper = styled(Card)(({
  theme
}) => ({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
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
    borderLeft: `1px dashed ${theme.palette.divider}`
  }
})); // CUSTOM DUMMY DATA LIST

const DATA = [{
  id: nanoid(),
  title: "Cloths",
  amount: 2658
}, {
  id: nanoid(),
  title: "Foods",
  amount: 6687
}, {
  id: nanoid(),
  title: "Others",
  amount: 4348
}];

const Cards = () => {
  const theme = useTheme(); // REACT CHART CATEGORIES LABEL

  const chartCategories = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"]; // REACT CHART DATA SERIES

  const chartSeries = [{
    name: "Tasks",
    data: [22, 30, 46, 50, 46, 30, 22]
  }]; // CAMPAIGN SENT REACT CHART OPTIONS

  const campaignChartOptions = merge(baseChartOptions(theme), {
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
        columnWidth: "40%",
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
  }); // AVERAGE DEALS REACT CHART OPTIONS

  const dealsChartOptions = merge(baseChartOptions(theme), {
    stroke: {
      width: 2,
      colors: [isDark(theme) ? theme.palette.grey[800] : theme.palette.common.white]
    },
    labels: ["Cloths", "Foods", "Others"],
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
      /* CAMPAIGN SENT BOX */
    }
      <Box sx={{
      p: 3,
      mb: -3
    }}>
        <Title title={1352} subtitle="Campaign Sent" percentage="+4.67%" />
        <Chart type="bar" series={chartSeries} options={campaignChartOptions} height={130} />
      </Box>

      {
      /* AVERAGE DEALS BOX */
    }
      <BoxItem>
        <Title title={51352} subtitle="Average Deals" percentage="+12.5%" titlePrefix="$" />

        <FlexBetween mt={2} gap={2} flexWrap="wrap">
          <Chart width={130} height={130} type="donut" options={dealsChartOptions} series={DATA.reduce((prev, curr) => [...prev, curr.amount], [])} />

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
      /* ANNUAL PROFIT */
    }
      <BoxItem>
        <Box>
          <Title title={51352} titlePrefix="$" percentage="-2.65%" percentageType="error" subtitle="Annual Profit" />
        </Box>

        <Box mt={4}>
          <FlexBetween mb={1}>
            <Paragraph fontWeight={600}>$100,500 to Goal</Paragraph>
            <Paragraph color="text.secondary">75%</Paragraph>
          </FlexBetween>

          <LinearProgress value={60} color="success" variant="determinate" sx={{
          height: 8
        }} />
        </Box>
      </BoxItem>
    </Wrapper>;
};

export default Cards;
import { Box, Card, Grid, styled, Avatar, useTheme, AvatarGroup, LinearProgress } from "@mui/material";
import merge from "lodash.merge";
import Chart from "react-apexcharts";
// CUSTOM COMPONENTS
import { Percentage } from "components/percentage";
import { MoreButton } from "components/more-button";
import { H6, Paragraph } from "components/typography";
import { FlexBetween, FlexBox } from "components/flexbox"; // CUSTOM UTILS METHODS

import { format } from "utils/currency";
import { isDark } from "utils/constants";
import { baseChartOptions } from "utils/baseChartOptions"; // STYLED COMPONENTS

const CardWrapper = styled(Card)(({
  theme
}) => ({
  padding: 24,
  height: "100%",
  display: "flex",
  flexDirection: "column",
  boxShadow: theme.shadows[0],
  justifyContent: "space-between",
  backgroundColor: theme.palette.grey[isDark(theme) ? 900 : 50]
}));

const Shipments = () => {
  const theme = useTheme(); // REACT CHART CATEGORIES LABEL

  const chartCategories = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"]; // REACT CHART DATA SERIES

  const chartSeries = [{
    name: "Sales",
    data: [6, 15, 10, 17, 12, 19, 10]
  }]; // REACT CHART OPTIONS

  const chartOptions = merge(baseChartOptions(theme), {
    colors: [theme.palette.common.white],
    markers: {
      strokeColors: theme.palette.common.white
    },
    grid: {
      show: true,
      strokeDashArray: 3,
      borderColor: theme.palette.primary[400]
    },
    xaxis: {
      categories: chartCategories,
      labels: {
        show: false
      },
      crosshairs: {
        show: true,
        fill: {
          color: theme.palette.common.white
        },
        stroke: {
          color: theme.palette.common.white
        }
      }
    },
    yaxis: {
      min: 0,
      max: 20,
      show: true,
      tickAmount: 2,
      labels: {
        style: {
          colors: theme.palette.common.white,
          fontWeight: 500
        }
      }
    }
  }); // TOTAL SHIPMENTS REACT CHART OPTIONS

  const totalShipmentChartOptions = merge(baseChartOptions(theme), {
    stroke: {
      show: false
    },
    xaxis: {
      categories: chartCategories
    },
    colors: [theme.palette.divider, theme.palette.primary.main],
    plotOptions: {
      bar: {
        borderRadius: 5,
        distributed: true,
        columnWidth: "70%",
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
  });
  return <Card sx={{
    height: "100%"
  }}>
      {
      /* LAST MONTH SHIPMENT */
    }
      <Box bgcolor="primary.main" p={3} pb={8}>
        <FlexBetween>
          <Paragraph color="white" ellipsis fontSize={18} fontWeight={500}>
            Last Month Shipment
          </Paragraph>

          <MoreButton size="small" />
        </FlexBetween>

        <Chart type="line" height={130} options={chartOptions} series={chartSeries} width="100%" />
      </Box>

      <Box p={3} mt={-11}>
        <Grid container spacing={2}>
          {
          /* TOTAL ONLINE SALES CARD */
        }
          <Grid item sm={6} xs={12}>
            <CardWrapper>
              <Heading percentage="+4.67%" title={`$${format(50000)}`} subtitle="Total Online Sales" />

              <Box mt={4}>
                <FlexBetween mb={1}>
                  <Paragraph fontSize={12} fontWeight={600}>
                    $100K to Goal
                  </Paragraph>

                  <Paragraph fontSize={12} color="text.secondary">
                    75%
                  </Paragraph>
                </FlexBetween>

                <LinearProgress value={60} color="primary" variant="determinate" sx={{
                height: 8
              }} />
              </Box>
            </CardWrapper>
          </Grid>

          {
          /* TOTAL SHIPMENTS CARD */
        }
          <Grid item sm={6} xs={12}>
            <CardWrapper>
              <Heading percentage="+2.19%" subtitle="Total Shipments" title={`$${format(12650, "0a.00")}`} />

              <Box mb={-3} mx={-1}>
                <Chart type="bar" height={100} series={chartSeries} options={totalShipmentChartOptions} />
              </Box>
            </CardWrapper>
          </Grid>

          {
          /* MONTHLY EARNING CARD */
        }
          <Grid item sm={6} xs={12}>
            <CardWrapper>
              <Heading percentage="+3.33%" subtitle="Monthly Earning" title={`$${format(5000)}`} />

              <Box mb={-3} mx={-1}>
                <Chart type="bar" height={100} series={chartSeries} options={totalShipmentChartOptions} />
              </Box>
            </CardWrapper>
          </Grid>

          {
          /* NEW CUSTOMER CARD */
        }
          <Grid item sm={6} xs={12}>
            <CardWrapper>
              <Heading percentage="-1.9%" percentageType="error" subtitle="New Customer" title={`$${format(568)}`} />

              <Box mt={4}>
                <Paragraph mb={0.5} fontWeight={500}>
                  Top Customers
                </Paragraph>

                <AvatarGroup max={4}>
                  <Avatar alt="Remy Sharp" src="/static/user/user-11.png" />
                  <Avatar alt="Travis Howard" src="/static/user/user-10.png" />
                  <Avatar alt="Cindy Baker" src="/static/user/user-13.png" />
                  <Avatar alt="Agnes Walker" src="/static/user/user-14.png" />
                  <Avatar alt="Trevor Henderson" src="/static/user/user-15.png" />
                </AvatarGroup>
              </Box>
            </CardWrapper>
          </Grid>
        </Grid>
      </Box>
    </Card>;
}; // ===================================================================================


const Heading = ({
  title,
  percentage,
  subtitle,
  percentageType = "success"
}) => {
  return <Box>
      <FlexBox alignItems="center" gap={1}>
        <H6 fontSize={24} lineHeight={1}>
          {title}
        </H6>

        <Percentage type={percentageType}>{percentage}</Percentage>
      </FlexBox>

      <Paragraph color="text.secondary">{subtitle}</Paragraph>
    </Box>;
};

export default Shipments;
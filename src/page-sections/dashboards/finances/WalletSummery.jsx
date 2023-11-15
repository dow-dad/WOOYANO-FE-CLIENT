import { Box, Card, Stack, useTheme } from "@mui/material";
import merge from "lodash.merge";
import Chart from "react-apexcharts";
// CUSTOM COMPONENTS
import { FlexBetween } from "components/flexbox";
import { Paragraph } from "components/typography";
import { MoreButton } from "components/more-button"; // CUSTOM UTILS METHODS

import { baseChartOptions } from "utils/baseChartOptions";
import { isDark } from "utils/constants";

const WalletSummery = () => {
  const theme = useTheme(); // REACT CHART OPTIONS

  const chartOptions = (base, track) => {
    return merge(baseChartOptions(theme), {
      labels: ["Audits"],
      colors: [base],
      plotOptions: {
        radialBar: {
          track: {
            background: track
          },
          dataLabels: {
            name: {
              show: false
            },
            value: {
              color: base,
              fontWeight: 500,
              offsetY: 6
            }
          },
          hollow: {
            size: "40%",
            dropShadow: {
              enabled: true,
              opacity: 0.2
            }
          }
        }
      }
    });
  };

  return <Card sx={{
    p: 3,
    height: "100%"
  }}>
      <FlexBetween mb={4}>
        <Box>
          <Paragraph fontSize={18} fontWeight={500}>
            Wallet Summery
          </Paragraph>
          <Paragraph color="text.secondary">Last 7 days reports</Paragraph>
        </Box>

        <MoreButton size="small" />
      </FlexBetween>

      <Stack spacing={3}>
        <FlexBetween sx={{
        borderRadius: 3,
        backgroundColor: isDark(theme) ? "grey.700" : "primary.25"
      }}>
          <Box pl={3}>
            <Paragraph fontSize={16} fontWeight={600}>
              $2,160.36
            </Paragraph>

            <Paragraph color="text.secondary" fontWeight={500}>
              Income
            </Paragraph>
          </Box>

          <Chart width={130} height={140} series={[70]} type="radialBar" options={chartOptions(theme.palette.primary.main, theme.palette.primary[100])} />
        </FlexBetween>

        <FlexBetween sx={{
        borderRadius: 3,
        backgroundColor: isDark(theme) ? "grey.700" : "primary.25"
      }}>
          <Box pl={3}>
            <Paragraph fontSize={16} fontWeight={600}>
              $850.65
            </Paragraph>

            <Paragraph color="text.secondary" fontWeight={500}>
              Outcome
            </Paragraph>
          </Box>

          <Chart width={130} height={140} series={[30]} type="radialBar" options={chartOptions(theme.palette.grey[500], theme.palette.grey[200])} />
        </FlexBetween>
      </Stack>
    </Card>;
};

export default WalletSummery;
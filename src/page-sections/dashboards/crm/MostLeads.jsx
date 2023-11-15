import { Card, styled, useTheme } from "@mui/material";
import { MailOutline, PersonOutline, LayersOutlined } from "@mui/icons-material";
import LocalPhoneOutlined from "@mui/icons-material/LocalPhoneOutlined";
import { nanoid } from "nanoid";
import merge from "lodash.merge";
import Chart from "react-apexcharts";
// CUSTOM COMPONENTS
import { Paragraph } from "components/typography";
import { MoreButton } from "components/more-button";
import { FlexBetween, FlexBox } from "components/flexbox"; // CUSTOM UTILS METHODS

import { baseChartOptions } from "utils/baseChartOptions"; // STYLED COMPONENT

const StyledChart = styled(Chart)({
  marginBottom: 24
}); // CUSTOM DUMMY DATA SET

const DATA = [{
  id: nanoid(),
  title: "Email",
  percentage: 60,
  Icon: MailOutline,
  color: "primary.main",
  subtitle: "500 vs 1000"
}, {
  id: nanoid(),
  title: "Call",
  percentage: 10,
  Icon: LocalPhoneOutlined,
  color: "success.500",
  subtitle: "360 vs 965"
}, {
  id: nanoid(),
  percentage: 20,
  title: "Social",
  Icon: PersonOutline,
  color: "grey.500",
  subtitle: "3684 vs 5000"
}, {
  id: nanoid(),
  percentage: 10,
  title: "Other",
  Icon: LayersOutlined,
  color: "grey.300",
  subtitle: "469 vs 678"
}];

const MostLeads = () => {
  const theme = useTheme(); // REACT CHART OPTIONS

  const chartOptions = merge(baseChartOptions(theme), {
    stroke: {
      show: false
    },
    labels: ["Chrome", "Opera Mini", "Firefox", "Yahoo!"],
    plotOptions: {
      pie: {
        donut: {
          size: "75%"
        },
        expandOnClick: false
      }
    },
    tooltip: {
      y: {
        formatter: val => String(val),
        title: {
          formatter: series => series
        }
      }
    },
    colors: [theme.palette.primary.main, theme.palette.success[500], theme.palette.grey[500], theme.palette.grey[300]]
  });
  return <Card sx={{
    height: "100%"
  }}>
      <FlexBetween p={3}>
        <Paragraph fontSize={18} fontWeight={500}>
          Most Leads
        </Paragraph>

        <MoreButton size="small" />
      </FlexBetween>

      <StyledChart height={160} type="donut" options={chartOptions} series={[40, 20, 20, 20]} />

      {DATA.map(({
      Icon,
      title,
      subtitle,
      percentage,
      id,
      color
    }) => <FlexBetween px={3} py={2} key={id} alignItems="center" borderTop="1px dashed" borderColor="divider">
          <FlexBox alignItems="center" gap={1}>
            <Icon sx={{
          color
        }} />
            <Paragraph fontWeight={500}>{title}</Paragraph>
          </FlexBox>

          <Paragraph ellipsis color="text.secondary" fontWeight={500}>
            {subtitle}
          </Paragraph>

          <Paragraph fontWeight={500}>{percentage}%</Paragraph>
        </FlexBetween>)}
    </Card>;
};

export default MostLeads;
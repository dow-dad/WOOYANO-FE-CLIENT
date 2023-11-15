import { Box, Card, LinearProgress } from "@mui/material"; // CUSTOM COMPONENTS

import { Title } from "components/title";
import { FlexBetween } from "components/flexbox";
import { Paragraph } from "components/typography";

const YearlyRevenue = () => {
  return <Card sx={{
    padding: 3,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  }}>
      <Box>
        <Title title={5103} titlePrefix="$" percentage="-1.25%" percentageType="error" subtitle="Yearly Revenue" />
      </Box>

      <Box mt={7}>
        <FlexBetween mb={1}>
          <Paragraph fontWeight={600}>$6,000 to Target</Paragraph>
          <Paragraph color="text.secondary">65%</Paragraph>
        </FlexBetween>

        <LinearProgress value={65} color="primary" variant="determinate" sx={{
        height: 8
      }} />
      </Box>
    </Card>;
};

export default YearlyRevenue;
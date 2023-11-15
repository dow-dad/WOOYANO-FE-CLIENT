import { Box, Card, LinearProgress } from "@mui/material"; // CUSTOM COMPONENTS

import { Title } from "components/title";
import { FlexBetween } from "components/flexbox";
import { Paragraph } from "components/typography";

const YearlySales = () => {
  return <Card sx={{
    padding: 3,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  }}>
      <Box>
        <Title title={51352} titlePrefix="$" percentage="-1.25%" percentageType="error" subtitle="Yearly Sales" />
      </Box>

      <Box mt={7}>
        <FlexBetween mb={1}>
          <Paragraph fontWeight={600}>$60,000 to Target</Paragraph>
          <Paragraph color="text.secondary">79%</Paragraph>
        </FlexBetween>

        <LinearProgress value={79} color="success" variant="determinate" sx={{
        height: 8
      }} />
      </Box>
    </Card>;
};

export default YearlySales;
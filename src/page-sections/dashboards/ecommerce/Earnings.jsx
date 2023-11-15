import { Box, Card, LinearProgress } from "@mui/material"; // CUSTOM COMPONENTS

import { Percentage } from "components/percentage";
import { FlexBetween, FlexBox } from "components/flexbox";
import { H6, Paragraph, Span } from "components/typography"; // CUSTOM UTILS METHOD

import { numberFormat } from "utils/numberFormat";

const Earnings = () => {
  return <Card sx={{
    padding: 3,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  }}>
      <Box>
        <FlexBox alignItems="center" gap={1}>
          <H6>
            <Span fontWeight={500} fontSize={18} color="grey.400">
              $
            </Span>
            {numberFormat(20360)}
          </H6>

          <Percentage type="error">-2.2%</Percentage>
        </FlexBox>

        <Paragraph color="text.secondary">Monthly Earnings</Paragraph>
      </Box>

      <Box mt={7}>
        <FlexBetween mb={1}>
          <Paragraph fontWeight={600}>$25,000 to Goal</Paragraph>
          <Paragraph color="text.secondary">78%</Paragraph>
        </FlexBetween>

        <LinearProgress value={60} variant="determinate" sx={{
        height: 8
      }} />
      </Box>
    </Card>;
};

export default Earnings;
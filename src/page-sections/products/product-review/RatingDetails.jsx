import LinearProgress from "@mui/material/LinearProgress"; // CUSTOM COMPONENTS

import { Paragraph } from "components/typography";
import { FlexBetween } from "components/flexbox"; // CUSTOM UTILS METHOD

import { format } from "utils/currency"; // ==========================================================================================

// ==========================================================================================
const RatingDetails = ({
  title,
  progressValue,
  totalReview
}) => {
  return <FlexBetween>
      <Paragraph fontWeight={500} lineHeight={1}>
        {title}
      </Paragraph>

      <LinearProgress color="success" variant="determinate" value={progressValue} sx={{
      mx: 2
    }} />

      <Paragraph color="text.secondary" fontWeight={500}>
        {format(totalReview, "0a")}
      </Paragraph>
    </FlexBetween>;
};

export default RatingDetails;
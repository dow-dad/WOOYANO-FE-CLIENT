import { alpha, Card, IconButton, LinearProgress, Stack } from "@mui/material"; // CUSTOM COMPONENTS

import { H3, H6, Paragraph } from "components/typography";
import { FlexBetween, FlexBox, FlexRowAlign } from "components/flexbox"; // CUSTOM ICON COMPONENT

import MoreHorizontal from "icons/MoreHorizontal"; // CUSTOM UTILS METHOD

import { numberFormat } from "utils/numberFormat"; // ====================================================================

// ====================================================================
const CampaignCard = ({
  Icon,
  title,
  color,
  amount,
  impression,
  progressValue
}) => {
  return <Card sx={{
    padding: 3
  }}>
      <FlexBetween>
        <Stack direction="row" alignItems="center" spacing={1}>
          <FlexRowAlign width={30} height={30} borderRadius={1} bgcolor={alpha(color, 0.1)}>
            <Icon sx={{
            fontSize: 18,
            color
          }} />
          </FlexRowAlign>

          <H6 fontSize={14} color="text.secondary">
            {title}
          </H6>
        </Stack>

        <IconButton>
          <MoreHorizontal fontSize="small" sx={{
          color: "text.secondary"
        }} />
        </IconButton>
      </FlexBetween>

      <FlexBetween my={2}>
        <H3 fontSize={24}>${numberFormat(amount)}</H3>

        <FlexBox alignItems="center" gap={1}>
          <Paragraph fontWeight={600} color={impression > 0 ? "success.main" : "error.main"}>
            {impression}%
          </Paragraph>

          <Paragraph color="text.secondary">Subscriber growth</Paragraph>
        </FlexBox>
      </FlexBetween>

      <Stack direction="row" alignItems="center" spacing={2}>
        <LinearProgress value={progressValue} variant="determinate" sx={{
        "& .MuiLinearProgress-bar": {
          backgroundColor: color
        }
      }} />

        <H6 fontSize={14}>{progressValue}%</H6>
      </Stack>
    </Card>;
};

export default CampaignCard;
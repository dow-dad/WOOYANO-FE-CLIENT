'use client'
import { Card, LinearProgress, Rating, Stack } from "@mui/material"; // CUSTOM COMPONENTS
import { Paragraph } from "components/typography";
import { FlexBetween, FlexBox, FlexRowAlign } from "components/flexbox";

const CustomerReview = () => {
  return <Card sx={{
    p: 3,
    height: "100%",
    pt:5
  }}>
      <FlexRowAlign p={3} borderRadius={2} flexDirection="column" bgcolor="action.selected">
        {/* <Rating size="large" name="read-only" value={4.5} precision={0.5} readOnly /> */}

        <Paragraph py={1} lineHeight={1} fontWeight={600} fontSize={20}>
          긍정리뷰: 325개
        </Paragraph>
        <Paragraph py={1} lineHeight={1} fontWeight={600} fontSize={20}>
          부정리뷰: 325개
        </Paragraph>

        <Paragraph color="text.secondary">총 650개의 리뷰</Paragraph>
      </FlexRowAlign>

      <Stack spacing={6} mt={8}>
        {["긍정","부정"].map(item => <FlexBetween gap={4} key={item}>
            <FlexBox gap={1} flex={1} alignItems="center">
              <Paragraph color="text.secondary" lineHeight={1}>
                {item} 리뷰
              </Paragraph>

              <LinearProgress value={50} variant="determinate" />
            </FlexBox>

            <Paragraph lineHeight={1} color="text.secondary">
              {50}%
            </Paragraph>
          </FlexBetween>)}
      </Stack>
    </Card>;
};

export default CustomerReview;
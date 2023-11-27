import Star from "@mui/icons-material/Star";
import { Stack, Avatar, Rating } from "@mui/material"; // CUSTOM COMPONENTS

import { H6, Paragraph } from "components/typography"; // CUSTOM ICON COMPONENTS

import ThumbsUp from "icons/ThumbsUp"; // ==============================================================

// ==============================================================
const ReviewItem = ({
  liked,
  rating,
  comment,
  createdAt,
  user
}) => {
  return <Stack direction="row" alignItems="center" spacing={5}>
      <Stack alignItems="center" flexShrink={0}>
        <Avatar src={user.image} sx={{
        width: 60,
        height: 60
      }} />
        <H6 fontSize={14} mt={2}>
          {user.name}
        </H6>
        <Paragraph color="text.secondary">{createdAt}</Paragraph>
      </Stack>

      <Stack spacing={1} maxWidth={460}>
        <Rating readOnly value={rating} emptyIcon={<Star sx={{
        opacity: 0.4,
        fontSize: "inherit"
      }} />} sx={{
        color: "warning.main",
        fontSize: 24
      }} />

        <Paragraph lineHeight={1.9}>{comment}</Paragraph>

        <Stack direction="row" alignItems="flex-end" spacing={1}>
          <ThumbsUp sx={{
          color: "primary.main"
        }} />
          <H6 color="primary.main" fontSize={12}>
            Thank({liked})
          </H6>
        </Stack>
      </Stack>
    </Stack>;
};

export default ReviewItem;
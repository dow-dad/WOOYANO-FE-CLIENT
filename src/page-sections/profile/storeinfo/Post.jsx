import { Card, Stack, Button, Box } from "@mui/material";
import Add from "@mui/icons-material/Add"; // CUSTOM COMPONENTS

import { FlexBetween, FlexBox } from "components/flexbox";
import { H6, Paragraph, Small } from "components/typography"; // CUSTOM ICON COMPONENT

import DateRange from "icons/DateRange";

const Post = () => {
  return <Card sx={{
    padding: 3
  }}>
      <FlexBetween flexWrap="wrap" gap={1}>
        <H6 fontSize={16}>Post</H6>

        <Button color="secondary" variant="outlined" startIcon={<Add />}>
          Create a post
        </Button>
      </FlexBetween>

      <Stack spacing={3} mt={2}>
        <SinglePost category="Esports" date="Nov 21, 2021" imgLink="/static/post/1.png" title="The International on the way 2021" />

        <SinglePost category="Environment" date="Aug 21, 2021" imgLink="/static/post/2.png" title="Global Warming Conclusion" />

        <SinglePost category="Environment" date="Jun 21, 2021" imgLink="/static/post/3.png" title="Crypto is the future" />
      </Stack>
    </Card>;
};

export default Post; // =======================================================================================

// =======================================================================================
function SinglePost({
  date,
  title,
  imgLink,
  category
}) {
  return <FlexBetween>
      <Stack spacing={0.5}>
        <H6 fontSize={14}>{title}</H6>
        <Paragraph color="grey.500">{category}</Paragraph>

        <FlexBox gap={0.5} alignItems="center" color="text.secondary">
          <DateRange sx={{
          fontSize: 20
        }} />
          <Small lineHeight={1}>Publish on {date}</Small>
        </FlexBox>
      </Stack>

      <Box sx={{
      width: 125,
      height: 75,
      borderRadius: "4px",
      overflow: "hidden"
    }}>
        <img src={imgLink} width="100%" alt="Post" />
      </Box>
    </FlexBetween>;
}
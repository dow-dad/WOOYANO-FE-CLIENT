import { Avatar, Box, Card, Stack } from "@mui/material";
import { North, South } from "@mui/icons-material";
import { nanoid } from "nanoid"; // CUSTOM COMPONENTS

import { Percentage } from "components/percentage";
import { MoreButton } from "components/more-button";
import { Paragraph, Small } from "components/typography";
import { FlexBetween, FlexBox } from "components/flexbox"; // CUSTOM DUMMY DATA SET

const DATA = [{
  value: 4.67,
  id: nanoid(),
  title: "Twitter",
  subtitle: "Social Media",
  image: "/static/social-media/twitter.svg"
}, {
  value: 3.37,
  error: true,
  id: nanoid(),
  title: "Linked In",
  subtitle: "Social Media",
  image: "/static/social-media/027-linkedin.svg"
}, {
  value: 2.19,
  id: nanoid(),
  title: "Dribble",
  subtitle: "Community",
  image: "/static/social-media/dribble.svg"
}, {
  value: 2.68,
  error: true,
  id: nanoid(),
  title: "Facebook",
  subtitle: "Social Media",
  image: "/static/social-media/036-facebook.svg"
}, {
  value: 3.33,
  id: nanoid(),
  title: "Instagram",
  subtitle: "Community",
  image: "/static/social-media/029-instagram.svg"
}];

const AllChannels = () => {
  return <Card sx={{
    p: 3,
    height: "100%"
  }}>
      <FlexBetween mb={4}>
        <Box>
          <Paragraph ellipsis lineHeight={1.3} fontSize={18} fontWeight={500}>
            All Channels
          </Paragraph>

          <Paragraph color="text.secondary">Users from all channels</Paragraph>
        </Box>

        <MoreButton size="small" />
      </FlexBetween>

      <Stack spacing={4}>
        {DATA.map(({
        id,
        image,
        title,
        subtitle,
        value,
        error
      }) => <FlexBetween key={id}>
            <FlexBox gap={1.5} overflow="hidden" whiteSpace="nowrap" textOverflow="ellipsis">
              <Avatar variant="rounded" alt={title} src={image} />

              <Box textOverflow="ellipsis" whiteSpace="nowrap" overflow="hidden">
                <Paragraph ellipsis fontSize={16} lineHeight={1} fontWeight={600}>
                  {title}
                </Paragraph>

                <Small ellipsis fontWeight={500} color="text.secondary">
                  {subtitle}
                </Small>
              </Box>
            </FlexBox>

            <Percentage gap={0.3} display="flex" lineHeight={1.2} alignItems="center" type={error ? "error" : "success"}>
              {error ? <South sx={{
            fontSize: 11
          }} /> : <North sx={{
            fontSize: 11
          }} />} {value}%
            </Percentage>
          </FlexBetween>)}
      </Stack>
    </Card>;
};

export default AllChannels;
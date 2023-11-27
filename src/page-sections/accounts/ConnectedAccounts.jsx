import Link from "next/link";
import { Avatar, Box, Card, Divider, Switch } from "@mui/material"; // CUSTOM COMPONENTS

import { FlexBetween, FlexBox } from "components/flexbox";
import { H6, Paragraph, Small } from "components/typography"; // CUSTOM DUMMY DATA SET

const ACCOUNT_LIST = [{
  id: 1,
  title: "Facebook",
  body: "Plan properly your workflow",
  image: "/static/social-media/036-facebook.svg"
}, {
  id: 2,
  title: "Twitter",
  body: "Keep eye on on your Repositories",
  image: "/static/social-media/twitter-round.svg"
}, {
  id: 3,
  title: "Instagram",
  body: "Keep up with the stories",
  image: "/static/social-media/instagram-round.svg"
}, {
  id: 4,
  title: "Sound Cloud",
  body: "Playlist to get you by",
  image: "/static/social-media/soundcloud.svg"
}];

const ConnectedAccounts = () => {
  return <Card sx={{
    pb: 2
  }}>
      <Box padding={3}>
        <H6 fontSize={14}>Connected accounts</H6>
        <Small color="text.secondary">
          Two-factor authentication adds to log in, in you'll need to provide a 4 digit amazing
          code. <Link href="#">Learn More</Link>
        </Small>
      </Box>

      <Divider />

      {ACCOUNT_LIST.map(({
      id,
      title,
      body,
      image
    }) => <FlexBetween key={id} sx={{
      borderBottom: 1,
      padding: "1rem 1.5rem",
      borderColor: "divider",
      "&:last-of-type": {
        borderBottom: 0
      }
    }}>
          <FlexBox alignItems="center" gap={2}>
            <Avatar src={image} />

            <Box>
              <Paragraph fontWeight={500} fontSize={14}>
                {title}
              </Paragraph>

              <Small color="text.secondary" mt={0.3}>
                {body}
              </Small>
            </Box>
          </FlexBox>

          <Switch defaultChecked />
        </FlexBetween>)}
    </Card>;
};

export default ConnectedAccounts;
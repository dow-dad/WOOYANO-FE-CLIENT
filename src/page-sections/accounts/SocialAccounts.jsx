import { Avatar, Box, Button, Card, Divider } from "@mui/material"; // CUSTOM COMPONENTS

import { H6, Paragraph, Small } from "components/typography";
import { FlexBetween, FlexBox } from "components/flexbox"; // CUSTOM DUMMY DATA SET

const ACCOUNT_LIST = [{
  id: 1,
  connect: false,
  title: "Facebook",
  body: "www.facebook.com/ui-lib",
  image: "/static/social-media/036-facebook.svg"
}, {
  id: 2,
  connect: false,
  title: "Twitter",
  body: "www.twitter.com/ui-lib",
  image: "/static/social-media/twitter-round.svg"
}, {
  id: 3,
  connect: false,
  title: "Linkedin",
  body: "www.linkedin.com/ui-lib",
  image: "/static/social-media/linkedin.svg"
}, {
  id: 4,
  connect: true,
  title: "Skype",
  body: "www.skype.com/ui-lib",
  image: "/static/social-media/skype.svg"
}];

const SocialAccounts = () => {
  return <Card sx={{
    pb: 2
  }}>
      <H6 fontSize={14} p={3}>
        Social Account
      </H6>

      <Divider />

      {ACCOUNT_LIST.map(({
      id,
      body,
      connect,
      image,
      title
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
              <Paragraph fontWeight={500} lineHeight={1}>
                {title}
              </Paragraph>
              <Small color="text.secondary">{body}</Small>
            </Box>
          </FlexBox>

          <Button color={connect ? "primary" : "secondary"} variant={connect ? "contained" : "outlined"}>
            {connect ? "Connect" : "Disconnect"}
          </Button>
        </FlexBetween>)}
    </Card>;
};

export default SocialAccounts;
import { Avatar, Box, Card, Stack } from "@mui/material";
import { nanoid } from "nanoid"; // CUSTOM COMPONENTS

import { MoreButton } from "components/more-button";
import { Paragraph, Small } from "components/typography";
import { FlexBetween, FlexBox } from "components/flexbox"; // CUSTOM UTILS METHOD

import { numberFormat } from "utils/numberFormat"; // CUSTOM DUMMY DATA

const DATA = [{
  id: nanoid(),
  dealWon: 25000,
  balance: 25360.0,
  owner: {
    name: "Astole Banne",
    image: "/static/user/user-11.png"
  }
}, {
  id: nanoid(),
  dealWon: 25000,
  balance: 25360.0,
  owner: {
    name: "Jhone Abela",
    image: "/static/user/user-16.png"
  }
}, {
  id: nanoid(),
  dealWon: 25000,
  balance: 25360.0,
  owner: {
    name: "Lisa Been",
    image: "/static/user/user-17.png"
  }
}];

const DealForecast = () => {
  return <Card sx={{
    p: 3,
    height: "100%"
  }}>
      <FlexBetween>
        <Paragraph ellipsis fontSize={18} fontWeight={500}>
          Deal Forecast by Owner
        </Paragraph>

        <MoreButton size="small" />
      </FlexBetween>

      <FlexBetween mt={3} mb={2}>
        <Paragraph color="text.secondary" fontWeight={500}>
          Owner
        </Paragraph>
        <Paragraph color="text.secondary" fontWeight={500}>
          Deal Won
        </Paragraph>
      </FlexBetween>

      <Stack spacing={2.5}>
        {DATA.map(({
        balance,
        dealWon,
        id,
        owner
      }) => <FlexBetween key={id}>
            <FlexBox gap={1.5}>
              <Avatar alt={owner.name} src={owner.image} sx={{
            width: 35,
            height: 35
          }} />

              <Box>
                <Paragraph lineHeight={1} fontWeight={600}>
                  {owner.name}
                </Paragraph>

                <Small fontWeight={500} color="text.secondary">
                  ${numberFormat(balance)}
                </Small>
              </Box>
            </FlexBox>

            <Paragraph fontWeight={500} color="text.secondary">
              ${numberFormat(dealWon)}
            </Paragraph>
          </FlexBetween>)}
      </Stack>
    </Card>;
};

export default DealForecast;
'use client'
import { Avatar, Badge, Box, Card, Stack } from "@mui/material";
import { nanoid } from "nanoid"; // CUSTOM COMPONENTS

import { MoreButton } from "components/more-button";
import { Paragraph, Small } from "components/typography";
import { FlexBetween, FlexBox } from "components/flexbox"; // CUSTOM UTILS METHODS

import { format } from "utils/currency";
import { numberFormat } from "utils/numberFormat"; // CUSTOM DUMMY DATA

const DATA = [{
  id: nanoid(),
  totalService: 72,
  totalAmount: 2000000,
  country: "/static/flags/usa-round.png",
  user: {
    name: "임찬섭",
    image: "/static/user/user-11.png"
  }
}, {
  id: nanoid(),
  totalService: 61,
  totalAmount: 1408000,
  country: "/static/flags/uk-round.png",
  user: {
    name: "이하늘",
    image: "/static/user/user-16.png"
  }
}, {
  id: nanoid(),
  totalService: 49,
  totalAmount: 1208000,
  country: "/static/flags/germany-round.png",
  user: {
    name: "박정민",
    image: "/static/user/user-17.png"
  }
}, {
  id: nanoid(),
  totalService: 34,
  totalAmount: 1108000,
  country: "/static/flags/spain-round.png",
  user: {
    name: "소준영",
    image: "/static/user/user-18.png"
  }
}];

const TopSeller = () => {
  return <Card sx={{
    p: 3,
    height: "100%"
  }}>
    <FlexBetween>
      <Paragraph fontSize={18} fontWeight={600}>
        최고의 직원
      </Paragraph>

      <MoreButton size="small" />
    </FlexBetween>

    <FlexBetween mt={3} mb={2}>
      <Paragraph color="text.secondary" fontWeight={500}>
        프로필
      </Paragraph>
      <Paragraph color="text.secondary" fontWeight={500}>
        서비스 횟수
      </Paragraph>
    </FlexBetween>

    <Stack spacing={2.5}>
      {DATA.map(item => <FlexBetween key={item.id}>
        <FlexBox gap={1.5}>
          <Avatar alt={item.user.name} src={item.user.image} sx={{
            width: 45,
            height: 45
          }} />

          <Box>
            <Small fontWeight={500} color="text.secondary">
              ₩{format(item.totalAmount)}
            </Small>

            <Paragraph lineHeight={1} fontWeight={600}>
              {item.user.name}
            </Paragraph>
          </Box>
        </FlexBox>

        <Paragraph fontWeight={500} color="text.secondary">
          {numberFormat(item.totalService)}
        </Paragraph>
      </FlexBetween>)}
    </Stack>
  </Card>;
};

export default TopSeller;
import { Avatar, Box, Card, Stack } from "@mui/material";
import { nanoid } from "nanoid"; // CUSTOM COMPONENTS

import { MoreButton } from "components/more-button";
import { Paragraph, Small } from "components/typography";
import { FlexBetween, FlexBox } from "components/flexbox"; // CUSTOM UTILS METHOD

import { numberFormat } from "utils/numberFormat"; // CUSTOM DUMMY DATA

const DATA = [{
  id: nanoid(),
  title: "Ships",
  weight: 50368258,
  total: "500 ships",
  image: "/static/transportation/1.png"
}, {
  id: nanoid(),
  title: "Planes",
  weight: 2336569,
  total: "25 planes",
  image: "/static/transportation/2.png"
}, {
  id: nanoid(),
  title: "Trucks",
  weight: 36566547,
  total: "2500 Trucks",
  image: "/static/transportation/3.png"
}, {
  id: nanoid(),
  title: "Trains",
  weight: 10236482,
  total: "1000 trains",
  image: "/static/transportation/4.png"
}];

const OurTransportation = () => {
  return <Card sx={{
    p: 3,
    height: "100%"
  }}>
      <FlexBetween mb={4}>
        <Box>
          <Paragraph ellipsis lineHeight={1.3} fontSize={18} fontWeight={500}>
            Our Transportation
          </Paragraph>

          <Small fontWeight={500} color="text.secondary">
            Total 5,200 vehicles
          </Small>
        </Box>

        <MoreButton size="small" />
      </FlexBetween>

      <Stack spacing={3}>
        {DATA.map(({
        id,
        image,
        title,
        total,
        weight
      }) => <FlexBetween key={id}>
            <FlexBox gap={1.5} overflow="hidden" whiteSpace="nowrap" textOverflow="ellipsis">
              <Avatar variant="rounded" alt={title} src={image} />

              <Box textOverflow="ellipsis" whiteSpace="nowrap" overflow="hidden">
                <Paragraph ellipsis fontSize={16} lineHeight={1} fontWeight={600}>
                  {title}
                </Paragraph>

                <Small ellipsis fontWeight={500} color="text.secondary">
                  {total}
                </Small>
              </Box>
            </FlexBox>

            <Box textAlign="end">
              <Paragraph fontWeight={500}>{numberFormat(weight)}</Paragraph>
              <Small fontWeight={500} color="text.secondary">
                Tons
              </Small>
            </Box>
          </FlexBetween>)}
      </Stack>
    </Card>;
};

export default OurTransportation;
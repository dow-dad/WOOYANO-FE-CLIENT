import { Card, Chip, Stack } from "@mui/material"; // CUSTOM COMPONENTS

import { H6 } from "components/typography";
import { MoreButton } from "components/more-button";
import FlexBetween from "components/flexbox/FlexBetween";

const Hobbies = () => {
  return <Card sx={{
    padding: 3
  }}>
      <FlexBetween mb={3}>
        <H6 fontSize={16}>Hobbies</H6>
        <MoreButton size="small" />
      </FlexBetween>

      <Stack direction="row" gap={2} flexWrap="wrap">
        <Chip color="secondary" label="Dota 2" />
        <Chip color="secondary" label="Dog" />
        <Chip color="secondary" label="Basketball" />
        <Chip color="secondary" label="Football" />
        <Chip color="secondary" label="Cricket" />
        <Chip color="secondary" label="Skateboarding" />
        <Chip color="secondary" label="Rock Climbing" />
        <Chip color="secondary" label="Painting" />
        <Chip color="secondary" label="Cars" />
        <Chip color="secondary" label="Video Games" />
        <Chip color="secondary" label="Climbing" />
        <Chip color="secondary" label="Hockey" />
        <Chip color="secondary" label="Table Tennis" />
      </Stack>
    </Card>;
};

export default Hobbies;
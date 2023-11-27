import Link from "next/link";
import { Box, Card, Stack } from "@mui/material"; // CUSTOM COMPONENTS

import { FlexBox } from "components/flexbox";
import { H6, Paragraph } from "components/typography"; // CUSTOM DUMMY DATA

import { CHANNELS } from "./data";

const MoreChannel = () => {
  return <Card sx={{
    p: 3
  }}>
      <H6 fontSize={18} mb={3}>
        More Channel
      </H6>

      <Stack spacing={2}>
        {CHANNELS.map(({
        id,
        image,
        title
      }) => <FlexBox alignItems="center" gap={1.5} key={id}>
            <FlexBox alignItems="center" width={25}>
              <img src={image} alt="" width="100%" height="100%" />
            </FlexBox>

            <Box>
              <Paragraph fontSize={16}>{title}</Paragraph>
              <Paragraph color="text.secondary">
                Follow us at <Link href="#">UI-Lib</Link>
              </Paragraph>
            </Box>
          </FlexBox>)}
      </Stack>
    </Card>;
};

export default MoreChannel;
import { Box, Card, Stack } from "@mui/material"; // CUSTOM COMPONENTS

import { H6, Paragraph } from "components/typography";
import { FlexBox } from "components/flexbox"; // CUSTOM DUMMY DATA

import { DOCUMENTATIONS } from "./data";

const Documentation = () => {
  return <Card sx={{
    p: 3,
    mt: 3
  }}>
      <H6 fontSize={18} mb={3}>
        Documentations
      </H6>

      <Stack spacing={2.5}>
        {DOCUMENTATIONS.map(item => <FlexBox alignItems="center" gap={1} key={item}>
            <Box width={8} height={8} borderRadius="50%" bgcolor="grey.300" />
            <Paragraph color="grey.500" fontWeight={500}>
              {item}
            </Paragraph>
          </FlexBox>)}
      </Stack>
    </Card>;
};

export default Documentation;
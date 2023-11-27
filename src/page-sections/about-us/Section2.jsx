import { Box, Button, Grid, styled } from "@mui/material";
import { KeyboardArrowRight } from "@mui/icons-material";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"; // CUSTOM COMPONENTS

import { H1, Paragraph } from "components/typography";
import { FlexBox, FlexRowAlign } from "components/flexbox";
import { NextImage } from "components/next-image"; // STYLED COMPONENT

const ProgressWrapper = styled(FlexBox)(({
  theme
}) => ({
  "& .CircularProgressbar": {
    ".CircularProgressbar-path": {
      stroke: theme.palette.grey[500]
    },
    ".CircularProgressbar-trail": {
      stroke: theme.palette.grey[200]
    },
    ".CircularProgressbar-text": {
      fontWeight: 600,
      fill: theme.palette.grey[900],
      fontFamily: theme.typography.fontFamily
    }
  }
}));

const Section2 = () => {
  return <Box bgcolor="white" py={10}>
      <Grid container spacing={3} alignItems="center">
        <Grid item xl={5} lg={4}>
          <H1 fontSize={{
          sm: 52,
          xs: 42
        }} mb={3}>
            Who we are?
          </H1>

          <Paragraph fontSize={16} color="text.secondary" pr={7}>
            QuickFrame is a pre-designed UI used to build web app front-ends. It includes ready-to-use
            components like menus, charts, tables, and forms for efficient UI design and
            development.
          </Paragraph>

          <ProgressWrapper my={6} alignItems="center" gap={4}>
            <FlexRowAlign flexDirection="column" gap={1} maxWidth={80}>
              <CircularProgressbar value={70} text={`${70}%`} maxValue={100} strokeWidth={6} />
              <Paragraph fontWeight={500}>Design</Paragraph>
            </FlexRowAlign>

            <FlexRowAlign flexDirection="column" gap={1} maxWidth={80}>
              <CircularProgressbar value={56} text={`${56}%`} maxValue={100} strokeWidth={6} />
              <Paragraph fontWeight={500}>Development</Paragraph>
            </FlexRowAlign>

            <FlexRowAlign flexDirection="column" gap={1} maxWidth={80}>
              <CircularProgressbar value={30} text={`${30}%`} maxValue={100} strokeWidth={6} />
              <Paragraph fontWeight={500}>Marketing</Paragraph>
            </FlexRowAlign>
          </ProgressWrapper>

          <Button variant="outlined" color="primary">
            Check our Work <KeyboardArrowRight />
          </Button>
        </Grid>

        <Grid item xl={7} lg={8}>
          <FlexBox alignItems="end" gap={3} flexWrap={{
          md: "nowrap",
          xs: "wrap"
        }}>
            <NextImage alt="about" width={380} height={354} src="/static/cover/about-1.jpg" style={{
            borderRadius: 12
          }} />
            <NextImage alt="about" width={277} height={422} src="/static/cover/about-2.jpg" style={{
            borderRadius: 12
          }} />
          </FlexBox>
        </Grid>
      </Grid>
    </Box>;
};

export default Section2;
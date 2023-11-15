"use client";

import { GitHub, LinkedIn } from "@mui/icons-material";
import { Box, Card, Grid, IconButton, useTheme } from "@mui/material";
import { nanoid } from "nanoid"; // CUSTOM COMPONENTS

import { FlexRowAlign } from "components/flexbox";
import { NextImage } from "components/next-image";
import { H6, Paragraph } from "components/typography"; // CUSTOM ICON COMPONENTS

import Database from "icons/Database";
import Facebook from "icons/Facebook";
import Minimize from "icons/Minimize";
import Recycle from "icons/Recycle";
import Twitter from "icons/Twitter"; // CUSTOM UTILS METHOD

import { isDark } from "utils/constants"; // CUSTOM DUMMY DATA

const DATA = [{
  id: nanoid(),
  title: "Easy",
  Icon: Minimize,
  description: "Building and deploying should be as easy as a single tap."
}, {
  id: nanoid(),
  Icon: Recycle,
  title: "Universal",
  description: "To connect the world, sites should be fast from everywhere."
}, {
  id: nanoid(),
  Icon: Database,
  title: "Accessible",
  description: "Great care in user experience and design enables everyone."
}];

const AboutUs2PageView = () => {
  const theme = useTheme();
  return <Box py={3} maxWidth={930} margin="auto">
      <Card>
        <NextImage alt="about" width={1864} height={800} src="/static/thumbnail/thumbnail-7.png" />

        <Box p={3}>
          <H6 fontSize={18} mb={1}>
            About Us
          </H6>

          <Paragraph textAlign="justify" color="text.secondary" lineHeight={1.7}>
            To other made was hunt, their not at them. How the that they task. Options they to
            hours. And the should company, in into being herself get approached country. We same
            bread so slid duty think chair. Had leather oh, client which phase uneasiness, way.
            Shared agency, kind he tone name was had how the name can one man he is and text doctor
            ridden spree. Farther, a not noise self-discipline. In is on both I and hazardous for
            the text devotion phase in much eminent his with state that we could there text
            presented. Changes acquired made, the feel.
          </Paragraph>

          <Paragraph textAlign="justify" color="text.secondary" mt={2} mb={8} lineHeight={1.7}>
            All economics city, a she day into and concept. Seemed I profiles with him as rolled
            called align than the up acknowledge a because and tag bold, if there pay both you
            original second of target. It eminent so more been best hope a of behind and the and
            attempt. That fur place. Into I bed. A couldn't it and secretly keep compensation
            necessary any wait must and yes, clothes, you'd it lay troubled magnitude, work for very
            act and of just conduct, partiality more behind gentlemen, an get few where were phase
            parts could the other and thought.
          </Paragraph>

          <Grid container spacing={3}>
            {DATA.map(({
            id,
            Icon,
            title,
            description
          }) => <Grid item md={4} xs={12} key={id}>
                <Card sx={{
              padding: 3,
              display: "flex",
              textAlign: "center",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center"
            }}>
                  <Icon fontSize="large" sx={{
                color: "grey.500"
              }} />
                  <H6 fontSize={18} py={1}>
                    {title}
                  </H6>
                  <Paragraph color="text.secondary" px={2}>
                    {description}
                  </Paragraph>
                </Card>
              </Grid>)}
          </Grid>

          <FlexRowAlign mt={3} py={3} borderRadius={4} flexDirection="column" bgcolor={isDark(theme) ? "grey.700" : "grey.100"}>
            <H6 fontSize={16}>Follow More</H6>

            <Box>
              <IconButton>
                <Facebook sx={{
                color: "grey.500"
              }} />
              </IconButton>

              <IconButton>
                <Twitter sx={{
                color: "grey.500"
              }} />
              </IconButton>

              <IconButton>
                <LinkedIn sx={{
                color: "grey.500"
              }} />
              </IconButton>

              <IconButton>
                <GitHub sx={{
                color: "grey.500"
              }} />
              </IconButton>
            </Box>
          </FlexRowAlign>
        </Box>
      </Card>
    </Box>;
};

export default AboutUs2PageView;
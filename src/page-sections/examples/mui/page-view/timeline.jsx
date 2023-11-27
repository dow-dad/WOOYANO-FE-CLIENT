import { Timeline, TimelineDot, TimelineItem, TimelineContent, TimelineConnector, TimelineSeparator, TimelineOppositeContent } from "@mui/lab";
import Grid from "@mui/material/Grid";
import { Fastfood, Hotel, LaptopMac, Repeat } from "@mui/icons-material"; // CUSTOM COMPONENTS

import ComponentPageLayout from "../../ComponentPageLayout";
import { H6, Paragraph } from "components/typography";
import { Block } from "components/block";

const MuiTimelinePageView = () => {
  return <ComponentPageLayout title="Timeline">
      <Grid container spacing={3}>
        <Grid item lg={4} md={6} xs={12}>
          <Block title="Basic" bgTransparent>
            <Timeline>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Eat</TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Code</TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Sleep</TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                </TimelineSeparator>
                <TimelineContent>Repeat</TimelineContent>
              </TimelineItem>
            </Timeline>
          </Block>
        </Grid>

        <Grid item lg={4} md={6} xs={12}>
          <Block title="Left Positioned" bgTransparent>
            <Timeline position="left">
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Eat</TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Code</TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Sleep</TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                </TimelineSeparator>
                <TimelineContent>Repeat</TimelineContent>
              </TimelineItem>
            </Timeline>
          </Block>
        </Grid>

        <Grid item lg={4} md={6} xs={12}>
          <Block title="Alternating" bgTransparent>
            <Timeline position="alternate">
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Eat</TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Code</TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Sleep</TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                </TimelineSeparator>
                <TimelineContent>Repeat</TimelineContent>
              </TimelineItem>
            </Timeline>
          </Block>
        </Grid>

        <Grid item lg={4} md={6} xs={12}>
          <Block title="Color" bgTransparent>
            <Timeline position="alternate">
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Default</TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="primary" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Primary</TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="secondary" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Secondary</TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="success" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Success</TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="warning" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Warning</TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="error" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Error</TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="info" />
                </TimelineSeparator>
                <TimelineContent>Info</TimelineContent>
              </TimelineItem>
            </Timeline>
          </Block>
        </Grid>

        <Grid item lg={4} md={6} xs={12}>
          <Block title="Outlined" bgTransparent>
            <Timeline position="alternate">
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" />
                  <TimelineConnector />
                </TimelineSeparator>

                <TimelineContent>Default</TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="primary" />
                  <TimelineConnector />
                </TimelineSeparator>

                <TimelineContent>Primary</TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="secondary" />
                  <TimelineConnector />
                </TimelineSeparator>

                <TimelineContent>Secondary</TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="success" />
                  <TimelineConnector />
                </TimelineSeparator>

                <TimelineContent>Success</TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="warning" />
                  <TimelineConnector />
                </TimelineSeparator>

                <TimelineContent>Warning</TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="error" />
                  <TimelineConnector />
                </TimelineSeparator>

                <TimelineContent>Error</TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="info" />
                </TimelineSeparator>

                <TimelineContent>Info</TimelineContent>
              </TimelineItem>
            </Timeline>
          </Block>
        </Grid>

        <Grid item lg={4} md={6} xs={12}>
          <Block title="Opposite Content" bgTransparent>
            <Timeline position="alternate">
              <TimelineItem>
                <TimelineOppositeContent color="text.secondary">09:30 am</TimelineOppositeContent>

                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>

                <TimelineContent>Default</TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineOppositeContent color="text.secondary">10:30 am</TimelineOppositeContent>

                <TimelineSeparator>
                  <TimelineDot color="primary" />
                  <TimelineConnector />
                </TimelineSeparator>

                <TimelineContent>Primary</TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineOppositeContent color="text.secondary">11:30 am</TimelineOppositeContent>

                <TimelineSeparator>
                  <TimelineDot color="secondary" />
                  <TimelineConnector />
                </TimelineSeparator>

                <TimelineContent>Secondary</TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineOppositeContent color="text.secondary">12:30 pm</TimelineOppositeContent>

                <TimelineSeparator>
                  <TimelineDot color="success" />
                  <TimelineConnector />
                </TimelineSeparator>

                <TimelineContent>Success</TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineOppositeContent color="text.secondary">01:30 pm</TimelineOppositeContent>

                <TimelineSeparator>
                  <TimelineDot color="warning" />
                  <TimelineConnector />
                </TimelineSeparator>

                <TimelineContent>Warning</TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineOppositeContent color="text.secondary">02:30 pm</TimelineOppositeContent>

                <TimelineSeparator>
                  <TimelineDot color="error" />
                  <TimelineConnector />
                </TimelineSeparator>

                <TimelineContent>Error</TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineOppositeContent color="text.secondary">03:30 pm</TimelineOppositeContent>

                <TimelineSeparator>
                  <TimelineDot color="info" />
                </TimelineSeparator>

                <TimelineContent>Info</TimelineContent>
              </TimelineItem>
            </Timeline>
          </Block>
        </Grid>

        <Grid item xs={12}>
          <Block title="Customization" bgTransparent>
            <Timeline position="alternate">
              <TimelineItem>
                <TimelineOppositeContent align="right" variant="body2" color="text.secondary" sx={{
                m: "auto 0"
              }}>
                  9:30 am
                </TimelineOppositeContent>

                <TimelineSeparator>
                  <TimelineConnector />

                  <TimelineDot>
                    <Fastfood />
                  </TimelineDot>

                  <TimelineConnector />
                </TimelineSeparator>

                <TimelineContent sx={{
                py: 4,
                px: 2
              }}>
                  <H6 fontSize={18}>Eat</H6>
                  <Paragraph color="text.secondary">Because you need strength</Paragraph>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineOppositeContent variant="body2" color="text.secondary" sx={{
                m: "auto 0"
              }}>
                  10:00 am
                </TimelineOppositeContent>

                <TimelineSeparator>
                  <TimelineConnector />

                  <TimelineDot color="primary">
                    <LaptopMac />
                  </TimelineDot>

                  <TimelineConnector />
                </TimelineSeparator>

                <TimelineContent sx={{
                py: 4,
                px: 2
              }}>
                  <H6 fontSize={18}>Code</H6>
                  <Paragraph color="text.secondary">Because it&apos;s awesome!</Paragraph>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineSeparator>
                  <TimelineConnector />

                  <TimelineDot color="primary" variant="outlined">
                    <Hotel />
                  </TimelineDot>

                  <TimelineConnector sx={{
                  bgcolor: "secondary.main"
                }} />
                </TimelineSeparator>

                <TimelineContent sx={{
                py: 4,
                px: 2
              }}>
                  <H6 fontSize={18}>Sleep</H6>
                  <Paragraph color="text.secondary">Because you need rest</Paragraph>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineSeparator>
                  <TimelineConnector sx={{
                  bgcolor: "secondary.main"
                }} />
                  <TimelineDot color="secondary">
                    <Repeat />
                  </TimelineDot>

                  <TimelineConnector />
                </TimelineSeparator>

                <TimelineContent sx={{
                py: 4,
                px: 2
              }}>
                  <H6 fontSize={18}>Repeat</H6>
                  <Paragraph color="text.secondary">Because this is the life you love!</Paragraph>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </Block>
        </Grid>
      </Grid>
    </ComponentPageLayout>;
};

export default MuiTimelinePageView;
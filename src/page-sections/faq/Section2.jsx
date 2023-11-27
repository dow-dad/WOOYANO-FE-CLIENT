import { Grid, Card, styled, Container, Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { ExpandMore } from "@mui/icons-material"; // CUSTOM COMPONENT

import { H1 } from "components/typography"; // CUSTOM UTILS METHOD

import { isDark } from "utils/constants";
import { NextImage } from "components/next-image"; // STYLED COMPONENTS

const StyledAccordionSummary = styled(AccordionSummary)(({
  theme
}) => ({
  color: theme.palette.text.primary
}));
const StyledAccordionDetails = styled(AccordionDetails)(({
  theme
}) => ({
  color: theme.palette.grey[isDark(theme) ? 400 : 700]
}));

const Section2 = () => {
  return <Container maxWidth="lg" sx={{
    py: 12
  }}>
      <H1 mb={6} fontSize={{
      sm: 52,
      xs: 42
    }}>
        Frequently asked questions
      </H1>

      <Grid container spacing={{
      lg: 5,
      xs: 3
    }}>
        <Grid item md={8} xs={12}>
          <Accordion expanded>
            <StyledAccordionSummary expandIcon={<ExpandMore />}>
              What is project management software?
            </StyledAccordionSummary>

            <StyledAccordionDetails>
              Project management software helps teams to stay organized and on track by providing a
              central hub for project information, task assignment, & progress tracking. It also
              facilitate communication & collaboration between team members, reducing the risk
              miscommunication.
              <br /> <br />
              Project management software helps teams to stay organized and on track by providing a
              central hub for project information, task assignment, & progress tracking. It also
              facilitate communication & collaboration between team members, reducing the risk
              miscommunication. <br /> <br />
              Project management software helps teams to stay organized and on track by providing a
              central hub for project information, task assignment, & progress tracking. It also
              facilitate communication & collaboration between team members, reducing the risk
              miscommunication.
            </StyledAccordionDetails>
          </Accordion>

          <Accordion>
            <StyledAccordionSummary expandIcon={<ExpandMore />}>
              How does project management software help teams?
            </StyledAccordionSummary>

            <StyledAccordionDetails>
              Project management software helps teams to stay organized and on track by providing a
              central hub for project information, task assignment, & progress tracking. It also
              facilitate communication & collaboration between team members, reducing the risk
              miscommunication.
            </StyledAccordionDetails>
          </Accordion>

          <Accordion>
            <StyledAccordionSummary expandIcon={<ExpandMore />}>
              What features should I look for in project management software?
            </StyledAccordionSummary>

            <StyledAccordionDetails>
              Project management software helps teams to stay organized and on track by providing a
              central hub for project information, task assignment, & progress tracking. It also
              facilitate communication & collaboration between team members, reducing the risk
              miscommunication.
            </StyledAccordionDetails>
          </Accordion>

          <Accordion>
            <StyledAccordionSummary expandIcon={<ExpandMore />}>
              Is project management software easy to use?
            </StyledAccordionSummary>

            <StyledAccordionDetails>
              Project management software helps teams to stay organized and on track by providing a
              central hub for project information, task assignment, & progress tracking. It also
              facilitate communication & collaboration between team members, reducing the risk
              miscommunication.
            </StyledAccordionDetails>
          </Accordion>

          <Accordion>
            <StyledAccordionSummary expandIcon={<ExpandMore />}>
              Can project management software be used by remote teams?
            </StyledAccordionSummary>

            <StyledAccordionDetails>
              Project management software helps teams to stay organized and on track by providing a
              central hub for project information, task assignment, & progress tracking. It also
              facilitate communication & collaboration between team members, reducing the risk
              miscommunication.
            </StyledAccordionDetails>
          </Accordion>
        </Grid>

        <Grid item md={4} xs={12}>
          <Card sx={{
          p: 0.5,
          height: "auto"
        }}>
            <NextImage alt="faq" width={380} height={559} src="/static/pages/faq.png" style={{
            display: "block"
          }} />
          </Card>
        </Grid>
      </Grid>
    </Container>;
};

export default Section2;
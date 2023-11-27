import { Box, Button, Card, Chip, Container, Grid, Stack, styled } from "@mui/material"; // CUSTOM COMPONENTS

import { H1, H6, Paragraph } from "components/typography"; // CUSTOM UTILS METHOD

import { isDark } from "utils/constants"; // CUSTOM DUMMY DATA

import { JOBS } from "./data"; // STYLED COMPONENT

const StyledCard = styled(Card)(({
  theme
}) => ({
  padding: "1.5rem",
  transition: "all 300ms",
  boxShadow: theme.shadows[0],
  border: `1px solid ${theme.palette.grey[isDark(theme) ? 700 : 100]}`,
  ":hover": {
    boxShadow: theme.shadows[4],
    borderColor: theme.palette.primary.main
  }
}));

const Section2 = () => {
  return <Container maxWidth="lg" sx={{
    my: 10
  }}>
      <Box textAlign="center" mb={6}>
        <H1 fontSize={{
        sm: 52,
        xs: 42
      }}>Available Jobs</H1>
        <Paragraph color="text.secondary" fontSize={18}>
          Join our dynamic team of professionals and shape the future of IT Industry.
        </Paragraph>
      </Box>

      <Grid container spacing={3}>
        {JOBS.map(({
        id,
        title
      }) => <Grid item key={id} lg={4} sm={6} xs={12}>
            <StyledCard>
              <H6 mb={2} fontSize={24}>
                {title}
              </H6>

              <Paragraph mb={6} fontSize={16} color="text.secondary">
                We are actively seeking a talented and passionate software engineer to join our
                team.
              </Paragraph>

              <Stack mb={3} direction="row" spacing={1} alignItems="center">
                <Chip color="secondary" label="Full-time" />
                <Chip color="secondary" label="Remote" />
                <Chip color="secondary" label="$500/monthly" />
              </Stack>

              <Stack direction="row" spacing={2} alignItems="center">
                <Button variant="outlined">View Details</Button>
                <Button>Apply this job</Button>
              </Stack>
            </StyledCard>
          </Grid>)}
      </Grid>
    </Container>;
};

export default Section2;
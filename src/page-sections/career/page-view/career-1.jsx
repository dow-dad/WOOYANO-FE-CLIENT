"use client";

import ExpandMore from "@mui/icons-material/ExpandMore";
import { Box, Card, Grid, Button, Accordion, AccordionDetails, AccordionSummary } from "@mui/material"; // CUSTOM DEFINED HOOK

import useNavigate from "hooks/useNavigate"; // CUSTOM COMPONENTS

import { FlexBox } from "components/flexbox";
import { H6, Paragraph } from "components/typography"; // CUSTOM DUMMY DATA SET

import { CAREER_1_DATA } from "../data";

const Career1PageView = () => {
  const navigate = useNavigate();
  return <Box py={3}>
      <H6 fontSize={18}>Career List</H6>
      <Paragraph color="text.secondary" mb={3}>
        You sit down. You stare at your screen. The cursor blinks
      </Paragraph>

      <Grid container spacing={3}>
        {CAREER_1_DATA.map(({
        id,
        title,
        description,
        items
      }) => <Grid item md={6} xs={12} key={id}>
            <Card sx={{
          p: 3
        }}>
              <H6 fontSize={16}>{title}</H6>
              <Paragraph color="text.secondary" mb={4}>
                {description}
              </Paragraph>

              {items.map((item, i) => <Accordion key={item} defaultExpanded={i === 0}>
                  <AccordionSummary expandIcon={<ExpandMore />}>{item}</AccordionSummary>

                  <AccordionDetails>
                    <Box component="ul" pl={2}>
                      <Box component="li" pb={1}>
                        Experience with JavaScript.
                      </Box>

                      <Box component="li" pb={1}>
                        Good time-management skills.
                      </Box>

                      <Box component="li" pb={1}>
                        Experience with React.
                      </Box>

                      <Box component="li" pb={1}>
                        Experience with HTML / CSS.
                      </Box>

                      <Box component="li" pb={1}>
                        Experience with REST API.
                      </Box>

                      <Box component="li" pb={1}>
                        Git knowledge is a plus.
                      </Box>
                    </Box>
                  </AccordionDetails>
                </Accordion>)}

              <FlexBox alignItems="center" gap={2} mt={3}>
                <Button size="small" onClick={() => navigate(`/dashboard/career/${id}`)}>
                  Apply
                </Button>

                <Button size="small" variant="outlined" color="secondary">
                  Cancel
                </Button>
              </FlexBox>
            </Card>
          </Grid>)}
      </Grid>
    </Box>;
};

export default Career1PageView;
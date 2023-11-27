import { Box, Card, Grid, Stack, Button, styled, Accordion, Pagination, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMore from "@mui/icons-material/ExpandMore"; // CUSTOM COMPONENTS

import MoreChannel from "./MoreChannel";
import Documentation from "./Documentation";
import { H6 } from "components/typography";
import { MoreButton } from "components/more-button";
import { SearchInput } from "components/search-input";
import { FlexBetween, FlexBox } from "components/flexbox"; // CUSTOM ICON COMPONENT

import Filter from "icons/Filter"; // CUSTOM UTILS METHOD

import { isDark } from "utils/constants"; // CUSTOM DUMMY DATA

import { FAQS } from "./data"; // STYLED COMPONENT

const FilterButton = styled(Button)(({
  theme
}) => ({
  borderRadius: 8,
  padding: ".3rem 1rem",
  color: theme.palette.text.secondary,
  backgroundColor: theme.palette.grey[isDark(theme) ? 700 : 100],
  ":hover": {
    backgroundColor: theme.palette.grey[isDark(theme) ? 700 : 100]
  }
}));

const Faq = () => {
  return <Box>
      <Grid container spacing={3}>
        {
        /* ALL TICKETS */
      }
        <Grid item xl={9} md={8} xs={12}>
          <Card sx={{
          p: 3
        }}>
            <FlexBetween>
              <SearchInput placeholder="Search" />

              <FlexBox alignItems="center" gap={1}>
                <FilterButton variant="text" startIcon={<Filter />}>
                  Filter
                </FilterButton>

                <MoreButton size="small" />
              </FlexBox>
            </FlexBetween>

            <H6 fontSize={18} mt={4} mb={2}>
              All FAQs
            </H6>

            {FAQS.map((item, i) => <Accordion key={item.id} defaultExpanded={i === 0}>
                <AccordionSummary expandIcon={<ExpandMore />} sx={{
              fontWeight: 500
            }}>
                  {item.title}
                </AccordionSummary>

                <AccordionDetails>
                  By Uko to save tons and more to time money projects are listed and outstanding. By
                  Uko to save tons and more to time money projects are listed and outstanding.
                </AccordionDetails>
              </Accordion>)}

            <Stack mt={3} direction="row" justifyContent="center">
              <Pagination count={5} shape="rounded" />
            </Stack>
          </Card>
        </Grid>

        <Grid item xl={3} md={4} xs={12}>
          {
          /* MORE CHANNEL */
        }
          <MoreChannel />

          {
          /* DOCUMENTATION */
        }
          <Documentation />
        </Grid>
      </Grid>
    </Box>;
};

export default Faq;
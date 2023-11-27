import { Box, Card, Chip, Grid, useTheme, Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { H6 } from "components/typography";
import ExpandMore from "@mui/icons-material/ExpandMore"; // CUSTOM COMPONENTS

import { FlexBetween } from "components/flexbox";
import { MoreButton } from "components/more-button"; // CUSTOM UTILS METHOD

import { isDark } from "utils/constants"; // CUSTOM DUMMY DATA

import { OVERVIEW_DATA, SUPPORT_1, SUPPORT_2, SUPPORT_3 } from "./data";

const Overview = () => {
  const theme = useTheme();
  return <Grid container spacing={3}>
      {OVERVIEW_DATA.map(({
      id,
      title,
      items
    }) => <Grid item md={6} xs={12} key={id}>
          <Card sx={{
        p: 3
      }}>
            <FlexBetween mb={3}>
              <H6 fontSize={18}>{title}</H6>
              <MoreButton size="small" />
            </FlexBetween>

            {items.map((item, i) => <Accordion key={item.id} defaultExpanded={i === 0}>
                <AccordionSummary expandIcon={<ExpandMore />}>
                  {item.title}{" "}
                  {item?.tag && <Chip size="small" color="default" label={item.tag} sx={{
              ml: 1,
              fontSize: 12,
              borderRadius: 1,
              color: "text.secondary",
              backgroundColor: isDark(theme) ? "grey.700" : "grey.100"
            }} />}
                </AccordionSummary>

                <AccordionDetails>
                  By Uko to save tons and more to time money projects are listed and outstanding.
                </AccordionDetails>
              </Accordion>)}
          </Card>
        </Grid>)}

      <Grid item xs={12}>
        <Card sx={{
        position: "relative",
        minHeight: 300,
        p: 3
      }}>
          <Box position="absolute" right={0} bottom={0}>
            <img src="/static/illustration/support-2.svg" alt="" />
          </Box>

          <H6 fontSize={18} mb={3}>
            Products Documentations
          </H6>

          <Box sx={{
          gap: 2,
          display: "grid",
          gridTemplateColumns: {
            md: "repeat(3, 1fr)",
            sm: "1fr 1fr",
            xs: "1fr"
          }
        }}>
            <Box component="ul" pl={3}>
              {SUPPORT_1.map(item => <Box key={item} pb={1} component="li" color="grey.500" sx={{
              "::marker": {
                color: "grey.500",
                fontSize: "140%"
              }
            }}>
                  {item}
                </Box>)}
            </Box>

            <Box component="ul" pl={3}>
              {SUPPORT_2.map(item => <Box key={item} pb={1} component="li" color="grey.500" sx={{
              "::marker": {
                color: "grey.500",
                fontSize: "140%"
              }
            }}>
                  {item}
                </Box>)}
            </Box>

            <Box component="ul" pl={3}>
              {SUPPORT_3.map(item => <Box key={item} pb={1} component="li" color="grey.500" sx={{
              "::marker": {
                color: "grey.500",
                fontSize: "140%"
              }
            }}>
                  {item}
                </Box>)}
            </Box>
          </Box>
        </Card>
      </Grid>
    </Grid>;
};

export default Overview;
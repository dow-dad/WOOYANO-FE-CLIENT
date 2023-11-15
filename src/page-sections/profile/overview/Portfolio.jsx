import { Add, Download, FavoriteBorder } from "@mui/icons-material";
import { Button, Card, CardMedia, Grid, styled, Box, IconButton, CardContent, Chip } from "@mui/material"; // CUSTOM COMPONENTS

import { FlexBox, FlexBetween } from "components/flexbox";
import { H6, Small } from "components/typography"; // CUSTOM UTILS METHOD

import { isDark } from "utils/constants";
const StyledIconButton = styled(IconButton)(({
  theme
}) => ({
  borderRadius: 8,
  border: `1px solid ${theme.palette.divider}`
}));
const DateWrapper = styled(FlexBox)(({
  theme
}) => ({
  top: 10,
  right: 10,
  width: 40,
  height: 50,
  borderRadius: "4px",
  alignItems: "center",
  position: "absolute",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: isDark(theme) ? theme.palette.grey[800] : theme.palette.common.white
}));

const Portfolio = () => {
  return <Card sx={{
    padding: 3
  }}>
      <FlexBetween mb={3}>
        <H6 fontSize={16}>Portfolio</H6>

        <Button color="secondary" variant="outlined" startIcon={<Add />}>
          Add New
        </Button>
      </FlexBetween>

      <Grid container spacing={3}>
        <Grid item lg={4} md={6} xs={12}>
          <SinglePortfolio tag="Minimal" title="Hollow Purple" date="12.00 Nov 21, 2021" imgLink="/static/portfolio/1.png" />
        </Grid>

        <Grid item lg={4} md={6} xs={12}>
          <SinglePortfolio tag="Dark" title="Red Blood" date="12.00 Nov 21, 2021" imgLink="/static/portfolio/2.png" />
        </Grid>

        <Grid item lg={4} md={6} xs={12}>
          <SinglePortfolio tag="Light" title="Lime Blue" date="12.00 Nov 21, 2021" imgLink="/static/portfolio/3.png" />
        </Grid>
      </Grid>
    </Card>;
};

export default Portfolio; // ==============================================================================================

// ==============================================================================================
function SinglePortfolio({
  tag,
  date,
  title,
  imgLink
}) {
  return <Card sx={{
    position: "relative",
    borderRadius: 2,
    boxShadow: 0
  }}>
      <CardMedia component="img" image={imgLink} height={152} />

      <DateWrapper>
        <Small fontWeight={600}>12</Small>
        <Small color="text.secondary">Jan</Small>
      </DateWrapper>

      <CardContent sx={{
      paddingBottom: "16px !important"
    }}>
        <FlexBetween>
          <Chip label={tag} size="small" />

          <Box>
            <StyledIconButton size="small" disableRipple sx={{
            mr: 1
          }}>
              <Download color="primary" />
            </StyledIconButton>

            <StyledIconButton size="small" disableRipple>
              <FavoriteBorder color="action" />
            </StyledIconButton>
          </Box>
        </FlexBetween>

        <Box mt={1.5}>
          <H6 fontSize={14} lineHeight={1}>
            {title}
          </H6>

          <Small color="text.secondary">{date}</Small>
        </Box>
      </CardContent>
    </Card>;
}
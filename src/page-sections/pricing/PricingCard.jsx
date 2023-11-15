import { Card, Stack, Button, styled, Chip } from "@mui/material"; // CUSTOM COMPONENTS

import FeatureListItem from "./FeatureListItem";
import { H1, Paragraph, Span } from "components/typography"; // CUSTOM UTILS METHOD

import { isDark } from "utils/constants"; // STYLED COMPONENTS

const StyledCard = styled(Card)(({
  theme,
  active
}) => ({
  padding: "3rem",
  boxShadow: theme.shadows[0],
  border: `1px solid ${theme.palette.grey[isDark(theme) ? 700 : 100]}`,
  ...(active && {
    position: "relative",
    border: `1px solid ${theme.palette.primary.main}`
  })
}));
const StyledChip = styled(Chip)({
  top: 20,
  right: 20,
  position: "absolute"
}); // ==============================================================

// ==============================================================
const PricingCard = ({
  title,
  price,
  popular,
  icon,
  features
}) => {
  return <StyledCard active={popular ? 1 : 0}>
      {
      /* PLAN POPULAR TAG */
    }
      {popular && <StyledChip label="POPULAR" />}

      {
      /* PLAN TITLE */
    }
      <Paragraph fontWeight={600} fontSize={16} color="text.secondary" textTransform="uppercase">
        {title}
      </Paragraph>

      {
      /* PLAN PRICE */
    }
      {price ? <H1 pt={2} pb={4} fontSize={48}>
          ${price}
          <Span fontSize={16} fontWeight={500} color="text.secondary">
            /month
          </Span>
        </H1> : <H1 pt={2} pb={4} fontSize={48}>
          Free
        </H1>}

      {
      /* ICON */
    }
      <img src={icon} alt="shape" />

      {
      /* FEATURE LIST */
    }
      <Stack spacing={2} mt={5} mb={6}>
        {features.map(item => <FeatureListItem title={item} key={item} />)}
      </Stack>

      <Button fullWidth color={popular ? "primary" : "secondary"}>
        Choose Plan
      </Button>
    </StyledCard>;
};

export default PricingCard;
import { Card, styled } from "@mui/material"; // CUSTOM COMPONENT

import { Paragraph } from "../typography"; // CUSTOM UTILS METHOD

import { isDark } from "utils/constants"; // STYLED COMPONENT

const StyledCard = styled(Card)(({
  theme,
  bg
}) => ({
  padding: 32,
  borderRadius: 12,
  boxShadow: theme.shadows[0],
  border: `1px dashed ${theme.palette.grey[isDark(theme) ? 600 : 200]}`,
  backgroundColor: bg ? "transparent" : theme.palette.grey[isDark(theme) ? 800 : 50]
})); // ==============================================================

// ==============================================================
const Block = ({
  title,
  children,
  bgTransparent = false,
  ...props
}) => <StyledCard {...props} bg={bgTransparent ? 1 : 0}>
    <Paragraph mb={3} fontSize={18} fontWeight={600}>
      {title}
    </Paragraph>

    {children}
  </StyledCard>;

export default Block;
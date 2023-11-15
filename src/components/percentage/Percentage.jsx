import { styled } from "@mui/material"; // CUSTOM COMPONENT

import { Span } from "../typography"; // CUSTOM UTILS METHOD

import { isDark } from "utils/constants";
// STYLED COMPONENT
const StyledSpan = styled(Span)(({
  theme,
  type
}) => ({
  fontSize: 12,
  lineHeight: 1,
  fontWeight: 500,
  borderRadius: 16,
  padding: ".25rem .4rem",
  ...(type === "primary" && {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.primary[25]
  }),
  ...(type === "success" && {
    color: theme.palette.success[500],
    backgroundColor: theme.palette.success[50]
  }),
  ...(type === "error" && {
    color: theme.palette.error.main,
    backgroundColor: theme.palette.error[50]
  }),
  ...(isDark(theme) && {
    backgroundColor: `${theme.palette.grey[700]} !important`
  })
})); // ==============================================================

// ==============================================================
const Percentage = ({
  children,
  type = "success",
  ellipsis = false,
  ...props
}) => {
  return <StyledSpan ellipsis={ellipsis} type={type} {...props}>
      {children}
    </StyledSpan>;
};

export default Percentage;
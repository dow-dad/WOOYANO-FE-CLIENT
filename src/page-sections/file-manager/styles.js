import { styled } from "@mui/material";
import { FlexBetween } from "components/flexbox"; // STYLED COMPONENTS

export const HeadingWrapper = styled(FlexBetween)(({
  theme
}) => ({
  padding: 24,
  [theme.breakpoints.down(665)]: {
    rowGap: 12,
    alignItems: "start",
    flexDirection: "column"
  },
  [theme.breakpoints.down(426)]: {
    ".search": {
      flex: 1,
      flexWrap: "wrap"
    },
    ".MuiTextField-root": {
      width: "100%"
    },
    ".MuiButton-root": {
      width: "100%"
    }
  }
}));
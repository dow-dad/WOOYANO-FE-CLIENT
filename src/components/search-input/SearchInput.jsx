import { InputBase, styled } from "@mui/material"; // CUSTOM ICON COMPONENT

import SearchIcon from "icons/SearchIcon"; // STYLED COMPONENT

const StyledInputBase = styled(InputBase)(({
  theme,
  border
}) => ({
  height: 45,
  fontSize: 14,
  width: "100%",
  maxWidth: 350,
  borderRadius: 12,
  paddingInline: 16,
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background.paper,
  border: border ? `1px solid ${theme.palette.divider}` : "none",
  [theme.breakpoints.down(500)]: {
    maxWidth: "100%"
  },
  "::placeholder": {
    color: theme.palette.text.secondary
  }
})); // ========================================================================

// ========================================================================
const SearchInput = ({
  bordered = true,
  ...props
}) => {
  // SEARCH ICON
  const ADORNMENT = <SearchIcon sx={{
    mr: 1,
    fontSize: 18,
    color: "text.secondary"
  }} />;
  return <StyledInputBase border={bordered ? 1 : 0} startAdornment={ADORNMENT} {...props} />;
};

export default SearchInput;
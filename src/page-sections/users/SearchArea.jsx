import { Box, IconButton, TextField } from "@mui/material";
import Search from "@mui/icons-material/Search"; // CUSTOM DEFINED HOOK

import useNavigate from "hooks/useNavigate";
import useLocation from "hooks/useLocation"; // CUSTOM COMPONENTS

import { FlexBetween } from "components/flexbox"; // CUSTOM ICON COMPONENTS

import Apps from "icons/Apps";
import FormatBullets from "icons/FormatBullets"; // ==========================================================================================

// ==========================================================================================
const SearchArea = props => {
  const {
    value = "",
    onChange,
    gridRoute,
    listRoute
  } = props;
  const navigate = useNavigate();
  const {
    pathname
  } = useLocation();

  const activeColor = path => pathname === path ? "primary.main" : "grey.400";

  return <FlexBetween gap={1} my={3}>
      {
      /* SEARCH BOX */
    }
      <TextField value={value} onChange={onChange} placeholder="Search..." InputProps={{
      startAdornment: <Search />
    }} sx={{
      maxWidth: 400,
      width: "100%"
    }} />

      {
      /* NAVIGATION BUTTONS */
    }
      <Box flexShrink={0} className="actions">
        <IconButton onClick={() => navigate(listRoute)}>
          <FormatBullets sx={{
          color: activeColor(listRoute)
        }} />
        </IconButton>

        <IconButton onClick={() => navigate(gridRoute)}>
          <Apps sx={{
          color: activeColor(gridRoute)
        }} />
        </IconButton>
      </Box>
    </FlexBetween>;
};

export default SearchArea;
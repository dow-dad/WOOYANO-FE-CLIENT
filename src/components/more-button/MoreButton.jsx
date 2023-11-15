import { useState } from "react";
import { Box, Fade, IconButton, Menu, MenuItem, styled } from "@mui/material";
import MoreVert from "@mui/icons-material/MoreVert"; // CUSTOM UTILS METHOD

import { isDark } from "utils/constants"; // STYLED COMPONENT

const StyledIconButton = styled(IconButton)(({
  theme
}) => ({
  flexShrink: 0,
  color: theme.palette.grey[isDark(theme) ? 300 : 400]
}));
const optionList = ["Create", "Edit", "Delete"]; // ==============================================================

// ==============================================================
const MoreButton = ({
  size = "large",
  options = optionList,
  renderOptions,
  ...props
}) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => setAnchorEl(null);

  return <Box>
      <StyledIconButton size={size} aria-label="more" aria-haspopup="true" onClick={e => setAnchorEl(e.currentTarget)} {...props}>
        <MoreVert fontSize="small" />
      </StyledIconButton>

      <Menu anchorEl={anchorEl} onClose={handleClose} open={Boolean(anchorEl)} TransitionComponent={Fade}>
        {renderOptions ? renderOptions(handleClose) : options.map(option => <MenuItem key={option} onClick={handleClose}>
                {option}
              </MenuItem>)}
      </Menu>
    </Box>;
};

export default MoreButton;
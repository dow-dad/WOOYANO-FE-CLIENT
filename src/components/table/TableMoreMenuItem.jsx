import { ListItemIcon, MenuItem, ListItemText } from "@mui/material"; // ==============================================================

// ==============================================================
const TableMoreMenuItem = props => {
  const {
    Icon,
    title,
    handleClick
  } = props;
  return <MenuItem onClick={handleClick}>
      <ListItemIcon>
        <Icon fontSize="small" color="inherit" />
      </ListItemIcon>

      <ListItemText disableTypography>{title}</ListItemText>
    </MenuItem>;
};

export default TableMoreMenuItem;
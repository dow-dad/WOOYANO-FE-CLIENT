import { TableCell, styled } from "@mui/material";
const StyledTableCell = styled(TableCell)({
  paddingBottom: 16,
  textTransform: "uppercase",
  ":first-of-type": {
    paddingLeft: 24
  }
}); // ==============================================================

// ==============================================================
const HeadTableCell = ({
  children,
  ...props
}) => {
  return <StyledTableCell {...props}>{children}</StyledTableCell>;
};

export default HeadTableCell;
import { styled, TableCell } from "@mui/material";
export const HeadTableCell = styled(TableCell)({
  paddingBottom: 16
});
export const BodyTableCell = styled(TableCell)(({
  theme
}) => ({
  fontWeight: 500,
  padding: "1rem 0",
  color: theme.palette.text.primary,
  borderTop: `1px dashed ${theme.palette.divider}`
}));
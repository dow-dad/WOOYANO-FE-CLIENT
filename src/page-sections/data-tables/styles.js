import { InputBase, styled, TableCell, TableRow } from "@mui/material";
import { FlexBox } from "components/flexbox";
import SearchIcon from "icons/SearchIcon";
export const BodyTableRow = styled(TableRow)(({
  theme,
  selected_row
}) => ({ ...(selected_row && {
    position: "relative",
    backgroundColor: theme.palette.action.selected,
    "&::after": {
      top: 0,
      left: 0,
      width: "3px",
      content: '""',
      height: "100%",
      position: "absolute",
      backgroundColor: theme.palette.primary.main
    }
  })
}));
export const BodyTableCell = styled(TableCell)(({
  theme
}) => ({
  padding: "1rem",
  borderBottom: `1px solid ${theme.palette.divider}`,
  ":first-of-type": {
    paddingLeft: 16
  }
}));
export const HeadTableCell = styled(BodyTableCell)({
  ":last-of-type": {
    paddingRight: 16
  }
});
export const StyledSearchInput = styled(InputBase)(({
  theme
}) => ({
  height: 40,
  fontSize: 12,
  maxWidth: 450,
  width: "100%",
  fontWeight: 500,
  paddingLeft: 10,
  borderRadius: "4px",
  backgroundColor: "white",
  color: theme.palette.text.primary
}));
export const StyledSearchIcon = styled(SearchIcon)(({
  theme
}) => ({
  fontSize: 16,
  marginLeft: "0.5rem",
  marginRight: "0.5rem",
  color: theme.palette.primary.main
}));
export const ButtonWrapper = styled(FlexBox)(({
  theme
}) => ({
  [theme.breakpoints.down(500)]: {
    marginTop: 10,
    width: "100%",
    flexDirection: "column-reverse",
    "& > .MuiBox-root": {
      width: "100%",
      margin: "10px 0",
      alignItems: "center",
      flexDirection: "column"
    },
    "& .MuiButton-root": {
      minWidth: "100%"
    }
  }
}));
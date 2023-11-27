import { Box, Card, Grid, styled } from "@mui/material";
import { FlexBox } from "components/flexbox";
import ChevronDown from "icons/ChevronDown";
import MegaMenuList from "./MegaMenuList";
import { PAGES_MENUS } from "./navigation";
import { Span } from "components/typography"; // styled components

const MenusContainer = styled(Box)({
  zIndex: 2,
  opacity: 0,
  top: "120%",
  minWidth: 700,
  position: "absolute",
  visibility: "hidden",
  transition: "top 300ms",
  transform: `translate(-50%, 0%)`
});
const MainListItem = styled(Box)(({
  theme
}) => ({
  position: "relative",
  ":hover": {
    ".menu-item": {
      color: theme.palette.primary.main
    },
    ".inner-menu": {
      opacity: 1,
      visibility: "visible",
      top: "100%"
    }
  }
}));

const MegaMenu = ({
  isDark
}) => {
  return <MainListItem component="li">
      <FlexBox alignItems="center" color={isDark ? "white" : "text.primary"} className="menu-item" sx={{
      cursor: "pointer"
    }}>
        <Span>Pages</Span> <ChevronDown sx={{
        fontSize: 19,
        ml: 0.3
      }} />
      </FlexBox>

      <MenusContainer className="inner-menu">
        <Card sx={{
        px: 3,
        py: 4,
        mt: 1.5,
        width: "100%"
      }}>
          <Grid container spacing={3}>
            {PAGES_MENUS.map(({
            id,
            title,
            child
          }) => <Grid item xs={4} key={id}>
                <MegaMenuList title={title} child={child} />
              </Grid>)}
          </Grid>
        </Card>
      </MenusContainer>
    </MainListItem>;
};

export default MegaMenu;
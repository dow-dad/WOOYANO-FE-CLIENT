import { Box, styled } from "@mui/material"; // LAYOUT BASED HOOK

import useLayout from "./context/useLayout"; // CUSTOM COMPONENTS

import { Scrollbar } from "components/scrollbar";
import MultiLevelMenu from "./MultiLevelMenu";
import UserAccount from "../layout-parts/UserAccount";
import LayoutDrawer from "../layout-parts/LayoutDrawer"; // STYLED COMPONENTS

const NavWrapper = styled(Box)({
  height: "100%",
  paddingLeft: 16,
  paddingRight: 16
});

const MobileSidebar = () => {
  const {
    showMobileSideBar,
    handleCloseMobileSidebar
  } = useLayout();
  return <LayoutDrawer open={showMobileSideBar} onClose={handleCloseMobileSidebar}>
      <Scrollbar autoHide clickOnTrack={false} sx={{
      overflowX: "hidden",
      height: "100%"
    }}>
        <NavWrapper>
          <Box pl={1} pt={3} alt="logo" maxWidth={45} component="img" src="/static/logo/logo-svg.svg" />

          {
          /* NAVIGATION ITEMS */
        }
          <MultiLevelMenu sidebarCompact={false} />

          {
          /* USER ACCOUNT INFORMATION */
        }
          <UserAccount />
        </NavWrapper>
      </Scrollbar>
    </LayoutDrawer>;
};

export default MobileSidebar;
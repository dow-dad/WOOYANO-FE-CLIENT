import { Box, Drawer, styled } from "@mui/material"; // styled component

const Wrapper = styled(Box)(({
  theme
}) => ({
  height: "100%",
  width: "inherit",
  position: "fixed",
  overflow: "hidden",
  boxShadow: theme.shadows[1],
  zIndex: theme.zIndex.drawer + 3,
  backgroundColor: theme.palette.background.paper
})); // ================================================================

// ================================================================
const LayoutDrawer = props => {
  const {
    children,
    open,
    onClose,
    drawerWidth = 280
  } = props;
  return <Drawer anchor="left" open={open} onClose={onClose} PaperProps={{
    sx: {
      width: drawerWidth
    }
  }}>
      <Wrapper>{children}</Wrapper>
    </Drawer>;
};

export default LayoutDrawer;
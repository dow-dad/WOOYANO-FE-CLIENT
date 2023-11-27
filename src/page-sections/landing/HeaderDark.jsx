import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import Menu from "@mui/icons-material/Menu";
import { Box, List, Button, Drawer, Collapse, ListItem, IconButton, useMediaQuery, ListItemButton } from "@mui/material"; // CUSTOM DEFINED HOOK

import useLocation from "hooks/useLocation"; // CUSTOM COMPONENTS

import { Scrollbar } from "components/scrollbar";
import { Paragraph } from "components/typography";
import { FlexBetween, FlexBox } from "components/flexbox";
import MegaMenu from "layouts/main/menu/MegaMenu";
import MegaMenuList from "layouts/main/menu/MegaMenuList";
import { PAGES_MENUS } from "layouts/main/menu/navigation"; // CUSTOM ICON COMPONENT

import ChevronDown from "icons/ChevronDown"; // COMMON STYLES

const LIST_STYLE = {
  gap: 5,
  fontSize: 14,
  fontWeight: 500,
  listStyle: "none",
  alignItems: "center",
  a: {
    transition: "color 300ms",
    ":hover": {
      color: "primary.main"
    }
  }
};

const HeaderDark = () => {
  const {
    pathname
  } = useLocation();
  const [open, setOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const isMedium = useMediaQuery(theme => theme.breakpoints.up("md"));

  const isActive = path => pathname === path;

  useEffect(() => {
    if (isMedium) setOpen(false);
  }, [isMedium]); // FOR LARGE SCREEN DEVICE

  const LARGE_DEVICE_CONTENT = <FlexBox component="nav" sx={LIST_STYLE}>
      <Box component={Link} href="/" color={isActive("/") ? "primary.main" : "white"}>
        Home
      </Box>

      {
      /* PAGES MEGA MENU */
    }
      <MegaMenu isDark />

      <Box component={Link} href="/components" color={isActive("/components") ? "primary.main" : "white"}>
        Components
      </Box>

      <Box component={Link} href="#" color="white">
        Documentation
      </Box>

      <Button>Buy Now</Button>
    </FlexBox>; // FOR SMALL AND MEDIUM SCREEN DEVICE

  const SMALL_DEVICE_CONTENT = <Fragment>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Scrollbar>
          <List disablePadding sx={{
          minWidth: 260,
          height: "100%"
        }}>
            <ListItem sx={{
            mb: 1
          }}>
              <img src="/static/logo/logo-svg.svg" alt="logo" width={40} height={40} />
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton LinkComponent={Link} href="#">
                Home
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding sx={{
            flexDirection: "column",
            alignItems: "start"
          }}>
              <ListItemButton onClick={() => setCollapsed(!collapsed)} sx={{
              width: "100%",
              justifyContent: "space-between"
            }}>
                Pages{" "}
                <ChevronDown sx={{
                rotate: collapsed ? "180deg" : 0,
                transition: "rotate 300ms"
              }} />
              </ListItemButton>

              <Collapse in={collapsed}>
                <Box px={2} py={1.5}>
                  {PAGES_MENUS.map(({
                  child,
                  id,
                  title
                }) => <Box key={id} pl={1} py={id === 2 ? 3 : 0}>
                      <MegaMenuList title={title} child={child} />
                    </Box>)}
                </Box>
              </Collapse>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton LinkComponent={Link} href="/components">
                Components
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton LinkComponent="a" href="#">
                Documentation
              </ListItemButton>
            </ListItem>

            <ListItem sx={{
            mt: 1
          }}>
              <Button fullWidth>Buy Now</Button>
            </ListItem>
          </List>
        </Scrollbar>
      </Drawer>

      <IconButton color="primary" onClick={() => setOpen(true)} sx={{
      flexShrink: 0
    }}>
        <Menu />
      </IconButton>
    </Fragment>;
  return <FlexBetween component="header" py={2}>
      {
      /* QUICKFRAME LOGO */
    }
      <Box display="flex" component={Link} href="/" alignItems="center" gap={0.5}>
        <img src="/static/logo/logo-svg.svg" alt="logo" width={40} height={40} />
        <Paragraph fontSize={20} fontWeight={600} color="white">
          QuickFrame
        </Paragraph>
      </Box>

      {isMedium ? LARGE_DEVICE_CONTENT : SMALL_DEVICE_CONTENT}
    </FlexBetween>;
};

export default HeaderDark;
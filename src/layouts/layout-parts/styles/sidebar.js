import { Box, ButtonBase, styled } from "@mui/material"; // CUSTOM COMPONENTS

import { Paragraph, Span } from "components/typography"; // CUSTOM ICON COMPONENT

import ChevronRight from "icons/ChevronRight"; // CUSTOM UTILS METHOD

import { isDark } from "utils/constants"; // ==============================================================

// ==============================================================
export const SidebarWrapper = styled(Box)(({
  theme,
  compact
}) => ({
  width: 280,
  height: "100vh",
  position: "fixed",
  zIndex: theme.zIndex.drawer,
  backgroundColor: "#fff",
  transition: "width 200ms ease",
  borderRight: `1px dashed ${theme.palette.grey[200]}`,
  ...(compact && {
    width: 86,
    "&:hover": {
      width: 280
    }
  }),
  ...(isDark(theme) && {
    border: 0,
    backgroundColor: theme.palette.background.default
  })
})); // COMMON ICON STYLE

export const ICON_STYLE = active => ({
  fontSize: 18,
  color: active ? "primary.main" : "text.secondary"
}); // SIDEBAR ACCORDION RELATED STYLED COMPONENTS

export const AccordionExpandPanel = styled(Box)({
  "&.expand": {
    "& .expand": {
      paddingLeft: 8
    }
  }
});
export const BulletIcon = styled(Box)(({
  theme,
  active
}) => ({
  width: 4,
  height: 4,
  marginLeft: "10px",
  marginRight: "8px",
  overflow: "hidden",
  borderRadius: "50%",
  background: theme.palette.text.secondary,
  ...(active && {
    background: theme.palette.primary.main,
    boxShadow: `0px 0px 0px 3px ${isDark(theme) ? theme.palette.grey[700] : theme.palette.primary[100]}`
  })
}));
export const AccordionButton = styled(ButtonBase)(({
  theme
}) => ({
  height: 48,
  width: "100%",
  padding: "0 12px",
  marginBottom: 5,
  borderRadius: 50,
  justifyContent: "space-between",
  "&:hover": {
    borderRadius: 50,
    backgroundColor: theme.palette.action.hover,
    "& span, & .MuiSvgIcon-root": {
      color: theme.palette.primary.main
    }
  }
}));
export const ChevronRightStyled = styled(ChevronRight)(({
  collapsed,
  compact,
  active,
  theme
}) => ({
  fontSize: 18,
  color: theme.palette.grey[400],
  transition: "transform 0.3s cubic-bezier(0, 0, 0.2, 1) 0ms",
  transform: collapsed ? "rotate(90deg)" : "rotate(0deg)",
  ...(compact && {
    opacity: 0,
    width: 0
  }),
  ...(active && {
    color: theme.palette.primary.main
  }),
  ...(theme.direction === "rtl" && {
    rotate: "180deg",
    transform: collapsed ? "rotate(-90deg)" : "rotate(0deg)"
  })
}));
export const ItemText = styled(Span)(({
  theme,
  compact,
  active
}) => ({
  fontSize: 14,
  fontWeight: 500,
  whiteSpace: "nowrap",
  paddingLeft: "0.8rem",
  transition: "all 0.15s ease",
  color: active ? theme.palette.primary.main : theme.palette.text.secondary,
  ...(compact && {
    opacity: 0,
    width: 0,
    paddingLeft: 0
  })
})); // MULTI LEVEL MENU RELATED STYLED COMPONENTS

export const NavItemButton = styled(ButtonBase)(({
  theme,
  active
}) => ({
  height: 44,
  width: "100%",
  marginBottom: 4,
  padding: "0 18px",
  justifyContent: "flex-start",
  "&.Mui-disabled": {
    opacity: 0.6
  },
  ...(active && {
    borderRadius: 50,
    color: theme.palette.primary.main,
    backgroundColor: isDark(theme) ? theme.palette.grey[800] : theme.palette.primary[25]
  }),
  "&:hover": {
    borderRadius: 50,
    backgroundColor: theme.palette.action.hover,
    "& > span, & > .MuiSvgIcon-root": {
      color: theme.palette.primary.main
    }
  }
}));
export const ListLabel = styled(Paragraph)(({
  theme,
  compact
}) => ({
  fontSize: 12,
  marginTop: 20,
  marginLeft: 15,
  fontWeight: 600,
  marginBottom: 10,
  textTransform: "uppercase",
  color: theme.palette.text.primary,
  ...(compact && {
    opacity: 0,
    width: 0
  })
}));
export const ExternalLink = styled("a")(({
  theme
}) => ({
  overflow: "hidden",
  whiteSpace: "pre",
  marginBottom: "8px",
  textDecoration: "none",
  color: theme.palette.text.primary
}));
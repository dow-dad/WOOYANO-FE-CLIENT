import { isDark } from "utils/constants";
export const Tab = theme => ({
  defaultProps: {
    disableRipple: true
  },
  styleOverrides: {
    root: {
      padding: 0,
      minHeight: 40,
      fontWeight: 400,
      minWidth: "auto",
      textTransform: "none",
      "&.Mui-selected": {
        fontWeight: 600
      }
    },
    labelIcon: ({
      ownerState: {
        iconPosition
      }
    }) => ({ // marginBottom: 0,
      ...((iconPosition === "top" || iconPosition === "bottom") && {
        marginBottom: 8
      })
    }),
    textColorSecondary: {
      "&.Mui-selected": {
        color: theme.palette.text.primary
      }
    },
    iconWrapper: {
      marginBottom: 0,
      fontSize: "1.2rem"
    }
  }
});
export const Tabs = theme => ({
  styleOverrides: {
    flexContainer: {
      gap: "2rem"
    },
    scrollButtons: {
      "&.Mui-disabled": {
        opacity: 0.2
      }
    },
    root: {
      minHeight: 45,
      borderBottom: `1px solid ${theme.palette.grey[isDark(theme) ? 700 : 100]}`
    },
    indicator: ({
      ownerState
    }) => ({ ...(ownerState?.indicatorColor === "secondary" && {
        backgroundColor: theme.palette.text.primary
      })
    })
  }
});
export const TabList = () => ({
  styleOverrides: {
    flexContainer: {
      gap: 0
    }
  }
});
export const TabPanel = () => ({
  styleOverrides: {
    root: {
      padding: 0
    }
  }
});
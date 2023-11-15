import { isDark } from "utils/constants";
export const Accordion = theme => {
  const {
    grey,
    primary
  } = theme.palette;
  return {
    defaultProps: {
      elevation: 0,
      disableGutters: true
    },
    styleOverrides: {
      root: {
        overflow: "hidden",
        marginBottom: "1rem",
        border: `1px solid ${grey[isDark(theme) ? 700 : 100]}`,
        transition: "all 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        ":before": {
          display: "none"
        },
        ":last-of-type": {
          marginBottom: 0
        }
      },
      rounded: {
        borderRadius: "1rem !important"
      }
    },
    variants: [{
      props: {
        variant: "outlined"
      },
      style: {
        borderLeftWidth: 3,
        ".MuiAccordionDetails-root": {
          paddingTop: "1rem"
        },
        "&.Mui-expanded": {
          borderColor: primary.main,
          ".MuiAccordionSummary-root": {
            color: primary.main,
            backgroundColor: grey[isDark(theme) ? 900 : 50]
          },
          ".MuiAccordionSummary-expandIconWrapper": {
            color: primary.main
          }
        }
      }
    }]
  };
};
export const AccordionDetails = theme => ({
  styleOverrides: {
    root: {
      fontSize: 14,
      paddingTop: 4,
      fontWeight: 400,
      paddingInline: 24,
      paddingBottom: 24,
      color: theme.palette.grey[400]
    }
  }
});
export const AccordionSummery = theme => ({
  styleOverrides: {
    root: {
      fontSize: 14,
      fontWeight: 600,
      padding: "0 1.5rem",
      color: theme.palette.grey[400],
      transition: `all 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms`,
      "&.Mui-expanded": {
        color: theme.palette.grey[isDark(theme) ? 100 : 700]
      }
    },
    content: {
      alignItems: "center"
    },
    expandIconWrapper: {
      color: theme.palette.grey[400]
    }
  }
});
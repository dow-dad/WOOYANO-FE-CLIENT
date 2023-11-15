import { alpha } from "@mui/material";
import { isDark } from "utils/constants";
export const Button = theme => {
  const {
    error,
    primary,
    text,
    success,
    warning,
    grey
  } = theme.palette;
  return {
    defaultProps: {
      variant: "contained",
      color: "primary"
    },
    styleOverrides: {
      root: {
        fontWeight: 500,
        borderRadius: 10,
        color: "inherit",
        boxShadow: "none",
        overflow: "hidden",
        whiteSpace: "nowrap",
        textTransform: "none",
        textOverflow: "ellipsis",
        "&.Mui-disabled": {
          color: grey[400]
        }
      },
      // contained variants
      contained: {
        color: "white",
        ":hover": {
          boxShadow: "none"
        },
        "&.Mui-disabled": {
          backgroundColor: grey[isDark(theme) ? 600 : 200]
        }
      },
      containedError: {
        ":hover": {
          backgroundColor: error[600]
        }
      },
      containedPrimary: {
        ":hover": {
          backgroundColor: primary[600]
        }
      },
      containedSuccess: {
        ":hover": {
          backgroundColor: success[700]
        }
      },
      containedWarning: {
        ":hover": {
          backgroundColor: warning[500]
        }
      },
      containedSecondary: {
        transition: "none",
        color: text.primary,
        ":hover": {
          backgroundColor: grey[200]
        },
        ...(isDark(theme) && {
          backgroundColor: grey[700],
          ":hover": {
            backgroundColor: grey[600]
          }
        })
      },
      containedInherit: {
        backgroundColor: text.primary,
        ":hover": {
          backgroundColor: alpha(text.primary, 0.9)
        },
        ...(isDark(theme) && {
          color: "black"
        })
      },
      // outlined variants
      outlinedError: {
        color: error.main
      },
      outlinedPrimary: {
        color: primary.main
      },
      outlinedSuccess: {
        color: success.main
      },
      outlinedWarning: {
        color: warning.main
      },
      outlinedSecondary: {
        transition: "none",
        borderColor: grey[200],
        ...(isDark(theme) && {
          borderColor: grey[700]
        })
      },
      // text variants
      textPrimary: {
        color: primary.main
      },
      textSecondary: {
        color: grey[600]
      },
      textSuccess: {
        color: success.main
      },
      textWarning: {
        color: warning.main
      },
      textError: {
        color: error.main
      },
      // sizes
      sizeSmall: {
        padding: "0.25rem .5rem",
        height: 30
      },
      sizeMedium: {
        padding: "6px 14px"
      },
      sizeLarge: {
        padding: "8px 16px",
        height: 48
      }
    }
  };
};
export const ButtonBase = theme => {
  return {
    styleOverrides: {
      root: {
        fontFamily: theme.typography.fontFamily
      }
    }
  };
};
export const ButtonGroup = theme => {
  const {
    primary,
    success,
    error,
    warning,
    secondary
  } = theme.palette;
  return {
    styleOverrides: {
      root: {
        boxShadow: "none"
      },
      groupedContainedPrimary: {
        "&:not(:last-of-type)": {
          borderColor: primary[600]
        }
      },
      groupedContained: ({
        ownerState: {
          color
        }
      }) => ({ ...(color === "success" && {
          "&:not(:last-of-type)": {
            borderColor: success[600]
          }
        }),
        ...(color === "error" && {
          "&:not(:last-of-type)": {
            borderColor: error[400]
          }
        }),
        ...(color === "warning" && {
          "&:not(:last-of-type)": {
            borderColor: warning[400]
          }
        })
      }),
      groupedContainedSecondary: {
        backgroundColor: secondary[isDark(theme) ? 700 : 200],
        "&:not(:last-of-type)": {
          borderColor: secondary[300]
        },
        ":hover": {
          backgroundColor: secondary[isDark(theme) ? 800 : 300]
        }
      },
      groupedOutlinedSecondary: {
        ":hover": {
          borderColor: secondary[isDark(theme) ? 700 : 200],
          backgroundColor: secondary[isDark(theme) ? 800 : 200]
        }
      },
      groupedTextSecondary: {
        "&:not(:last-of-type)": {
          borderColor: secondary[300]
        }
      }
    }
  };
};
export const IconButton = theme => {
  return {
    styleOverrides: {
      colorSecondary: {
        color: theme.palette.grey[400],
        ":hover": {
          color: theme.palette.primary.main
        }
      }
    }
  };
};
export const LoadingButton = theme => {
  return {
    defaultProps: {
      variant: "contained"
    },
    styleOverrides: {
      root: {
        ".MuiLoadingButton-loadingIndicator": {
          color: theme.palette.grey[400]
        }
      }
    }
  };
};
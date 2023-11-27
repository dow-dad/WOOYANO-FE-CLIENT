import { Info, CheckCircle, Warning, Error } from "@mui/icons-material";
import { isDark } from "utils/constants";

const standardStyle = color => ({
  color: color.main,
  backgroundColor: color[50]
});

const outlinedStyle = color => ({
  color: color.main,
  borderColor: color.main,
  backgroundColor: color[50]
});

const actionBtnStyle = (primary, secondary) => ({
  "& .btn-group button": {
    ":first-of-type": {
      border: `1px solid ${secondary}`,
      marginRight: "1rem"
    },
    ":last-of-type": {
      backgroundColor: secondary,
      color: primary
    }
  }
});

const Alert = theme => {
  const {
    primary,
    success,
    error,
    warning,
    common,
    grey
  } = theme.palette;
  return {
    defaultProps: {
      iconMapping: {
        info: <Info />,
        error: <Error />,
        success: <CheckCircle />,
        warning: <Warning />
      }
    },
    styleOverrides: {
      root: {
        borderRadius: 16,
        fontSize: 12,
        fontWeight: 600,
        alignItems: "center"
      },
      standardError: standardStyle(error),
      standardSuccess: standardStyle(success),
      standardWarning: standardStyle(warning),
      standardInfo: { ...standardStyle(primary),
        "& .MuiAlert-icon": {
          color: primary.main
        }
      },
      outlinedError: outlinedStyle(error),
      outlinedSuccess: outlinedStyle(success),
      outlinedWarning: outlinedStyle(warning),
      outlinedInfo: { ...outlinedStyle(primary),
        "& .MuiAlert-icon": {
          color: primary.main
        },
        ...(isDark(theme) && {
          backgroundColor: grey[700]
        })
      },
      filledWarning: {
        color: common.white
      },
      filledSuccess: {
        color: common.white,
        backgroundColor: success[600]
      },
      filledInfo: {
        color: common.white,
        backgroundColor: primary.main
      },
      action: ({
        ownerState: {
          severity,
          variant
        }
      }) => ({
        ":has( > .btn-group)": {
          padding: 0,
          "& button": {
            borderRadius: 10,
            padding: ".5rem 1rem",
            fontWeight: 600
          }
        },
        ...(severity === "info" && { ...(variant === "filled" && actionBtnStyle(primary.main, common.white)),
          ...(variant === "outlined" && actionBtnStyle(common.white, primary.main)),
          ...(variant === "standard" && actionBtnStyle(common.white, primary.main))
        }),
        ...(severity === "error" && { ...(variant === "filled" && actionBtnStyle(error.main, common.white)),
          ...(variant === "outlined" && actionBtnStyle(common.white, error.main)),
          ...(variant === "standard" && actionBtnStyle(common.white, error.main))
        }),
        ...(severity === "success" && { ...(variant === "filled" && actionBtnStyle(success.main, common.white)),
          ...(variant === "outlined" && actionBtnStyle(common.white, success.main)),
          ...(variant === "standard" && actionBtnStyle(common.white, success.main))
        }),
        ...(severity === "warning" && { ...(variant === "filled" && actionBtnStyle(warning.main, common.white)),
          ...(variant === "outlined" && actionBtnStyle(common.white, warning.main)),
          ...(variant === "standard" && actionBtnStyle(common.white, warning.main))
        })
      })
    }
  };
};

export default Alert;
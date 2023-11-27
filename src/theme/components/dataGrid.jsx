import { TextField } from "@mui/material";

const DataGrid = theme => {
  const {
    grey
  } = theme.palette;
  return {
    defaultProps: {
      slots: {
        baseInputLabel: () => null,
        columnResizeIcon: () => null,
        baseTextField: ({
          children,
          ...props
        }) => <TextField {...props} variant="outlined" size="small">
            {children}
          </TextField>,
        baseSelect: ({
          children,
          ...props
        }) => <TextField {...props} select SelectProps={{
          native: true
        }}>
            {children}
          </TextField>
      }
    },
    styleOverrides: {
      root: {
        border: 0
      },
      columnHeaders: {
        borderBottom: 0
      },
      iconSeparator: {
        color: grey[400]
      },
      cell: {
        borderBottom: 0,
        ":focus": {
          outline: 0
        }
      },
      columnHeader: {
        ":focus": {
          outline: 0
        },
        ":focus-within": {
          outline: "none"
        }
      },
      footerContainer: {
        borderTop: 0
      },
      menu: {
        ".MuiList-root": {
          minWidth: 100
        },
        ".MuiPaper-root": {
          borderRadius: 8,
          boxShadow: theme.shadows[3]
        },
        "& .MuiMenuItem-root": {
          ".MuiTypography-root": {
            fontSize: 14
          }
        }
      },
      panel: {
        ".MuiPaper-root": {
          borderRadius: 8,
          boxShadow: theme.shadows[3]
        }
      },
      panelWrapper: {
        padding: 8,
        borderRadius: 8,
        ".MuiTextField-root": {
          ".MuiInput-root": {
            fontSize: 14
          }
        }
      },
      filterForm: {
        gap: 8
      },
      toolbarContainer: {
        paddingBottom: 12
      },
      filterFormDeleteIcon: {
        justifyContent: "center"
      }
    }
  };
};

export default DataGrid;
import Fab from "./fab";
import Chip from "./chip";
import Alert from "./alert";
import Radio from "./radio";
import Badge from "./badge";
import Rating from "./rating";
import Switch from "./switch";
import Backdrop from "./backdrop";
import DataGrid from "./dataGrid";
import Breadcrumbs from "./breadcrumbs";
import Autocomplete from "./autocomplete";
import { Menu, MenuItem } from "./menu";
import { Avatar, AvatarGroup } from "./avatar";
import { ListItemIcon, ListItemText } from "./list";
import { Tab, TabList, TabPanel, Tabs } from "./tabs";
import { FilledInput, Input, InputLabel, OutlinedInput } from "./input";
import { Pagination, PaginationItem, TablePagination } from "./pagination";
import { Accordion, AccordionDetails, AccordionSummery } from "./accordion";
import { Dialog, DialogActions, DialogContent, DialogTitle } from "./dialog";
import { Button, ButtonBase, ButtonGroup, IconButton, LoadingButton } from "./button";
import { DatePicker, TimePicker, DateTimePicker, MobileDatePicker, StaticDatePicker, DesktopDatePicker, DesktopTimePicker, DesktopDateTimePicker } from "./pickers"; // CUSTOM ICON COMPONENTS

import CheckBoxIcon from "icons/CheckBoxIcon";
import BlankCheckBoxIcon from "icons/BlankCheckBoxIcon";
import CheckboxIndeterminateIcon from "icons/CheckboxIndeterminateIcon"; // CUSTOM UTILS METHOD

import { isDark } from "utils/constants";

const componentsOverride = theme => {
  const {
    primary,
    grey,
    text
  } = theme.palette;
  return {
    MuiCssBaseline: {
      styleOverrides: {
        "*": {
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
          scrollBehavior: "smooth"
        },
        html: {
          width: "100%",
          height: "100%",
          WebkitOverflowScrolling: "touch",
          MozOsxFontSmoothing: "grayscale"
        },
        body: {
          width: "100%",
          height: "100%"
        },
        a: {
          color: primary.main,
          textDecoration: "none"
        },
        input: {
          "&[type=number]": {
            MozAppearance: "textfield",
            "&::-webkit-outer-spin-button": {
              margin: 0,
              WebkitAppearance: "none"
            },
            "&::-webkit-inner-spin-button": {
              margin: 0,
              WebkitAppearance: "none"
            }
          }
        },
        "#root": {
          width: "100%",
          height: "100%",
          "& .apexcharts-xaxistooltip": {
            display: "none"
          },
          "& .apexcharts-tooltip": {
            border: "none",
            borderRadius: 8,
            boxShadow: theme.shadows[2]
          }
        },
        "#nprogress .bar": {
          zIndex: "9999 !important",
          backgroundColor: primary.main
        },
        "#nprogress .peg": {
          boxShadow: "none"
        }
      }
    },
    MuiRadio: Radio(),
    MuiFab: Fab(theme),
    MuiChip: Chip(theme),
    MuiAlert: Alert(theme),
    MuiBadge: Badge(theme),
    MuiSwitch: Switch(theme),
    MuiRating: Rating(theme),
    MuiDataGrid: DataGrid(theme),
    MuiBackdrop: Backdrop(theme),
    MuiBreadcrumbs: Breadcrumbs(theme),
    MuiAutocomplete: Autocomplete(theme),
    // AVATAR
    MuiAvatar: Avatar(theme),
    MuiAvatarGroup: AvatarGroup(theme),
    // BUTTON
    MuiButton: Button(theme),
    MuiIconButton: IconButton(theme),
    MuiButtonBase: ButtonBase(theme),
    MuiButtonGroup: ButtonGroup(theme),
    MuiLoadingButton: LoadingButton(theme),
    // ACCORDION
    MuiAccordion: Accordion(theme),
    MuiAccordionSummary: AccordionSummery(theme),
    MuiAccordionDetails: AccordionDetails(theme),
    // PAGINATION
    MuiPagination: Pagination(),
    MuiPaginationItem: PaginationItem(theme),
    MuiTablePagination: TablePagination(theme),
    // DIALOG
    MuiDialog: Dialog(),
    MuiDialogTitle: DialogTitle(),
    MuiDialogContent: DialogContent(),
    MuiDialogActions: DialogActions(),
    // MENU
    MuiMenu: Menu(),
    MuiMenuItem: MenuItem(),
    // LIST
    MuiListItemText: ListItemText(),
    MuiListItemIcon: ListItemIcon(theme),
    // TAB & TABLIST
    MuiTab: Tab(theme),
    MuiTabs: Tabs(theme),
    MuiTabList: TabList(),
    MuiTabPanel: TabPanel(),
    // DATE PICKER
    MuiDatePicker: DatePicker(),
    MuiMobileDatePicker: MobileDatePicker(),
    MuiStaticDatePicker: StaticDatePicker(),
    MuiDesktopDatePicker: DesktopDatePicker(),
    // TIME PICKER
    MuiTimePicker: TimePicker(),
    MuiDateTimePicker: DateTimePicker(),
    MuiDesktopTimePicker: DesktopTimePicker(),
    MuiDesktopDateTimePicker: DesktopDateTimePicker(),
    // INPUT & LABEL
    MuiInput: Input(theme),
    MuiInputLabel: InputLabel(theme),
    MuiFilledInput: FilledInput(theme),
    MuiOutlinedInput: OutlinedInput(theme),
    MuiStepIcon: {
      styleOverrides: {
        root: {
          color: grey[400]
        }
      }
    },
    MuiStepConnector: {
      styleOverrides: {
        line: {
          borderColor: grey[300]
        }
      }
    },
    MuiSlider: {
      styleOverrides: {
        valueLabel: {
          borderRadius: 8
        },
        markLabel: {
          color: grey[500],
          fontSize: 12,
          fontWeight: 500
        }
      }
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          borderRadius: 12,
          boxShadow: theme.shadows[2]
        }
      }
    },
    MuiTextField: {
      defaultProps: {
        size: "small"
      }
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          "& .secondary": {
            opacity: 0.4
          }
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          backgroundImage: "none",
          boxShadow: "rgba(0, 0, 0, 0.04) 0px 5px 22px, rgba(0, 0, 0, 0.03) 0px 0px 0px 0.5px"
        }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          border: "none",
          color: grey[isDark(theme) ? 200 : 500]
        }
      },
      defaultProps: {
        padding: "none"
      }
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          height: 6,
          flexGrow: 1,
          borderRadius: 16,
          backgroundColor: isDark(theme) ? grey[700] : grey[200]
        }
      }
    },
    MuiLink: {
      styleOverrides: {
        root: {
          fontSize: 14,
          fontWeight: 500,
          textDecoration: "none"
        }
      }
    },
    MuiCheckbox: {
      defaultProps: {
        icon: <BlankCheckBoxIcon />,
        checkedIcon: <CheckBoxIcon />,
        indeterminateIcon: <CheckboxIndeterminateIcon />
      },
      styleOverrides: {
        colorSecondary: {
          "&.Mui-checked": {
            color: grey[700]
          }
        }
      }
    },
    MuiTimelineDot: {
      defaultProps: {
        variant: "filled",
        color: "grey"
      },
      styleOverrides: {
        filledGrey: {
          backgroundColor: grey[isDark(theme) ? 100 : 300],
          "& .MuiSvgIcon-root": {
            color: grey[600]
          }
        }
      }
    },
    MuiTimelineConnector: {
      styleOverrides: {
        root: {
          backgroundColor: grey[isDark(theme) ? 700 : 100]
        }
      }
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          borderRadius: 8,
          backgroundColor: isDark(theme) ? grey[700] : text.primary
        },
        arrow: {
          color: isDark(theme) ? grey[700] : text.primary
        }
      }
    },
    MuiTreeItem: {
      styleOverrides: {
        root: {
          ".MuiTreeItem-content": {
            borderRadius: 4
          }
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none"
        }
      }
    },
    MuiSnackbarContent: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          backgroundColor: grey[800]
        }
      }
    }
  };
};

export default componentsOverride;
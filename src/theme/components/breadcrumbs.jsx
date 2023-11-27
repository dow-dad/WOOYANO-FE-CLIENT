import { isDark } from "utils/constants";

const Breadcrumbs = theme => {
  return {
    styleOverrides: {
      separator: {
        color: theme.palette.grey[isDark(theme) ? 100 : 400],
        ":has(.dot)": {
          width: 5,
          height: 5,
          borderRadius: "50%",
          backgroundColor: theme.palette.grey[isDark(theme) ? 100 : 300]
        }
      },
      li: {
        fontSize: 14,
        fontWeight: 500,
        color: theme.palette.grey[isDark(theme) ? 100 : 700]
      },
      root: {
        padding: "1rem",
        borderRadius: 10,
        border: `1px solid ${theme.palette.grey[isDark(theme) ? 700 : 100]}`
      }
    }
  };
};

export default Breadcrumbs;
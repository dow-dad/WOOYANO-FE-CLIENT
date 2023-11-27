"use client";

import CssBaseline from "@mui/material/CssBaseline";
import MuiThemeProvider from "@mui/material/styles/ThemeProvider";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import NextAppDirEmotionCacheProvider from "./EmotionCache"; // MUI THEME CREATION METHOD

import { createCustomTheme } from "./createTheme"; // SITE SETTINGS CUSTOM DEFINED HOOK

import useSettings from "hooks/useSettings";

const ThemeProvider = ({
  children
}) => {
  const {
    settings
  } = useSettings();
  const theme = createCustomTheme(settings);
  return <LocalizationProvider dateAdapter={AdapterDateFns}>
      <NextAppDirEmotionCacheProvider options={{
      key: "mui"
    }}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </MuiThemeProvider>
      </NextAppDirEmotionCacheProvider>
    </LocalizationProvider>;
};

export default ThemeProvider;
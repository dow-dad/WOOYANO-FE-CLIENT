"use client";

import { useEffect } from "react";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { useTheme } from "@mui/material/styles";
import { prefixer } from "stylis";
import stylisRTLPlugin from "stylis-plugin-rtl";

const RTL = ({
  children
}) => {
  const theme = useTheme();
  useEffect(() => {
    document.dir = theme.direction;
  }, [theme.direction]);
  const cacheRTL = createCache({
    key: theme.direction === "rtl" ? "rtl" : "css",
    stylisPlugins: theme.direction === "rtl" ? [prefixer, stylisRTLPlugin] : []
  });
  cacheRTL.compat = true;
  return <CacheProvider value={cacheRTL}>{children}</CacheProvider>;
};

export default RTL;
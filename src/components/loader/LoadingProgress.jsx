"use client";

import { useEffect } from "react";
import NProgress from "nprogress";
import { GlobalStyles, useTheme } from "@mui/material";

const LoadingProgress = () => {
  const theme = useTheme();
  useEffect(() => {
    NProgress.configure({
      showSpinner: false
    });

    const handleAnchorClick = event => {
      const targetUrl = event.currentTarget.href;
      const currentUrl = window.location.href;

      if (targetUrl !== currentUrl) {
        NProgress.start();
      }
    };

    const handleMutation = () => {
      const anchorElements = document.querySelectorAll("a[href]");
      anchorElements.forEach(anchor => anchor.addEventListener("click", handleAnchorClick));
    };

    const mutationObserver = new MutationObserver(handleMutation);
    mutationObserver.observe(document, {
      childList: true,
      subtree: true
    });
    window.history.pushState = new Proxy(window.history.pushState, {
      apply: (target, thisArg, argArray) => {
        NProgress.done();
        return target.apply(thisArg, argArray);
      }
    });
  });
  return <GlobalStyles styles={{
    "#nprogress": {
      pointerEvents: "none",
      ".bar": {
        top: 0,
        left: 0,
        height: 3,
        zIndex: 99999999999,
        width: "100%",
        position: "fixed",
        backgroundColor: theme.palette.primary.main,
        boxShadow: `0 0 2px ${theme.palette.primary.main}`
      },
      ".peg": {
        right: 0,
        opacity: 1,
        width: 100,
        height: "100%",
        display: "block",
        position: "absolute",
        transform: "rotate(3deg) translate(0px, -4px)",
        boxShadow: `0 0 10px ${theme.palette.primary.main}, 0 0 5px ${theme.palette.primary.main}`
      }
    }
  }} />; // return <Box minHeight="100vh" />;
};

export default LoadingProgress;
export const Dialog = () => ({
  styleOverrides: {
    paper: {
      borderRadius: 12
    },
    paperFullScreen: {
      borderRadius: 0
    }
  }
});
export const DialogTitle = () => ({
  styleOverrides: {
    root: {
      padding: 24,
      fontWeight: 600,
      paddingBottom: 16
    }
  }
});
export const DialogContent = () => ({
  styleOverrides: {
    dividers: {
      display: "none"
    },
    root: {
      paddingBottom: 0
    }
  }
});
export const DialogActions = () => ({
  styleOverrides: {
    root: {
      padding: 24
    },
    spacing: {
      gap: 12
    }
  }
});
const Switch = theme => {
  return {
    styleOverrides: {
      track: {
        borderRadius: 16,
        backgroundColor: theme.palette.grey[500]
      },
      switchBase: ({
        ownerState: {
          size
        }
      }) => ({
        padding: size === "small" ? "6px !important" : 11
      }),
      root: ({
        ownerState: {
          size
        }
      }) => ({
        padding: size === "small" ? 3 : 8
      }),
      thumb: ({
        ownerState: {
          size
        }
      }) => ({
        width: 16,
        height: 16,
        ...(size === "small" && {
          width: "12px !important",
          height: "12px !important"
        })
      })
    }
  };
};

export default Switch;
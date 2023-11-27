const Badge = theme => {
  const {
    common,
    grey
  } = theme.palette;
  return {
    styleOverrides: {
      colorError: {
        color: common.white
      },
      colorSuccess: {
        color: common.white
      },
      colorWarning: {
        color: common.white
      },
      colorSecondary: {
        backgroundColor: grey[300]
      },
      dot: {
        minWidth: 10,
        height: 10,
        borderRadius: "50%"
      }
    }
  };
};

export default Badge;
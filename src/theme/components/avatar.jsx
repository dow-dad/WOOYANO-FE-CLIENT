import { isDark } from "utils/constants"; // ==============================================================

// ==============================================================
export const Avatar = theme => {
  const {
    grey,
    primary
  } = theme.palette;
  return {
    variants: [{
      props: {
        variant: "bordered"
      },
      style: {
        padding: 3,
        backgroundOrigin: "border-box",
        border: "double 1px transparent",
        backgroundClip: "padding-box, border-box",
        backgroundImage: `linear-gradient(white, white), conic-gradient(from 30deg, ${primary.main} 180deg, ${grey[200]} 180deg)`,
        ...(isDark(theme) && {
          backgroundImage: `linear-gradient(${grey[800]}, ${grey[800]}), conic-gradient(from 30deg, ${primary.main} 180deg, ${grey[800]} 180deg)`
        })
      }
    }]
  };
};
export const AvatarGroup = theme => {
  return {
    styleOverrides: {
      avatar: {
        width: 36,
        height: 36,
        padding: 0,
        fontSize: 12,
        border: "2px solid white",
        ...(isDark(theme) && {
          border: `1px solid ${theme.palette.grey[600]}`
        })
      },
      root: {
        justifyContent: "flex-end"
      }
    }
  };
};
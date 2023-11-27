import { Card, useTheme, CardMedia, CardContent, CardActionArea } from "@mui/material"; // CUSTOM DEFINED HOOK

import useNavigate from "hooks/useNavigate"; // CUSTOM UTILS METHOD

import { isDark } from "utils/constants"; // ==============================================================

// ==============================================================
const ComponentPreviewCard = ({
  title,
  image,
  link
}) => {
  const theme = useTheme();
  const navigate = useNavigate();
  return <Card sx={{
    border: 1,
    boxShadow: 0,
    borderRadius: 3,
    borderColor: isDark(theme) ? "grey.700" : "grey.100"
  }}>
      <CardActionArea disableRipple onClick={() => navigate(link)}>
        <CardMedia alt={title} height="150" image={image} component="img" sx={{
        p: 2,
        backgroundColor: isDark(theme) ? "grey.900" : "grey.100",
        ...(isDark(theme) && {
          opacity: 0.5
        })
      }} />

        <CardContent sx={{
        textAlign: "center",
        fontWeight: 600,
        fontSize: 13
      }}>
          {title}
        </CardContent>
      </CardActionArea>
    </Card>;
};

export default ComponentPreviewCard;
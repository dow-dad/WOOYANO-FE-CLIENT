import { Avatar, Badge, Stack, styled } from "@mui/material";
const AvatarBadge = styled(Badge)(({
  theme
}) => ({
  "& .MuiBadge-badge": {
    backgroundColor: theme.palette.success.main,
    color: theme.palette.success.main,
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      top: 0,
      left: 0,
      content: '""',
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      position: "absolute",
      border: "1px solid currentColor"
    }
  }
}));
const SmallAvatar = styled(Avatar)(({
  theme
}) => ({
  width: 22,
  height: 22,
  border: `2px solid ${theme.palette.background.paper}`
}));

const WithBadgeAvatar = () => {
  return <Stack direction="row" spacing={2} justifyContent="center">
      <AvatarBadge variant="dot" overlap="circular" anchorOrigin={{
      vertical: "bottom",
      horizontal: "right"
    }}>
        <Avatar alt="Remy Sharp" src="/static/user/user-10.png" />
      </AvatarBadge>

      <Badge overlap="circular" anchorOrigin={{
      vertical: "bottom",
      horizontal: "right"
    }} badgeContent={<SmallAvatar alt="Travis Howard" src="/static/user/user-11.png" />}>
        <Avatar alt="Cindy Baker" src="/static/user/user-13.png" />
      </Badge>
    </Stack>;
};

export default WithBadgeAvatar;
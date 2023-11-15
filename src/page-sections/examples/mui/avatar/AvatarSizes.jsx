import { Avatar, Stack } from "@mui/material";

const AvatarSizes = () => {
  return <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
      <Avatar alt="Remy Sharp" src="/static/user/user-10.png" sx={{
      width: 20,
      height: 20
    }} />
      <Avatar alt="Travis Howard" src="/static/user/user-11.png" sx={{
      width: 30,
      height: 30
    }} />
      <Avatar alt="Cindy Baker" src="/static/user/user-13.png" sx={{
      width: 40,
      height: 40
    }} />
      <Avatar alt="Agnes Walker" src="/static/user/user-15.png" sx={{
      width: 50,
      height: 50
    }} />
      <Avatar alt="Agnes Walker" src="/static/user/user-16.png" sx={{
      width: 60,
      height: 60
    }} />
    </Stack>;
};

export default AvatarSizes;
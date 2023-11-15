import { Avatar, Stack } from "@mui/material";

const ImageAvatar = () => {
  return <Stack direction="row" spacing={2} justifyContent="center">
      <Avatar alt="Remy Sharp" src="/static/avatar/001-man.svg" />
      <Avatar alt="Travis Howard" src="/static/avatar/002-girl.svg" />
      <Avatar alt="Cindy Baker" src="/static/avatar/003-boy.svg" />
      <Avatar alt="Cindy Baker" src="/static/avatar/004-woman.svg" />
      <Avatar alt="Cindy Baker" src="/static/avatar/005-man-1.svg" />
    </Stack>;
};

export default ImageAvatar;
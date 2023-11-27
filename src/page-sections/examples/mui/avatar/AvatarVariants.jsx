import { Stack, Tooltip, Avatar } from "@mui/material";
import { Folder } from "@mui/icons-material";

const AvatarVariants = () => {
  return <Stack direction="row" spacing={2} justifyContent="center">
      <Tooltip title="Circular">
        <Avatar variant="circular">
          <Folder />
        </Avatar>
      </Tooltip>

      <Tooltip title="Bordered">
        <Avatar variant="bordered" src="/static/user/avatar.png" />
      </Tooltip>

      <Tooltip title="Square">
        <Avatar variant="square">
          <Folder />
        </Avatar>
      </Tooltip>

      <Tooltip title="Rounded">
        <Avatar variant="rounded">
          <Folder />
        </Avatar>
      </Tooltip>
    </Stack>;
};

export default AvatarVariants;
import { Chip, Stack, Avatar } from "@mui/material";
import { Face, Face2, Face3, Face4, Face5, Face6 } from "@mui/icons-material"; // CUSTOM COMPONENTS

import ComponentPageLayout from "../../ComponentPageLayout";
import { Block } from "components/block";

const MuiChipPageView = () => {
  return <ComponentPageLayout title="Chip">
      <Block title="Basic">
        <Stack direction="row" flexWrap="wrap" columnGap={3} rowGap={2}>
          <Chip label="Default" color="default" />
          <Chip label="Primary" color="primary" />
          <Chip label="Secondary" color="secondary" />
          <Chip label="Success" color="success" />
          <Chip label="Warning" color="warning" />
          <Chip label="Error" color="error" />
        </Stack>
      </Block>

      <Block title="Outlined">
        <Stack direction="row" flexWrap="wrap" columnGap={3} rowGap={2}>
          <Chip variant="outlined" label="Default" color="default" />
          <Chip variant="outlined" label="Primary" color="primary" />
          <Chip variant="outlined" label="Secondary" color="secondary" />
          <Chip variant="outlined" label="Success" color="success" />
          <Chip variant="outlined" label="Warning" color="warning" />
          <Chip variant="outlined" label="Error" color="error" />
        </Stack>
      </Block>

      <Block title="Clickable">
        <Stack mb={2} direction="row" flexWrap="wrap" columnGap={3} rowGap={2}>
          <Chip label="Default" color="default" onClick={() => {}} />
          <Chip label="Primary" color="primary" onClick={() => {}} />
          <Chip label="Secondary" color="secondary" onClick={() => {}} />
          <Chip label="Success" color="success" onClick={() => {}} />
          <Chip label="Warning" color="warning" onClick={() => {}} />
          <Chip label="Error" color="error" onClick={() => {}} />
        </Stack>

        <Stack direction="row" flexWrap="wrap" columnGap={3} rowGap={2}>
          <Chip variant="outlined" label="Default" color="default" onClick={() => {}} />
          <Chip variant="outlined" label="Primary" color="primary" onClick={() => {}} />
          <Chip variant="outlined" label="Secondary" color="secondary" onClick={() => {}} />
          <Chip variant="outlined" label="Success" color="success" onClick={() => {}} />
          <Chip variant="outlined" label="Warning" color="warning" onClick={() => {}} />
          <Chip variant="outlined" label="Error" color="error" onClick={() => {}} />
        </Stack>
      </Block>

      <Block title="Deletable">
        <Stack mb={2} direction="row" flexWrap="wrap" columnGap={3} rowGap={2}>
          <Chip label="Default" color="default" onDelete={() => {}} />
          <Chip label="Primary" color="primary" onDelete={() => {}} />
          <Chip label="Secondary" color="secondary" onDelete={() => {}} />
          <Chip label="Success" color="success" onDelete={() => {}} />
          <Chip label="Warning" color="warning" onDelete={() => {}} />
          <Chip label="Error" color="error" onDelete={() => {}} />
        </Stack>

        <Stack direction="row" flexWrap="wrap" columnGap={3} rowGap={2}>
          <Chip variant="outlined" label="Default" color="default" onDelete={() => {}} />
          <Chip variant="outlined" label="Primary" color="primary" onDelete={() => {}} />
          <Chip variant="outlined" label="Secondary" color="secondary" onDelete={() => {}} />
          <Chip variant="outlined" label="Success" color="success" onDelete={() => {}} />
          <Chip variant="outlined" label="Warning" color="warning" onDelete={() => {}} />
          <Chip variant="outlined" label="Error" color="error" onDelete={() => {}} />
        </Stack>
      </Block>

      <Block title="With Avatar">
        <Stack mb={2} direction="row" flexWrap="wrap" columnGap={3} rowGap={2}>
          <Chip label="Default" color="default" avatar={<Avatar alt="User" src="/static/user/user-10.png" />} />
          <Chip label="Primary" color="primary" avatar={<Avatar alt="User" src="/static/user/user-11.png" />} />
          <Chip label="Secondary" color="secondary" avatar={<Avatar alt="User" src="/static/user/user-13.png" />} />
          <Chip label="Success" color="success" avatar={<Avatar alt="User" src="/static/user/user-13.png" />} />
          <Chip label="Warning" color="warning" avatar={<Avatar alt="User" src="/static/user/user-14.png" />} />
          <Chip label="Error" color="error" avatar={<Avatar alt="User" src="/static/user/user-15.png" />} />
        </Stack>

        <Stack direction="row" flexWrap="wrap" columnGap={3} rowGap={2}>
          <Chip variant="outlined" label="Default" color="default" avatar={<Avatar alt="User" src="/static/user/user-10.png" />} />
          <Chip variant="outlined" label="Primary" color="primary" avatar={<Avatar alt="User" src="/static/user/user-11.png" />} />
          <Chip variant="outlined" label="Secondary" color="secondary" avatar={<Avatar alt="User" src="/static/user/user-15.png" />} />
          <Chip variant="outlined" label="Success" color="success" avatar={<Avatar alt="User" src="/static/user/user-17.png" />} />
          <Chip variant="outlined" label="Warning" color="warning" avatar={<Avatar alt="User" src="/static/user/user-13.png" />} />
          <Chip variant="outlined" label="Error" color="error" avatar={<Avatar alt="User" src="/static/user/user-14.png" />} />
        </Stack>
      </Block>

      <Block title="Custom Icon">
        <Stack mb={2} direction="row" flexWrap="wrap" columnGap={3} rowGap={2}>
          <Chip label="Default" color="default" icon={<Face />} />
          <Chip label="Primary" color="primary" icon={<Face2 />} />
          <Chip label="Secondary" color="secondary" icon={<Face3 />} />
          <Chip label="Success" color="success" icon={<Face4 />} />
          <Chip label="Warning" color="warning" icon={<Face5 />} />
          <Chip label="Error" color="error" icon={<Face6 />} />
        </Stack>

        <Stack direction="row" flexWrap="wrap" columnGap={3} rowGap={2}>
          <Chip variant="outlined" label="Default" color="default" icon={<Face />} />
          <Chip variant="outlined" label="Primary" color="primary" icon={<Face2 />} />
          <Chip variant="outlined" label="Secondary" color="secondary" icon={<Face3 />} />
          <Chip variant="outlined" label="Success" color="success" icon={<Face4 />} />
          <Chip variant="outlined" label="Warning" color="warning" icon={<Face5 />} />
          <Chip variant="outlined" label="Error" color="error" icon={<Face6 />} />
        </Stack>
      </Block>

      <Block title="Sizes">
        <Stack mb={2} alignItems="center" direction="row" flexWrap="wrap" columnGap={3} rowGap={3}>
          <Chip size="small" label="Primary" color="primary" />
          <Chip size="small" variant="outlined" label="Primary" color="primary" />
          <Chip size="small" label="Primary" color="primary" onDelete={() => {}} />
          <Chip size="small" label="Primary" color="primary" icon={<Face />} />
          <Chip size="small" label="Primary" color="primary" avatar={<Avatar alt="User" src="/static/user/user-10.png" />} />
        </Stack>

        <Stack direction="row" flexWrap="wrap" alignItems="center" columnGap={3} rowGap={2}>
          <Chip size="medium" label="Primary" color="primary" />
          <Chip size="medium" variant="outlined" label="Primary" color="primary" />
          <Chip size="medium" label="Primary" color="primary" onDelete={() => {}} />
          <Chip size="medium" variant="outlined" label="Primary" color="primary" icon={<Face />} />
          <Chip size="medium" label="Primary" variant="outlined" avatar={<Avatar alt="User" src="/static/user/user-10.png" />} />
        </Stack>
      </Block>
    </ComponentPageLayout>;
};

export default MuiChipPageView;
import { Avatar, Card, Stack } from "@mui/material"; // CUSTOM COMPONENTS

import { H6, Small } from "components/typography";

const MyConnections = () => {
  return <Card sx={{
    padding: 3
  }}>
      <H6 fontSize={16}>My Connections</H6>

      <Stack spacing={3} mt={3}>
        <SingleItem name="Martha Hawk" position="Developer" imageUrl="/static/user/user-11.png" />

        <SingleItem name="Smantha Hoopes" position="Developer" imageUrl="/static/user/user-11.png" />
        <SingleItem name="Chris Pine" position="Developer" imageUrl="/static/user/user-11.png" />
        <SingleItem name="Sun Myi" position="Developer" imageUrl="/static/user/user-11.png" />
      </Stack>
    </Card>;
};

export default MyConnections; // =======================================================================================

// =======================================================================================
function SingleItem({
  name,
  imageUrl,
  position
}) {
  return <Stack direction="row" alignItems="center" spacing={1}>
      <Avatar src={imageUrl} />

      <Stack spacing={0.5}>
        <H6 fontSize={14}>{name}</H6>
        <Small color="text.secondary" lineHeight={1} fontWeight={500}>
          {position}
        </Small>
      </Stack>
    </Stack>;
}
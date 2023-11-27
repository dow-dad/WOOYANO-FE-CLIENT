import { Avatar, Box, Card, IconButton } from "@mui/material";
import { Add, MoreVert } from "@mui/icons-material"; // CUSTOM COMPONENTS

import { FlexBetween } from "components/flexbox";
import { Paragraph, Small } from "components/typography";

const DebitCard = () => {
  return <Card sx={{
    p: 3,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  }}>
      <FlexBetween mb={2}>
        <Paragraph fontSize={18} fontWeight={500}>
          Your Card
        </Paragraph>

        <IconButton size="small">
          <MoreVert sx={{
          color: "grey.300"
        }} />
        </IconButton>
      </FlexBetween>

      <Box component="img" src="/static/debit-card.png" alt="debit-card" width="100%" />

      <FlexBetween mt={2} flexWrap="wrap">
        <Small fontWeight={500}>Receivers:</Small>
        <Avatar variant="bordered" src="/static/user/user-11.png" sx={{
        width: 35,
        height: 35
      }} />
        <Avatar variant="bordered" src="/static/user/user-10.png" sx={{
        width: 35,
        height: 35
      }} />
        <Avatar variant="bordered" src="/static/user/user-9.png" sx={{
        width: 35,
        height: 35
      }} />
        <Avatar variant="bordered" src="/static/user/user-8.png" sx={{
        width: 35,
        height: 35
      }} />
        <Avatar variant="bordered" src="/static/user/avatar.png" sx={{
        width: 35,
        height: 35
      }} />

        <IconButton size="small" sx={{
        border: "1px dashed",
        borderColor: "divider",
        flexShrink: 0
      }}>
          <Add />
        </IconButton>
      </FlexBetween>
    </Card>;
};

export default DebitCard;
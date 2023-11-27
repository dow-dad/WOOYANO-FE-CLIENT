import { Avatar, Box, styled } from "@mui/material";
import { DoneAll } from "@mui/icons-material";
import { formatDistanceToNowStrict } from "date-fns"; // CUSTOM COMPONENTS

import { Paragraph, Small, Span } from "components/typography";
import { FlexBetween, FlexBox, FlexRowAlign } from "components/flexbox"; // STYLED COMPONENT

const Wrapper = styled(FlexBox)(({
  theme
}) => ({
  cursor: "pointer",
  "&:hover": {
    backgroundColor: theme.palette.action.selected
  }
})); // ===============================================================

// ===============================================================
const ChatItem = props => {
  const {
    name,
    time,
    image,
    lastMsg,
    unseenMsg,
    lastMsgSeen,
    isLastMsgIncoming
  } = props;
  return <Wrapper gap={1.5} p={2}>
      <Avatar src={image} />

      <Box flexGrow={1}>
        <FlexBetween>
          <Paragraph fontWeight={500}>{name}</Paragraph>
          <Paragraph fontSize={12} color="text.secondary">
            {formatDistanceToNowStrict(new Date(time))} ago
          </Paragraph>
        </FlexBetween>

        <FlexBetween mt={0.5}>
          <Paragraph fontSize={12} color="text.secondary">
            {!isLastMsgIncoming && <Span color="text.primary">You: </Span>}
            {lastMsg}
          </Paragraph>

          {unseenMsg ? <FlexRowAlign sx={{
          width: 18,
          height: 18,
          color: "white",
          borderRadius: "50%",
          backgroundColor: "primary.main"
        }}>
              <Small fontWeight={500}>{unseenMsg}</Small>
            </FlexRowAlign> : <DoneAll sx={{
          fontSize: 18,
          color: lastMsgSeen ? "primary.main" : "grey.400"
        }} />}
        </FlexBetween>
      </Box>
    </Wrapper>;
};

export default ChatItem;
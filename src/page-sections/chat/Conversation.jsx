import { Add, AttachFile, CameraAlt, ChevronRight, Mic, MoreHoriz } from "@mui/icons-material";
import { Box, Card, Stack, styled, Button, Avatar, Divider, InputBase, IconButton } from "@mui/material";
import { useDropzone } from "react-dropzone"; // CUSTOM COMPONENTS

import IncomingMsg from "./IncomingMsg";
import OutgoingMsg from "./OutgoingMsg";
import { Scrollbar } from "components/scrollbar";
import { H6, Small } from "components/typography";
import { FlexBetween, FlexBox } from "components/flexbox"; // CUSTOM ICON COMPONENT

import Search from "icons/duotone/Search"; // STYLED COMPONENTS

const ToggleBtn = styled(Box)(({
  theme,
  screen = "md"
}) => ({
  left: 0,
  top: 20,
  zIndex: 1,
  padding: 5,
  display: "flex",
  cursor: "pointer",
  alignItems: "center",
  position: "absolute",
  justifyContent: "center",
  borderRadius: "0 8px 8px 0",
  backgroundColor: theme.palette.primary.main,
  [theme.breakpoints.up(screen)]: {
    display: "none"
  }
}));
const StyledIconButton = styled(IconButton)(({
  theme
}) => ({
  color: theme.palette.grey[400],
  backgroundColor: theme.palette.grey[50],
  border: `1px solid ${theme.palette.grey[200]}`
}));
const AttachButton = styled(Box)(({
  theme
}) => ({
  width: 36,
  height: 36,
  fontSize: 18,
  display: "flex",
  cursor: "pointer",
  borderRadius: "50%",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.grey[400],
  backgroundColor: theme.palette.grey[50],
  border: `1px solid ${theme.palette.grey[200]}`
})); // ==============================================================

// ==============================================================
const Conversation = ({
  handleOpen
}) => {
  const {
    getRootProps,
    getInputProps
  } = useDropzone({
    onDrop: files => {// console.log(files);
    }
  });
  return <Card sx={{
    height: "100%"
  }}>
      <FlexBetween padding={3}>
        <FlexBox alignItems="center" gap={1.5}>
          <Avatar src="/static/user/user-19.png" alt="" />

          <Box>
            <H6 lineHeight={1} fontSize={16}>
              Aiony Haust
            </H6>
            <Small color="text.secondary">Online</Small>
          </Box>
        </FlexBox>

        <FlexBox alignItems="center" gap={1}>
          <IconButton size="small">
            <Search fontSize="small" />
          </IconButton>

          <StyledIconButton size="small">
            <MoreHoriz fontSize="inherit" />
          </StyledIconButton>
        </FlexBox>
      </FlexBetween>

      <Divider />

      <Box position="relative">
        <ToggleBtn screen="md" onClick={handleOpen}>
          <ChevronRight sx={{
          fontSize: 16,
          color: "white"
        }} />
        </ToggleBtn>

        <Scrollbar style={{
        maxHeight: 580
      }}>
          <Stack spacing={4} px={3} py={2}>
            <OutgoingMsg />
            <IncomingMsg />
            <OutgoingMsg />
            <IncomingMsg />
            <OutgoingMsg />
            <IncomingMsg />
            <OutgoingMsg />
          </Stack>
        </Scrollbar>
      </Box>

      <Divider />

      <Box px={3} py={2}>
        <FlexBetween mb={2} gap={2}>
          <InputBase fullWidth multiline placeholder="Type Something....." sx={{
          fontSize: 14,
          fontWeight: 500,
          flex: 1
        }} />

          <StyledIconButton size="small">
            <Mic />
          </StyledIconButton>
        </FlexBetween>

        <FlexBetween gap={2}>
          <FlexBox gap={1.5}>
            <AttachButton {...getRootProps()}>
              <input {...getInputProps()} />
              <CameraAlt fontSize="inherit" />
            </AttachButton>

            <AttachButton {...getRootProps()}>
              <input {...getInputProps()} />
              <AttachFile fontSize="inherit" />
            </AttachButton>

            <StyledIconButton size="small">
              <Add fontSize="small" />
            </StyledIconButton>
          </FlexBox>

          <Button size="small">Send</Button>
        </FlexBetween>
      </Box>
    </Card>;
};

export default Conversation;
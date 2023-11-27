import { Fragment, useRef, useState } from "react";
import { Avatar, Badge, Box, IconButton, styled, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab"; // CUSTOM COMPONENTS

import PopoverLayout from "./PopoverLayout";
import { FlexBox } from "components/flexbox";
import { Paragraph, Small } from "components/typography"; // CUSTOM ICON COMPONENT

import NotificationsIcon from "icons/NotificationsIcon"; // DUMMY DATA SET

const MESSAGES = [{
  id: "5e8883f1b51cc1956a5a1ec0",
  createdAt: Date.now(),
  title: "Your order is placed",
  type: "new_message",
  name: "Brain Warner",
  message: "Changed an issue from in this project",
  image: "/static/avatar/001-man.svg"
}, {
  id: "5e8883f7ed1486d665d8be1e",
  createdAt: Date.now(),
  description: "You have 32 unread messages",
  title: "New message received",
  type: "new_message",
  name: "Kiara Hamptoon",
  message: "Nice Work! You really nailed it. Keep it Up Man",
  image: "/static/avatar/002-girl.svg"
}, {
  id: "5e8883fca0e8612044248ecf",
  createdAt: Date.now(),
  description: "Dummy text",
  title: "Your item is shipped",
  type: "item_shipped",
  name: "Ruby Walton",
  message: "Nice Work! You really nailed it. Keep it Up Man",
  image: "/static/avatar/004-woman.svg"
}];
const ARCHIVES = [{
  id: "5e8883f1b51cc1956a5a1ec0",
  createdAt: Date.now(),
  title: "Your order is placed",
  type: "",
  name: "Brain Warner",
  message: "Changed an issue from in this project",
  image: "/static/avatar/001-man.svg"
}, {
  id: "5e8883f7ed1486d665d8be1e",
  createdAt: Date.now(),
  description: "You have 32 unread messages",
  title: "New message received",
  type: "",
  name: "Kiara Hamptoon",
  message: "Nice Work! You really nailed it. Keep it Up Man",
  image: "/static/avatar/002-girl.svg"
}, {
  id: "5e8883fca0e8612044248ecf",
  createdAt: Date.now(),
  description: "Dummy text",
  title: "Your item is shipped",
  type: "item_shipped",
  name: "Ruby Walton",
  message: "Nice Work! You really nailed it. Keep it Up Man",
  image: "/static/avatar/004-woman.svg"
}]; // STYLED COMPONENT

const StyledTab = styled(Tab)({
  flex: 1,
  marginLeft: 0,
  marginRight: 0
});

const NotificationsPopover = () => {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [tabValue, setTabValue] = useState("1");

  const handleTabChange = (_, value) => setTabValue(value); // UNREAD MESSAGES LENGTH


  const UNREAD_MSG_LEN = MESSAGES.filter(item => item.type === "new_message").length;
  return <Fragment>
      <IconButton ref={anchorRef} onClick={() => setOpen(true)}>
        <Badge color="error" badgeContent={0}>
          <NotificationsIcon sx={{
          color: "grey.400"
        }} />
        </Badge>
      </IconButton>

      <PopoverLayout title="Notifications" popoverOpen={open} anchorRef={anchorRef} popoverClose={() => setOpen(false)}>
        <TabContext value={tabValue}>
          <TabList onChange={handleTabChange}>
            <StyledTab value="1" label={`Messages (${UNREAD_MSG_LEN})`} />
            <StyledTab value="2" label="Archived" />
          </TabList>

          {MESSAGES.length === 0 ? <Paragraph fontWeight="500" textAlign="center" p={2}>
              There are no notifications
            </Paragraph> : <TabPanel value="1">
              {MESSAGES.map(msg => <ListItem msg={msg} key={msg.id} />)}
            </TabPanel>}

          {ARCHIVES.length === 0 ? <Paragraph fontWeight="500" textAlign="center" p={2}>
              There are no archives
            </Paragraph> : <TabPanel value="2">
              {ARCHIVES.map(msg => <ListItem msg={msg} key={msg.id} />)}
            </TabPanel>}
        </TabContext>
      </PopoverLayout>
    </Fragment>;
}; // ListItem component props


function ListItem({
  msg
}) {
  const isNew = msg.type === "new_message";
  return <FlexBox p={2} gap={2} alignItems="center" sx={{
    borderBottom: 1,
    cursor: "pointer",
    borderColor: "divider",
    backgroundColor: isNew ? "action.hover" : "transparent",
    "&:hover": {
      backgroundColor: "action.hover"
    }
  }}>
      <FlexBox alignItems="center">
        <Box sx={{
        width: 8,
        height: 8,
        marginRight: 2,
        borderRadius: "50%",
        backgroundColor: isNew ? "primary.main" : "grey.400"
      }} />
        <Avatar src={msg.image} sx={{
        width: 35,
        height: 35
      }} />
      </FlexBox>

      <Box>
        <Paragraph fontWeight={500}>{msg.name}</Paragraph>
        <Small ellipsis color="text.secondary">
          {msg.message}
        </Small>
      </Box>
    </FlexBox>;
}

export default NotificationsPopover;
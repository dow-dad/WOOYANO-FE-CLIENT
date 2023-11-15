import { Box, Button, Drawer, useMediaQuery } from "@mui/material";
import { Create, SendTwoTone } from "@mui/icons-material";
import { nanoid } from "nanoid"; // CUSTOM DEFINED HOOK

import useNavigate from "hooks/useNavigate";
import useLocation from "hooks/useLocation"; // CUSTOM COMPONENTS

import ListItem from "./ListItem";
import { Paragraph } from "components/typography"; // CUSTOM ICON COMPONENTS

import Mail from "icons/duotone/Mail";
import Edit from "icons/duotone/Edit";
import Trash from "icons/duotone/Trash";
import Inbox from "icons/duotone/Inbox";
import Report from "icons/duotone/Report";
import StartHalf from "icons/duotone/StarHalf"; // CUSTOM DUMMY DATA SET

const LIST_ITEMS = [{
  value: 0,
  Icon: Mail,
  id: nanoid(),
  title: "All Mail",
  url: "/dashboard/email/all"
}, {
  value: 16,
  Icon: Inbox,
  id: nanoid(),
  title: "Inbox",
  url: "/dashboard/email/inbox"
}, {
  value: 0,
  Icon: SendTwoTone,
  id: nanoid(),
  title: "Sent",
  url: "/dashboard/email/sent"
}, {
  value: 0,
  Icon: Edit,
  id: nanoid(),
  title: "Draft",
  url: "/dashboard/email/inbox"
}, {
  value: 0,
  Icon: StartHalf,
  id: nanoid(),
  title: "Starred",
  url: "/dashboard/email/inbox"
}, {
  value: 0,
  Icon: Report,
  id: nanoid(),
  title: "Spam",
  url: "/dashboard/email/inbox"
}, {
  value: 0,
  Icon: Trash,
  id: nanoid(),
  title: "Trash",
  url: "/dashboard/email/inbox"
} // { value: 0, Icon: ExpandMore, id: nanoid(), title: "More" },
];
const LABELS = [{
  value: 0,
  id: nanoid(),
  title: "Personal",
  color: "primary.main"
}, {
  value: 0,
  id: nanoid(),
  title: "Company",
  color: "success.main"
}, {
  value: 0,
  id: nanoid(),
  title: "Important",
  color: "warning.main"
}, {
  value: 0,
  id: nanoid(),
  title: "Private",
  color: "error.main"
}]; // ==============================================================

// ==============================================================
const MailSidebar = ({
  openSidebar,
  onClose
}) => {
  const navigate = useNavigate();
  const {
    pathname
  } = useLocation();
  const downMd = useMediaQuery(theme => theme.breakpoints.down("md"));

  const handleNavigate = url => () => navigate(url);

  const CONTENT = <>
      <Button fullWidth startIcon={<Create />} onClick={handleNavigate("/dashboard/email/compose")}>
        Compose
      </Button>

      <Box display="flex" flexDirection="column" mt={4}>
        {LIST_ITEMS.map(({
        Icon,
        id,
        title,
        value,
        url
      }) => <ListItem key={id} title={title} value={value} active={url === pathname} handleChange={handleNavigate(url)} Icon={<Icon sx={{
        fontSize: 18
      }} />} />)}
      </Box>

      <Paragraph fontWeight={600} mt={4} mb={1}>
        Labels
      </Paragraph>

      <Box display="flex" flexDirection="column">
        {LABELS.map(({
        id,
        title,
        value,
        color
      }) => <ListItem key={id} title={title} value={value} active={false} handleChange={() => {}} Icon={<Box sx={{
        mr: 1,
        width: 10,
        height: 10,
        borderRadius: "50%",
        backgroundColor: color
      }} />} />)}
      </Box>
    </>;

  if (downMd) {
    return <Drawer anchor="left" onClose={onClose} open={openSidebar} PaperProps={{
      sx: {
        width: 280,
        p: 3
      }
    }}>
        {CONTENT}
      </Drawer>;
  }

  return <Box p={3} width={260} flexShrink={0} borderRight="1px solid" borderColor="divider">
      {CONTENT}
    </Box>;
};

export default MailSidebar;
import { Fragment, useRef, useState } from "react";
import { Avatar, Badge, Box, IconButton } from "@mui/material"; // CUSTOM COMPONENTS

import PopoverLayout from "./PopoverLayout";
import { FlexBox } from "components/flexbox";
import { Paragraph, Small } from "components/typography"; // CUSTOM ICON COMPONENT

import Apps from "icons/duotone/Apps"; // DUMMY DATA SET

const SERVICES = [{
  id: 1,
  title: "Notion",
  body: "Email collaboration software",
  image: "/static/connect-accounts/slack.svg"
}, {
  id: 2,
  title: "Github",
  body: "Email collaboration software",
  image: "/static/connect-accounts/github.svg"
}];

const ServicePopover = () => {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  return <Fragment>
      <IconButton ref={anchorRef} onClick={() => setOpen(true)}>
        <Badge color="error" badgeContent={0}>
          <Apps sx={{
          color: "grey.400",
          fontSize: 18
        }} />
        </Badge>
      </IconButton>

      <PopoverLayout hiddenViewButton popoverOpen={open} anchorRef={anchorRef} title="Web apps & services" popoverClose={() => setOpen(false)}>
        {SERVICES.map(service => <ListItem key={service.id} body={service.body} image={service.image} title={service.title} />)}
      </PopoverLayout>
    </Fragment>;
}; // -------------------------------------------------------------------------------------


function ListItem({
  body,
  image,
  title
}) {
  return <FlexBox p={2} gap={2} alignItems="center" sx={{
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "action.hover"
    }
  }}>
      <Avatar src={image} sx={{
      width: 35,
      height: 35
    }} />

      <Box>
        <Paragraph fontWeight={500}>{title}</Paragraph>
        <Small display="block" color="text.secondary">
          {body}
        </Small>
      </Box>
    </FlexBox>;
}

export default ServicePopover;
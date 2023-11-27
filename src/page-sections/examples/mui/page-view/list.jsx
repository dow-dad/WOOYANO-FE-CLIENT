import { useState } from "react";
import { Send, Work, Image, Inbox, Drafts, Comment, StarBorder, ExpandLess, ExpandMore, BeachAccess } from "@mui/icons-material";
import { List, Grid, Avatar, Divider, ListItem, Collapse, Checkbox, IconButton, ListItemIcon, ListItemText, ListItemButton, ListItemAvatar } from "@mui/material"; // CUSTOM COMPONENTS

import ComponentPageLayout from "../../ComponentPageLayout";
import { Block } from "components/block";

const MuiListPageView = () => {
  const [open, setOpen] = useState(true);

  const handleClick = () => setOpen(!open); // selected list


  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleListItemClick = (_, index) => setSelectedIndex(index); // list control


  const [checked, setChecked] = useState([0]);

  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) newChecked.push(value);else newChecked.splice(currentIndex, 1);
    setChecked(newChecked);
  };

  return <ComponentPageLayout title="List">
      <Grid container spacing={3}>
        <Grid item md={6} xs={12}>
          <Block title="Basic">
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <Inbox />
                  </ListItemIcon>

                  <ListItemText primary="Inbox" />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <Drafts />
                  </ListItemIcon>
                  <ListItemText primary="Drafts" />
                </ListItemButton>
              </ListItem>

              <Divider sx={{
              my: 1
            }} />

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Trash" />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton component="a" href="#simple-list">
                  <ListItemText primary="Spam" />
                </ListItemButton>
              </ListItem>
            </List>
          </Block>
        </Grid>

        <Grid item md={6} xs={12}>
          <Block title="Nested List">
            <List component="nav">
              <ListItemButton>
                <ListItemIcon>
                  <Send />
                </ListItemIcon>

                <ListItemText primary="Sent mail" />
              </ListItemButton>

              <ListItemButton>
                <ListItemIcon>
                  <Drafts />
                </ListItemIcon>

                <ListItemText primary="Drafts" />
              </ListItemButton>

              <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                  <Inbox />
                </ListItemIcon>

                <ListItemText primary="Inbox" />

                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>

              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{
                  pl: 4
                }}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>

                    <ListItemText primary="Starred" />
                  </ListItemButton>
                </List>
              </Collapse>
            </List>
          </Block>
        </Grid>

        <Grid item md={6} xs={12}>
          <Block title="Folder List">
            <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <Image />
                  </Avatar>
                </ListItemAvatar>

                <ListItemText primary="Photos" secondary="Jan 9, 2014" />
              </ListItem>

              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <Work />
                  </Avatar>
                </ListItemAvatar>

                <ListItemText primary="Work" secondary="Jan 7, 2014" />
              </ListItem>

              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <BeachAccess />
                  </Avatar>
                </ListItemAvatar>

                <ListItemText primary="Vacation" secondary="July 20, 2014" />
              </ListItem>
            </List>
          </Block>
        </Grid>

        <Grid item md={6} xs={12}>
          <Block title="Selected List">
            <List component="nav">
              <ListItemButton selected={selectedIndex === 0} onClick={event => handleListItemClick(event, 0)}>
                <ListItemIcon>
                  <Inbox />
                </ListItemIcon>

                <ListItemText primary="Inbox" />
              </ListItemButton>

              <ListItemButton selected={selectedIndex === 1} onClick={event => handleListItemClick(event, 1)}>
                <ListItemIcon>
                  <Drafts />
                </ListItemIcon>

                <ListItemText primary="Drafts" />
              </ListItemButton>

              <Divider sx={{
              my: 1
            }} />

              <ListItemButton selected={selectedIndex === 2} onClick={event => handleListItemClick(event, 2)}>
                <ListItemText primary="Trash" />
              </ListItemButton>

              <ListItemButton selected={selectedIndex === 3} onClick={event => handleListItemClick(event, 3)}>
                <ListItemText primary="Spam" />
              </ListItemButton>
            </List>
          </Block>
        </Grid>

        <Grid item md={6} xs={12}>
          <Block title="List Controls">
            <List>
              {[0, 1, 2, 3].map(value => <ListItem disablePadding key={value} secondaryAction={<IconButton edge="end">
                      <Comment />
                    </IconButton>}>
                  <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
                    <ListItemIcon>
                      <Checkbox edge="start" tabIndex={-1} disableRipple checked={checked.indexOf(value) !== -1} />
                    </ListItemIcon>

                    <ListItemText primary={`Line item ${value + 1}`} />
                  </ListItemButton>
                </ListItem>)}
            </List>
          </Block>
        </Grid>
      </Grid>
    </ComponentPageLayout>;
};

export default MuiListPageView;
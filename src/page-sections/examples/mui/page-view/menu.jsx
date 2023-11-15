import { useState } from "react";
import { Cloud, ContentCopy, ContentCut, ContentPaste, MoreVert } from "@mui/icons-material";
import { List, Grid, Menu, Button, Divider, MenuItem, MenuList, IconButton, ListItemText, ListItemIcon, ListItemButton } from "@mui/material"; // CUSTOM COMPONENTS

import { Block } from "components/block";
import { Scrollbar } from "components/scrollbar";
import { Paragraph } from "components/typography";
import ComponentPageLayout from "../../ComponentPageLayout";
const options = ["Show some love to MUI", "Show all notification content", "Hide sensitive notification content", "Hide all notification content"];
const options2 = ["None", "Atria", "Callisto", "Dione", "Ganymede", "Hangouts Call", "Luna", "Oberon", "Phobos", "Pyxis", "Sedna", "Titania", "Triton", "Umbriel"];

const MuiMenuPageView = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => setAnchorEl(null);

  const handleClick = event => setAnchorEl(event.currentTarget); // icon menu list


  const [iconMenuEl, setIconMenuEl] = useState(null);

  const handleIconMenuClose = () => setIconMenuEl(null);

  const handleIconMenuClick = event => setIconMenuEl(event.currentTarget); // selected menu


  const [selectedIndex, setSelectedIndex] = useState(1);
  const [selectedMenuEl, setSelectedMenuEl] = useState(null);

  const handleSelectedMenuClose = () => setSelectedMenuEl(null);

  const handleClickListItem = event => {
    setSelectedMenuEl(event.currentTarget);
  };

  const handleMenuItemClick = index => {
    setSelectedIndex(index);
    setSelectedMenuEl(null);
  }; // max height menu


  const [maxMenuEl, setMaxMenuEl] = useState(null);

  const handleMaxMenuClose = () => setMaxMenuEl(null);

  const handleMaxMenuClick = event => {
    setMaxMenuEl(event.currentTarget);
  };

  return <ComponentPageLayout title="Menu">
      <Grid container spacing={3}>
        <Grid item md={4} sm={6} xs={12}>
          <Block title="Basic">
            <Button variant="text" id="basic-button" onClick={handleClick}>
              Dashboard
            </Button>

            <Menu id="basic-menu" anchorEl={anchorEl} onClose={handleClose} open={Boolean(anchorEl)}>
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </Block>
        </Grid>

        <Grid item md={4} sm={6} xs={12}>
          <Block title="Icon Menu">
            <Button variant="text" id="icon-button" onClick={handleIconMenuClick}>
              Dashboard
            </Button>

            <Menu id="icon-menu" anchorEl={iconMenuEl} open={Boolean(iconMenuEl)} onClose={handleIconMenuClose}>
              <MenuList disablePadding disableListWrap>
                <MenuItem>
                  <ListItemIcon>
                    <ContentCut fontSize="small" />
                  </ListItemIcon>

                  <ListItemText>Cut</ListItemText>

                  <Paragraph color="text.secondary">⌘X</Paragraph>
                </MenuItem>

                <MenuItem>
                  <ListItemIcon>
                    <ContentCopy fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Copy</ListItemText>
                  <Paragraph color="text.secondary">⌘C</Paragraph>
                </MenuItem>

                <MenuItem>
                  <ListItemIcon>
                    <ContentPaste fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Paste</ListItemText>
                  <Paragraph color="text.secondary">⌘V</Paragraph>
                </MenuItem>

                <Divider />

                <MenuItem>
                  <ListItemIcon>
                    <Cloud fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Web Clipboard</ListItemText>
                </MenuItem>
              </MenuList>
            </Menu>
          </Block>
        </Grid>

        <Grid item md={4} sm={6} xs={12}>
          <Block title="Selected Menu">
            <List component="nav" aria-label="Device settings">
              <ListItemButton onClick={handleClickListItem}>
                <ListItemText primary="When device is locked" secondary={options[selectedIndex]} />
              </ListItemButton>
            </List>

            <Menu id="lock-menu" anchorEl={selectedMenuEl} open={Boolean(selectedMenuEl)} onClose={handleSelectedMenuClose}>
              {options.map((option, index) => <MenuItem key={option} disabled={index === 0} selected={index === selectedIndex} onClick={() => handleMenuItemClick(index)}>
                  {option}
                </MenuItem>)}
            </Menu>
          </Block>
        </Grid>

        <Grid item md={4} sm={6} xs={12}>
          <Block title="Max Height">
            <IconButton onClick={handleMaxMenuClick}>
              <MoreVert />
            </IconButton>

            <Menu anchorEl={maxMenuEl} open={Boolean(maxMenuEl)} onClose={handleMaxMenuClose}>
              <Scrollbar sx={{
              maxHeight: 200,
              width: "20ch"
            }}>
                {options2.map(option => <MenuItem key={option} selected={option === "Pyxis"} onClick={handleMaxMenuClose}>
                    {option}
                  </MenuItem>)}
              </Scrollbar>
            </Menu>
          </Block>
        </Grid>
      </Grid>
    </ComponentPageLayout>;
};

export default MuiMenuPageView;
import { forwardRef, useState } from "react";
import { Add, Close, Person } from "@mui/icons-material";
import { Box, List, Grid, Slide, Button, Dialog, Avatar, AppBar, Select, Switch, Divider, Toolbar, ListItem, MenuItem, TextField, InputLabel, IconButton, DialogTitle, FormControl, ListItemText, DialogContent, DialogActions, ListItemAvatar, ListItemButton, FormControlLabel, DialogContentText } from "@mui/material";
import { H6 } from "components/typography";
// CUSTOM COMPONENTS
import ComponentPageLayout from "../../ComponentPageLayout";
import { Block } from "components/block";
const SlideUp = forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);
const emails = ["username@gmail.com", "user02@gmail.com"];

const MuiDialogPageView = () => {
  // basic dialog
  const [openBasicDialog, setOpenBasicDialog] = useState(false);

  const handleOpenBasicDialog = () => setOpenBasicDialog(true);

  const handleCloseBasicDialog = () => setOpenBasicDialog(false); // alert dialog


  const [openAlertDialog, setOpenAlertDialog] = useState(false);

  const handleOpenAlertDialog = () => setOpenAlertDialog(true);

  const handleCloseAlertDialog = () => setOpenAlertDialog(false); // transition dialog


  const [openTransitionDialog, setOpenTransitionDialog] = useState(false);

  const handleOpenTransitionDialog = () => setOpenTransitionDialog(true);

  const handleCloseTransitionDialog = () => setOpenTransitionDialog(false); // form dialog


  const [openFromDialog, setOpenFromDialog] = useState(false);

  const handleOpenFromDialog = () => setOpenFromDialog(true);

  const handleCloseFromDialog = () => setOpenFromDialog(false); // full-screen dialog


  const [openFullScreenDialog, setOpenFullScreenDialog] = useState(false);

  const handleOpenFullScreenDialog = () => setOpenFullScreenDialog(true);

  const handleCloseFullScreenDialog = () => setOpenFullScreenDialog(false); // max width dialog


  const [fullWidth, setFullWidth] = useState(true);
  const [openMaxWidthDialog, setOpenMaxWidthDialog] = useState(false);
  const [maxWidth, setMaxWidth] = useState("sm");

  const handleCloseMaxWidthDialog = () => setOpenMaxWidthDialog(false);

  const handleOpenMaxWidthDialog = () => setOpenMaxWidthDialog(true);

  const handleMaxWidthChange = event => {
    setMaxWidth(event.target.value);
  };

  const handleFullWidthChange = event => {
    setFullWidth(event.target.checked);
  };

  return <ComponentPageLayout title="Dialog">
      <Grid container spacing={3}>
        <Grid item md={4} xs={12}>
          <Block title="Basic">
            <Button fullWidth variant="outlined" onClick={handleOpenBasicDialog}>
              Open simple dialog
            </Button>

            <Dialog onClose={handleCloseBasicDialog} open={openBasicDialog}>
              <DialogTitle>Set backup account</DialogTitle>
              <List sx={{
              pt: 0
            }}>
                {emails.map(email => <ListItem disablePadding disableGutters key={email}>
                    <ListItemButton onClick={handleCloseBasicDialog}>
                      <ListItemAvatar>
                        <Avatar>
                          <Person />
                        </Avatar>
                      </ListItemAvatar>

                      <ListItemText primary={email} />
                    </ListItemButton>
                  </ListItem>)}

                <ListItem disablePadding disableGutters>
                  <ListItemButton autoFocus onClick={handleCloseBasicDialog}>
                    <ListItemAvatar>
                      <Avatar>
                        <Add />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Add account" />
                  </ListItemButton>
                </ListItem>
              </List>
            </Dialog>
          </Block>
        </Grid>

        <Grid item md={4} xs={12}>
          <Block title="Alert">
            <Button fullWidth onClick={handleOpenAlertDialog}>
              Open alert dialog
            </Button>

            <Dialog onClose={handleCloseAlertDialog} open={openAlertDialog}>
              <DialogTitle>Use Google's location service?</DialogTitle>

              <DialogContent>
                <DialogContentText>
                  Let Google help apps determine location. This means sending anonymous location
                  data to Google, even when no apps are running.
                </DialogContentText>
              </DialogContent>

              <DialogActions>
                <Button color="warning" onClick={handleCloseAlertDialog}>
                  Disagree
                </Button>

                <Button onClick={handleCloseAlertDialog} autoFocus>
                  Agree
                </Button>
              </DialogActions>
            </Dialog>
          </Block>
        </Grid>

        <Grid item md={4} xs={12}>
          <Block title="Transitions">
            <Button fullWidth variant="text" onClick={handleOpenTransitionDialog}>
              Slide in alert dialog
            </Button>

            <Dialog keepMounted open={openTransitionDialog} TransitionComponent={SlideUp} onClose={handleCloseTransitionDialog}>
              <DialogTitle>Use Google's location service?</DialogTitle>

              <DialogContent>
                <DialogContentText>
                  Let Google help apps determine location. This means sending anonymous location
                  data to Google, even when no apps are running.
                </DialogContentText>
              </DialogContent>

              <DialogActions>
                <Button color="warning" onClick={handleCloseTransitionDialog}>
                  Disagree
                </Button>

                <Button onClick={handleCloseTransitionDialog} autoFocus>
                  Agree
                </Button>
              </DialogActions>
            </Dialog>
          </Block>
        </Grid>

        <Grid item md={4} xs={12}>
          <Block title="Form">
            <Button fullWidth variant="text" onClick={handleOpenFromDialog}>
              Open form dialog
            </Button>

            <Dialog open={openFromDialog} onClose={handleCloseFromDialog}>
              <DialogTitle>Subscribe</DialogTitle>
              <DialogContent>
                <DialogContentText mb={1.5}>
                  To subscribe to this website, please enter your email address here. We will send
                  updates occasionally.
                </DialogContentText>

                <TextField fullWidth autoFocus id="name" type="email" margin="dense" label="Email Address" />
              </DialogContent>

              <DialogActions>
                <Button color="secondary" onClick={handleCloseFromDialog}>
                  Cancel
                </Button>
                <Button onClick={handleCloseFromDialog}>Subscribe</Button>
              </DialogActions>
            </Dialog>
          </Block>
        </Grid>

        <Grid item md={4} xs={12}>
          <Block title="Full-screen">
            <Button fullWidth variant="outlined" onClick={handleOpenFullScreenDialog}>
              Open full-screen dialog
            </Button>

            <Dialog fullScreen open={openFullScreenDialog} TransitionComponent={SlideUp} onClose={handleCloseFullScreenDialog}>
              <AppBar sx={{
              position: "relative"
            }}>
                <Toolbar>
                  <IconButton edge="start" color="inherit" onClick={handleCloseFullScreenDialog}>
                    <Close />
                  </IconButton>

                  <H6 flex={1}>Sound</H6>

                  <Button color="inherit" variant="text" onClick={handleCloseFullScreenDialog}>
                    Save
                  </Button>
                </Toolbar>
              </AppBar>

              <List>
                <ListItem>
                  <ListItemText primary="Phone ringtone" secondary="Titania" />
                </ListItem>

                <Divider />

                <ListItem>
                  <ListItemText primary="Default notification ringtone" secondary="Tethys" />
                </ListItem>
              </List>
            </Dialog>
          </Block>
        </Grid>

        <Grid item md={4} xs={12}>
          <Block title="Optional sizes">
            <Button fullWidth onClick={handleOpenMaxWidthDialog}>
              Open max-width dialog
            </Button>

            <Dialog maxWidth={maxWidth} fullWidth={fullWidth} open={openMaxWidthDialog} onClose={handleCloseMaxWidthDialog}>
              <DialogTitle>Optional sizes</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  You can set my maximum width and whether to adapt or not.
                </DialogContentText>
                <Box noValidate component="form" sx={{
                display: "flex",
                flexDirection: "column",
                m: "auto",
                width: "fit-content"
              }}>
                  <FormControl sx={{
                  my: 2,
                  minWidth: 120
                }}>
                    <InputLabel htmlFor="max-width">maxWidth</InputLabel>
                    <Select autoFocus label="maxWidth" value={maxWidth} onChange={handleMaxWidthChange} inputProps={{
                    name: "max-width",
                    id: "max-width"
                  }}>
                      <MenuItem value={false}>false</MenuItem>
                      <MenuItem value="xs">xs</MenuItem>
                      <MenuItem value="sm">sm</MenuItem>
                      <MenuItem value="md">md</MenuItem>
                      <MenuItem value="lg">lg</MenuItem>
                      <MenuItem value="xl">xl</MenuItem>
                    </Select>
                  </FormControl>

                  <FormControlLabel label="Full width" control={<Switch checked={fullWidth} onChange={handleFullWidthChange} />} />
                </Box>
              </DialogContent>

              <DialogActions>
                <Button onClick={handleCloseMaxWidthDialog}>Close</Button>
              </DialogActions>
            </Dialog>
          </Block>
        </Grid>
      </Grid>
    </ComponentPageLayout>;
};

export default MuiDialogPageView;
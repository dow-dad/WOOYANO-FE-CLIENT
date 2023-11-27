import { useState } from "react";
import { Grid, Stack, Button, Snackbar, IconButton, Box } from "@mui/material";
import Close from "@mui/icons-material/Close"; // CUSTOM COMPONENTS

import ComponentPageLayout from "../../ComponentPageLayout";
import { Block } from "components/block";

const MuiSnackbarPageView = () => {
  const [open, setOpen] = useState({
    1: false,
    2: false
  });

  const handleClick = num => () => {
    setOpen(state => ({ ...state,
      [num]: true
    }));
  };

  const handleClose = num => (_, reason) => {
    if (reason === "clickaway") return;
    setOpen(state => ({ ...state,
      [num]: false
    }));
  };

  const [state, setState] = useState({
    open: false,
    vertical: "top",
    horizontal: "center"
  });

  const handleChange = newState => () => {
    setState({ ...newState,
      open: true
    });
  };

  const handleCloseSnackbar = () => {
    setState({ ...state,
      open: false
    });
  };

  return <ComponentPageLayout title="Snackbar">
      <Grid container spacing={3}>
        <Grid item lg={6} xs={12}>
          <Block title="Simple">
            <Stack direction="row" alignItems="center" justifyContent="center" spacing={3}>
              <Button onClick={handleClick(1)}>Simple Snackbar</Button>
              <Snackbar open={open[1]} onClose={handleClose(1)} autoHideDuration={2000} message="This is QuickFrame Snackbar" />
            </Stack>
          </Block>
        </Grid>

        <Grid item lg={6} xs={12}>
          <Block title="With Action">
            <Stack direction="row" alignItems="center" justifyContent="center" spacing={3}>
              <Button onClick={handleClick(2)}>With Action Snackbar</Button>
              <Snackbar open={open[2]} onClose={handleClose(2)} autoHideDuration={2000} message="This is QuickFrame Snackbar" action={<IconButton size="small" color="inherit" onClick={handleClose(2)}>
                    <Close fontSize="small" />
                  </IconButton>} />
            </Stack>
          </Block>
        </Grid>

        <Grid item lg={6} xs={12}>
          <Block title="Positioned Snackbar">
            <Box>
              <Box sx={{
              display: "flex",
              justifyContent: "center"
            }}>
                <Button onClick={handleChange({
                vertical: "top",
                horizontal: "center"
              })}>
                  Top-Center
                </Button>
              </Box>

              <Grid container justifyContent="center" spacing={2}>
                <Grid item xs={6}>
                  <Button onClick={handleChange({
                  vertical: "top",
                  horizontal: "left"
                })}>
                    Top-Left
                  </Button>
                </Grid>

                <Grid item xs={6} textAlign="right">
                  <Button onClick={handleChange({
                  vertical: "top",
                  horizontal: "right"
                })}>
                    Top-Right
                  </Button>
                </Grid>

                <Grid item xs={6}>
                  <Button onClick={handleChange({
                  vertical: "bottom",
                  horizontal: "left"
                })}>
                    Bottom-Left
                  </Button>
                </Grid>

                <Grid item xs={6} textAlign="right">
                  <Button onClick={handleChange({
                  vertical: "bottom",
                  horizontal: "right"
                })}>
                    Bottom-Right
                  </Button>
                </Grid>
              </Grid>

              <Box sx={{
              display: "flex",
              justifyContent: "center"
            }}>
                <Button onClick={handleChange({
                vertical: "bottom",
                horizontal: "center"
              })}>
                  Bottom-Center
                </Button>
              </Box>
            </Box>

            <Snackbar anchorOrigin={{
            vertical: state.vertical,
            horizontal: state.horizontal
          }} open={state.open} onClose={handleCloseSnackbar} message="This is QuickFrame Snackbar" key={state.vertical + state.horizontal} />
          </Block>
        </Grid>
      </Grid>
    </ComponentPageLayout>;
};

export default MuiSnackbarPageView;
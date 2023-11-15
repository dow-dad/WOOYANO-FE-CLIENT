import { Box, Fade, Grid, Grow, Zoom, Stack, Button, Popover } from "@mui/material";
import { useState } from "react"; // CUSTOM COMPONENTS

import { Block } from "components/block";
import { FlexBox } from "components/flexbox";
import { H6, Paragraph } from "components/typography";
import ComponentPageLayout from "../../ComponentPageLayout";

const MuiPopoverPageView = () => {
  const [basicEl, setBasicEl] = useState(null);

  const handleBasicClose = () => setBasicEl(null);

  const handleBasicClick = event => {
    setBasicEl(event.currentTarget);
  };

  const [hoverEl, setHoverEl] = useState(null);

  const handleHoverClose = () => setHoverEl(null);

  const handleHover = e => setHoverEl(e.currentTarget);

  const [transitionEl, setTransitionEl] = useState(null);
  const [trans, setTrans] = useState("z");

  const handleTransClose = () => setTransitionEl(null);

  const handleTransClick = val => event => {
    setTransitionEl(event.currentTarget);
    setTrans(val);
  };

  return <ComponentPageLayout title="Popover">
      <Grid container spacing={3}>
        <Grid item lg={6} xs={12}>
          <Block title="Basic">
            <Stack justifyContent="center" alignItems="center">
              <Button variant="contained" onClick={handleBasicClick}>
                Open Popover
              </Button>

              <Popover anchorEl={basicEl} open={Boolean(basicEl)} onClose={handleBasicClose} anchorOrigin={{
              vertical: "bottom",
              horizontal: "left"
            }}>
                <Box p={3} maxWidth={400}>
                  <H6 fontSize={18}>The content of the Popover.</H6>
                  <Paragraph mt={1}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam odio fugit
                    suscipit iste est beatae vero quia hic explicabo mollitia?
                  </Paragraph>
                </Box>
              </Popover>
            </Stack>
          </Block>
        </Grid>

        <Grid item lg={6} xs={12}>
          <Block title="Mouse over interaction">
            <Stack justifyContent="center" alignItems="center">
              <Paragraph color="primary.main" fontWeight={600} onMouseEnter={handleHover} onMouseLeave={handleHoverClose}>
                Hover with a Popover
              </Paragraph>

              <Popover disableRestoreFocus anchorEl={hoverEl} open={Boolean(hoverEl)} onClose={handleHoverClose} anchorOrigin={{
              vertical: "bottom",
              horizontal: "left"
            }} transformOrigin={{
              vertical: "top",
              horizontal: "left"
            }} sx={{
              pointerEvents: "none"
            }}>
                <Box p={3} maxWidth={400}>
                  <H6 fontSize={18}>The content of the Popover.</H6>
                  <Paragraph mt={1}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam odio fugit
                    suscipit iste est beatae vero quia hic explicabo mollitia?
                  </Paragraph>
                </Box>
              </Popover>
            </Stack>
          </Block>
        </Grid>

        <Grid item lg={6} xs={12}>
          <Block title="Transition">
            <Stack justifyContent="center" alignItems="center">
              <FlexBox gap={3}>
                <Button variant="contained" onClick={handleTransClick("z")}>
                  Zoom
                </Button>

                <Button variant="contained" onClick={handleTransClick("f")}>
                  Fade
                </Button>
              </FlexBox>

              <Popover anchorEl={transitionEl} open={Boolean(transitionEl)} onClose={handleTransClose} anchorOrigin={{
              vertical: "bottom",
              horizontal: "left"
            }} TransitionComponent={trans === "z" ? Zoom : trans === "f" ? Fade : Grow}>
                <Box p={3} maxWidth={400}>
                  <H6 fontSize={18}>The content of the Popover.</H6>
                  <Paragraph mt={1}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam odio fugit
                    suscipit iste est beatae vero quia hic explicabo mollitia?
                  </Paragraph>
                </Box>
              </Popover>
            </Stack>
          </Block>
        </Grid>
      </Grid>
    </ComponentPageLayout>;
};

export default MuiPopoverPageView;
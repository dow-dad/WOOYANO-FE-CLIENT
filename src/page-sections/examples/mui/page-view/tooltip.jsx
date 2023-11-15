import { Fade, Zoom, Grid, Stack, Button, styled, Tooltip, IconButton, tooltipClasses } from "@mui/material";
import { Add, Delete, Search } from "@mui/icons-material"; // CUSTOM COMPONENTS

import ComponentPageLayout from "../../ComponentPageLayout";
import { Block } from "components/block"; // STYLED COMPONENTS

const CustomWidthTooltip = styled(({
  className,
  ...props
}) => <Tooltip {...props} classes={{
  popper: className
}} />)({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 500
  }
});
const NoMaxWidthTooltip = styled(({
  className,
  ...props
}) => <Tooltip {...props} classes={{
  popper: className
}} />)({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: "none"
  }
});
const longText = `
    Aliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus.
    Praesent non nunc mollis, fermentum neque at, semper arcu.
    Nullam eget est sed sem iaculis gravida eget vitae justo.
    `;

const MuiTooltipPageView = () => {
  return <ComponentPageLayout title="Tooltip">
      <Grid container spacing={3}>
        <Grid item lg={4} md={6} xs={12}>
          <Block title="Basic">
            <Tooltip title="Delete">
              <IconButton>
                <Delete />
              </IconButton>
            </Tooltip>

            <Tooltip title="Add">
              <IconButton>
                <Add />
              </IconButton>
            </Tooltip>

            <Tooltip title="Search">
              <IconButton>
                <Search />
              </IconButton>
            </Tooltip>
          </Block>
        </Grid>

        <Grid item lg={4} md={6} xs={12}>
          <Block title="Arrow">
            <Tooltip title="Delete" arrow>
              <IconButton>
                <Delete />
              </IconButton>
            </Tooltip>

            <Tooltip title="Add" arrow>
              <IconButton>
                <Add />
              </IconButton>
            </Tooltip>

            <Tooltip title="Search" arrow>
              <IconButton>
                <Search />
              </IconButton>
            </Tooltip>
          </Block>
        </Grid>

        <Grid item lg={4} md={6} xs={12}>
          <Block title="Transition">
            <Stack direction="row" spacing={1}>
              <Tooltip title="Add">
                <Button variant="text">Grow</Button>
              </Tooltip>

              <Tooltip arrow title="Add" TransitionComponent={Fade} TransitionProps={{
              timeout: 600
            }}>
                <Button variant="text">Fade</Button>
              </Tooltip>

              <Tooltip TransitionComponent={Zoom} title="Add">
                <Button variant="text">Zoom</Button>
              </Tooltip>
            </Stack>
          </Block>
        </Grid>

        <Grid item md={6} xs={12}>
          <Block title="Transition">
            <Grid container justifyContent="center">
              <Grid item>
                <Tooltip title="Add" placement="top-start">
                  <Button variant="text">top-start</Button>
                </Tooltip>

                <Tooltip title="Add" placement="top">
                  <Button variant="text">top</Button>
                </Tooltip>

                <Tooltip title="Add" placement="top-end">
                  <Button variant="text">top-end</Button>
                </Tooltip>
              </Grid>
            </Grid>

            <Grid container justifyContent="center">
              <Grid item xs={6} direction="column">
                <Grid item>
                  <Tooltip title="Add" placement="left-start">
                    <Button variant="text">left-start</Button>
                  </Tooltip>
                </Grid>

                <Grid item>
                  <Tooltip title="Add" placement="left">
                    <Button variant="text">left</Button>
                  </Tooltip>
                </Grid>

                <Grid item>
                  <Tooltip title="Add" placement="left-end">
                    <Button variant="text">left-end</Button>
                  </Tooltip>
                </Grid>
              </Grid>

              <Grid item container xs={6} alignItems="flex-end" direction="column">
                <Grid item>
                  <Tooltip title="Add" placement="right-start">
                    <Button variant="text">right-start</Button>
                  </Tooltip>
                </Grid>

                <Grid item>
                  <Tooltip title="Add" placement="right">
                    <Button variant="text">right</Button>
                  </Tooltip>
                </Grid>

                <Grid item>
                  <Tooltip title="Add" placement="right-end">
                    <Button variant="text">right-end</Button>
                  </Tooltip>
                </Grid>
              </Grid>
            </Grid>

            <Grid container justifyContent="center">
              <Grid item>
                <Tooltip title="Add" placement="bottom-start">
                  <Button variant="text">bottom-start</Button>
                </Tooltip>

                <Tooltip title="Add" placement="bottom">
                  <Button variant="text">bottom</Button>
                </Tooltip>

                <Tooltip title="Add" placement="bottom-end">
                  <Button variant="text">bottom-end</Button>
                </Tooltip>
              </Grid>
            </Grid>
          </Block>
        </Grid>

        <Grid item md={6} xs={12}>
          <Block title="Variable Width">
            <Stack spacing={1}>
              <Tooltip title={longText}>
                <Button fullWidth variant="text">
                  Default Width [300px]
                </Button>
              </Tooltip>

              <CustomWidthTooltip title={longText}>
                <Button fullWidth variant="text">
                  Custom Width [500px]
                </Button>
              </CustomWidthTooltip>

              <NoMaxWidthTooltip title={longText}>
                <Button fullWidth variant="text">
                  No wrapping
                </Button>
              </NoMaxWidthTooltip>
            </Stack>
          </Block>
        </Grid>
      </Grid>
    </ComponentPageLayout>;
};

export default MuiTooltipPageView;
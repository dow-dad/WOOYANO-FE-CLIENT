import { Box, Chip, Grid, Alert, Radio, Stack, Avatar, Button, Switch, Tooltip, Checkbox, Container, ButtonBase, IconButton, AvatarGroup, LinearProgress, FormControlLabel, CircularProgress } from "@mui/material";
import { Add, Delete, Error, KeyboardTab } from "@mui/icons-material";
import Masonry from "@mui/lab/Masonry"; // CUSTOM COMPONENTS

import { H2, Paragraph } from "components/typography"; // CUSTOM DEFINED HOOK

import useNavigate from "hooks/useNavigate"; // CUSTOM PAGE SECTION COMPONENTS

import ReturnRate from "page-sections/dashboards/ecommerce/ReturnRate";
import DailyVisitors from "page-sections/dashboards/ecommerce/DailyVisitors";
import LiveUser from "page-sections/dashboards/analytics/LiveUser";
import CompleteGoal from "page-sections/dashboards/analytics/CompleteGoal";
import SessionBrowser from "page-sections/dashboards/analytics/SessionBrowser";

const Section3 = () => {
  const navigate = useNavigate();
  return <Container maxWidth="lg" sx={{
    mt: {
      sm: 24,
      xs: 12
    }
  }}>
      <Grid container spacing={2}>
        <Grid item lg={5} md={6} xs={12}>
          <Box maxWidth={450} position="sticky" top={0} pt={4} mb={{
          xs: 4,
          mb: 0
        }}>
            <H2 fontSize={36}>Vast collection of components</H2>
            <Paragraph mt={1} mb={3} fontSize={18} color="text.secondary">
              Save thousands of development hours with QuickFrame’s well crafted features and clean code
            </Paragraph>

            <Button color="secondary" variant="outlined" startIcon={<KeyboardTab />} onClick={() => navigate("/components")}>
              Browse components
            </Button>
          </Box>
        </Grid>

        <Grid item lg={7} md={6} xs={12}>
          <Stack spacing={4}>
            <Alert variant="outlined" severity="info">
              This is an info alert — check it out!
            </Alert>

            <Alert severity="error" icon={<Error />} action={<Stack className="btn-group" direction="row">
                  <ButtonBase>UNDO</ButtonBase>
                  <ButtonBase>Action</ButtonBase>
                </Stack>}>
              This is an error alert — check it out!
            </Alert>

            <Stack direction="row" alignItems="center" spacing={2} rowGap={2}>
              <Button>Primary</Button>
              <Button variant="outlined" color="warning">
                Warning
              </Button>

              <Button color="success" startIcon={<Add />}>
                With Icon
              </Button>

              <Button variant="text">Click Me</Button>

              <LinearProgress />
            </Stack>

            <Stack direction="row" alignItems="center" spacing={2}>
              <Avatar alt="Remy Sharp" src="/static/user/avatar.png" />
              <Avatar variant="rounded" alt="Remy Sharp" src="/static/user/user-13.png" sx={{
              width: 60,
              height: 60
            }} />

              <AvatarGroup max={4}>
                <Avatar alt="Remy Sharp" src="/static/user/user-13.png" />
                <Avatar alt="Travis Howard" src="/static/user/user-17.png" />
                <Avatar alt="Travis Howard" src="/static/user/user-18.png" />
                <Avatar alt="Travis Howard" src="/static/user/user-19.png" />
                <Avatar alt="Travis Howard" src="/static/user/user-20.png" />
                <Avatar alt="Travis Howard" src="/static/user/user-20.png" />
              </AvatarGroup>

              <Chip avatar={<Avatar alt="Natacha" src="/static/user/user-13.png" />} label="Avatar" color="error" />

              <Chip label="Chip Outlined" variant="outlined" color="warning" />

              <CircularProgress color="success" />

              <Tooltip title="Delete">
                <IconButton>
                  <Delete />
                </IconButton>
              </Tooltip>
            </Stack>

            <Stack direction="row" alignItems="center" spacing={2}>
              <Box>
                <FormControlLabel control={<Checkbox size="small" color="error" defaultChecked />} label="Checkbox" />
              </Box>

              <Box>
                <FormControlLabel control={<Radio size="small" color="success" defaultChecked />} label="Radio" />
              </Box>

              <Box>
                <FormControlLabel control={<Switch size="small" defaultChecked />} label="Switch" />
              </Box>

              <Box>
                <FormControlLabel control={<Checkbox size="small" color="warning" indeterminate defaultChecked />} label="Indeterminate" />
              </Box>
            </Stack>

            <Masonry columns={{
            sm: 2,
            xs: 1
          }}>
              <Box>
                <SessionBrowser />
              </Box>

              <CompleteGoal chart="area" />

              <DailyVisitors />

              <Box>
                <LiveUser />
              </Box>

              <Box>
                <ReturnRate />
              </Box>
            </Masonry>
          </Stack>
        </Grid>
      </Grid>
    </Container>;
};

export default Section3;
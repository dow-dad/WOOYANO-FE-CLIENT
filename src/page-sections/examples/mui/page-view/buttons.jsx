import { useState } from "react";
import { Tab, Stack, IconButton } from "@mui/material";
import Folder from "@mui/icons-material/Folder";
import Start from "@mui/icons-material/Start";
import { LoadingButton, TabContext, TabList, TabPanel } from "@mui/lab"; // CUSTOM COMPONENTS

import { Block } from "components/block";
import ComponentPageLayout from "../../ComponentPageLayout";
import FabSizes from "../Fab/FabSizes";
import DefaultFab from "../Fab/DefaultFab";
import ExtendedFab from "../Fab/ExtendedFab";
import TextButton from "../button/TextButton";
import ButtonSizes from "../button/ButtonSizes";
import WithIconButton from "../button/WithIconButton";
import OutlinedButton from "../button/OutlinedButton";
import ContainedButton from "../button/ContainedButton";
import TextButtonGroup from "../button-group/TextButtonGroup";
import ButtonGroupSizes from "../button-group/ButtonGroupSizes";
import OutlinedButtonGroup from "../button-group/OutlinedButtonGroup";
import ContainedButtonGroup from "../button-group/ContainedButtonGroup";

const MuiButtonsPageView = () => {
  const [value, setValue] = useState("1");

  const handleChange = (_, newValue) => setValue(newValue);

  return <ComponentPageLayout title="Buttons" fullLink="https://mui.com/material-ui/react-button">
      <TabContext value={value}>
        <TabList onChange={handleChange}>
          <Tab value="1" label="Buttons" />
          <Tab value="2" label="Loading Button" />
          <Tab value="3" label="Floating Action Button" />
          <Tab value="4" label="Group Buttons" />
        </TabList>

        {
        /* BUTTONS */
      }
        <TabPanel value="1">
          <Stack mt={5} spacing={4}>
            <Block title="Contained Button">
              <ContainedButton />
            </Block>

            <Block title="Outlined Button">
              <OutlinedButton />
            </Block>

            <Block title="Text Button">
              <TextButton />
            </Block>

            <Block title="With Icon">
              <WithIconButton />
            </Block>

            <Block title="Icon Button">
              <Stack direction="row" flexWrap="wrap" gap={3}>
                <IconButton>
                  <Folder />
                </IconButton>

                <IconButton color="primary">
                  <Folder />
                </IconButton>

                <IconButton color="secondary">
                  <Folder />
                </IconButton>

                <IconButton color="success">
                  <Folder />
                </IconButton>

                <IconButton color="warning">
                  <Folder />
                </IconButton>

                <IconButton color="error">
                  <Folder />
                </IconButton>

                <IconButton color="info">
                  <Folder />
                </IconButton>
              </Stack>
            </Block>

            <Block title="Sizes">
              <ButtonSizes />
            </Block>
          </Stack>
        </TabPanel>

        {
        /* LOADING BUTTONS */
      }
        <TabPanel value="2">
          <Stack mt={5} spacing={4}>
            <Block title="Contained">
              <Stack direction="row" gap={3}>
                <LoadingButton loading variant="contained">
                  Submit
                </LoadingButton>

                <LoadingButton loading loadingIndicator="Loading…" variant="contained">
                  Fetch data
                </LoadingButton>

                <LoadingButton loading loadingPosition="start" startIcon={<Start />}>
                  Start
                </LoadingButton>

                <LoadingButton loading loadingPosition="end" endIcon={<Start />}>
                  End
                </LoadingButton>
              </Stack>
            </Block>

            <Block title="Outlined">
              <Stack direction="row" gap={3}>
                <LoadingButton loading variant="outlined">
                  Submit
                </LoadingButton>

                <LoadingButton loading loadingIndicator="Loading…" variant="outlined">
                  Fetch data
                </LoadingButton>

                <LoadingButton loading variant="outlined" loadingPosition="start" startIcon={<Start />}>
                  Start
                </LoadingButton>

                <LoadingButton loading variant="outlined" loadingPosition="end" endIcon={<Start />}>
                  End
                </LoadingButton>
              </Stack>
            </Block>

            <Block title="Text">
              <Stack direction="row" gap={3}>
                <LoadingButton loading variant="text">
                  Submit
                </LoadingButton>

                <LoadingButton loading loadingIndicator="Loading…" variant="text">
                  Fetch data
                </LoadingButton>

                <LoadingButton loading variant="text" loadingPosition="start" startIcon={<Start />}>
                  Start
                </LoadingButton>

                <LoadingButton loading variant="text" loadingPosition="end" endIcon={<Start />}>
                  End
                </LoadingButton>
              </Stack>
            </Block>
          </Stack>
        </TabPanel>

        {
        /* FAB - FLOATING ACTION BUTTON */
      }
        <TabPanel value="3">
          <Stack mt={5} spacing={4}>
            <Block title="Default">
              <DefaultFab />
            </Block>

            <Block title="Extended">
              <ExtendedFab />
            </Block>

            <Block title="Sizes">
              <FabSizes />
            </Block>
          </Stack>
        </TabPanel>

        {
        /* GROUP BUTTONS */
      }
        <TabPanel value="4">
          <Stack mt={5} spacing={4}>
            <Block title="Contained">
              <ContainedButtonGroup />
            </Block>

            <Block title="Outlined">
              <OutlinedButtonGroup />
            </Block>

            <Block title="Text">
              <TextButtonGroup />
            </Block>

            <Block title="Sizes">
              <ButtonGroupSizes />
            </Block>
          </Stack>
        </TabPanel>
      </TabContext>
    </ComponentPageLayout>;
};

export default MuiButtonsPageView;
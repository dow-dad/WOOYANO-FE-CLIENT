"use client";

import Link from "next/link";
import { Fragment } from "react";
import { Box, Grid, Divider, Container } from "@mui/material"; // CUSTOM COMPONENTS

import { H1, H5, Paragraph } from "components/typography";
import ComponentPreviewCard from "./ComponentPreviewCard";

const ComponentsPageView = () => {
  return <Fragment>
      <Container sx={{
      py: {
        sm: 10,
        xs: 5
      }
    }}>
        <H1 fontSize={32}>Components</H1>
        <Paragraph color="text.secondary" fontSize={18} mt={0.6} maxWidth={{
        sm: 500
      }}>
          Making deployment simple and expanding more successfully with a large resource pack
        </Paragraph>
      </Container>

      <Divider />

      <Container sx={{
      py: {
        sm: 10,
        xs: 5
      }
    }}>
        <Box mb={5}>
          <H5 fontSize={20}>MUI</H5>
          <Paragraph color="text.secondary" mt={1}>
            Components from{" "}
            <Link href="https://mui.com/components" target="_blank">
              Material UI
            </Link>
            .
          </Paragraph>
        </Box>

        <Grid container spacing={3}>
          {componentList.map((component, i) => <Grid item md={2} sm={3} xs={6} key={i}>
              <ComponentPreviewCard link={component.link} title={component.title} image={component.image} />
            </Grid>)}
        </Grid>
      </Container>

      <Divider />
    </Fragment>;
};

const componentList = [{
  id: 1,
  title: "Accordion",
  link: "/components/mui/accordion",
  image: "/static/components/accordion.png"
}, {
  id: 2,
  title: "Alert",
  link: "/components/mui/alert",
  image: "/static/components/alert.png"
}, {
  id: 3,
  title: "Autocomplete",
  link: "/components/mui/autocomplete",
  image: "/static/components/autocomplete.png"
}, {
  id: 4,
  title: "Avatar",
  link: "/components/mui/avatar",
  image: "/static/components/avatar.png"
}, {
  id: 5,
  title: "Badge",
  link: "/components/mui/badge",
  image: "/static/components/badge.png"
}, {
  id: 6,
  title: "Breadcrumbs",
  link: "/components/mui/breadcrumbs",
  image: "/static/components/breadcrumbs.png"
}, {
  id: 7,
  title: "Buttons",
  link: "/components/mui/buttons",
  image: "/static/components/buttons.png"
}, {
  id: 8,
  title: "Checkbox",
  link: "/components/mui/checkbox",
  image: "/static/components/checkbox.png"
}, {
  id: 9,
  title: "Chip",
  link: "/components/mui/chip",
  image: "/static/components/chip.png"
}, {
  id: 10,
  title: "Data Grid",
  link: "/components/mui/data-grid",
  image: "/static/components/data-grid.png"
}, {
  id: 11,
  title: "Dialog",
  link: "/components/mui/dialog",
  image: "/static/components/dialog.png"
}, {
  id: 12,
  title: "List",
  link: "/components/mui/list",
  image: "/static/components/list.png"
}, {
  id: 13,
  title: "Menu",
  link: "/components/mui/menu",
  image: "/static/components/menu.png"
}, {
  id: 14,
  title: "Pagination",
  link: "/components/mui/pagination",
  image: "/static/components/pagination.png"
}, {
  id: 15,
  title: "Pickers",
  link: "/components/mui/pickers",
  image: "/static/components/pickers.png"
}, {
  id: 16,
  title: "Popover",
  link: "/components/mui/popover",
  image: "/static/components/popover.png"
}, {
  id: 17,
  title: "Progress",
  link: "/components/mui/progress",
  image: "/static/components/progress.png"
}, {
  id: 18,
  title: "Radio Button",
  link: "/components/mui/radio-button",
  image: "/static/components/radio-button.png"
}, {
  id: 19,
  title: "Rating",
  link: "/components/mui/rating",
  image: "/static/components/rating.png"
}, {
  id: 20,
  title: "Slider",
  link: "/components/mui/slider",
  image: "/static/components/slider.png"
}, {
  id: 30,
  title: "Snackbar",
  link: "/components/mui/snackbar",
  image: "/static/components/tree-view.png"
}, {
  id: 21,
  title: "Stepper",
  link: "/components/mui/stepper",
  image: "/static/components/stepper.png"
}, {
  id: 22,
  title: "Switch",
  link: "/components/mui/switch",
  image: "/static/components/switch.png"
}, {
  id: 23,
  title: "Table",
  link: "/components/mui/table",
  image: "/static/components/table.png"
}, {
  id: 24,
  title: "Tabs",
  link: "/components/mui/tabs",
  image: "/static/components/tabs.png"
}, {
  id: 25,
  title: "Textfield",
  link: "/components/mui/textfield",
  image: "/static/components/textfield.png"
}, {
  id: 26,
  title: "Timeline",
  link: "/components/mui/timeline",
  image: "/static/components/timeline.png"
}, {
  id: 27,
  title: "Tooltip",
  link: "/components/mui/tooltip",
  image: "/static/components/tooltip.png"
}, {
  id: 28,
  title: "Transfer List",
  link: "/components/mui/transfer-list",
  image: "/static/components/transfer-list.png"
}, {
  id: 29,
  title: "Tree View",
  link: "/components/mui/tree-view",
  image: "/static/components/tree-view.png"
}];
export default ComponentsPageView;
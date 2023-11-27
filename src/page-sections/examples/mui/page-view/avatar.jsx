import Grid from "@mui/material/Grid"; // CUSTOM COMPONENT

import { Block } from "components/block";
import IconAvatar from "../avatar/IconAvatar";
import AvatarSizes from "../avatar/AvatarSizes";
import ImageAvatar from "../avatar/ImageAvatar";
import LetterAvatar from "../avatar/LetterAvatar";
import GroupedAvatar from "../avatar/GroupedAvatar";
import AvatarVariants from "../avatar/AvatarVariants";
import WithBadgeAvatar from "../avatar/WithBadgeAvatar";
import ComponentPageLayout from "../../ComponentPageLayout";
const components = [{
  id: 1,
  title: "Image Avatar",
  Component: ImageAvatar
}, {
  id: 2,
  title: "Letter Avatar",
  Component: LetterAvatar
}, {
  id: 3,
  title: "Icon Avatar",
  Component: IconAvatar
}, {
  id: 4,
  title: "Variants",
  Component: AvatarVariants
}, {
  id: 5,
  title: "Grouped",
  Component: GroupedAvatar
}, {
  id: 6,
  title: "With Badge",
  Component: WithBadgeAvatar
}, {
  id: 7,
  title: "Sizes",
  Component: AvatarSizes
}];

const MuiAvatarPageView = () => {
  return <ComponentPageLayout title="Avatar">
      <Grid container spacing={3}>
        {components.map(({
        Component,
        title,
        id
      }) => <Grid item lg={6} xs={12} key={id}>
            <Block title={title}>
              <Component />
            </Block>
          </Grid>)}
      </Grid>
    </ComponentPageLayout>;
};

export default MuiAvatarPageView;
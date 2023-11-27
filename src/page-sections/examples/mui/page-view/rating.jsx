import { useState } from "react";
import { Grid, Stack, Rating } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material"; // CUSTOM COMPONENTS

import ComponentPageLayout from "../../ComponentPageLayout";
import { Block } from "components/block";

const MuiRatingPageView = () => {
  const [rating, setRating] = useState(3);
  return <ComponentPageLayout title="Rating">
      <Grid container spacing={3}>
        <Grid item lg={4} md={6} xs={12}>
          <Block title="Controlled">
            <Rating value={rating} name="controlled" onChange={(_, newValue) => setRating(newValue)} />
          </Block>
        </Grid>

        <Grid item lg={4} md={6} xs={12}>
          <Block title="Read Only">
            <Rating name="read-only" value={rating} readOnly />
          </Block>
        </Grid>

        <Grid item lg={4} md={6} xs={12}>
          <Block title="Disabled">
            <Rating name="read-only" value={rating} disabled />
          </Block>
        </Grid>

        <Grid item lg={4} md={6} xs={12}>
          <Block title="Rating Precision">
            <Rating name="precision" value={rating} precision={0.5} />
          </Block>
        </Grid>

        <Grid item lg={4} md={6} xs={12}>
          <Block title="Custom Icon">
            <Rating value={rating} name="custom-icon" icon={<Favorite fontSize="inherit" />} emptyIcon={<FavoriteBorder fontSize="inherit" />} />
          </Block>
        </Grid>

        <Grid item lg={4} md={6} xs={12}>
          <Block title="Sizes">
            <Stack spacing={2}>
              <Rating value={rating} size="large" />
              <Rating value={rating} size="medium" />
              <Rating value={rating} size="small" />
            </Stack>
          </Block>
        </Grid>
      </Grid>
    </ComponentPageLayout>;
};

export default MuiRatingPageView;
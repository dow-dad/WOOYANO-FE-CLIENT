import { useState } from "react";
import Star from "@mui/icons-material/Star";
import { Box, Grid, Stack, Button, Rating, styled, TextField } from "@mui/material"; // CUSTOM COMPONENTS

import ReviewItem from "./ReviewItem";
import RatingDetails from "./RatingDetails";
import { H5, H6, Paragraph } from "components/typography"; // CUSTOM ICON COMPONENTS

import Edit from "icons/Edit"; // STYLED COMPONENTS

const ContainerGrid = styled(Grid)(({
  theme
}) => ({
  [theme.breakpoints.down("md")]: {
    flexDirection: "column-reverse"
  }
}));
const FirstGrid = styled(Grid)(({
  theme
}) => ({
  [theme.breakpoints.up("md")]: {
    borderRight: `1px solid ${theme.palette.divider}`
  },
  [theme.breakpoints.down("md")]: {
    marginTop: 24,
    borderTop: `1px solid ${theme.palette.grey[300]}`
  }
}));

const ProductReviews = () => {
  const [rating, setRating] = useState(2);
  return <Box padding={3}>
      <ContainerGrid container spacing={3}>
        {
        /* ALL REVIEW LIST */
      }
        <FirstGrid item md={8} xs={12}>
          <Stack spacing={4}>
            <ReviewItem liked={234} rating={4} createdAt="14 Nov, 2021" user={{
            name: "Christina Perry",
            image: "/static/user/user-11.png"
          }} comment="Thank you very fast shipping from Poland only 3days. Very Grateful. Was this review helpful to you?." />

            <ReviewItem liked={234} rating={4} createdAt="14 Nov, 2021" user={{
            name: "Christina Perry",
            image: "/static/user/user-11.png"
          }} comment="Thank you very fast shipping from Poland only 3days. Very Grateful. Was this review helpful to you?." />

            <ReviewItem liked={234} rating={4} createdAt="14 Nov, 2021" user={{
            name: "Christina Perry",
            image: "/static/user/user-11.png"
          }} comment="Thank you very fast shipping from Poland only 3days. Very Grateful. Was this review helpful to you?." />
          </Stack>
        </FirstGrid>

        {
        /* AVERAGE RATING INFO */
      }
        <Grid item md={4} xs={12}>
          <Stack alignItems="center">
            <H6 fontSize={16}>Average rating</H6>
            <H5 color="primary.main" my={1.5}>
              4/5
            </H5>

            <Rating readOnly value={4} emptyIcon={<Star sx={{
            opacity: 0.4,
            fontSize: "inherit"
          }} />} />

            <Paragraph color="text.secondary">(8.24k reviews)</Paragraph>
          </Stack>

          <Box maxWidth={300} margin="auto" pt={4}>
            <Stack spacing={1}>
              <RatingDetails title="5 star" progressValue={74} totalReview={32000} />
              <RatingDetails title="4 star" progressValue={54} totalReview={54000} />
              <RatingDetails title="3 star" progressValue={34} totalReview={37000} />
              <RatingDetails title="2 star" progressValue={24} totalReview={42000} />
              <RatingDetails title="1 star" progressValue={14} totalReview={65000} />
            </Stack>

            <Button fullWidth color="secondary" variant="outlined" startIcon={<Edit />} sx={{
            mt: 4
          }}>
              Write Your review
            </Button>
          </Box>
        </Grid>

        {
        /* CREATE REVIEW FORM */
      }
        <Grid item xs={12}>
          <Box sx={{
          padding: 2
        }}>
            <H6 fontSize={16} mb={1}>
              Add Review
            </H6>

            <Stack direction="row" spacing={1}>
              <Paragraph>Your review about this product:</Paragraph>

              <Rating value={rating} onChange={(_, newValue) => setRating(newValue)} emptyIcon={<Star sx={{
              opacity: 0.4,
              fontSize: "inherit"
            }} />} sx={{
              color: "warning.main",
              fontSize: 18
            }} />
            </Stack>

            <form>
              <Stack spacing={2} mt={3}>
                <TextField rows={4} multiline placeholder="Review" fullWidth />
                <TextField placeholder="Name" fullWidth />
                <TextField placeholder="Email" fullWidth />
              </Stack>

              <Stack direction="row" spacing={2} mt={2} justifyContent="end">
                <Button variant="outlined" color="secondary">
                  Cancel
                </Button>
                <Button>Post Review</Button>
              </Stack>
            </form>
          </Box>
        </Grid>
      </ContainerGrid>
    </Box>;
};

export default ProductReviews;
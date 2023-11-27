import { Grid, Skeleton } from "@mui/material";

const LoadingSkeleton = () => {
  return <Grid container spacing={3}>
      <Grid item md={8} xs={12}>
        <Skeleton variant="rounded" width="100%" height={300} sx={{
        borderRadius: 4
      }} />
      </Grid>

      <Grid item md={4} xs={12}>
        <Skeleton variant="rounded" width="100%" height={300} sx={{
        borderRadius: 4
      }} />
      </Grid>

      <Grid item md={4} xs={12}>
        <Skeleton variant="rounded" width="100%" height={300} sx={{
        borderRadius: 4
      }} />
      </Grid>

      <Grid item md={8} xs={12}>
        <Skeleton variant="rounded" width="100%" height={300} sx={{
        borderRadius: 4
      }} />
      </Grid>

      <Grid item md={8} xs={12}>
        <Skeleton variant="rounded" width="100%" height={300} sx={{
        borderRadius: 4
      }} />
      </Grid>

      <Grid item md={4} xs={12}>
        <Skeleton variant="rounded" width="100%" height={300} sx={{
        borderRadius: 4
      }} />
      </Grid>
    </Grid>;
};

export default LoadingSkeleton;
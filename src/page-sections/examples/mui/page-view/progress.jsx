import { useEffect, useRef, useState } from "react";
import { Grid, Stack, LinearProgress, CircularProgress } from "@mui/material"; // CUSTOM COMPONENTS

import ComponentPageLayout from "../../ComponentPageLayout";
import { Block } from "components/block";

const MuiProgressPageView = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prevProgress => prevProgress >= 100 ? 0 : prevProgress + 10);
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);
  const progressRef = useRef(() => {});
  const [buffer, setBuffer] = useState(10);
  const [bufferProgress, setBufferProgress] = useState(0);
  useEffect(() => {
    progressRef.current = () => {
      if (progress > 100) {
        setBufferProgress(0);
        setBuffer(10);
      } else {
        const diff = Math.random() * 10;
        const diff2 = Math.random() * 10;
        setBufferProgress(progress + diff);
        setBuffer(progress + diff + diff2);
      }
    };
  });
  useEffect(() => {
    const timer = setInterval(() => {
      progressRef.current();
    }, 500);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <ComponentPageLayout title="Progress">
      <Grid container spacing={3}>
        <Grid item lg={6} xs={12}>
          <Block title="Circular">
            <Stack direction="row" gap={3}>
              <CircularProgress color="primary" />
              <CircularProgress color="warning" />
              <CircularProgress color="error" />
              <CircularProgress color="success" />
              {
              /* <CircularProgress color="secondary" /> */
            }
              <CircularProgress color="inherit" />
            </Stack>
          </Block>
        </Grid>

        <Grid item lg={6} xs={12}>
          <Block title="Determinate">
            <Stack direction="row" gap={3}>
              <CircularProgress variant="determinate" value={25} />
              <CircularProgress variant="determinate" value={50} />
              <CircularProgress variant="determinate" value={75} />
              <CircularProgress variant="determinate" value={100} />
              <CircularProgress variant="determinate" value={progress} />
            </Stack>
          </Block>
        </Grid>

        <Grid item lg={6} xs={12}>
          <Block title="Sizes">
            <Stack alignItems="center" direction="row" gap={3}>
              <CircularProgress size={50} color="primary" />
              <CircularProgress size={40} color="primary" />
              <CircularProgress size={30} color="primary" />
              <CircularProgress size={20} color="primary" />
            </Stack>
          </Block>
        </Grid>

        <Grid item lg={6} xs={12}>
          <Block title="Linear">
            <Stack gap={3}>
              <LinearProgress color="primary" />
              <LinearProgress color="warning" />
              <LinearProgress color="error" />
              <LinearProgress color="success" />
              {
              /* <CircularProgress color="secondary" /> */
            }
              <LinearProgress color="inherit" />
            </Stack>
          </Block>
        </Grid>

        <Grid item lg={6} xs={12}>
          <Block title="Determinate">
            <Stack gap={3}>
              <LinearProgress variant="determinate" value={25} />
              <LinearProgress variant="determinate" value={50} />
              <LinearProgress variant="determinate" value={75} />
              <LinearProgress variant="determinate" value={100} />
              <LinearProgress variant="determinate" value={progress} />
            </Stack>
          </Block>
        </Grid>

        <Grid item lg={6} xs={12}>
          <Block title="Buffer">
            <Stack gap={3}>
              <LinearProgress variant="buffer" value={bufferProgress} valueBuffer={buffer} />

              <LinearProgress color="error" variant="buffer" value={bufferProgress} valueBuffer={buffer} />
              <LinearProgress color="success" variant="buffer" value={bufferProgress} valueBuffer={buffer} />
              <LinearProgress color="warning" variant="buffer" value={bufferProgress} valueBuffer={buffer} />

              <LinearProgress color="inherit" variant="buffer" value={bufferProgress} valueBuffer={buffer} />
            </Stack>
          </Block>
        </Grid>
      </Grid>
    </ComponentPageLayout>;
};

export default MuiProgressPageView;
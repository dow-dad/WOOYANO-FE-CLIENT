import { Grid, Stack, Box, Button } from "@mui/material"; // CUSTOM COMPONENTS
import Skills from "./Skills";
import Summery from "./Summery";
import Portfolio from "./Portfolio";
import { FlexBetween } from "components/flexbox";
import { Paragraph } from "components/typography";


const StoreInfo = () => {
  return <Box mt={3}>
    <Grid container spacing={3}>
      <Grid item lg={12} md={12} xs={12}>
        <FlexBetween>
          <Button sx={{marginY:2,paddingY:1}}>수정사항 반영하기</Button>
          <Paragraph color={"grey.400"} fontSize={17}>수정사항 반영하기를 누르지 않으면 수정사항이 반영되지 않습니다.</Paragraph>
        </FlexBetween>
        
        <Stack spacing={3}>
          <Portfolio />
          <Summery />
          <Skills />

          {/* <Teams />
          <Hobbies />
          <Post /> */}
        </Stack>
      </Grid>
    </Grid>
  </Box>;
};

export default StoreInfo;
import { alpha, Card,Button, IconButton, LinearProgress, Stack, Select, MenuItem, TextField } from "@mui/material"; // CUSTOM COMPONENTS

import { H3, H6, Paragraph } from "components/typography";
import { FlexBetween, FlexBox, FlexRowAlign } from "components/flexbox"; // CUSTOM ICON COMPONENT

import MoreHorizontal from "icons/MoreHorizontal"; // CUSTOM UTILS METHOD

import { numberFormat } from "utils/numberFormat"; // ====================================================================

// ====================================================================
const StoreTimeCard = ({

}) => {
  return <>
    <Card sx={{
      padding: 3,
      marginY: 2
    }}>
      <H3 paddingBottom={2}>휴무일</H3>

      <H6>평일</H6>

      <FlexBetween gap={3} marginY={2}>
        <TextField fullWidth variant="outlined" label={"시작시간"}></TextField>
        <TextField fullWidth variant="outlined" label={"종료시간"}></TextField>
      </FlexBetween>


      <H6>주말</H6>

      <FlexBetween gap={3} marginY={2}>
        <TextField fullWidth variant="outlined" label={"시작시간"}></TextField>
        <TextField fullWidth variant="outlined" label={"종료시간"}></TextField>
      </FlexBetween>

      <Button>수정</Button>
    </Card>

    <Card sx={{
      padding: 3
    }}>
      <H3 paddingBottom={2}>운행시간</H3>

      <H6>평일</H6>

      <FlexBetween gap={3} marginY={2}>
        <TextField fullWidth variant="outlined" label={"시작시간"}></TextField>
        <TextField fullWidth variant="outlined" label={"종료시간"}></TextField>
      </FlexBetween>


      <H6>주말</H6>

      <FlexBetween gap={3} marginY={2}>
        <TextField fullWidth variant="outlined" label={"시작시간"}></TextField>
        <TextField fullWidth variant="outlined" label={"종료시간"}></TextField>
      </FlexBetween>
      <Button>수정</Button>
    </Card>

  </>
}


export default StoreTimeCard;
'use client'
import { Add, Download, FavoriteBorder } from "@mui/icons-material";
import { Button, Card, CardMedia, Grid, styled, Box, IconButton, CardContent, Chip } from "@mui/material"; // CUSTOM COMPONENTS
import { FlexBox, FlexBetween } from "components/flexbox";
import { H6, Small } from "components/typography"; // CUSTOM UTILS METHOD
import { is } from "date-fns/locale";
import { useState } from "react";
import { isDark } from "utils/constants";
const StyledIconButton = styled(IconButton)(({
  theme
}) => ({
  borderRadius: 8,
  border: `1px solid ${theme.palette.divider}`
}));
const DateWrapper = styled(FlexBox)(({
  theme
}) => ({
  top: 10,
  right: 10,
  width: 40,
  height: 50,
  borderRadius: "4px",
  alignItems: "center",
  position: "absolute",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: isDark(theme) ? theme.palette.grey[800] : theme.palette.common.white
}));



const Portfolio = () => {

  const [isOpened, setIsOpened] = useState(false);

  const handleOpendModal = () => {
    setIsOpened(!isOpened)
  }

  const renderEditStoreImg = () => {
    return <>
      <div style={{ background: "black", width: "100vw", height: "100vh", position: "fixed", top: 0, left: 0, zIndex: 1200, opacity: 0.6 }}></div>
      <div style={{ backgroundColor: "white", position: "fixed", width: "70vw", height: "80vh", zIndex: 1201, borderRadius: "10px", left: "15%", top: "10%", padding: "10px" }}>


        <FlexBox gap={2} paddingLeft={1} paddingTop={5} flexWrap={"wrap"}>
          <Button type="button" variant="outlined" onClick={() => { handleOpendModal() }}>닫기</Button>
        </FlexBox>
      </div>
    </>
  }

  return <>
    {isOpened ? renderEditStoreImg() : null}
    <Card sx={{
      padding: 3
    }}>
      <FlexBetween mb={3}>
        <H6 fontSize={16}>업체 사진</H6>

        <Button color="secondary" variant="outlined" startIcon={<Add />} onClick={() => { handleOpendModal() }}>
          추가 및 수정
        </Button>
      </FlexBetween>

      <Grid container spacing={3}>
        <Grid item lg={4} md={6} xs={12}>
          <SinglePortfolio tag="Minimal" imgLink="/static/cleanimg/cleanimg4.png" />
        </Grid>

        <Grid item lg={4} md={6} xs={12}>
          <SinglePortfolio tag="Dark" imgLink="/static/cleanimg/cleanimg2.png" />
        </Grid>

        <Grid item lg={4} md={6} xs={12}>
          <SinglePortfolio tag="Light" imgLink="/static/cleanimg/cleanimg3.png" />
        </Grid>



      </Grid>

    </Card>
  </>
}

export default Portfolio; // ==============================================================================================

// ==============================================================================================
function SinglePortfolio({
  tag,
  date,
  title,
  imgLink
}) {
  return <Card sx={{
    position: "relative",
    borderRadius: 2,
    boxShadow: 0
  }}>
    <CardMedia sx={{
      paddingBottom: "16px !important"
    }} component="img" image={imgLink} height={152} />


  </Card>;
}
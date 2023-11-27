'use client'
import { Card, Chip, alpha, styled, useTheme, AvatarGroup, Button, CardMedia, Grid, TextField } from "@mui/material"; // CUSTOM COMPONENTS
import { H5, H6, Paragraph } from "components/typography";
import { FlexBetween, FlexRowAlign, FlexBox } from "components/flexbox"; // STYLED COMPONENTS
import { useState } from "react";
import Image from "next/image";


const IconWrapper = styled(FlexRowAlign)({
  width: 35,
  height: 30,
  borderRadius: "4px"
});
const StyledAvatarGroup = styled(AvatarGroup)(({
  type
}) => ({
  "& .MuiAvatar-root": {
    width: 30,
    height: 30
  },
  "& .MuiAvatar-colorDefault": {
    color: type,
    fontWeight: 500,
    backgroundColor: alpha(type, 0.1)
  }
})); // =======================================================================

// =======================================================================
const ReviewCard = ({
  review
}) => {
  const theme = useTheme();

  const [isOpened, setIsOpened] = useState(false);
  const [answer,setAnswer]=useState("");
  

  const handleOpendModal = () => {
    setIsOpened(!isOpened)
  }

  const onChangeAnswer=(e)=>{
    const answers=e.target.value;
    setAnswer(answers)

  }
  // console.log(review.img_url);

  const renderReviewDetail = () => {

    let img_url = review.img_url;
    // console.log(img_url);
    return <>
      <div style={{ background: "black", width: "100vw", height: "100vh", position: "fixed", top: 0, left: 0, zIndex: 1200, opacity: 0.6 }}></div>

      <div style={{ backgroundColor: "white", position: "fixed", width: "70vw", height: "80vh", zIndex: 1201, borderRadius: "10px", left: "15%", top: "10%", padding: "10px", overflowY: "auto" }}>

        <Card sx={{
          p: 2
        }}>
          <H6 paddingBottom={3}>리뷰 상세</H6>
          <Grid container spacing={2}>
            {img_url.map((url, idx) => (
              <Grid key={idx} item lg={3} md={6} xs={12}>
                <Image src={`${url}`} width={300} height={300} alt="리뷰 사진" />
              </Grid>
            ))}
          </Grid>
        </Card>

        <Card sx={{ p: 2 }}>
          <Paragraph marginBottom={3}><Chip label={"작성자"} size="small" color="warning" /> &nbsp;{review.user_email}</Paragraph>
          <Chip sx={{ marginBottom: 3 }} label={review.positive_review ? "긍정" : "부정"} size="small" color={getColorType()} />
          <Paragraph marginBottom={3}><Chip label={"작성일"} size="small" color="info" /> &nbsp;{review.registration_date}</Paragraph>
          <Paragraph marginBottom={3} color="text.secondary">{review.review_content}</Paragraph>
          <Chip sx={{ marginBottom: 1 }} label={"답글"} size="small" color="error" />
          <TextField multiline rows={4} marginBottom={3} placeholder="답글을 남겨주세요."  fullWidth onChange={onChangeAnswer}></TextField>
        </Card>

        <FlexBox gap={2} paddingLeft={1} paddingTop={5} flexWrap={"wrap"}>
          <Button type="button" variant="outlined" onClick={() => { handleOpendModal() }}>닫기</Button>
        </FlexBox>
      </div>
    </>


  }

  const getColorType = () => {
    if (review.positive_review === true) return "success"; else if (review.positive_review === false) return "error";
  };

  return <>
    {isOpened ? renderReviewDetail() : null}
    <Card sx={{
      padding: 2
    }}
      onClick={() => { handleOpendModal() }}>
      <Paragraph color={"grey.400"}>#{review.reservation_number}</Paragraph>
      <FlexBetween>
        <Paragraph color={"grey.600"}>{review.registration_date}</Paragraph>
        <Chip label={review.positive_review ? "긍정" : "부정"} size="small" color={getColorType()} />
      </FlexBetween>



      <H6 fontSize={16} my={2}>
        {review.user_email}
      </H6>

      <Paragraph color="text.secondary">{review.review_content}</Paragraph>


    </Card>
  </>
}

export default ReviewCard;
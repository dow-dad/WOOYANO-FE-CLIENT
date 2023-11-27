'use client'
import { Card, Chip, alpha, styled, useTheme, AvatarGroup, Button, CardMedia, Grid, TextField } from "@mui/material"; // CUSTOM COMPONENTS
import { H5, H6, Paragraph } from "components/typography";
import { FlexBetween, FlexRowAlign, FlexBox } from "components/flexbox"; // STYLED COMPONENTS
import React, { useEffect, useState } from "react";
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
})); 


// =======================================================================

// =======================================================================
const ReviewCard = ({review}) => {
  console.log("잘 가져옴?", review)
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

  const registerDate = new Date(review.createdAt)
  const reviewId = review.reviewId
const [reviewDetail, setReviewDetail] = useState()

  const token = "eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiQ0xJRU5UIiwic3ViIjoic2Frc2FrQG5hdmVyLmNvbSIsImlhdCI6MTcwMDg5OTI2NywiZXhwIjoxNzAwOTg1NjY3fQ.Z0ElznuMQknCtRF2efV3MCIAVAlCILb1Dle2to-QjSg"

  async function getReviewDetail() {
    
    try {
      const response = await fetch(`http://3.35.62.185:8000/api/v1/review-bookmark/client/review/detail/${reviewId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token
        },
      });
      if (response.ok) {
        const result = await response.json();
        console.log('리뷰 상세 성공 : ', result)
        setReviewDetail(result)
        return result
      }
    } catch (error) {
      console.log('리뷰 상세 실패 : ', error)
    }
  }

  useEffect(() => {
    const reviewDetailFetch = async () => {
      try {
        if (token) {
          const response = await getReviewDetail(token);
          if (!reviewDetail[0] === undefined) {
            return null``
          }
        }
      } catch (error) {
        console.log("loading error", error)
      }
    }
    reviewDetailFetch();
  }, [token]);
  
  
  


  const renderReviewDetail = () => {

    let img_url = reviewDetail.result.reviewImageUrlList || [];
    console.log("이미지 배열 : ", img_url);
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
                <Image src={`${url}`} width={300} height={300} alt="review img" />
              </Grid>
            ))}
          </Grid>
        </Card>

        <Card sx={{ p: 2 }}>
          <Paragraph marginBottom={3}><Chip label={"작성자"} size="small" color="warning" /> &nbsp;{review.userEmail}</Paragraph>
          <Chip sx={{ marginBottom: 3 }} label={review.reuse ? "다음에도 이용할게요:)" : "이번에만 이용할게요:("} size="small" color={getColorType()} />
          <Paragraph marginBottom={3}><Chip label={"작성일"} size="small" color="info" /> &nbsp;{registerDate.toLocaleDateString("ko-KR", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })}</Paragraph>
          <Paragraph marginBottom={3} color="text.secondary">{review.content}</Paragraph>
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
    if (review.reuse === true) return "success"; else if (review.reuse === false) return "error";
  };

  return <>
    {isOpened ? renderReviewDetail() : null}
    <Card sx={{
      padding: 2
    }}
      onClick={() => { handleOpendModal() }}>
      <Paragraph color={"grey.400"}>#{review.reservationNum}</Paragraph>
      <FlexBetween>
        <Paragraph color={"grey.600"}>
          {registerDate.toLocaleDateString("ko-KR", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          })}
        </Paragraph>
        <Chip label={review.reuse ? "다음에도 이용할게요:)" : "이번에만 이용할게요:("} size="small" color={getColorType()} />
      </FlexBetween>



      <H6 fontSize={16} my={2}>
        {review.userEmail}
      </H6>

      <Paragraph color="text.secondary">{review.content}</Paragraph>


    </Card>
  </>
}

export default ReviewCard;
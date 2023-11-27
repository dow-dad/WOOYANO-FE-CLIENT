import { Grid, Box } from "@mui/material"; // CUSTOM ICON COMPONENTS
import ReviewCard from "./ReviewCard"; // CUSTOM DUMMY DATA
import React, { useEffect, useState } from "react";

// const Review_List = [{
//   id: 1,
//   user_email: "user1@example.com",
//   reservation_number: "123456",
//   review_content: "서비스가 매우 만족스러웠습니다!",
//   registration_date: "2023-11-06",
//   positive_review: true,
//   img_url: ["/static/cleanimg/cleanimg3.png", "/static/cleanimg/cleanimg4.png"],
// },
// {
//   id: 2,
//   user_email: "user2@example.com",
//   reservation_number: "789012",
//   review_content: "좋은 경험이었습니다!",
//   registration_date: "2023-11-07",
//   positive_review: true,
//   img_url: ["/static/cleanimg/cleanimg1.png", "/static/cleanimg/cleanimg2.png"],
// },
// {
//   id: 3,
//   user_email: "user3@example.com",
//   reservation_number: "345678",
//   review_content: "매우 실망스러웠습니다.",
//   registration_date: "2023-11-10",
//   positive_review: false,
//   img_url: ["/static/cleanimg/cleanimg1.png", "/static/cleanimg/cleanimg2.png"],
// },
// {
//   id: 4,
//   user_email: "user4@example.com",
//   reservation_number: "901234",
//   review_content: "서비스가 훌륭했습니다. 다음에도 이용할 예정입니다.",
//   registration_date: "2023-11-12",
//   positive_review: true,
//   img_url: ["/static/cleanimg/cleanimg1.png", "/static/cleanimg/cleanimg2.png"],
// },
// {
//   id: 5,
//   user_email: "user5@example.com",
//   reservation_number: "567890",
//   review_content: "불친절한 서비스 때문에 기분이 상했습니다.",
//   registration_date: "2023-11-14",
//   positive_review: false,
//   img_url: ["/static/cleanimg/cleanimg1.png", "/static/cleanimg/cleanimg2.png"],
// },
// {
//   id: 6,
//   user_email: "user6@example.com",
//   reservation_number: "234567",
//   review_content: "가격 대비 만족스러웠습니다.",
//   registration_date: "2023-11-16",
//   positive_review: true,
//   img_url: ["/static/cleanimg/cleanimg1.png", "/static/cleanimg/cleanimg2.png"],
// },
// {
//   id: 7,
//   user_email: "user7@example.com",
//   reservation_number: "890123",
//   review_content: "서비스가 느리고 별로였습니다.",
//   registration_date: "2023-11-18",
//   positive_review: false,
//   img_url: ["/static/cleanimg/cleanimg1.png", "/static/cleanimg/cleanimg2.png"],
// },
// {
//   id: 8,
//   user_email: "user8@example.com",
//   reservation_number: "456789",
//   review_content: "정말 좋았습니다!",
//   registration_date: "2023-11-20",
//   positive_review: true,
//   img_url: ["/static/cleanimg/cleanimg1.png", "/static/cleanimg/cleanimg2.png"],
// },
// {
//   id: 9,
//   user_email: "user9@example.com",
//   reservation_number: "012345",
//   review_content: "불만족스러운 경험이었습니다.",
//   registration_date: "2023-11-22",
//   positive_review: false,
//   img_url: ["/static/cleanimg/cleanimg1.png", "/static/cleanimg/cleanimg2.png"],
// },
// {
//   id: 10,
//   user_email: "user10@example.com",
//   reservation_number: "678901",
//   review_content: "다음에도 이용하고 싶어요!",
//   registration_date: "2023-11-24",
//   positive_review: true,
//   img_url: ["/static/cleanimg/cleanimg1.png", "/static/cleanimg/cleanimg2.png"],
// },

// ];

const token = "eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiQ0xJRU5UIiwic3ViIjoic2Frc2FrQG5hdmVyLmNvbSIsImlhdCI6MTcwMDg5OTI2NywiZXhwIjoxNzAwOTg1NjY3fQ.Z0ElznuMQknCtRF2efV3MCIAVAlCILb1Dle2to-QjSg"

const serviceId = 1
// console.log(review.img_url);

const Review = () => {
const [reviewList, setReviewList] = useState([]);

useEffect(() => {
  const reviewDataFetch = async () => {
    try {
      if (token) {
        const response = await getReviewList(token);
        console.log("회원 맞음", response)
        if (!reviewList[0] === undefined) {
          return null
        }
      }
    } catch (error) {
      console.log("loading error", error)
    }
  }
  reviewDataFetch();
}, [token]);


async function getReviewList() {
  console.log("서비스 아이디 : ", serviceId)
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/review-bookmark/client/review/list/${serviceId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      },
    });
    if (response.ok) {
      const result = await response.json();
      console.log('리뷰 리스트 성공 : ', result)
      setReviewList(result["result"])
      return result;
    }
  } catch (error) {
    console.log('리뷰 데이터 실패 : ', error)
  }
}


  return <Box py={3}>
      <Grid container spacing={3}>
        {reviewList.map((item, index) => (
          <Grid item md={4} sm={6} xs={12} key={index}>
            <ReviewCard key={index} review={item} />
          </Grid>
          ))}
      </Grid>
    </Box>;
};

export default Review;
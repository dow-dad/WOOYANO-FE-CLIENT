'use client'
import { Box, Card, Grid, Table, styled, Divider, useTheme, TableRow, TableBody, TableHead, Button, Avatar, Stack, Chip } from "@mui/material";
import { FlexBetween, FlexBox } from "components/flexbox";
import { Scrollbar } from "components/scrollbar";
import { H5, H6, Paragraph } from "components/typography"; // CUSTOM ICON COMPONENTS
import DatePicker from "react-datepicker";
import { BodyTableCellV2, BodyTableRow, HeadTableCell } from "page-sections/accounts/common/styles.js"; // CUSTOM UTILS METHOD
import { format } from "utils/currency"; // STYLED COMPONENT
import React, { useState } from "react";
import { ko } from 'date-fns/esm/locale';
import "react-datepicker/dist/react-datepicker.css";


const EarningBox = styled(Box)(({
  theme
}) => ({
  paddingBlock: 12,
  textAlign: "center",
  borderRadius: "8px",
  border: `1px solid ${theme.palette.divider}`
})); // CUSTOM DUMMY DATA SET

const REFER_LIST = [{
  clientname: "우야노 클린",
  status: "입금 예정",
  date: "2023-11-21",
  profit: 1000000
}, {
  clientname: "우야노 클린",
  status: "입금 완료",
  date: "2023-11-21",
  profit: 1000000
}, {
  clientname: "우야노 클린",
  status: "입금 완료",
  date: "2023-11-21",
  profit: 1000000
}, {
  clientname: "우야노 클린",
  status: "입금 완료",
  date: "2023-11-21",
  profit: 2000000
}];

const Referrals = () => {
  const theme = useTheme();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [isOpened, setIsOpened] = useState(false);
  const [openDetail, setOpenDetail] = useState(false);
  const [detailData, setDetailData] = useState();

  const onChangeDate = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const clearDate = () => {
    setStartDate(new Date());
    setEndDate(new Date());
  }

  const hadleDatePicekerModal = () => {
    setIsOpened(!isOpened)
  }

  const hadleAccountDetailModal = () => {
    setOpenDetail(!openDetail)
  }
  console.log(detailData);

  const renderAccountDetail = () => {
    if (detailData) {
      return <>
        <div style={{ background: "black", width: "100vw", height: "100vh", position: "fixed", top: 0, left: 0, zIndex: 1200, opacity: 0.6 }}></div>
        <div style={{ backgroundColor: "white", position: "fixed", width: "70vw", height: "80vh", zIndex: 1201, borderRadius: "10px", left: "15%", top: "10%", padding: "10px" }}>
          <Card sx={{ p: 2 }}>
            <FlexBetween paddingX={1} >
              <Paragraph fontSize={16}>우야노 정산내역</Paragraph>
              <Paragraph fontSize={16} color={"grey.500"}>{detailData.date}</Paragraph>
            </FlexBetween>
            <Stack paddingTop={2} paddingX={1} >
              <Box fontSize={12} color={"grey.500"}>
                입금금액
              </Box>
              <FlexBox gap={1}>
                <Paragraph paddingY={2} fontSize={25} color={"black"} fontWeight={700}>{detailData.profit.toLocaleString()}원</Paragraph>
                <Chip sx={{ mt: 2.8 }} size="small" label={detailData.status} color={detailData.status === "입금 예정" ? "warning" : "success"}></Chip>
              </FlexBox>
            </Stack>
          </Card>

          <Divider />

          <Card sx={{ p: 2 }}>
            <FlexBetween padding={1} >
              <Box fontSize={13} color={"grey.500"}>{detailData.date}~{detailData.date}</Box>
              <Box color={"grey.600"} fontWeight={700}>{detailData.profit.toLocaleString()}원</Box>
            </FlexBetween>
            <Divider />
            <FlexBetween padding={1} >
              <Paragraph fontSize={16} color={"black"} fontWeight={700}>{"(A) 주문 중개"}</Paragraph>
              <Paragraph fontSize={16} color={"black"} fontWeight={700}>{detailData.profit.toLocaleString()}원</Paragraph>
            </FlexBetween>
            <FlexBetween padding={2} paddingTop={0} paddingRight={1}>
              <Paragraph fontSize={14} color={"grey.400"} fontWeight={700}>{"ㄴ 주문 금액"}</Paragraph>
              <Paragraph>{detailData.profit.toLocaleString()}원</Paragraph>
            </FlexBetween>
          </Card>
          <FlexBox gap={2} paddingLeft={1} paddingTop={5} flexWrap={"wrap"}>
            <Button type="button" variant="outlined" onClick={() => { hadleAccountDetailModal() }}>닫기</Button>
          </FlexBox>
        </div>

      </>
    }

  }

  const renderDatePicker = () => {
    return <>
      <div style={{ background: "black", width: "100vw", height: "100vh", position: "fixed", top: 0, left: 0, zIndex: 1200, opacity: 0.6 }}></div>
      <div style={{ backgroundColor: "white", position: "fixed", width: "70vw", height: "80vh", zIndex: 1201, borderRadius: "10px", left: "15%", top: "10%", padding: "5px" }}>
        <DatePicker
          locale={ko}
          selected={startDate}
          onChange={onChangeDate}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          monthsShown={1}
          showPopperArrow={false}
          inline
          maxDate={new Date()}
        // renderCustomHeader={(p) => (
        //   <DatePickerCustomHeaderTwoMonth {...p} />
        // )}
        // renderDayContents={(day, date) => (
        //   <DatePickerCustomDay dayOfMonth={day} date={date} />
        // )}
        />
        <FlexBox gap={2} paddingLeft={1} flexWrap={"wrap"}>
          <Button type="button" variant="contained" onClick={() => { clearDate() }}>초기화</Button>
          <Button type="button" variant="contained" onClick={() => { hadleDatePicekerModal() }}>저장</Button>
          <Button type="button" variant="outlined" onClick={() => { hadleDatePicekerModal() }}>취소</Button>
          <Box>
            {startDate?.toLocaleDateString("ko-kr", {
              year: "numeric",
              month: "short",
              day: "2-digit",
            }) || "Date"}
            {endDate
              ? " - " +
              endDate?.toLocaleDateString("ko-kr", {
                year: "numeric",
                month: "short",
                day: "2-digit",
              })
              : ""}
          </Box>
        </FlexBox>
      </div>

    </>
  }

  return <>
    {isOpened ? renderDatePicker() : null}
    {openDetail ? renderAccountDetail() : null}
    <Card sx={{
      pb: 2,
    }}>
      <H6 fontSize={14} padding={3}>
        정산
      </H6>

      <Divider />

      <Box padding={3}>
        {
          /* DATA VISUALIZATION */
        }
        <Grid container spacing={3} mb={3}>
          <Card sx={{
            border: 1,
            padding: 2,
            display: "flex",
            boxShadow: "none",
            alignItems: "center",
            borderColor: "divider",
            justifyContent: "center",
            marginY: "20px",
            width: "100%",
            m: 2,
            fontSize: 15,

            gap: 3
          }}
          >
            <Avatar src={"/static/components/calender.png"} sx={{
              width: 30,
              height: 30,
              borderRadius: 1,
              // p:1
            }} />
            <Box maxWidth="60%" sx={{
              color: "grey.500",
              fontWeight: 600
            }}
              onClick={() => { hadleDatePicekerModal() }}
            >
              {startDate?.toLocaleDateString("ko-kr", {
                year: "numeric",
                month: "short",
                day: "2-digit",
              }) || "Date"}
              {endDate
                ? " - " +
                endDate?.toLocaleDateString("ko-kr", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                })
                : ""}
            </Box>
            <Button type="button" variant="outlined" sx={{
              ml: 3
            }}>
              조회
            </Button>
          </Card>
        </Grid>
      </Box>



      <Box padding={3}>
        {
          /* DATA VISUALIZATION */
        }
        <Grid container spacing={3} mb={3}>
          <Card sx={{
            border: 1,
            padding: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            boxShadow: "none",
            alignItems: "center",
            borderColor: "divider",
            justifyContent: "center",
            marginY: "20px",
            width: "100%",
            m: 2,
            fontSize: 20
          }}>

            <Box maxWidth="60%" sx={{
              color: "grey.500",
              fontWeight: 600
            }}>
              총 입금금액
            </Box>
            <Box maxWidth="60%" sx={{

              fontWeight: 600
            }}>
              {(4000000).toLocaleString() + "원"}
            </Box>

          </Card>
        </Grid>
      </Box>


      {
        /* REFFED USERS TABLE */
      }
      <FlexBetween px={3} pb={2} >
        <H5 fontSize={14}>정산 내용</H5>
      </FlexBetween>

      <Scrollbar autoHide={false} >
        <Table sx={{
          minWidth: 800
        }}>
          <TableHead sx={{
            backgroundColor: "divider"
          }}>
            <TableRow>
              <HeadTableCell>매장</HeadTableCell>
              <HeadTableCell>상태</HeadTableCell>
              <HeadTableCell>정산 날짜</HeadTableCell>
              <HeadTableCell>금액</HeadTableCell>
              <HeadTableCell></HeadTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {REFER_LIST.map((item, idx) => <BodyTableRow key={idx} onClick={() => { hadleAccountDetailModal(); setDetailData(item); }}>
              <BodyTableCellV2>{item.clientname}</BodyTableCellV2>
              <BodyTableCellV2>{item.status}</BodyTableCellV2>
              <BodyTableCellV2>{item.date}</BodyTableCellV2>
              <BodyTableCellV2 sx={{
                color: "success.main"
              }}>
                {format(item.profit, "0,0.00")}원
              </BodyTableCellV2>
              <BodyTableCellV2>{">"}</BodyTableCellV2>
            </BodyTableRow>)}
          </TableBody>
        </Table>
      </Scrollbar>
    </Card>
  </>
}

export default Referrals;
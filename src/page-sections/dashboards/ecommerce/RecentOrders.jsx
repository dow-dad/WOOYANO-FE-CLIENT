import { Box, Card, Table, TableRow, TableBody, TableHead } from "@mui/material";
import { formatDistanceToNow } from "date-fns";
import { nanoid } from "nanoid"; // CUSTOM COMPONENTS

import { Scrollbar } from "components/scrollbar";
import { MoreButton } from "components/more-button";
import { StatusBadge } from "components/status-badge";
import { Paragraph, Small } from "components/typography";
import { FlexBetween, FlexBox } from "components/flexbox"; // COMMON DASHBOARD RELATED COMPONENTS

import { BodyTableCell, HeadTableCell } from "../_common"; // CUSTOM DUMMY DATA SET

const DATA = [{
  id: nanoid(),
  total: 20000,
  status: "예약대기",
  status_type: 1,
  createdAt: "2023-11-17" ,
  payment: {
    type: "PayPal",
    image: "/static/payment/paypal.svg"
  }
}, {
  id: nanoid(),
  total: 60000,
  status: "예약 확정",
  status_type: 2,
  createdAt: "2023-11-17" ,
  payment: {
    type: "Card",
    image: "/static/payment/master-card.svg"
  }
}, {
  id: nanoid(),
  total: 20000,
  status: "예약 취소",
  status_type: 3,
  createdAt: "2023-11-17" ,
  payment: {
    type: "Skrill",
    image: "/static/payment/skrill.svg"
  }
},{
  id: nanoid(),
  total: 40000,
  status: "예약 거절",
  status_type: 4,
  createdAt: "2023-11-17" ,
  payment: {
    type: "Visa Card",
    image: "/static/payment/visa-2.svg"
  }
  
} ,{
  id: nanoid(),
  total: 30000,
  status: "서비스완료",
  status_type: 5,
  createdAt: "2023-11-17",
  payment: {
    type: "Visa Card",
    image: "/static/payment/visa-2.svg"
  } 
} 
];

const RecentOrders = () => {
  return <Card sx={{
    height: "100%"
  }}>
      <FlexBetween p={3}>
        <Paragraph fontSize={18} fontWeight={600}>
          최근 주문
        </Paragraph>

        <MoreButton size="small" />
      </FlexBetween>

      <Scrollbar>
        <Table sx={{
        minWidth: 500
      }}>
          <TableHead>
            <TableRow >
              <HeadTableCell>예약번호</HeadTableCell>
              <HeadTableCell sx={{pl:2}}>날짜</HeadTableCell>
              <HeadTableCell sx={{pl:2}}>금액</HeadTableCell>
              <HeadTableCell align="center">상태</HeadTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {DATA.map((item, index) => <TableRow key={index}>
                <BodyTableCell>
                  <FlexBox gap={2}>                    
                    <Box>
                      <Paragraph color="text.primary" fontWeight={500}>
                        #{item.id.substring(0, 5)}
                      </Paragraph>
                      {/* <Small>Paid by {item.payment.type}</Small> */}
                    </Box>
                  </FlexBox>
                </BodyTableCell>

                <BodyTableCell>
                  {item.createdAt}
                </BodyTableCell>

                <BodyTableCell>{item.total.toLocaleString()}원</BodyTableCell>

                <BodyTableCell align="center">
                  <StatusBadge type={item.status_type}>{item.status}</StatusBadge>
                </BodyTableCell>
              </TableRow>)}
          </TableBody>
        </Table>
      </Scrollbar>
    </Card>;
};

export default RecentOrders;
"use client";

import { useState } from "react";
import { Button, Card, Stack, Chip, Box, Divider } from "@mui/material";
import { Table, TableBody, TableContainer, TablePagination } from "@mui/material"; // CUSTOM COMPONENTS

import { H5, Paragraph } from "components/typography";
import { Scrollbar } from "components/scrollbar";
import { FlexBetween, FlexBox } from "components/flexbox";
import { TableDataNotFound, TableToolbar } from "components/table";
import { IconWrapper } from "components/icon-wrapper"; // CUSTOM DEFINED HOOK

import useMuiTable, { getComparator, stableSort } from "hooks/useMuiTable";
import useNavigate from "hooks/useNavigate"; // CUSTOM ICON COMPONENTS

import Add from "icons/Add";
import Invoice from "icons/sidebar/Invoice"; // CUSTOM PAGE SECTION COMPONENTS

import InvoiceTableRow from "../InvoiceTableRow";
import InvoiceTableHead from "../InvoiceTableHead";
import InvoiceTableActions from "../InvoiceTableActions"; // CUSTOM DUMMY DATA

import { INVOICE_LIST } from "__fakeData__/invoices";

const InvoiceListPageView = () => {
  let navigate = useNavigate();
  const [invoices, setInvoices] = useState([...INVOICE_LIST]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [detailData, setDetailData] = useState();
  const [invoiceFilter, setInvoiceFilter] = useState({
    search: "",
    status: ""
  });

  const handleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  const renderServiceDetail = () => {

    if (detailData) {
      return <>
        <div style={{ background: "black", width: "100vw", height: "100vh", position: "fixed", top: 0, left: 0, zIndex: 1200, opacity: 0.6 }}></div>
        <div style={{ backgroundColor: "white", position: "fixed", width: "70vw", height: "80vh", zIndex: 1201, borderRadius: "10px", left: "15%", top: "10%", padding: "5px" }}>
          <Card sx={{ p: 2 }}>
            <Paragraph fontSize={22} fontWeight={700}>서비스 상세 내역</Paragraph>
            <Stack paddingTop={2} >
              <FlexBox gap={2}>
                <Paragraph fontSize={20} color={"black"} fontWeight={700}>서비스 상태</Paragraph>
                <Chip size="small" label={detailData.status} color={detailData.status === "서비스완료" ? "success" : detailData.status === "업체예약거절" || detailData.status === "고객예약취소" ? "error" : detailData.status === "예약확정" ? "primary" : detailData.status === "예약대기" ? "warning" : "default"}></Chip>
              </FlexBox>
            </Stack>
            <FlexBetween paddingTop={2} >
              <Paragraph fontSize={20} color={"black"} fontWeight={700}>예약번호</Paragraph>
              <Paragraph>{detailData.id}</Paragraph>
            </FlexBetween>
            <FlexBetween paddingTop={2} >
              <Paragraph fontSize={20} color={"black"} fontWeight={700}>작업자</Paragraph>
              <Paragraph>{detailData.name}</Paragraph>
            </FlexBetween>
            <FlexBetween paddingTop={2} >
              <Paragraph fontSize={20} color={"black"} fontWeight={700}>유저 이메일</Paragraph>
              <Paragraph>{detailData.email}</Paragraph>
            </FlexBetween>
            <FlexBetween paddingTop={2} >
              <Paragraph fontSize={20} color={"black"} fontWeight={700}>서비스 주소</Paragraph>
              <Paragraph>부산 해운대구 우동 리더스마크빌 스파로스아카데미</Paragraph>
            </FlexBetween>
            <FlexBetween paddingTop={2} >
              <Paragraph fontSize={20} color={"black"} fontWeight={700}>예약 날짜</Paragraph>
              <Paragraph> 2023-11-22</Paragraph>
            </FlexBetween>
            <FlexBetween paddingTop={2} >
              <Paragraph fontSize={20} color={"black"} fontWeight={700}>서비스 시작시간</Paragraph>
              <Paragraph>11:00</Paragraph>
            </FlexBetween>
            <FlexBetween paddingTop={2} >
              <Paragraph fontSize={20} color={"black"} fontWeight={700}>서비스 종료</Paragraph>
              <Paragraph>13:00</Paragraph>
            </FlexBetween>
            <FlexBetween paddingTop={2}>
              <Paragraph fontSize={20} color={"black"} fontWeight={700}>금액</Paragraph>
              <Paragraph>50,000원</Paragraph>
            </FlexBetween>
            <Stack paddingTop={2}>
              <Box fontSize={20} color={"black"} fontWeight={700}>
                요청사항
              </Box>
              <Card sx={{ px: 2, pt: 1 }}>
                <Box>
                  우리 가정에서는 노인 가족 구성원이 계시는데, 일상적인 가사 업무와 보조가 필요합니다.
                  주로 화, 목, 토요일 오전 시간에 도움이 필요하며, 주로 정리 정돈, 식사 도움, 산책 도움 등이 필요합니다.
                  노인 가족 구성원은 기본적인 생활 동작이 어려워져서 외부 도움이 필요한 상태입니다.
                  성실하고 존중심이 높으신 가사도우미분을 찾고 있습니다. 상세한 내용은 상담을 통해 자세히 논의하고자 합니다.
                  가능하시면 연락 주시기 바랍니다. 감사합니다.
                </Box>
              </Card>

            </Stack>

          </Card>

          <Divider />

          <FlexBox paddingTop={3} gap={2} paddingLeft={1} flexWrap={"wrap"}>
            {detailData.status === "예약대기"
              ?
              <>
                <Button type="button" variant="contained" onClick={() => { handleModal() }}>수락</Button>
                <Button type="button" variant="contained" sx={{ backgroundColor: "firebrick" }} onClick={() => { handleModal() }}>거절</Button>
                <Button type="button" variant="outlined" onClick={() => { handleModal() }}>닫기</Button>
              </>
              : detailData.status === "예약확정"
              ?
                <>
                  <Button type="button" variant="contained" sx={{ backgroundColor: "deeppink" }} onClick={() => { handleModal() }}>취소</Button>
                  <Button type="button" variant="outlined" onClick={() => { handleModal() }}>닫기</Button>
                </>
              :
                <Button type="button" variant="outlined" onClick={() => { handleModal() }}>닫기</Button>
            }


          </FlexBox>
        </div>
      </>
    }

  }


  const handleChangeFilter = (key, value) => {
    setInvoiceFilter(state => ({
      ...state,
      [key]: value
    }));
  };

  const {
    page,
    order,
    orderBy,
    selected,
    rowsPerPage,
    isSelected,
    handleSelectRow,
    handleChangePage,
    handleRequestSort,
    handleSelectAllRows,
    handleChangeRowsPerPage
  } = useMuiTable({
    defaultOrderBy: "name"
  });
  let filteredInvoices = stableSort(invoices, getComparator(order, orderBy)).filter(item => {
    if (invoiceFilter.status === "예약대기") return item.status === "예약대기";
    else if (invoiceFilter.status === "예약확정") return item.status === "예약확정";
    else if (invoiceFilter.status === "고객예약취소") return item.status === "고객예약취소";
    else if (invoiceFilter.status === "업체예약거절") return item.status === "업체예약거절";
    else if (invoiceFilter.status === "서비스완료") return item.status === "서비스완료";
    return item.name.toLowerCase().includes(invoiceFilter.search.toLowerCase()) || item.email.toLowerCase().includes(invoiceFilter.search.toLowerCase());
  });

  const handleDeleteInvoice = id => {
    setInvoices(state => state.filter(item => item.id !== id));
  };

  const handleAllDeleteInvoice = () => {
    setInvoices(state => state.filter(item => !selected.includes(item.id)));
    handleSelectAllRows([])();
  };

  return <>
    {isModalOpen ? renderServiceDetail() : null}
    <Card>
      <FlexBetween flexWrap="wrap" gap={2} p={2} pt={2.5}>
        <Stack direction="row" alignItems="center">
          <IconWrapper>
            <Invoice color="primary" />
          </IconWrapper>

          <H5 fontSize={16}>주문 내역</H5>
        </Stack>


      </FlexBetween>

      {
        /* INVOICE FILTER ACTION BAR */
      }
      <InvoiceTableActions filter={invoiceFilter} handleChangeFilter={handleChangeFilter} />

      {
        /* TABLE ROW SELECTION HEADER  */
      }



      {
        /* TABLE HEAD & BODY ROWS */
      }
      <TableContainer>
        <Scrollbar autoHide={false}>
          <Table sx={{
            minWidth: 900
          }}>
            {
              /* TABLE HEAD SECTION */
            }
            <InvoiceTableHead order={order} orderBy={orderBy} numSelected={selected.length} rowCount={filteredInvoices.length} onRequestSort={handleRequestSort} onSelectAllRows={handleSelectAllRows(filteredInvoices.map(row => row.id))} />

            {
              /* TABLE BODY & DATA SECTION */
            }
            <TableBody>
              {filteredInvoices.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(invoice => <InvoiceTableRow key={invoice.id} invoice={invoice} handleSelectRow={handleSelectRow} handleModal={handleModal} setDetailData={setDetailData} isSelected={isSelected(invoice.id)} handleDeleteInvoice={handleDeleteInvoice} />)}

              {filteredInvoices.length === 0 && <TableDataNotFound />}
            </TableBody>
          </Table>
        </Scrollbar>
      </TableContainer>

      {
        /* TABLE PAGINATION SECTION */
      }
      <TablePagination page={page} component="div" rowsPerPage={rowsPerPage} count={filteredInvoices.length} onPageChange={handleChangePage} rowsPerPageOptions={[5, 10, 25]} onRowsPerPageChange={handleChangeRowsPerPage} />
    </Card>
  </>
}

export default InvoiceListPageView;
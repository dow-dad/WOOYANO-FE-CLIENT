"use client";

import { useState } from "react";
import { Box, Card, Grid, Stack, Table, styled, Avatar, TableRow, TableBody, TableCell, TableHead, TableContainer, TablePagination, TableSortLabel } from "@mui/material"; // CUSTOM COMPONENTS

import { H6 } from "components/typography";
import { Scrollbar } from "components/scrollbar";
import { TableDataNotFound } from "components/table"; // CUSTOM PAGE SECTION COMPONENTS


import WorkerDetails from "page-sections/workers/WorkerDetails"; // CUSTOM DEFINED HOOK

import useMuiTable, { getComparator, stableSort } from "hooks/useMuiTable"; // CUSTOM UTILS METHOD

import { isDark } from "utils/constants"; // CUSTOM DUMMY DATA

import { WORKER_LIST } from "__fakeData__/worker"; // STYLED COMPONENTS


const HeadTableCell = styled(TableCell)(({
  theme
}) => ({
  fontSize: 14,
  fontWeight: 600,
  paddingBlock: 14,
  color: theme.palette.text.secondary,
  backgroundColor: theme.palette.grey[isDark(theme) ? 700 : 100],
  borderBottom: `1px solid ${theme.palette.grey[isDark(theme) ? 700 : 100]}`,
  "&:first-of-type": {
    paddingLeft: 24
  },
  "&:last-of-type": {
    paddingRight: 24
  }
}));
const BodyTableCell = styled(HeadTableCell)({
  fontSize: 12,
  fontWeight: 400,
  backgroundColor: "transparent"
});
const BodyTableRow = styled(TableRow)(({
  theme,
  active
}) => ({
  cursor: "pointer",
  ...(active && {
    backgroundColor: theme.palette.grey[isDark(theme) ? 700 : 100]
  })
}));
const headCells = [{
  id: "이름",
  numeric: true,
  disablePadding: false,
  label: "상품명"
}, {
  id: "평일",
  numeric: true,
  disablePadding: false,
  label: "생성일"
},{
  id: "토요일",
  numeric: true,
  disablePadding: false,
  label: "최소시간"
}, {
  id: "일요일",
  numeric: true,
  disablePadding: false,
  label: "가격"
}];

const WorkerList2PageView = () => {
  const [workers] = useState([...WORKER_LIST]);
  const [searchFilter, setSearchFilter] = useState("");
  const [selectedWorker, setSelectedWorker] = useState();
  const {
    page,
    order,
    orderBy,
    rowsPerPage,
    handleChangePage,
    handleRequestSort,
    handleChangeRowsPerPage
  } = useMuiTable({
    defaultOrderBy: "name",
    defaultRowsPerPage: 10
  });
  let filteredWorkers = stableSort(workers, getComparator(order, orderBy)).filter(item => {
    if (searchFilter) return item.name.toLowerCase().includes(searchFilter.toLowerCase());else return true;
  });
  return <Box pt={2} pb={4}>
      <Grid container>
        <Grid item lg={9} md={8} xs={12}>
          <Card sx={{
          height: "100%",
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
          boxShadow: "2px 4px 20px rgba(0, 0, 0, 0.05)"
        }}>
            {
            /* SEARCH BOX AREA */
          }
            {/* <Box px={3}>
              <SearchArea value={searchFilter} onChange={e => setSearchFilter(e.target.value)} gridRoute="/dashboard/workers/worker-grid-2" listRoute="/dashboard/workers/worker-list-2" />
            </Box> */}

            {
            /* TABLE HEAD & BODY ROWS */
          }
            <TableContainer>
              <Scrollbar autoHide={false}>
                <Table>
                  {
                  /* TABLE HEADER */
                }
                  <TableHead>
                    <TableRow>
                      {headCells.map(headCell => <HeadTableCell key={headCell.id} padding={headCell.disablePadding ? "none" : "normal"} sortDirection={orderBy === headCell.id ? order : false}>
                          <TableSortLabel active={orderBy === headCell.id} onClick={e => handleRequestSort(e, headCell.id)} direction={orderBy === headCell.id ? order : "asc"}>
                            {headCell.label}
                          </TableSortLabel>
                        </HeadTableCell>)}
                    </TableRow>
                  </TableHead>

                  {
                  /* TABLE BODY AND DATA */
                }
                  <TableBody>
                    {filteredWorkers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(worker => <BodyTableRow key={worker.id} active={selectedWorker?.id === worker.id ? 1 : 0} onClick={() => setSelectedWorker(worker)}>
                          <BodyTableCell>
                            <Stack direction="row" alignItems="center" spacing={1}>
                              <Avatar src={worker.avatar} sx={{
                          borderRadius: "20%",
                          backgroundColor: "grey.100"
                        }} />

                              <H6 fontSize={12} color="text.primary">
                                {worker.name}
                              </H6>
                            </Stack>
                            {/* 테이블 표시 사항 */}
                          </BodyTableCell>
                          <BodyTableCell>{worker.workingInfo[0][0] !== "" ? `${worker.workingInfo[0][0]}~${worker.workingInfo[0][1]}` : '휴무'}</BodyTableCell>
                          <BodyTableCell>{worker.workingInfo[1][0] !== "" ? `${worker.workingInfo[1][0]}~${worker.workingInfo[1][1]}` : '휴무'}</BodyTableCell>
                          <BodyTableCell>{worker.workingInfo[2][0] !== "" ? `${worker.workingInfo[2][0]}~${worker.workingInfo[2][1]}` : '휴무'}</BodyTableCell>
                          
                        </BodyTableRow>)}

                    {filteredWorkers.length === 0 && <TableDataNotFound />}
                  </TableBody>
                </Table>
              </Scrollbar>
            </TableContainer>

            {
            /* TABLE PAGINATION SECTION */
          }
            <TablePagination page={page} component="div" rowsPerPage={rowsPerPage} count={filteredWorkers.length} onPageChange={handleChangePage} rowsPerPageOptions={[5, 10, 25]} onRowsPerPageChange={handleChangeRowsPerPage} />
          </Card>
        </Grid>

        {
        /* USER DETAILS INFO */
      }
        <Grid item lg={3} md={4} xs={12}>
          <WorkerDetails data={selectedWorker} />
        </Grid>
      </Grid>
    </Box>;
};

export default WorkerList2PageView;
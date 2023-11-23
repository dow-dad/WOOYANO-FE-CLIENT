"use client";

import { useState } from "react";
import { Box, Card, Table, TableBody, TableContainer, TablePagination } from "@mui/material"; // CUSTOM COMPONENTS

import { Scrollbar } from "components/scrollbar";
import { TableDataNotFound, TableToolbar } from "components/table"; // CUSTOM PAGE SECTION COMPONENTS

import SearchArea from "../SearchArea";
import HeadingArea from "../HeadingArea";
import WorkerTableRow from "../WorkerTableRow";
import WorkerTableHead from "../WorkerTableHead"; // CUSTOM DEFINED HOOK

import useMuiTable, { getComparator, stableSort } from "hooks/useMuiTable"; // CUSTOM DUMMY DATA

import { WORKER_LIST } from "__fakeData__/worker";

const WorkerList1PageView = () => {
  const [workers, setWorkers] = useState([...WORKER_LIST]);
  const [workerFilter, setWorkersFilter] = useState({
    role: "",
    search: ""
  });
  const {
    page,
    order,
    orderBy,
    selected,
    isSelected,
    rowsPerPage,
    handleSelectRow,
    handleChangePage,
    handleRequestSort,
    handleSelectAllRows,
    handleChangeRowsPerPage
  } = useMuiTable({
    defaultOrderBy: "name"
  });

  const handleChangeFilter = (key, value) => {
    setWorkerFilter(state => ({ ...state,
      [key]: value
    }));
  };

  const handleChangeTab = (_, newValue) => {
    handleChangeFilter("role", newValue);
  };

  let filteredWorkers = stableSort(workers, getComparator(order, orderBy)).filter(item => {
    if (workerFilter.role) return item.role.toLowerCase() === workerFilter.role;else if (workerFilter.search) return item.name.toLowerCase().includes(workerFilter.search.toLowerCase());else return true;
  });

  const handleDeleteWorker = id => {
    setWorkers(state => state.filter(item => item.id !== id));
  };

  const handleAllWorkerDelete = () => {
    setWorkers(state => state.filter(item => !selected.includes(item.id)));
    handleSelectAllRows([])();
  };

  return <Box pt={2} pb={4}>
      <Card>
        {/* <Box px={2} pt={2}>
          <HeadingArea value={workerFilter.role} changeTab={handleChangeTab} />

          <SearchArea value={workerFilter.search} gridRoute="/dashboard/workers/worker-grid-1" listRoute="/dashboard/workers/worker-list-1" onChange={e => handleChangeFilter("search", e.target.value)} />
        </Box> */}

        {
        /* TABLE ROW SELECTION HEADER  */
      }
        {selected.length > 0 && <TableToolbar selected={selected.length} handleDeleteRows={handleAllWorkerDelete} />}

        {
        /* TABLE HEAD & BODY ROWS */
      }
        <TableContainer>
          <Scrollbar autoHide={false}>
            <Table>
              <WorkerTableHead order={order} orderBy={orderBy} numSelected={selected.length} rowCount={filteredWorkers.length} onRequestSort={handleRequestSort} onSelectAllRows={handleSelectAllRows(filteredWorkers.map(row => row.id))} />

              <TableBody>
                {filteredWorkers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(worker => <WorkerTableRow key={worker.id} worker={worker} isSelected={isSelected(worker.id)} handleSelectRow={handleSelectRow} handleDeleteWorker={handleDeleteWorker} />)}

                {filteredWorkers.length === 0 && <TableDataNotFound />}
              </TableBody>
            </Table>
          </Scrollbar>
        </TableContainer>

        {
        /* PAGINATION SECTION */
      }
        <Box padding={1}>
          <TablePagination page={page} component="div" rowsPerPage={rowsPerPage} count={filteredWorkers.length} onPageChange={handleChangePage} rowsPerPageOptions={[5, 10, 25]} onRowsPerPageChange={handleChangeRowsPerPage} />
        </Box>
      </Card>
    </Box>;
};

export default WorkerList1PageView;
"use client";

import { useState } from "react";
import { Box, Card, Table, TableBody, TableContainer, TablePagination } from "@mui/material"; // CUSTOM COMPONENTS

import { Scrollbar } from "components/scrollbar";
import { TableDataNotFound, TableToolbar } from "components/table"; // CUSTOM PAGE SECTION COMPONENTS

import SearchArea from "../SearchArea";
import HeadingArea from "../HeadingArea";
import UserTableRow from "../UserTableRow";
import UserTableHead from "../UserTableHead"; // CUSTOM DEFINED HOOK

import useMuiTable, { getComparator, stableSort } from "hooks/useMuiTable"; // CUSTOM DUMMY DATA

import { USER_LIST } from "__fakeData__/users";

const UserList1PageView = () => {
  const [users, setUsers] = useState([...USER_LIST]);
  const [userFilter, setUserFilter] = useState({
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
    setUserFilter(state => ({ ...state,
      [key]: value
    }));
  };

  const handleChangeTab = (_, newValue) => {
    handleChangeFilter("role", newValue);
  };

  let filteredUsers = stableSort(users, getComparator(order, orderBy)).filter(item => {
    if (userFilter.role) return item.role.toLowerCase() === userFilter.role;else if (userFilter.search) return item.name.toLowerCase().includes(userFilter.search.toLowerCase());else return true;
  });

  const handleDeleteUser = id => {
    setUsers(state => state.filter(item => item.id !== id));
  };

  const handleAllUserDelete = () => {
    setUsers(state => state.filter(item => !selected.includes(item.id)));
    handleSelectAllRows([])();
  };

  return <Box pt={2} pb={4}>
      <Card>
        <Box px={2} pt={2}>
          <HeadingArea value={userFilter.role} changeTab={handleChangeTab} />

          <SearchArea value={userFilter.search} gridRoute="/dashboard/users/user-grid-1" listRoute="/dashboard/users/user-list-1" onChange={e => handleChangeFilter("search", e.target.value)} />
        </Box>

        {
        /* TABLE ROW SELECTION HEADER  */
      }
        {selected.length > 0 && <TableToolbar selected={selected.length} handleDeleteRows={handleAllUserDelete} />}

        {
        /* TABLE HEAD & BODY ROWS */
      }
        <TableContainer>
          <Scrollbar autoHide={false}>
            <Table>
              <UserTableHead order={order} orderBy={orderBy} numSelected={selected.length} rowCount={filteredUsers.length} onRequestSort={handleRequestSort} onSelectAllRows={handleSelectAllRows(filteredUsers.map(row => row.id))} />

              <TableBody>
                {filteredUsers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(user => <UserTableRow key={user.id} user={user} isSelected={isSelected(user.id)} handleSelectRow={handleSelectRow} handleDeleteUser={handleDeleteUser} />)}

                {filteredUsers.length === 0 && <TableDataNotFound />}
              </TableBody>
            </Table>
          </Scrollbar>
        </TableContainer>

        {
        /* PAGINATION SECTION */
      }
        <Box padding={1}>
          <TablePagination page={page} component="div" rowsPerPage={rowsPerPage} count={filteredUsers.length} onPageChange={handleChangePage} rowsPerPageOptions={[5, 10, 25]} onRowsPerPageChange={handleChangeRowsPerPage} />
        </Box>
      </Card>
    </Box>;
};

export default UserList1PageView;
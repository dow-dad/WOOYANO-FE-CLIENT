"use client";

import { useState } from "react";
import { Box, Card, Table, TableRow, TableBody, TableHead, TablePagination } from "@mui/material";
import { flexRender, useReactTable, getCoreRowModel, getFilteredRowModel, getPaginationRowModel } from "@tanstack/react-table"; // CUSTOM PAGE SECTION COMPONENT

import TableActions from "../TableActions";
import TableColumnFilter from "../TableColumnFilter"; // CUSTOM COMPONENTS

import { Scrollbar } from "components/scrollbar"; // CUSTOM DUMMY DATA

import { DATA } from "__fakeData__/data-tables"; // CUSTOM STYLED COMPONENTS

import { BodyTableRow, BodyTableCell, HeadTableCell } from "../styles"; // TABLE COLUMN SHAPE

import { columns } from "../columns";

const DataTable1PageView = () => {
  const [userList, setUserList] = useState([...DATA]);
  const [rowSelection, setRowSelection] = useState({});
  const table = useReactTable({
    columns,
    data: userList,
    enableRowSelection: true,
    state: {
      rowSelection
    },
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel()
  }); // SELECTED ROW DATA LIST

  const SELECTED_ROWS = table.getSelectedRowModel().flatRows; // ANY SPECIFIC COLUMN FILTERING EXIST OR NOT

  const HAS_COLUMN_FILTER = table.getState().columnFilters.length; // HANDLE GLOBAL SEARCH BASED ON NAME

  const handleSearch = text => {
    if (text) {
      const updatedUserList = userList.filter(item => {
        return item.name.toLowerCase().includes(text.toLowerCase());
      });
      setUserList(updatedUserList);
    } else {
      setUserList([...DATA]);
    }
  }; // RESET ALL COLUMN FILTERING IF EXIST


  const handleResetColumnFilter = () => {
    table.resetColumnFilters();
  }; // HANDLE DELETE SELECTED ROW


  const handleDeleteRow = () => {
    const userIdList = SELECTED_ROWS.map(row => row.original.id);
    const updatesUserList = userList.filter(user => !userIdList.includes(user.id));
    setUserList(updatesUserList);
    setRowSelection({});
  };

  return <Box pt={2} pb={4}>
      {
      /* DATA TABLE ACTIONS */
    }
      <TableActions rowSelected={SELECTED_ROWS.length} hasColumnFilter={HAS_COLUMN_FILTER} handleSearch={handleSearch} handleDeleteRow={handleDeleteRow} handleResetColumnFilter={handleResetColumnFilter} />

      {
      /* DATA TABLE */
    }
      <Card sx={{
      marginTop: 3,
      pt: 1
    }}>
        <Scrollbar>
          <Table>
            <TableHead>
              {table.getHeaderGroups().map(headerGroup => <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map(header => {
                return <HeadTableCell key={header.id} sx={{
                  minWidth: header.getSize()
                }}>
                        {header.isPlaceholder ? null : <>
                            {flexRender(header.column.columnDef.header, header.getContext())}

                            {
                      /* GET COLUMN BASED FILTER */
                    }
                            {header.column.getCanFilter() ? <TableColumnFilter column={header.column} table={table} /> : null}
                          </>}
                      </HeadTableCell>;
              })}
                </TableRow>)}
            </TableHead>

            <TableBody>
              {table.getRowModel().rows.map(row => {
              return <BodyTableRow selected_row={rowSelection[row.id] ? 1 : 0} key={row.id}>
                    {row.getVisibleCells().map(cell => {
                  return <BodyTableCell key={cell.id}>
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </BodyTableCell>;
                })}
                  </BodyTableRow>;
            })}
            </TableBody>
          </Table>
        </Scrollbar>

        {
        /* TABLE PAGINATION SECTION */
      }
        <TablePagination component="div" rowsPerPageOptions={[5, 10, 25]} page={table.getState().pagination.pageIndex} rowsPerPage={table.getState().pagination.pageSize} count={table.getFilteredRowModel().rows.length} onPageChange={(_, page) => table.setPageIndex(page)} onRowsPerPageChange={e => table.setPageSize(e.target.value ? Number(e.target.value) : 5)} />
      </Card>
    </Box>;
};

export default DataTable1PageView;
"use client";

import { useState } from "react";
import { Box, Card, Table, Button, TableBody, TablePagination, TextField } from "@mui/material";
import { Search, Add } from "@mui/icons-material"; // CUSTOM COMPONENTS

import { H6 } from "components/typography";
import { FlexBox } from "components/flexbox";
import { Scrollbar } from "components/scrollbar";
import { TableDataNotFound, TableToolbar } from "components/table";
import FileManagerTableRow from "../FileManagerTableRow";
import FileManagerTableHead from "../FileManagerTableHead"; // CUSTOM DEFINED HOOK

import useMuiTable from "hooks/useMuiTable"; // STYLED COMPONENTS

import { HeadingWrapper } from "../styles"; // CUSTOM DUMMY DATA

import { DATA } from "../data";

const FileManagerPageView = () => {
  const [files, setFiles] = useState([...DATA]);
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

  const handleDeleteFile = id => {
    setFiles(state => state.filter(item => item.id !== id));
  };

  const handleAllFilesDelete = () => {
    setFiles(state => state.filter(item => !selected.includes(item.id)));
    handleSelectAllRows([])();
  };

  return <Box pt={2} pb={4}>
      <Card>
        {
        /* HEADING & SEARCH SECTION */
      }
        <HeadingWrapper>
          <H6 fontSize={18} fontWeight={600}>
            File Manager
          </H6>

          <FlexBox className="search" justifyContent="end" gap={2} flex={1}>
            <TextField placeholder="Search Folder" InputProps={{
            startAdornment: <Search />
          }} />
            <Button startIcon={<Add />}>New Folder</Button>
          </FlexBox>
        </HeadingWrapper>

        {
        /* TABLE ROW SELECTION HEADER  */
      }
        {selected.length > 0 && <TableToolbar selected={selected.length} handleDeleteRows={handleAllFilesDelete} />}

        {
        /* TABLE SECTION */
      }
        <Scrollbar autoHide={false}>
          <Table sx={{
          minWidth: 700
        }}>
            {
            /* TABLE HEAD SECTION */
          }
            <FileManagerTableHead order={order} orderBy={orderBy} numSelected={selected.length} rowCount={files.length} onRequestSort={handleRequestSort} onSelectAllRows={handleSelectAllRows(files.map(row => row.id))} />

            {
            /* TABLE BODY SECTION */
          }
            <TableBody>
              {files.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(file => <FileManagerTableRow key={file.id} data={file} handleSelectRow={handleSelectRow} isSelected={isSelected(file.id)} handleDeleteFile={handleDeleteFile} />)}

              {files.length === 0 && <TableDataNotFound />}
            </TableBody>
          </Table>
        </Scrollbar>

        {
        /* PAGINATION SECTION */
      }
        <TablePagination page={page} component="div" rowsPerPage={rowsPerPage} count={files.length} onPageChange={handleChangePage} rowsPerPageOptions={[5, 10, 25]} onRowsPerPageChange={handleChangeRowsPerPage} />
      </Card>
    </Box>;
};

export default FileManagerPageView;
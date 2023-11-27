import { useMemo } from "react";
import { Delete, FilterList } from "@mui/icons-material";
import { Paper, Table, Toolbar, Tooltip, TableRow, Checkbox, TableBody, TableCell, TableHead, IconButton, TableContainer, TableSortLabel, TablePagination } from "@mui/material";
import { visuallyHidden } from "@mui/utils";
import { Paragraph, Span } from "components/typography";
import { Scrollbar } from "components/scrollbar";
import { isDark } from "utils/constants";
import useMuiTable, { getComparator, stableSort } from "hooks/useMuiTable"; // ==============================================================
//  all typescript type and interface

// ==============================================================
// dummy data
const createData = (name, calories, fat, carbs, protein) => ({
  name,
  calories,
  fat,
  carbs,
  protein
});

const rows = [createData("Oreo", 437, 18.0, 63, 4.0), createData("Donut", 452, 25.0, 51, 4.9), createData("Eclair", 262, 16.0, 24, 6.0), createData("Cupcake", 305, 3.7, 67, 4.3), createData("KitKat", 518, 26.0, 65, 7.0), createData("Nougat", 360, 19.0, 9, 37.0), createData("Lollipop", 392, 0.2, 98, 0.0), createData("Honeycomb", 408, 3.2, 87, 6.5), createData("Marshmallow", 318, 0, 81, 2.0), createData("Jelly Bean", 375, 0.0, 94, 0.0), createData("Gingerbread", 356, 16.0, 49, 3.9), createData("Frozen yoghurt", 159, 6.0, 24, 4.0), createData("Ice cream sandwich", 237, 9.0, 37, 4.3)]; // ==============================================================

const headCells = [{
  id: "name",
  numeric: false,
  disablePadding: true,
  label: "Dessert (100g serving)"
}, {
  id: "calories",
  numeric: true,
  disablePadding: false,
  label: "Calories"
}, {
  id: "fat",
  numeric: true,
  disablePadding: false,
  label: "Fat (g)"
}, {
  id: "carbs",
  numeric: true,
  disablePadding: false,
  label: "Carbs (g)"
}, {
  id: "protein",
  numeric: true,
  disablePadding: false,
  label: "Protein (g)"
}];

function CustomTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort
  } = props;

  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };

  return <TableHead sx={{
    backgroundColor: theme => isDark(theme) ? "grey.700" : "grey.100"
  }}>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox size="small" color="primary" onChange={onSelectAllClick(rows.map(n => n.name))} checked={rowCount > 0 && numSelected === rowCount} indeterminate={numSelected > 0 && numSelected < rowCount} />
        </TableCell>

        {headCells.map(headCell => <TableCell key={headCell.id} align={headCell.numeric ? "right" : "left"} padding={headCell.disablePadding ? "none" : "normal"} sortDirection={orderBy === headCell.id ? order : false} sx={{
        color: "text.primary",
        fontWeight: 600
      }}>
            <TableSortLabel active={orderBy === headCell.id} onClick={createSortHandler(headCell.id)} direction={orderBy === headCell.id ? order : "asc"}>
              {headCell.label}
              {orderBy === headCell.id ? <Span sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Span> : null}
            </TableSortLabel>
          </TableCell>)}
      </TableRow>
    </TableHead>;
}

function TableToolbar({
  numSelected
}) {
  return <Toolbar sx={{
    backgroundColor: numSelected ? "primary.100" : "transparent"
  }}>
      {numSelected > 0 ? <Paragraph fontWeight={600} flex="1 1 100%" color="inherit">
          {numSelected} selected
        </Paragraph> : <Paragraph fontWeight={600} flex="1 1 100%" id="tableTitle">
          Nutrition
        </Paragraph>}

      {numSelected > 0 ? <Tooltip title="Delete">
          <IconButton>
            <Delete />
          </IconButton>
        </Tooltip> : <Tooltip title="Filter list">
          <IconButton>
            <FilterList />
          </IconButton>
        </Tooltip>}
    </Toolbar>;
}

const SortSelectedTable = () => {
  const {
    order,
    orderBy,
    emptyRows,
    handleChangePage,
    handleChangeRowsPerPage,
    handleRequestSort,
    handleSelectAllRows,
    handleSelectRow,
    isSelected,
    page,
    rowsPerPage,
    selected
  } = useMuiTable({});
  const visibleRows = useMemo(() => stableSort(rows, getComparator(order, orderBy)).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage), [order, orderBy, page, rowsPerPage]);
  return <Paper sx={{
    width: "100%",
    boxShadow: 2,
    borderRadius: 2,
    overflow: "hidden"
  }}>
      <TableToolbar numSelected={selected.length} />

      <TableContainer>
        <Scrollbar>
          <Table sx={{
          minWidth: 750
        }}>
            <CustomTableHead order={order} orderBy={orderBy} rowCount={rows.length} numSelected={selected.length} onRequestSort={handleRequestSort} onSelectAllClick={handleSelectAllRows} />

            <TableBody>
              {visibleRows.map((row, index) => {
              const isItemSelected = isSelected(row.name);
              const labelId = `enhanced-table-checkbox-${index}`;
              return <TableRow hover tabIndex={-1} key={row.name} role="checkbox" selected={isItemSelected} aria-checked={isItemSelected} onClick={event => handleSelectRow(event, row.name)} sx={{
                cursor: "pointer"
              }}>
                    <TableCell padding="checkbox">
                      <Checkbox color="primary" size="small" checked={isItemSelected} />
                    </TableCell>

                    <TableCell component="th" id={labelId} scope="row" padding="none">
                      {row.name}
                    </TableCell>

                    <TableCell padding="normal" align="right">
                      {row.calories}
                    </TableCell>

                    <TableCell padding="normal" align="right">
                      {row.fat}
                    </TableCell>

                    <TableCell padding="normal" align="right">
                      {row.carbs}
                    </TableCell>

                    <TableCell padding="normal" align="right">
                      {row.protein}
                    </TableCell>
                  </TableRow>;
            })}

              {emptyRows(page, rowsPerPage, rows.length) > 0 && <TableRow>
                  <TableCell colSpan={6} />
                </TableRow>}
            </TableBody>
          </Table>
        </Scrollbar>
      </TableContainer>

      <TablePagination page={page} component="div" count={rows.length} rowsPerPage={rowsPerPage} onPageChange={handleChangePage} rowsPerPageOptions={[5, 10, 25]} onRowsPerPageChange={handleChangeRowsPerPage} />
    </Paper>;
};

export default SortSelectedTable;
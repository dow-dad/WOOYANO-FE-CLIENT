import { Checkbox, TableCell, TableHead, TableRow, TableSortLabel } from "@mui/material";
import { visuallyHidden } from "@mui/utils"; // CUSTOM COMPONENT

import { Span } from "components/typography"; // CUSTOM UTILS METHOD

import { isDark } from "utils/constants"; // ==============================================================

// ==============================================================
// TABLE HEAD COLUMN DATA
const headCells = [{
  id: "name",
  numeric: true,
  disablePadding: false,
  label: "작업자 이름"
}, {
  id: "email",
  numeric: true,
  disablePadding: false,
  label: "유저 이메일"
}, {
  id: "date",
  numeric: true,
  disablePadding: false,
  label: "서비스 요청 날짜"
}, {
  id: "status",
  numeric: true,
  disablePadding: false,
  label: "서비스 상태"
}, {
  id: "",
  numeric: true,
  disablePadding: false,
  label: "상세보기"
}];

const InvoiceTableHead = props => {
  const {
    order,
    orderBy,
    onRequestSort,
    rowCount,
    numSelected,
    onSelectAllRows
  } = props;

  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };

  return <TableHead sx={{
    backgroundColor: theme => isDark(theme) ? "grey.700" : "grey.100"
  }}>
      <TableRow>
        

        {headCells.map(headCell => <TableCell key={headCell.id} padding={headCell.disablePadding ? "none" : "normal"} sortDirection={orderBy === headCell.id ? order : false} sx={{
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
};

export default InvoiceTableHead;
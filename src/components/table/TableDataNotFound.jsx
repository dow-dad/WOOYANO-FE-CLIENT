import { TableCell, TableRow } from "@mui/material"; // CUSTOM COMPONENT

import { FlexRowAlign } from "components/flexbox";

const TableDataNotFound = () => {
  return <TableRow>
      <TableCell colSpan={7}>
        <FlexRowAlign m={2} fontSize={18} minHeight={300} fontWeight={700} borderRadius={2} bgcolor="action.selected">
          해당 내용의 정보가 없습니다.
        </FlexRowAlign>
      </TableCell>
    </TableRow>;
};

export default TableDataNotFound;
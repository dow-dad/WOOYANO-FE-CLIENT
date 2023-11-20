import { TableCell, TableRow } from "@mui/material"; // CUSTOM COMPONENT

import { FlexRowAlign } from "components/flexbox";

const TableDataNotFound = () => {
  return <TableRow>
      <TableCell colSpan={7}>
        <FlexRowAlign m={2} fontSize={18} minHeight={300} fontWeight={700} borderRadius={2} bgcolor="action.selected">
          상품을 등록 해주세요!
        </FlexRowAlign>
      </TableCell>
    </TableRow>;
};

export default TableDataNotFound;
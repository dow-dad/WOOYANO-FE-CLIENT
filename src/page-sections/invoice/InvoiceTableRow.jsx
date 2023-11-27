import { useState } from "react";
import { Avatar, Box, Button, Checkbox, Chip, TableCell, TableRow } from "@mui/material";
import { DeleteOutline, Edit } from "@mui/icons-material";
import { format } from "date-fns"; // CUSTOM DEFINED HOOK

import useNavigate from "hooks/useNavigate"; // CUSTOM COMPONENTS

import { FlexBox } from "components/flexbox";
import { Paragraph } from "components/typography";
import { TableMoreMenuItem, TableMoreMenu } from "components/table"; // ==============================================================

// ==============================================================
const InvoiceTableRow = props => {
  const {
    invoice,
    handleDeleteInvoice,
    isSelected,
    handleSelectRow,
    handleModal,
    setDetailData
  } = props;
  const navigate = useNavigate();
  const [openMenuEl, setOpenMenuEl] = useState(null);

  const handleOpenMenu = event => {
    setOpenMenuEl(event.currentTarget);
  };

  const handleCloseOpenMenu = () => setOpenMenuEl(null);

  return <TableRow hover>
      

      <TableCell padding="normal">
        <FlexBox alignItems="center" gap={2}>
          <Avatar src={invoice.avatar} alt={invoice.name} variant="rounded" />

          <Box>
            <Paragraph fontWeight={500} color="text.primary" sx={{
            ":hover": {
              textDecoration: "underline",
              cursor: "pointer"
            }
          }}>
              {invoice.name}
            </Paragraph>

            <Paragraph fontSize={13}>{invoice.id.substring(0, 15)}</Paragraph>
          </Box>
        </FlexBox>
      </TableCell>

      <TableCell padding="normal">{invoice.email}</TableCell>

      <TableCell padding="normal">
        <Paragraph color="text.secondary">{format(invoice.date, "MMM dd, yyyy")}</Paragraph>
      </TableCell>

      <TableCell padding="normal">
        <Chip size="small" label={invoice.status} color={invoice.status === "서비스완료" ? "success" : invoice.status==="업체예약거절" ||invoice.status==="고객예약취소" ? "error" : invoice.status==="예약확정"?"primary":invoice.status==="예약대기"?"warning":"default"} />
      </TableCell>

      <TableCell padding="normal">
        <Button type="button" variant="outlined" onClick={()=>{handleModal(); setDetailData(invoice)}}>상세내용</Button>
      </TableCell>
    </TableRow>;
};

export default InvoiceTableRow;
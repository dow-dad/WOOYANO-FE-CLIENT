import { useState } from "react";
import { Checkbox, TableCell, TableRow } from "@mui/material";
import { DeleteOutline, Edit, Folder, RemoveRedEye } from "@mui/icons-material"; // CUSTOM COMPONENTS

import { H6 } from "components/typography";
import { FlexBox } from "components/flexbox";
import { TableMoreMenuItem, TableMoreMenu } from "components/table"; // ==============================================================

// ==============================================================
const FileManagerTableRow = ({
  data,
  isSelected,
  handleSelectRow,
  handleDeleteFile
}) => {
  const [openMenuEl, setOpenMenuEl] = useState(null);

  const handleOpenMenu = event => {
    setOpenMenuEl(event.currentTarget);
  };

  const handleCloseOpenMenu = () => setOpenMenuEl(null);

  return <TableRow hover>
      <TableCell padding="checkbox">
        <Checkbox size="small" color="primary" checked={isSelected} onClick={event => handleSelectRow(event, data.id)} />
      </TableCell>

      <TableCell padding="normal">
        <FlexBox className="name" alignItems="center" gap={1.5}>
          <Folder />
          <H6 fontSize={14} color="text.primary">
            {data.title}
          </H6>
        </FlexBox>
      </TableCell>

      <TableCell padding="normal">{data.files}</TableCell>

      <TableCell padding="normal">{data.size}</TableCell>

      <TableCell padding="normal">{data.createdAt}</TableCell>

      <TableCell padding="normal" align="right">
        <TableMoreMenu open={openMenuEl} handleOpen={handleOpenMenu} handleClose={handleCloseOpenMenu}>
          <TableMoreMenuItem Icon={RemoveRedEye} title="View" handleClick={() => {
          handleCloseOpenMenu();
        }} />

          <TableMoreMenuItem Icon={Edit} title="Edit" handleClick={() => {
          handleCloseOpenMenu();
        }} />

          <TableMoreMenuItem Icon={DeleteOutline} title="Delete" handleClick={() => {
          handleDeleteFile(data.id);
          handleCloseOpenMenu();
        }} />
        </TableMoreMenu>
      </TableCell>
    </TableRow>;
};

export default FileManagerTableRow;
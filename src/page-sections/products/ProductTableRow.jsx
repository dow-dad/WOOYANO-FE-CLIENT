import { useState } from "react";
import { Avatar, Box, Checkbox, Chip, TableCell, TableRow } from "@mui/material";
import { DeleteOutline, Edit, RemoveRedEye } from "@mui/icons-material";
import { format } from "date-fns"; // CUSTOM COMPONENTS

import { FlexBox } from "components/flexbox";
import { Paragraph } from "components/typography";
import { TableMoreMenuItem, TableMoreMenu } from "components/table"; // CUSTOM DEFINED HOOK

import useNavigate from "hooks/useNavigate"; // ==============================================================

// ==============================================================
const ProductTableRow = ({
  product,
  isSelected,
  handleSelectRow,
  handleDeleteProduct
}) => {
  const navigate = useNavigate();
  const [openMenuEl, setOpenMenuEl] = useState(null);

  const handleOpenMenu = event => {
    setOpenMenuEl(event.currentTarget);
  };

  const handleCloseOpenMenu = () => setOpenMenuEl(null);

  return <TableRow hover>
      <TableCell padding="checkbox">
        <Checkbox size="small" color="primary" checked={isSelected} onClick={event => handleSelectRow(event, product.id)} />
      </TableCell>

      <TableCell padding="normal">
        <FlexBox alignItems="center" gap={2}>
          <Avatar variant="rounded" alt={product.name} src={product.image} sx={{
          width: 50,
          height: 50
        }} />

          <Box>
            <Paragraph fontWeight={500} color="text.primary" sx={{
            ":hover": {
              textDecoration: "underline",
              cursor: "pointer"
            }
          }}>
              {product.name}
            </Paragraph>
            <Paragraph fontSize={13}>{product.category}</Paragraph>
          </Box>
        </FlexBox>
      </TableCell>

      <TableCell padding="normal">{format(new Date(product.createdAt), "dd MMM yyyy")}</TableCell>

      <TableCell padding="normal" sx={{ ...(product.stock === 0 && {
        color: "error.main"
      })
    }}>
        {product.stock}
      </TableCell>

      <TableCell padding="normal">${product.price}</TableCell>

      <TableCell padding="normal">
        {product.published ? <Chip label="Published" /> : <Chip label="Draft" color="secondary" />}
      </TableCell>

      <TableCell padding="normal" align="right">
        <TableMoreMenu open={openMenuEl} handleOpen={handleOpenMenu} handleClose={handleCloseOpenMenu}>
          <TableMoreMenuItem Icon={RemoveRedEye} title="View" handleClick={() => {
          handleCloseOpenMenu();
          navigate("/dashboard/products/product-details");
        }} />
          <TableMoreMenuItem Icon={Edit} title="Edit" handleClick={() => {
          handleCloseOpenMenu();
          navigate("/dashboard/products/create-product");
        }} />
          <TableMoreMenuItem Icon={DeleteOutline} title="Delete" handleClick={() => {
          handleCloseOpenMenu();
          handleDeleteProduct(product.id);
        }} />
        </TableMoreMenu>
      </TableCell>
    </TableRow>;
};

export default ProductTableRow;
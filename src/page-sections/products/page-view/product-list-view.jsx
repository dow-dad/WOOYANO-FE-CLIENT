"use client";

import { useState } from "react";
import { Tab, Box, Tabs, Card, Table, styled, Button, TableBody, TableContainer, TablePagination } from "@mui/material";
import Add from "icons/Add"; // CUSTOM DEFINED HOOK

import useNavigate from "hooks/useNavigate"; // CUSTOM COMPONENTS

import { Scrollbar } from "components/scrollbar";
import { FlexBetween } from "components/flexbox";
import { TableDataNotFound, TableToolbar } from "components/table"; // CUSTOM DEFINED HOOK

import useMuiTable, { getComparator, stableSort } from "hooks/useMuiTable"; // CUSTOM PAGE SECTION COMPONENTS

import ProductTableRow from "../ProductTableRow";
import ProductTableHead from "../ProductTableHead";
import ProductTableActions from "../ProductTableActions"; // CUSTOM DUMMY DATA

import { PRODUCTS } from "__fakeData__/products"; //  STYLED COMPONENTS

const ListWrapper = styled(FlexBetween)(({
  theme
}) => ({
  gap: 16,
  [theme.breakpoints.down(440)]: {
    flexDirection: "column",
    ".MuiButton-root": {
      width: "100%"
    }
  }
}));

const ProductListPageView = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([...PRODUCTS]);
  const [productFilter, setProductFilter] = useState({
    stock: "",
    search: "",
    publish: ""
  });

  const handleChangeFilter = (key, value) => {
    setProductFilter(state => ({ ...state,
      [key]: value
    }));
  };

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
  let filteredProducts = stableSort(products, getComparator(order, orderBy)).filter(item => {
    if (productFilter.stock === "stock") return item.stock > 0;else if (productFilter.stock === "out-of-stock") return item.stock === 0;else if (productFilter.publish === "published") return item.published === true;else if (productFilter.publish === "draft") return item.published === false;else if (productFilter.search) return item.name.toLowerCase().includes(productFilter.search.toLowerCase());else return true;
  });

  const handleDeleteProduct = id => {
    setProducts(state => state.filter(item => item.id !== id));
  };

  const handleAllProductDelete = () => {
    setProducts(state => state.filter(item => !selected.includes(item.id)));
    handleSelectAllRows([])();
  };

  return <Box pt={2} pb={4}>
      <ListWrapper>
        <Tabs value={productFilter.stock} onChange={(_, value) => handleChangeFilter("stock", value)}>
          <Tab disableRipple label="All" value="" />
          <Tab disableRipple label="In Stock" value="stock" />
          <Tab disableRipple label="Out of Stock" value="out-of-stock" />
        </Tabs>

        <Button variant="contained" startIcon={<Add />} onClick={() => navigate("/dashboard/products/create-product")}>
          Add Product
        </Button>
      </ListWrapper>

      <Card sx={{
      mt: 4
    }}>
        {
        /* SEARCH AND PUBLISH FILTER SECTION */
      }
        <ProductTableActions filter={productFilter} handleChangeFilter={handleChangeFilter} />

        {
        /* TABLE ROW SELECTION HEADER  */
      }
        {selected.length > 0 && <TableToolbar selected={selected.length} handleDeleteRows={handleAllProductDelete} />}

        {
        /* TABLE HEAD AND ROW SECTION */
      }
        <TableContainer>
          <Scrollbar>
            <Table sx={{
            minWidth: 820
          }}>
              <ProductTableHead order={order} orderBy={orderBy} numSelected={selected.length} rowCount={filteredProducts.length} onRequestSort={handleRequestSort} onSelectAllRows={handleSelectAllRows(filteredProducts.map(row => row.id))} />

              <TableBody>
                {filteredProducts.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(product => <ProductTableRow key={product.id} product={product} handleSelectRow={handleSelectRow} isSelected={isSelected(product.id)} handleDeleteProduct={handleDeleteProduct} />)}

                {filteredProducts.length === 0 && <TableDataNotFound />}
              </TableBody>
            </Table>
          </Scrollbar>
        </TableContainer>

        {
        /* PAGINATION SECTION */
      }
        <TablePagination page={page} component="div" rowsPerPage={rowsPerPage} count={filteredProducts.length} onPageChange={handleChangePage} rowsPerPageOptions={[5, 10, 25]} onRowsPerPageChange={handleChangeRowsPerPage} />
      </Card>
    </Box>;
};

export default ProductListPageView;
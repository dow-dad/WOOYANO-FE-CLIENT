"use client"; // MUI에 필요한 기능을 활성화

import { useEffect, useState } from "react";
import { Tab, Box, Tabs, Card, Table, styled, Button, TableBody, TableContainer, TablePagination } from "@mui/material";
import Add from "icons/Add"; // 커스텀 훅 및 컴포넌트 불러오기

import useNavigate from "hooks/useNavigate";
import { Scrollbar } from "components/scrollbar";
import { FlexBetween } from "components/flexbox";
import { TableDataNotFound, TableToolbar } from "components/table";
import useMuiTable, { getComparator, stableSort } from "hooks/useMuiTable";
import ProductTableRow from "../ProductTableRow";
import ProductTableHead from "../ProductTableHead";
import ProductTableActions from "../ProductTableActions";
import { PRODUCTS } from "__fakeData__/products"; // 가상 데이터 불러오기
import { CreateProductPageView } from "page-sections/products/page-view";

// 스타일드 컴포넌트로 만든 ListWrapper
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
  const [products, setProducts] = useState([...PRODUCTS]); // 가상 데이터로 초기화된 상품 리스트 상태
  const [createProductModal, setCreateProdjctModal] = useState(false);
  const [productFilter, setProductFilter] = useState({
    stock: "",
    search: "",
    publish: ""
  });

  const renderCreatProductModal = () => {
    if (createProductModal) {
      return <>
        <div onClick={()=>handleOpenModal()} style={{background:"black", width: "100vw", height: "100vh",position: "fixed", top:0,left:0, zIndex:1200, opacity:0.6}}></div>
        <div style={{ backgroundColor: "white", position: "absolute", width: "50vw", height: "65vh", zIndex: 1201, borderRadius:"10px",left:"27%" }}>
          <CreateProductPageView createProductModal={createProductModal} setCreateProdjctModal={setCreateProdjctModal}/>
        </div>
      </>
    }
  }

  const handleOpenModal = () => {
    setCreateProdjctModal(!createProductModal)
  }
  // console.log(createProductModal);
  // console.log(products);
  // console.log(productFilter);
  // 필터링 조건 변경 핸들러
  const handleChangeFilter = (key, value) => {
    setProductFilter(state => ({ ...state, [key]: value }));
  };

  // MUI 테이블 훅 사용
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

  // 필터링된 상품 목록 정렬 및 필터링
  let filteredProducts = stableSort(products, getComparator(order, orderBy)).filter(item => {
    if (productFilter.stock === "stock") return item.stock > 0;
    else if (productFilter.stock === "out-of-stock") return item.stock === 0;
    else if (productFilter.publish === "published") return item.published === true;
    else if (productFilter.publish === "draft") return item.published === false;
    else if (productFilter.search) return item.name.toLowerCase().includes(productFilter.search.toLowerCase());
    else return true;
  });

  // 삭제 핸들러
  const handleDeleteProduct = id => {
    setProducts(state => state.filter(item => item.id !== id));
  };

  // 모든 상품 삭제 핸들러
  const handleAllProductDelete = () => {
    setProducts(state => state.filter(item => !selected.includes(item.id)));
    handleSelectAllRows([]);
  };

  return (
    <>
      {renderCreatProductModal()}
      <Box pt={2} pb={4}>
        {/* 필터링 탭과 "상품 추가" 버튼 */}
        <ListWrapper sx={{ justifyContent: "flex-end", marginTop: 8 }}>


          <Button variant="contained" startIcon={<Add />} onClick={() => handleOpenModal()}>
            상품 추가
          </Button>
        </ListWrapper>

        {/* 카드 컴포넌트 */}
        <Card sx={{ mt: 4 }}>
          {/* 검색 및 필터 섹션 */}
          {/* <ProductTableActions filter={productFilter} handleChangeFilter={handleChangeFilter} /> */}

          {/* 테이블 툴바 */}
          {selected.length > 0 && <TableToolbar selected={selected.length} handleDeleteRows={handleAllProductDelete} />}

          {/* 테이블 헤드 및 행 섹션 */}
          <TableContainer>
            <Scrollbar>
              <Table sx={{ minWidth: 820 }}>
                <ProductTableHead order={order} orderBy={orderBy} numSelected={selected.length} rowCount={filteredProducts.length} onRequestSort={handleRequestSort} onSelectAllRows={handleSelectAllRows(filteredProducts.map(row => row.id))} />

                <TableBody>
                  {/* 상품 행 렌더링 */}
                  {filteredProducts.map(product => <ProductTableRow key={product.id} product={product} handleSelectRow={handleSelectRow} isSelected={isSelected(product.id)} handleDeleteProduct={handleDeleteProduct} />)}

                  {/* 상품이 없을 경우 데이터 없음 메시지 표시 */}
                  {filteredProducts.length === 0 && <TableDataNotFound />}
                </TableBody>
              </Table>
            </Scrollbar>
          </TableContainer>

          {/* 페이지네이션 섹션 */}
          {/* <TablePagination page={page} component="div" rowsPerPage={rowsPerPage} count={filteredProducts.length} onPageChange={handleChangePage} rowsPerPageOptions={[5, 10, 25]} onRowsPerPageChange={handleChangeRowsPerPage} /> */}
        </Card>
      </Box>
    </>
  );
};

export default ProductListPageView;

"use client";

import { useState } from "react";
import { TabContext, TabList } from "@mui/lab";
import { Button, Grid, Tab, Box, styled } from "@mui/material"; // CUSTOM COMPONENTS

import ProductCard from "../ProductCard";
import { H6 } from "components/typography";
import { IconWrapper } from "components/icon-wrapper";
import { FlexBetween, FlexBox, FlexRowAlign } from "components/flexbox"; // CUSTOM ICON COMPONENTS

import Add from "icons/Add";
import ShoppingBasket from "icons/ShoppingBasket";
import SearchArea from "page-sections/users/SearchArea"; // CUSTOM DUMMY DATA

import { PRODUCTS } from "__fakeData__/products"; // STYLED COMPONENT

const HeadingWrapper = styled(FlexBetween)(({
  theme
}) => ({
  gap: 8,
  flexWrap: "wrap",
  [theme.breakpoints.down(453)]: {
    "& .MuiButton-root": {
      order: 2
    },
    "& .MuiTabs-root": {
      order: 3,
      width: "100%",
      "& .MuiTabs-flexContainer": {
        justifyContent: "space-between"
      }
    }
  }
}));

const ProductGridPageView = () => {
  const [pageSize] = useState(8);
  const [pageIndex, setPageIndex] = useState(1);
  const [selectTab, setSelectTab] = useState("1");
  const [searchValue, setSearchValue] = useState("");

  const handleChangeTab = (_, newTab) => setSelectTab(newTab);

  const FILTER_PRODUCTS = PRODUCTS.slice(0, pageSize * pageIndex).filter(item => item.name.includes(searchValue));
  return <Box pt={2} pb={4}>
      <TabContext value={selectTab}>
        <HeadingWrapper>
          <FlexBox gap={0.5} alignItems="center">
            <IconWrapper>
              <ShoppingBasket sx={{
              color: "primary.main"
            }} />
            </IconWrapper>

            <H6 fontSize={16}>Products</H6>
          </FlexBox>

          <TabList onChange={handleChangeTab}>
            <Tab disableRipple label="Active" value="1" />
            <Tab disableRipple label="Draft" value="2" />
            <Tab disableRipple label="Assembly" value="3" />
          </TabList>

          <Button variant="contained" startIcon={<Add />}>
            Add Product
          </Button>
        </HeadingWrapper>

        <SearchArea value={searchValue} onChange={e => setSearchValue(e.target.value)} gridRoute="/dashboard/products/product-grid-view" listRoute="/dashboard/products/product-list-view" />

        <Grid container spacing={3}>
          {FILTER_PRODUCTS.map(item => <Grid item md={3} sm={6} xs={12} key={item.id}>
              <ProductCard item={item} />
            </Grid>)}

          <Grid item xs={12}>
            <FlexRowAlign mt={2}>
              <Button onClick={() => setPageIndex(state => state + 1)} disabled={PRODUCTS.length === FILTER_PRODUCTS.length}>
                Load More Products
              </Button>
            </FlexRowAlign>
          </Grid>
        </Grid>
      </TabContext>
    </Box>;
};

export default ProductGridPageView;
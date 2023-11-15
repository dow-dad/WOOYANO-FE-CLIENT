import { styled, TextField, MenuItem, IconButton } from "@mui/material"; // CUSTOM DEFINED HOOK

import useNavigate from "hooks/useNavigate"; // CUSTOM COMPONENTS

import { FlexBox } from "components/flexbox"; // CUSTOM ICON COMPONENTS

import FormatBullets from "icons/FormatBullets";
import Apps from "icons/Apps"; //  STYLED COMPONENTS

const Wrapper = styled(FlexBox)(({
  theme
}) => ({
  alignItems: "center",
  ".select": {
    flex: "1 1 200px"
  },
  [theme.breakpoints.down(440)]: {
    ".navigation": {
      display: "none"
    }
  }
})); // ==============================================================

// ==============================================================
const ProductTableActions = ({
  handleChangeFilter,
  filter
}) => {
  const navigate = useNavigate();
  const PUBLISH_PRODUCTS = [{
    id: 1,
    name: "All",
    value: ""
  }, {
    id: 2,
    name: "Published",
    value: "published"
  }, {
    id: 3,
    name: "Draft",
    value: "draft"
  }];
  return <Wrapper gap={2} px={2} py={4}>
      <TextField select fullWidth label="Publish" className="select" value={filter.publish} onChange={e => handleChangeFilter("publish", e.target.value)}>
        {PUBLISH_PRODUCTS.map(({
        id,
        name,
        value
      }) => <MenuItem key={id} value={value}>
            {name}
          </MenuItem>)}
      </TextField>

      <TextField fullWidth label="Search by product name..." value={filter.search} onChange={e => handleChangeFilter("search", e.target.value)} />

      <FlexBox alignItems="center" className="navigation">
        <IconButton>
          <FormatBullets color="primary" />
        </IconButton>

        <IconButton onClick={() => navigate("/dashboard/products/product-grid-view")}>
          <Apps />
        </IconButton>
      </FlexBox>
    </Wrapper>;
};

export default ProductTableActions;
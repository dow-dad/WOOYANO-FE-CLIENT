import { TextField } from "@mui/material";
import Search from "@mui/icons-material/Search"; // CUSTOM DEFINED HOOK
import { FlexBetween } from "components/flexbox"; // CUSTOM ICON COMPONENTS

const SearchArea = props => {
  const {
    value = "",
    onChange,
  } = props;

  return <FlexBetween gap={1} my={3}>
      <TextField value={value} onChange={onChange} placeholder="이름으로 검색할 수 있습니다." InputProps={{
      startAdornment: <Search />
    }} sx={{
      width: "100%"
    }} />
    </FlexBetween>;
};

export default SearchArea;
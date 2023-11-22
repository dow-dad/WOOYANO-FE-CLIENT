import { styled, TextField, MenuItem } from "@mui/material"; // CUSTOM COMPONENTS

import { FlexBox } from "components/flexbox"; //  STYLED COMPONENTS

const Wrapper = styled(FlexBox)(({
  theme
}) => ({
  alignItems: "center",
  ".select": {
    flex: "1 1 200px"
  },
  [theme.breakpoints.down(426)]: {
    flexWrap: "wrap"
  }
})); // ==============================================================

// ==============================================================
const InvoiceTableActions = ({
  handleChangeFilter,
  filter
}) => {
  const INVOICE_STATUS = [{
    id: 0,
    name: "All",
    value: ""
  }, {
    id: 1,
    name: "예약대기",
    value: "예약대기"
  }, {
    id: 2,
    name: "예약확정",
    value: "예약확정"
  },{
    id: 3,
    name: "고객예약취소",
    value: "고객예약취소"
  },{
    id: 4,
    name: "업체예약거절",
    value: "업체예약거절"
  },{
    id: 5,
    name: "서비스완료",
    value: "서비스완료"
  }];
  return <Wrapper gap={2} px={2} pb={3}>
      <TextField select fullWidth label="Status" className="select" value={filter.status} onChange={e => handleChangeFilter("status", e.target.value)}>
        {INVOICE_STATUS.map(({
        id,
        name,
        value
      }) => <MenuItem key={id} value={value}>
            {name}
          </MenuItem>)}
      </TextField>

      <TextField fullWidth value={filter.search} label="Search invoice by name..." onChange={e => handleChangeFilter("search", e.target.value)} />
    </Wrapper>;
};

export default InvoiceTableActions;
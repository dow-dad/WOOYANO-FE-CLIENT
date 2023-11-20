import { styled } from "@mui/material/styles"; // CUSTOM COMPONENTS

import { Paragraph } from "../typography";
import { isDark } from "utils/constants";
// STYLED COMPONENT

// 현재예약의 상태
// 결제대기 - 0 
// 예약 대기 - 1
// 예약 확정 - 2
// 고객 예약 취소 - 3
// 업체 예약 거절 - 4 
// 서비스완료 - 5
const Status = styled(Paragraph)(({
  theme,
  type
}) => ({
  borderRadius: 6,
  padding: ".2rem .7rem",
  display: "inline-block",
  ...(type === 0 && {
    color: theme.palette.warning[600],
    backgroundColor: theme.palette.warning[50]
  }),
  ...(type === 1 && {
    color: theme.palette.success[600],
    backgroundColor: theme.palette.success[50]
  }),
  ...(type === 2 && {
    color: theme.palette.primary[500],
    backgroundColor: theme.palette.primary[50]
  }),
  ...(type === 3 && {
    color: theme.palette.error[500],
    backgroundColor: theme.palette.error[50]
  }),
  ...(type === 4 && {
    color: theme.palette.error[500],
    backgroundColor: theme.palette.error[50]
  }),
  ...(type === 5 && {
    color: theme.palette.warning[600],
    backgroundColor: theme.palette.warning[200]
  }),
  ...(isDark(theme) && {
    backgroundColor: `${theme.palette.grey[700]} !important`
  })
})); // ==============================================================

// ==============================================================
const StatusBadge = ({
  children,
  type,
  ...props
}) => {
  return <Status type={type} {...props}>
      {children}
    </Status>;
};

export default StatusBadge;
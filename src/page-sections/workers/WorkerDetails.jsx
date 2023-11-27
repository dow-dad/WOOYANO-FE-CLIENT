import { useState } from "react";
import { Box, Menu, Stack, Button, Avatar, useTheme, IconButton, TextField } from "@mui/material";
import { DeleteOutline, Message, Work, } from "@mui/icons-material"; // CUSTOM COMPONENTS

import { Modal } from "components/modal";
import AddWorkerForm from "./AddWorkerForm";
import { TableMoreMenuItem } from "components/table";
import { H6, Paragraph } from "components/typography";
import FlexBetween from "components/flexbox/FlexBetween"; // CUSTOM ICON COMPONENTS

import Add from "icons/Add";
import Call from "icons/Call";
import Edit from "icons/Edit";
import MoreHorizontal from "icons/MoreHorizontal"; // CUSTOM UTILS METHOD

import { isDark } from "utils/constants"; // ==============================================================
import { ClockIcon } from "@mui/x-date-pickers";
// ==============================================================
const WorkerDetails = ({
  data
}) => {
  const theme = useTheme();
  const [isEdit, setIsEdit] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleCloseModal = () => setOpenModal(false);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleCloseMenu = () => setAnchorEl(null);

  const styles = {
    root: {
      minHeight: '50px', // 최소 높이 설정
    },
  };

  return <Box sx={{
    padding: 3,
    height: "100%",
    borderTopRightRadius: "1rem",
    borderBottomRightRadius: "1rem",
    backgroundColor: isDark(theme) ? "grey.800" : "grey.100"
  }}>
    {/* 작업자 추가버튼 */}
      <Button fullWidth variant="contained" startIcon={<Add />} onClick={() => setOpenModal(true)}>
        작업자 추가
      </Button>

      <Modal open={openModal} handleClose={handleCloseModal}>
        <AddWorkerForm handleCancel={handleCloseModal} data={isEdit ? data : null} />
      </Modal>

      {data ? <>
          <FlexBetween mt={4}>
            <IconButton onClick={() => {
          setIsEdit(true);
          setOpenModal(true);
        }}>
              <Edit fontSize="small" sx={{
            color: "text.secondary"
          }} />
            </IconButton>

            <IconButton sx={{ backgroundColor: isDark(theme)  ? "grey.700" : "white"}} onClick={e => setAnchorEl(e.currentTarget)}>
              <MoreHorizontal fontSize="small" sx={{color: "text.secondary"}} />
            </IconButton>

            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleCloseMenu} transformOrigin={{
          vertical: "center",
          horizontal: "right"
        }}>

          {/* 작업자 삭제 버튼 */}
              <TableMoreMenuItem Icon={DeleteOutline} title="Delete" handleClick={() => {handleCloseMenu();}} />
            </Menu>
          </FlexBetween>

          {/* 작업자 사진, 이름 */}
          <Stack alignItems="center">
            <Avatar src={data.avatar} sx={{
          width: 120,
          height: 120,
          backgroundColor: "white"
        }} />
            <H6 fontSize={16} mt={2}>
              {data.name}
            </H6>
          </Stack>

          {/* 작업자 상세 정보 표시 */}
          <Box mt={4}>
            <ListItem Icon={Call} title={data.phone} />
            <ListItem Icon={ClockIcon} title={data.workingInfo[0][0] !== "" ? `평일 : ${data.workingInfo[0][0]}~${data.workingInfo[0][1]}` : '평일 : 휴무'}/>
            <ListItem Icon={ClockIcon} title={data.workingInfo[1][0] !== "" ? `토 : ${data.workingInfo[1][0]}~${data.workingInfo[1][1]}` : '토 : 휴무'}/>
            <ListItem Icon={ClockIcon} title={data.workingInfo[2][0] !== "" ? `일 : ${data.workingInfo[2][0]}~${data.workingInfo[2][1]}` : '일 : 휴무'} />  
          </Box>

          <Box mt={2}>
            <ListItem Icon={Message} title="소개글" />
            <TextField
              fullWidth
              value={data.description || "소개글"}
              multiline
              rowsmax={Infinity} // 다중 행으로 설정
              InputProps={{
                  style: styles.root,
              }}
            />
          </Box>
        </> : <Box height="100%" display="flex" alignItems="center" justifyContent="center" color="text.secondary">
          No Data
        </Box>}
    </Box>;
};

export default WorkerDetails; // ===================================================================

// ===================================================================
function ListItem({
  Icon,
  title
}) {
  return <Stack direction="row" spacing={1.5} pb={2} alignItems="center">
      <Icon sx={{
      color: "text.secondary",
      fontSize: 20
    }} />
      <Paragraph color="grey.500">{title}</Paragraph>
    </Stack>;
}
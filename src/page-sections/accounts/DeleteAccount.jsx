import { Button, Card, Divider, Stack, Box, Checkbox } from "@mui/material"; // CUSTOM COMPONENTS

import { H6, Paragraph } from "components/typography";

const DeleteAccount = () => {
  return <Card sx={{
    pb: 3
  }}>
      <Box padding={3}>
        <H6 fontSize={14}>회원 탈퇴</H6>
        <Paragraph mt={0.5} fontSize={13} lineHeight={1.7} maxWidth={600}>
          계정을 삭제하면 WOOYANO 서비스에 대한 액세스가 손실되며 개인 데이터가 영구적으로 삭제됩니다. 
          삭제를 원하시면 '계정 삭제' 버튼을 클릭해주세요. 삭제 신청 후 14일 동안 취소가 가능합니다
        </Paragraph>
      </Box>

      <Divider />

      <Stack direction="row" alignItems="center" padding={3} pl={2}>
        <Checkbox />
        <H6 fontSize={12}>계정을 삭제하겠다는 것을 확인합니다.</H6>
      </Stack>

      <Box pl={3} maxWidth={120}>
        <Button color="error" fullWidth>
          계정 삭제
        </Button>
      </Box>
    </Card>;
};

export default DeleteAccount;
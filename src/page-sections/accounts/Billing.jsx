import { Box, Card, Grid, Stack, Table, Alert, Button, Avatar, Divider, TableRow, TableBody, TableHead, IconButton, AlertTitle } from "@mui/material";
import Info from "@mui/icons-material/Info"; // CUSTOM ICON COMPONENTS
import Delete from "icons/Delete"; // CUSTOM COMPONENTS
import { Scrollbar } from "components/scrollbar";
import { H6, Paragraph } from "components/typography";
import HomeOutlined from "icons/HomeOutlined";
import { BodyTableCell, BodyTableCellV2, BodyTableRow, HeadTableCell } from "./common/styles";

const Billing = () => {
  return <Card>
    <H6 fontSize={14} p={3}>
      등록 계좌
    </H6>

    <Divider />

    {
      /* BILLING DETAILS */
    }
    <Box padding={3}>
      <Alert severity="info" variant="outlined" icon={<Info />} action={<Button>계좌 등록</Button>}>
        <AlertTitle>계좌 등록</AlertTitle>
      </Alert>
      <Grid item lg={12} md={6} xs={12}>
        <Card sx={{
          border: 1,
          padding: 2,
          display: "flex",
          boxShadow: "none",
          alignItems: "center",
          borderColor: "divider",
          justifyContent: "space-between",
          marginY:"20px"
        }}>
          <Box maxWidth="60%">
            <Stack direction="row" alignItems="center" spacing={1}>
              <HomeOutlined sx={{
                color: "grey.400"
              }} />
              <Paragraph fontWeight={500}>대표계좌</Paragraph>
            </Stack>

            <Paragraph mt={1} color="grey.500">
              부산은행
            </Paragraph>
            <Paragraph mt={1} color="grey.500">
              112-****-****-98
            </Paragraph>
          </Box>

        </Card>
      </Grid>

    </Box>

    <Divider />
    {
      /* PAYMENT METHODS */
    }
    <Box my={4}>
      <H6 fontSize={14} p={3} pt={0}>
        등록 계좌
      </H6>

      <Scrollbar autoHide={false}>
        <Table sx={{
          minWidth: 700
        }}>
          <TableHead>
            <TableRow >
              <HeadTableCell >계좌 번호</HeadTableCell>
              <HeadTableCell>은행명</HeadTableCell>
              <HeadTableCell>등록일</HeadTableCell>
              <HeadTableCell>수정</HeadTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {acountData.map(item => <BodyTableRow key={item.id}>
              <BodyTableCell>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Avatar src="/static/payment/bank-account.png" sx={{
                    borderRadius: "1px",
                    height: 40,
                    padding:1
                    
                  }} />
                  <Paragraph fontWeight={500}>{item.number}</Paragraph>
                </Stack>
              </BodyTableCell>

              <BodyTableCellV2>{item.bank}</BodyTableCellV2>

              <BodyTableCellV2>{item.creatAt}</BodyTableCellV2>

              <BodyTableCellV2>
                

                <IconButton color="inherit">
                  <Delete fontSize="small" />
                </IconButton>
              </BodyTableCellV2>
            </BodyTableRow>)}
          </TableBody>
        </Table>
      </Scrollbar>
    </Box>


  </Card>
}

const acountData=[
  {
    id:1,
    number:"112-****-****-78",
    bank:"부산은행",
    creatAt:"2023-11-21"
  },
  {
    id:2,
    number:"59-****-****-12",
    bank:"KB국민은행",
    creatAt:"2023-10-21"
  },
  {
    id:3,
    number:"10-****-****-728",
    bank:"신한은행",
    creatAt:"2022-11-21"
  }
]


export default Billing;
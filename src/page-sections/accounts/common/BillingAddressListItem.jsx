import { Box, Card, IconButton, Stack } from "@mui/material"; // CUSTOM COMPONENTS

import { Paragraph } from "components/typography"; // CUSTOM ICON COMPONENTS

import Edit from "icons/Edit";
import Delete from "icons/Delete";
import HomeOutlined from "icons/HomeOutlined";

const BillingAddressListItem = () => {
  return <Card sx={{
    border: 1,
    padding: 2,
    display: "flex",
    boxShadow: "none",
    alignItems: "center",
    borderColor: "divider",
    justifyContent: "space-between"
  }}>
      <Box maxWidth="60%">
        <Stack direction="row" alignItems="center" spacing={1}>
          <HomeOutlined sx={{
          color: "grey.400"
        }} />
          <Paragraph fontWeight={500}>Home</Paragraph>
        </Stack>

        <Paragraph mt={1} color="grey.500">
          Ap #285-7193 Ullamcorper Avenue Amesbury HI 93373 US
        </Paragraph>
      </Box>

      <Stack direction="row">
        <IconButton>
          <Edit fontSize="small" sx={{
          color: "text.secondary"
        }} />
        </IconButton>

        <IconButton>
          <Delete fontSize="small" sx={{
          color: "text.secondary"
        }} />
        </IconButton>
      </Stack>
    </Card>;
};

export default BillingAddressListItem;
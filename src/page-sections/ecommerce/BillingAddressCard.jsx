import { Box, Card, IconButton } from "@mui/material"; // CUSTOM COMPONENTS

import FlexBox from "components/flexbox/FlexBox";
import { H6, Paragraph } from "components/typography"; // CUSTOM ICON COMPONENTS

import City from "icons/City";
import Delete from "icons/Delete";
import CheckmarkCircle from "icons/CheckmarkCircle"; // ===================================================================

// ===================================================================
const BillingAddressCard = ({
  selected
}) => {
  return <Card sx={{
    padding: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    border: selected ? "1px solid" : 0,
    borderColor: "primary.main"
  }}>
      <Box>
        <FlexBox alignItems="center" gap={1} mb={1}>
          <City sx={{
          color: selected ? "primary.main" : "text.secondary"
        }} />
          <H6 fontSize={16}>Office</H6>
        </FlexBox>

        <Paragraph color="text.secondary" lineHeight={1.8}>
          Ap #285-7193 Ullamcorper Avenue <br /> Amesbury HI 93373 <br /> USA
        </Paragraph>
      </Box>

      {selected ? <Box padding={1}>
          <CheckmarkCircle sx={{
        color: "primary.main"
      }} />
        </Box> : <IconButton>
          <Delete sx={{
        color: "text.secondary"
      }} />
        </IconButton>}
    </Card>;
};

export default BillingAddressCard;
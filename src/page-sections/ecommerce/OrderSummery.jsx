import { Button, Card, Divider, IconButton, Stack, TextField } from "@mui/material"; // CUSTOM COMPONENTS

import { FlexBetween, FlexBox } from "components/flexbox";
import { H6, Paragraph } from "components/typography"; // CUSTOM ICON COMPONENTS

import ShoppingCart from "icons/ShoppingCart";
import Edit from "icons/Edit"; // ===================================================================

// ===================================================================
const OrderSummery = ({
  showCoupon,
  showEditBtn,
  buttonText,
  handleClick
}) => {
  return <Card sx={{
    padding: 3
  }}>
      <FlexBetween mb={4}>
        <H6 fontSize={16}>Order Summery</H6>

        {showEditBtn && <IconButton>
            <Edit sx={{
          fontSize: 16,
          color: "text.secondary"
        }} />
          </IconButton>}
      </FlexBetween>

      <Stack spacing={1.5} mb={5}>
        <ListItem title="Items" value={230} />
        <ListItem title="VATS 0%" value={0} />
        <ListItem title="Sub Total" value={230} />

        <Divider />
        <ListItem title="Total" value={230} valueColor="error.main" />
      </Stack>

      {showCoupon && <FlexBox gap={1} mb={3}>
          <TextField size="small" placeholder="Apply Coupon" fullWidth />
          <Button sx={{
        px: 4
      }}>Apply</Button>
        </FlexBox>}

      <Button variant="contained" startIcon={<ShoppingCart />} fullWidth onClick={handleClick}>
        {buttonText}
      </Button>
    </Card>;
};

export default OrderSummery; // -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
function ListItem({
  title,
  value,
  valueColor
}) {
  return <FlexBetween>
      <Paragraph>{title}</Paragraph>
      <Paragraph color={valueColor}>${value}</Paragraph>
    </FlexBetween>;
}
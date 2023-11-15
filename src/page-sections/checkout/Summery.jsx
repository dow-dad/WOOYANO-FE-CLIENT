import { Card, Chip, Stack, Button, Divider } from "@mui/material";
import GppGoodOutlined from "@mui/icons-material/GppGoodOutlined"; // CUSTOM COMPONENTS

import { H6, Paragraph } from "components/typography";
import { FlexBetween } from "components/flexbox"; // CUSTOM UTILS METHOD

import { isDark } from "utils/constants";

const Summery = () => {
  return <Card sx={{
    padding: 4,
    boxShadow: 0,
    backgroundColor: theme => isDark(theme) ? "grey.800" : "grey.100"
  }}>
      <H6 fontSize={24} mb={2.5}>
        Summary
      </H6>

      <Stack spacing={1.7} mb={3}>
        <ListItem title="Subscription" value={<Chip label="Starter" />} />
        <ListItem title="Billed in month" value="$14.00" />

        <Divider />

        <ListItem title="Total Bill" value="$14.00" />
        <ListItem title="Taxes" value="$1.00" />

        <Divider />

        <ListItem title="Total Billed" value={<Paragraph fontSize={24} fontWeight={600}>
              $15.00
            </Paragraph>} />
      </Stack>

      <Button fullWidth>Upgrade Plan</Button>

      <Paragraph pt={3} pb={1} gap={0.5} fontWeight={500} display="flex" alignItems="center" justifyContent="center">
        <GppGoodOutlined sx={{
        fontSize: 16,
        color: "success.main"
      }} /> Secure credit card payment
      </Paragraph>

      <Paragraph textAlign="center" color="text.secondary">
        This is a secure encrypted payment
      </Paragraph>
    </Card>;
};

export default Summery;

function ListItem({
  title,
  value
}) {
  return <FlexBetween>
      <Paragraph fontSize={16} fontWeight={500} color="text.secondary">
        {title}
      </Paragraph>

      {typeof value === "string" ? <Paragraph fontSize={16} fontWeight={500}>
          {value}
        </Paragraph> : value}
    </FlexBetween>;
}
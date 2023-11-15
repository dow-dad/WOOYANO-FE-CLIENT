import { Card, IconButton, Stack } from "@mui/material";
import { KeyboardArrowRightRounded } from "@mui/icons-material";
import { nanoid } from "nanoid"; // CUSTOM COMPONENTS

import ListItem from "./shared/ListItem";
import { FlexBetween } from "components/flexbox";
import { Paragraph } from "components/typography";
import { MoreButton } from "components/more-button"; // CUSTOM ICON COMPONENTS

import Health from "icons/Health";
import Emergency from "icons/Emergency";
import Investment from "icons/Investment";
import EducationTwo from "icons/EducationTwo"; // CUSTOM UTILS METHOD

import { numberFormat } from "utils/numberFormat"; // CUSTOM DUMMY DATA

const DATA = [{
  id: nanoid(),
  amount: 23560,
  Icon: Emergency,
  title: "Emergency",
  color: "primary.main"
}, {
  id: nanoid(),
  amount: 19489,
  Icon: Health,
  title: "Health",
  color: "success.500"
}, {
  id: nanoid(),
  amount: 18889,
  Icon: Investment,
  title: "Investment",
  color: "error.main"
}, {
  id: nanoid(),
  amount: 21489,
  Icon: EducationTwo,
  title: "Education",
  color: "warning.main"
}];

const MySavings = () => {
  return <Card sx={{
    p: 3,
    height: "100%"
  }}>
      <FlexBetween mb={4}>
        <Paragraph fontSize={18} fontWeight={500}>
          My Savings
        </Paragraph>

        <MoreButton size="small" />
      </FlexBetween>

      <Stack spacing={1.5}>
        {DATA.map(({
        id,
        amount,
        Icon,
        title,
        color
      }) => <FlexBetween key={id}>
            <ListItem subTitle={title} Icon={<Icon sx={{
          color
        }} />} title={`$${numberFormat(amount)}`} titleStyle={{
          fontSize: 18,
          lineHeight: 1.5
        }} iconStyle={{
          width: 48,
          height: 48,
          borderRadius: 3
        }} />

            <IconButton>
              <KeyboardArrowRightRounded sx={{
            color: "grey.400"
          }} />
            </IconButton>
          </FlexBetween>)}
      </Stack>
    </Card>;
};

export default MySavings;
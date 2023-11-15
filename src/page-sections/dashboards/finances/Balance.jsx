import { Box, Button, Card, styled } from "@mui/material";
import { North, South } from "@mui/icons-material";
import { nanoid } from "nanoid"; // CUSTOM COMPONENTS

import ListItem from "./shared/ListItem";
import { FlexBox } from "components/flexbox";
import { H6, Paragraph } from "components/typography"; // CUSTOM UTILS METHODS

import { isDark } from "utils/constants";
import { numberFormat } from "utils/numberFormat"; // STYLED COMPONENTS

const StyledCard = styled(Card)(({
  theme
}) => ({
  border: 0,
  padding: 3,
  position: "relative",
  background: "linear-gradient(103.35deg, #FFFFFF 63.76%, #EDEAFF 98.71%)",
  ...(isDark(theme) && {
    background: "auto"
  })
}));
const ImageContainer = styled(Box)(({
  theme
}) => ({
  right: 0,
  bottom: 0,
  position: "absolute",
  "& > img": {
    width: "100%"
  },
  [theme.breakpoints.down("sm")]: {
    display: "none"
  }
})); // CUSTOM DUMMY DATA

const DATA = [{
  id: nanoid(),
  title: "Income",
  amount: 14210.15,
  Icon: <South color="success" fontSize="small" />
}, {
  id: nanoid(),
  title: "Expance",
  amount: 7352.17,
  Icon: <North color="error" fontSize="small" />
}];

const Balance = () => {
  return <StyledCard>
      <Box p={3}>
        <H6 lineHeight={1} fontSize={28} fontWeight={600}>
          ${numberFormat(21350.25)}
        </H6>

        <Paragraph color="text.secondary">My Balance</Paragraph>

        <FlexBox flexWrap="wrap" alignItems="center" gap={3} py={4}>
          {DATA.map(({
          Icon,
          amount,
          id,
          title
        }) => <ListItem Icon={Icon} title={numberFormat(amount)} subTitle={title} key={id} />)}
        </FlexBox>

        <FlexBox alignItems="center" gap={2}>
          <Button sx={{
          minWidth: 100
        }}>Send</Button>
          <Button variant="outlined" color="secondary" sx={{
          minWidth: 100
        }}>
            Receive
          </Button>
        </FlexBox>
      </Box>

      <ImageContainer>
        <img src="/static/illustration/finance-balance.svg" alt="my-balance" />
      </ImageContainer>
    </StyledCard>;
};

export default Balance;
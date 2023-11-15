import Card from "@mui/material/Card"; // CUSTOM COMPONENTS

import { MoreButton } from "components/more-button";
import { H6, Paragraph } from "components/typography";
import FlexBetween from "components/flexbox/FlexBetween";

const Summery = () => {
  return <Card sx={{
    padding: 3
  }}>
      <FlexBetween>
        <H6 fontSize={16}>Summary</H6>
        <MoreButton size="small" />
      </FlexBetween>

      <Paragraph color="text.secondary" mt={2} fontWeight={400}>
        The new iPad combines the power and capability of a computer with the ease of use and
        versatility you’d never expect from one. <br /> <br /> And now it’s even more versatile,
        with a larger 10.2‑inch Retina display, support he new iPad combines the power and
        capability of a computer with the ease of use and versatility you’d never expect
      </Paragraph>
    </Card>;
};

export default Summery;
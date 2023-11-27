import Box from "@mui/material/Box"; // CUSTOM COMPONENTS

import { H6, Paragraph } from "components/typography";

const ProductDescription = () => {
  return <Box padding={3}>
      <H6 mb={0.5} fontSize={14}>
        Specification:
      </H6>

      <Paragraph mb={3}>
        You can't go wrong with a pair of Jordan sneakers. Crafted from black and white leather,
        these Air Jordan 1 Mid SE sneakers are a timeless Easy as that.{" "}
      </Paragraph>

      <H6 mb={0.5} fontSize={14}>
        MATERIAL AND WASHING INSTRUCTIONS
      </H6>

      <Paragraph>
        Shoeupper: 54% bovine leather,46% polyurethane. Lining: 65% polyester,35% cotton. Insole:
        100% polyurethane. Sole: 100% thermoplastic. Fixing sole: 100% glued
      </Paragraph>
    </Box>;
};

export default ProductDescription;
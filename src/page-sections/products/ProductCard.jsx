import { useState } from "react";
import { Box, Card, CardContent, CardMedia, Checkbox, IconButton, styled } from "@mui/material"; // CUSTOM COMPONENTS

import { FlexBetween, FlexBox } from "components/flexbox";
import { H6, Paragraph } from "components/typography"; // CUSTOM ICON COMPONENTS

import Delete from "icons/Delete";
import Edit from "icons/Edit"; // STYLED COMPONENT

const StyledIconButton = styled(IconButton)(({
  theme
}) => {
  const backgroundColor = theme.palette.background.default;
  return {
    backgroundColor,
    "&:hover": {
      backgroundColor
    }
  };
}); // ==============================================================

// ==============================================================
const ProductCard = ({
  item
}) => {
  const [checked, setChecked] = useState(false);

  const handleChange = event => {
    setChecked(event.target.checked);
  };

  return <Card sx={{
    position: "relative"
  }}>
      <Box sx={{
      height: 200,
      width: "100%",
      overflow: "hidden",
      position: "relative",
      "& img": {
        transition: "all 0.3s"
      },
      "&:hover img": {
        transform: "scale(1.2)"
      },
      "&::after": {
        top: 0,
        opacity: 0.5,
        width: "100%",
        content: '""',
        height: "100%",
        position: "absolute",
        transition: "background-color 0.2s",
        backgroundColor: checked ? "primary.100" : "transparent"
      }
    }}>
        <CardMedia width="100%" height="100%" component="img" alt={item.name} image={item.image} />
      </Box>

      <FlexBetween alignItems="flex-start" sx={{
      position: "absolute",
      width: "100%",
      top: 0,
      padding: 1.5
    }}>
        <Checkbox checked={checked} onChange={handleChange} />

        {checked && <FlexBox gap={1}>
            <StyledIconButton>
              <Edit sx={{
            fontSize: 12,
            color: "text.secondary"
          }} />
            </StyledIconButton>

            <StyledIconButton>
              <Delete sx={{
            fontSize: 12,
            color: "text.secondary"
          }} />
            </StyledIconButton>
          </FlexBox>}
      </FlexBetween>

      <CardContent sx={{
      textAlign: "center",
      "&:last-child": {
        pb: 2
      }
    }}>
        <H6 fontSize={14} mb={0.5}>
          {item.name}
        </H6>

        <Paragraph color="text.secondary">${item.price}</Paragraph>
      </CardContent>
    </Card>;
};

export default ProductCard;
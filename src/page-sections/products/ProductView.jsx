import { useState } from "react";
import { Box, Card, Chip, Grid, Stack, Button, styled, TextField, IconButton, RadioGroup } from "@mui/material";
import { CarouselProvider, Dot, Image, Slide, Slider } from "pure-react-carousel"; // CUSTOM COMPONENTS

import { Counter } from "components/counter";
import FlexBox from "components/flexbox/FlexBox";
import { ColorRadio } from "components/color-radio";
import { H2, H6, Paragraph } from "components/typography"; // CUSTOM ICON COMPONENTS

import Heart from "icons/Heart";
import Twitter from "icons/Twitter";
import Facebook from "icons/Facebook";
import Instagram from "icons/Instagram";
import ChevronDown from "icons/ChevronDown"; // STYLED COMPONENTS

const StyledCarouselProvider = styled(CarouselProvider)(({
  theme
}) => ({
  display: "flex",
  position: "relative",
  "& .carousel__slider": {
    flexGrow: 1,
    marginLeft: 10
  },
  "& .carousel__slide-focus-ring": {
    display: "none"
  },
  "& button": {
    border: "none !important",
    opacity: 0.5
  },
  "& button:disabled": {
    opacity: 1,
    position: "relative",
    "&::after": {
      left: 0,
      height: 3,
      bottom: -6,
      content: '""',
      width: "100%",
      position: "absolute",
      backgroundColor: theme.palette.primary.main
    }
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column-reverse",
    "& .carousel__slider": {
      marginLeft: 0
    }
  }
}));
const StyledStack = styled(Stack)(({
  theme
}) => ({
  [theme.breakpoints.down("sm")]: {
    marginTop: 10,
    flexDirection: "row",
    "& .carousel__dot": {
      marginTop: 0,
      marginRight: 8
    }
  }
}));
const StyledIconButton = styled(IconButton)(({
  theme
}) => ({
  top: 10,
  right: 10,
  position: "absolute",
  backgroundColor: theme.palette.grey[400],
  "&:hover": {
    backgroundColor: theme.palette.grey[400]
  }
}));

const ProductViewCard = () => {
  const [colorSelect, setColorSelect] = useState("red"); // HANDLE CHANGE PRODUCT COLOR

  const handleChangeColor = event => {
    setColorSelect(event.target.value);
  };

  return <Card sx={{
    padding: 2
  }}>
      <Grid container spacing={3}>
        {
        /* PRODUCT IMAGE CAROUSEL */
      }
        <Grid item md={7} xs={12}>
          <StyledCarouselProvider totalSlides={3} dragEnabled={false} naturalSlideWidth={100} naturalSlideHeight={75}>
            <StyledStack spacing={3}>
              {[0, 1, 2].map(item => <Dot slide={item} key={item} style={{
              width: 60,
              height: 55
            }}>
                  <Box component={Image} hasMasterSpinner={true} src="/static/products/shoe-10.png" sx={{
                objectFit: "cover",
                borderRadius: 1
              }} />
                </Dot>)}
            </StyledStack>

            <Slider>
              {[0, 1, 2].map(item => <Slide index={item} key={item} className="slide">
                  <Box component={Image} hasMasterSpinner={true} src="/static/products/shoe-10.png" sx={{
                objectFit: "cover",
                borderRadius: 2
              }} />
                </Slide>)}
            </Slider>

            <StyledIconButton>
              <Heart />
            </StyledIconButton>
          </StyledCarouselProvider>
        </Grid>

        {
        /* PRODUCT INFORMATION */
      }
        <Grid item md={5}>
          <Chip color="success" size="small" label="In Stock" />

          {
          /* PRODUCT CATEGORY */
        }
          <Paragraph color="text.secondary" mt={2}>
            NIKE
          </Paragraph>

          {
          /* PRODUCT NAME */
        }
          <H6>Air Jordan 270</H6>

          {
          /* PRODUCT PRICE */
        }
          <H2 color="primary.main" my={2}>
            $350
          </H2>

          {
          /* PRODUCT COLOR */
        }
          <FlexBox alignItems="center" gap={3}>
            <H6 fontSize={16}>Colors:</H6>

            <RadioGroup row value={colorSelect} onChange={handleChangeColor} sx={{
            gap: 1
          }}>
              <ColorRadio value="red" icon_color="#FF316F" />
              <ColorRadio value="pumpkin" icon_color="#FE8969" />
              <ColorRadio value="purple" icon_color="#8C8DFF" />
              <ColorRadio value="green" icon_color="#27CE88" />
            </RadioGroup>
          </FlexBox>

          {
          /* PRODUCT SIZE */
        }
          <FlexBox alignItems="center" gap={3} mt={3}>
            <H6 fontSize={16}>Select size:</H6>

            <TextField select size="small" variant="outlined" SelectProps={{
            native: true,
            IconComponent: ChevronDown
          }} sx={{
            ".MuiNativeSelect-select": {
              lineHeight: 1
            }
          }}>
              <option value="42">42</option>
              <option value="41">41</option>
              <option value="40">40</option>
            </TextField>
          </FlexBox>

          {
          /* PRODUCT QUANTITY */
        }
          <FlexBox alignItems="center" gap={3} mt={3}>
            <H6 fontSize={16}>Quantity:</H6>
            <Counter />
            <Paragraph color="text.secondary">Available: 12</Paragraph>
          </FlexBox>

          {
          /* PRODUCT ADD TO CART BUTTON */
        }
          <FlexBox alignItems="center" gap={3} mt={3}>
            <Button variant="contained">Add to cart</Button>
            <Button variant="contained" color="success">
              Buy Now
            </Button>
          </FlexBox>

          {
          /* SOCIAL LINK BUTTONS */
        }
          <FlexBox mt={2}>
            <IconButton>
              <Facebook sx={{
              color: "text.secondary"
            }} />
            </IconButton>

            <IconButton>
              <Instagram sx={{
              color: "text.secondary"
            }} />
            </IconButton>

            <IconButton>
              <Twitter sx={{
              color: "text.secondary"
            }} />
            </IconButton>
          </FlexBox>
        </Grid>
      </Grid>
    </Card>;
};

export default ProductViewCard;
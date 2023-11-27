"use client";

import { Box, Avatar, Button, styled, Divider, useTheme, IconButton, useMediaQuery } from "@mui/material";
import { AddToDrive, FileDownload } from "@mui/icons-material"; // CUSTOM COMPONENTS

import { MoreButton } from "components/more-button";
import { H6, Paragraph } from "components/typography";
import { FlexBetween, FlexBox, FlexRowAlign } from "components/flexbox"; // CUSTOM ICON COMPONENTS

import Reply from "icons/duotone/Reply";
import Forward from "icons/duotone/Forward";
import { NextImage } from "components/next-image"; // STYLED COMPONENTS

const ImageBox = styled(Box)({
  width: 210,
  height: 130,
  borderRadius: 8,
  cursor: "pointer",
  overflow: "hidden",
  position: "relative",
  ":before": {
    top: 0,
    left: 0,
    opacity: 0,
    content: "''",
    width: "100%",
    height: "100%",
    position: "absolute",
    transition: "all 300ms",
    backgroundColor: "black"
  },
  // img: {
  //   width: "100%",
  //   height: "100%",
  //   objectFit: "cover",
  // },
  ":hover": {
    ":before": {
      opacity: 0.6
    },
    "& .actions": {
      opacity: 1
    }
  }
});
const IconWrapper = styled(FlexRowAlign)({
  inset: 0,
  opacity: 0,
  width: "100%",
  height: "100%",
  margin: "auto",
  position: "absolute",
  transition: "all 300ms"
});

const MailDetailsPageView = () => {
  const {
    direction
  } = useTheme();
  const upSm = useMediaQuery(theme => theme.breakpoints.up("sm"));
  const ICON_STYLE = {
    mr: 1,
    fontSize: 14,
    color: "grey.500",
    rotate: direction === "rtl" ? "180deg" : 0
  };
  return <Box p={3}>
      <FlexBetween gap={2}>
        <FlexBox alignItems="center" gap={1}>
          <Avatar src="/static/user/user-11.png" sx={{
          width: 45,
          height: 45
        }} />

          <Box>
            <Paragraph fontSize={16} fontWeight={600}>
              Penni Nojel
            </Paragraph>

            <Paragraph color="text.secondary">penninojel@gmail.com</Paragraph>
          </Box>
        </FlexBox>

        <FlexBox alignItems="center" gap={2}>
          {upSm && <Paragraph color="text.secondary">Dec 15, 2022, 1:45 PM</Paragraph>}

          <MoreButton size="small" />
        </FlexBox>
      </FlexBetween>

      <H6 fontSize={16} mt={5}>
        How to Choose the Perfect Shopify Theme and Build Your Online Store Fast!
      </H6>

      <Paragraph color="text.secondary" textAlign="justify" lineHeight={1.9} my={3}>
        Learn how to build a branded design system as a solo designer—and everything else you need
        to know about the design systems landscape. Plus, discover how AI-generated art can help you
        deliver better designs in a fraction of the time. Wondering how to build a branded design
        system without a dedicated team? Using MUI components of course! Here's a step-by-step
        breakdown from a senior product designer who did just that—as a solo designer at a startup.
      </Paragraph>

      <Paragraph color="text.secondary" textAlign="justify" lineHeight={1.9}>
        Learn how to build a branded design system as a solo designer—and everything else you need
        to know about the design systems landscape. Plus, discover how AI-generated art can help you
        deliver better designs in a fraction of the time. Wondering how to build a branded design
        system without a dedicated team? Using MUI components of course! Here's a step-by-step
        breakdown from a senior product designer who did just that—as a solo designer at a startup.
      </Paragraph>

      <Divider sx={{
      my: 4
    }} />

      <H6 fontSize={16}>2 Attachments available</H6>

      <FlexBox gap={2} flexWrap="wrap" mt={2}>
        <ImageBox>
          <NextImage alt="attachment" src={require("../../../../public/static/thumbnail/thumbnail-8.png")} style={{
          height: "100%"
        }} />

          <IconWrapper className="actions">
            <IconButton>
              <FileDownload sx={{
              color: "white"
            }} />
            </IconButton>

            <IconButton>
              <AddToDrive sx={{
              color: "white"
            }} />
            </IconButton>
          </IconWrapper>
        </ImageBox>

        <ImageBox>
          <NextImage alt="attachment" src={require("../../../../public/static/thumbnail/thumbnail-8.png")} style={{
          height: "100%"
        }} />

          <IconWrapper className="actions">
            <IconButton>
              <FileDownload sx={{
              color: "white"
            }} />
            </IconButton>

            <IconButton>
              <AddToDrive sx={{
              color: "white"
            }} />
            </IconButton>
          </IconWrapper>
        </ImageBox>
      </FlexBox>

      <FlexBox mt={4} gap={2}>
        <Button color="secondary" variant="outlined">
          <Reply sx={ICON_STYLE} /> Reply
        </Button>

        <Button color="secondary" variant="outlined">
          <Forward sx={ICON_STYLE} /> Forward
        </Button>
      </FlexBox>
    </Box>;
};

export default MailDetailsPageView;
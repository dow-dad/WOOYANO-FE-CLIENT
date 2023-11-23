import { Fragment } from "react";
import { Box, Tab, Card, styled, IconButton } from "@mui/material";
import CameraAlt from "@mui/icons-material/CameraAlt";
import TabList from "@mui/lab/TabList"; // CUSTOM COMPONENTS

import StatBox from "./StatBox";
import ListItem from "./ListItem";
import { AvatarBadge } from "components/avatar-badge";
import { H6 } from "components/typography";
import { FlexBetween, FlexBox } from "components/flexbox";
import { AvatarLoading } from "components/avatar-loading"; // ICON COMPONENTS

import DateRange from "icons/DateRange";
import Bratislava from "icons/Bratislava";
import MapMarkerIcon from "icons/MapMarkerIcon"; // CUSTOM UTILS METHOD

import { format } from "utils/currency"; // STYLED COMPONENTS

const ContentWrapper = styled(Box)({
  zIndex: 1,
  padding: 24,
  marginTop: 55,
  position: "relative"
});
const CoverPicWrapper = styled(Box)({
  top: 0,
  left: 0,
  height: 125,
  width: "100%",
  overflow: "hidden",
  position: "absolute"
});
const StyledFlexBetween = styled(FlexBetween)({
  margin: "auto",
  flexWrap: "wrap"
});
const StyledTabList = styled(TabList)(({
  theme
}) => ({
  borderBottom: 0,
  paddingLeft: 16,
  paddingRight: 16,
  [theme.breakpoints.up("sm")]: {
    "& .MuiTabs-flexContainer": {
      justifyContent: "center"
    }
  }
})); // =======================================================================

// =======================================================================
const Layout = ({
  children,
  handleTabList
}) => {
  return <Fragment>
      <Card sx={{
      position: "relative"
    }}>
        <CoverPicWrapper>
          <img width="100%" height="100%" alt="Team Member" src="/static/cover/user-cover-pic.png" style={{
          objectFit: "cover"
        }} />
        </CoverPicWrapper>

        <ContentWrapper>
          <FlexBox justifyContent="center">
            <AvatarBadge badgeContent={<label htmlFor="icon-button-file">
                  <input type="file" accept="image/*" id="icon-button-file" style={{
              display: "none"
            }} />

                  <IconButton aria-label="upload picture" component="span">
                    <CameraAlt sx={{
                fontSize: 16,
                color: "background.paper"
              }} />
                  </IconButton>
                </label>}>

              {/* 매장 사진 */}
              <AvatarLoading alt="user" borderSize={2} percentage={60} src="/static/logo/character.svg" sx={{
              width: 100,
              height: 100
            }} />
            </AvatarBadge>
          </FlexBox>

          <Box mt={2}>
            <H6 fontSize={18} textAlign="center">
              우야노 클린
            </H6>

          </Box>

          
        </ContentWrapper>

        <StyledTabList variant="scrollable" onChange={handleTabList}>
          <Tab disableRipple label="매장정보 관리" value="1" />
          <Tab disableRipple label="리뷰 관리" value="2" />
          <Tab disableRipple label="운영/휴무시간 관리" value="3" />     
        </StyledTabList>
      </Card>

      {children}
    </Fragment>;
};

export default Layout;
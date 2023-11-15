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
              <AvatarLoading alt="user" borderSize={2} percentage={60} src="/static/user/user-11.png" sx={{
              width: 100,
              height: 100
            }} />
            </AvatarBadge>
          </FlexBox>

          <Box mt={2}>
            <H6 fontSize={18} textAlign="center">
              Pixy Krovasky
            </H6>

            <StyledFlexBetween paddingTop={1} maxWidth={340}>
              <ListItem title="Developer" Icon={Bratislava} />
              <ListItem title="New York" Icon={MapMarkerIcon} />
              <ListItem title="Joined March 17" Icon={DateRange} />
            </StyledFlexBetween>
          </Box>

          <StyledFlexBetween paddingTop={4} maxWidth={400}>
            <StatBox amount={`$${format(4550, "0,00")}`} title="Earnings" color="primary.main" />
            <StatBox amount={format(60, "0,00")} title="Projects" color="success.600" />
            <StatBox amount={`$${format(2800, "0,00")}`} title="Success Rate" color="warning.600" />
          </StyledFlexBetween>
        </ContentWrapper>

        <StyledTabList variant="scrollable" onChange={handleTabList}>
          <Tab disableRipple label="Overview" value="1" />
          <Tab disableRipple label="Projects" value="2" />
          <Tab disableRipple label="Campaigns" value="3" />
          <Tab disableRipple label="Documents" value="4" />
          <Tab disableRipple label="Connections" value="5" />
          <Tab disableRipple label="Activity" value="6" />
        </StyledTabList>
      </Card>

      {children}
    </Fragment>;
};

export default Layout;
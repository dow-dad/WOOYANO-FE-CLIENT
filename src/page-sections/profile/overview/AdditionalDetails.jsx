import { Card, Stack, useTheme, alpha, Box } from "@mui/material"; // CUSTOM COMPONENTS

import { H6, Small } from "components/typography";
import { MoreButton } from "components/more-button";
import FlexBetween from "components/flexbox/FlexBetween"; // CUSTOM ICON COMPONENTS

import Globe from "icons/Globe";
import DateRange from "icons/DateRange";
import Education from "icons/Education";
import UserOutlined from "icons/UserOutlined";
import EmailOutlined from "icons/EmailOutlined";
import BriefcaseOutlined from "icons/BriefcaseOutlined";

const AdditionalDetails = () => {
  const theme = useTheme();
  return <Card sx={{
    padding: 3
  }}>
      <FlexBetween>
        <H6 fontSize={16}>Additional Details</H6>
        <MoreButton size="small" />
      </FlexBetween>

      <Stack mt={3} spacing={2}>
        <ListItem title="Email" Icon={EmailOutlined} subTitle="Uilib@gmail.com" color={theme.palette.grey[400]} />

        <ListItem Icon={Globe} title="Language" subTitle="English, Spanish" color={theme.palette.primary.main} />

        <ListItem title="Nickname" subTitle="Pixy" Icon={UserOutlined} color={theme.palette.warning[600]} />

        <ListItem Icon={DateRange} title="Join Date" subTitle="Aug 15th, 2021" color={theme.palette.success.main} />

        <ListItem title="Work History" subTitle="Theme Forest" Icon={BriefcaseOutlined} color={theme.palette.error.main} />

        <ListItem Icon={Education} title="Education" subTitle="Cambridge University" color={theme.palette.warning.main} />
      </Stack>
    </Card>;
};

export default AdditionalDetails; // ===========================================================================

// ===========================================================================
function ListItem({
  title,
  subTitle,
  Icon,
  color
}) {
  return <Stack direction="row" alignItems="center" spacing={1.5}>
      <Stack alignItems="center" justifyContent="center" sx={{
      width: 30,
      height: 30,
      borderRadius: "4px",
      backgroundColor: alpha(color, 0.2)
    }}>
        <Icon sx={{
        color
      }} />
      </Stack>

      <Box>
        <Small lineHeight={1} color="text.secondary">
          {title}
        </Small>
        <H6 fontSize={14}>{subTitle}</H6>
      </Box>
    </Stack>;
}
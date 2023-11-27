import { TimelineDot, TimelineItem, TimelineContent, TimelineSeparator, TimelineConnector } from "@mui/lab";
import { Stack, Box, Avatar } from "@mui/material"; // CUSTOM COMPONENTS

import { H6, Paragraph, Small } from "components/typography"; // CUSTOM ICON COMPONENT

import Link from "icons/Link";

const FileItem = () => {
  return <TimelineItem sx={{
    "&::before": {
      display: "none"
    }
  }}>
      <TimelineSeparator>
        <TimelineDot>
          <Link sx={{
          fontSize: 16
        }} />
        </TimelineDot>

        <TimelineConnector />
      </TimelineSeparator>

      <TimelineContent sx={{
      pb: 3
    }}>
        <H6 fontSize={14} mb={0.5}>
          Invitation for crafting engaging designs that speak human workshop
        </H6>

        <Stack mt={0.5} direction="row" alignItems="center" spacing={1}>
          <Small color="text.secondary">Added at 4.23 PM by</Small>
          <Avatar src="/static/user/user-9.png" sx={{
          width: 17,
          height: 17
        }} />
        </Stack>

        <Stack direction="row" sx={{
        marginTop: 2,
        borderRadius: 4,
        border: "1px solid",
        padding: ".7rem 1rem",
        borderColor: "divider"
      }}>
          <ListItem title="Finance KPI App" icon="/static/files-icon/pdf.svg" size={90} />
          <ListItem title="Css File Yoga App" icon="/static/files-icon/css.svg" size={90} />
          <ListItem title="All JPGS From Yoga App" icon="/static/files-icon/jpg.svg" size={90} />
        </Stack>
      </TimelineContent>
    </TimelineItem>;
};

export default FileItem; // ===================================================================================

// ===================================================================================
function ListItem({
  title,
  icon,
  size
}) {
  return <Stack direction="row" alignItems="center" spacing={1} mr={6}>
      <Box sx={{
      width: 40,
      flexShrink: 0
    }}>
        <img src={icon} width="100%" alt={title} />
      </Box>

      <Box>
        <Paragraph lineHeight={1} fontWeight={500} color="primary.main">
          {title}
        </Paragraph>

        <Small color="grey.500">{size} mb</Small>
      </Box>
    </Stack>;
}
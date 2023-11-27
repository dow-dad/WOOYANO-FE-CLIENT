import { Avatar, Box, Card, Stack, useTheme } from "@mui/material";
import ManageAccounts from "@mui/icons-material/ManageAccounts";
import { nanoid } from "nanoid"; // CUSTOM COMPONENTS

import { MoreButton } from "components/more-button";
import { Paragraph, Small } from "components/typography";
import { FlexBetween, FlexBox, FlexRowAlign } from "components/flexbox"; // CUSTOM UTILS METHOD

import { isDark } from "utils/constants"; // CUSTOM DUMMY DATA SET

const DATA = [{
  id: nanoid(),
  title: "Material sourcing",
  image: "/static/role/1.png",
  subtitle: "Material sourcing involves"
}, {
  id: nanoid(),
  title: "Transportation",
  image: "/static/role/2.png",
  subtitle: "The best carrier based cost"
}, {
  id: nanoid(),
  title: "Order fulfillment",
  image: "/static/role/3.png",
  subtitle: "The process comprise order"
}, {
  id: nanoid(),
  title: "Warehousing",
  image: "/static/role/4.png",
  subtitle: "Planners consider warehouse"
}, {
  id: nanoid(),
  title: "Supply management",
  image: "/static/role/5.png",
  subtitle: "Logistics is an important link"
}];

const RoleManagement = () => {
  const theme = useTheme();
  return <Card sx={{
    p: 3,
    height: "100%"
  }}>
      <FlexBetween mb={4}>
        <Box>
          <Paragraph ellipsis lineHeight={1.3} fontSize={18} fontWeight={500}>
            Role Management
          </Paragraph>

          <Small fontWeight={500} color="text.secondary">
            The important 5 logistics role
          </Small>
        </Box>

        <MoreButton size="small" />
      </FlexBetween>

      <Stack spacing={3}>
        {DATA.map(({
        id,
        image,
        title,
        subtitle
      }) => <FlexBetween key={id}>
            <FlexBox gap={1.5} overflow="hidden" whiteSpace="nowrap" textOverflow="ellipsis">
              <Avatar variant="rounded" alt={title} src={image} />

              <Box textOverflow="ellipsis" whiteSpace="nowrap" overflow="hidden">
                <Paragraph ellipsis fontSize={16} lineHeight={1} fontWeight={600}>
                  {title}
                </Paragraph>

                <Small ellipsis fontWeight={500} color="text.secondary">
                  {subtitle}
                </Small>
              </Box>
            </FlexBox>

            <FlexRowAlign sx={{
          width: 25,
          height: 25,
          flexShrink: 0,
          borderRadius: 1,
          backgroundColor: isDark(theme) ? "grey.700" : "grey.100"
        }}>
              <ManageAccounts sx={{
            fontSize: 17,
            color: "grey.400"
          }} />
            </FlexRowAlign>
          </FlexBetween>)}
      </Stack>
    </Card>;
};

export default RoleManagement;
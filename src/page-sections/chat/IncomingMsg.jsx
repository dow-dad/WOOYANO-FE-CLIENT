import { Avatar, Box, useTheme } from "@mui/material"; // CUSTOM COMPONENTS

import FlexBox from "components/flexbox/FlexBox";
import { Paragraph, Span } from "components/typography"; // CUSTOM UTILS METHOD

import { isDark } from "utils/constants";

const IncomingMsg = () => {
  const theme = useTheme();
  return <Box maxWidth={{
    md: "60%",
    sm: "70%",
    xs: "80%"
  }}>
      <FlexBox alignItems="center" mb={1} gap={1.5}>
        <Avatar src="/static/user/user-19.png" sx={{
        width: 27,
        height: 27
      }} />

        <Paragraph fontWeight={600} lineHeight={1}>
          Aiony Haust{" "}
          <Span ml={0.5} fontSize={12} fontWeight={400} color="text.secondary">
            11:29 AM
          </Span>
        </Paragraph>
      </FlexBox>

      <Box sx={{
      fontSize: 14,
      marginLeft: 5,
      padding: "1rem 1.5rem",
      borderRadius: "0px 1rem 1rem 1rem",
      backgroundColor: isDark(theme) ? "grey.700" : "grey.100"
    }}>
        Apple Business Chat, or Business Chat, allows customers to interact with a business.
      </Box>
    </Box>;
};

export default IncomingMsg;
import { Fragment } from "react";
import { Box, Stack, Divider, Container, useTheme, Button } from "@mui/material";
import { InsertDriveFileOutlined, KeyboardBackspace } from "@mui/icons-material"; // CUSTOM DEFINED HOOK

import useNavigate from "hooks/useNavigate"; // CUSTOM COMPONENT

import { H6 } from "components/typography"; // CUSTOM UTILS METHOD

import { isDark } from "utils/constants"; // ==============================================================

// ==============================================================
const ComponentPageLayout = ({
  title,
  children,
  fullLink
}) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const url = fullLink ?? `https://mui.com/material-ui/react-${title.toLowerCase()}`;
  return <Fragment>
      <Box bgcolor={isDark(theme) ? "grey.800" : "grey.100"} py={{
      sm: 10,
      xs: 5
    }}>
        <Container>
          <H6 fontSize={24} mb={2}>
            {title}
          </H6>

          <Button onClick={() => navigate("/components")} startIcon={<KeyboardBackspace fontSize="small" />} sx={{
          mr: 2
        }}>
            Go Back
          </Button>

          <Button href={url} target="_blank" color="secondary" variant="outlined" startIcon={<InsertDriveFileOutlined />}>
            Browse {title} Doc
          </Button>
        </Container>
      </Box>

      <Divider />

      <Container component={Stack} spacing={6} sx={{
      py: {
        sm: 10,
        xs: 5
      }
    }}>
        {children}
      </Container>

      <Divider />
    </Fragment>;
};

export default ComponentPageLayout;
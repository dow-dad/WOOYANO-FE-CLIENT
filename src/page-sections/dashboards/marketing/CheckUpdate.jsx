import { Box, Button, Card } from "@mui/material"; // CUSTOM COMPONENTS

import { Paragraph } from "components/typography";

const CheckUpdate = () => {
  return <Card sx={{
    p: 4,
    textAlign: "center"
  }}>
      <Box mb={1} width="100%" maxWidth={200} component="img" src="/static/illustration/check-update.svg" />

      <Paragraph pt={2} pb={3} fontSize={20} margin="auto" fontWeight={600} maxWidth={{
      xl: "60%"
    }}>
        We have big update for you!
      </Paragraph>

      <Button>Check Update</Button>
    </Card>;
};

export default CheckUpdate;
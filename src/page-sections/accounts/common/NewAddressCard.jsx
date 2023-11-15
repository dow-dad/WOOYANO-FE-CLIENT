import { Button, Card, Box, useTheme } from "@mui/material"; // CUSTOM COMPONENTS

import { H6, Small } from "components/typography";

const NewAddressCard = () => {
  const {
    palette
  } = useTheme();
  return <Card sx={{
    padding: 2,
    height: "100%",
    minHeight: 100,
    display: "flex",
    boxShadow: "none",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: palette.mode === "dark" ? "grey.700" : "grey.100"
  }}>
      <Box maxWidth="60%">
        <H6 fontSize={14}>Enter a new address</H6>
        <Small color="grey.500">Add your new destination..</Small>
      </Box>

      <Button variant="contained">New Address</Button>
    </Card>;
};

export default NewAddressCard;
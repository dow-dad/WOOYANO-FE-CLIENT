import { Button, Stack } from "@mui/material";
import { Add } from "@mui/icons-material";

const WithIconButton = () => {
  return <Stack direction="row" flexWrap="wrap" gap={3}>
      <Button color="primary" startIcon={<Add />}>
        Icon Start
      </Button>

      <Button variant="outlined" endIcon={<Add />}>
        Icon End
      </Button>

      <Button variant="text" endIcon={<Add />}>
        Icon End With Text
      </Button>
    </Stack>;
};

export default WithIconButton;
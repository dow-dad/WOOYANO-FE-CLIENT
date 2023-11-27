import { Button, Stack } from "@mui/material";

const ContainedButton = () => {
  return <Stack direction="row" flexWrap="wrap" gap={3}>
      <Button variant="contained" color="inherit">
        Default
      </Button>

      <Button variant="contained" color="primary">
        Primary
      </Button>

      <Button variant="contained" color="secondary">
        Secondary
      </Button>

      <Button variant="contained" color="warning">
        Warning
      </Button>

      <Button variant="contained" color="error">
        Error
      </Button>

      <Button variant="contained" color="success">
        Success
      </Button>
    </Stack>;
};

export default ContainedButton;
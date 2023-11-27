import { Button, Stack } from "@mui/material";

const OutlinedButton = () => {
  return <Stack direction="row" flexWrap="wrap" gap={3}>
      <Button variant="outlined" color="inherit">
        Default
      </Button>

      <Button variant="outlined" color="primary">
        Primary
      </Button>

      <Button variant="outlined" color="secondary">
        Secondary
      </Button>

      <Button variant="outlined" color="warning">
        Warning
      </Button>

      <Button variant="outlined" color="error">
        Error
      </Button>

      <Button variant="outlined" color="success">
        Success
      </Button>
    </Stack>;
};

export default OutlinedButton;
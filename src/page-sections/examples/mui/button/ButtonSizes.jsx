import { Button, Stack } from "@mui/material";

const ButtonSizes = () => {
  return <Stack alignItems="center" direction="row" flexWrap="wrap" gap={3}>
      <Button size="large" variant="contained" color="primary">
        Large
      </Button>

      <Button size="medium" variant="contained" color="primary">
        Medium
      </Button>

      <Button size="small" variant="contained" color="primary">
        Small
      </Button>
    </Stack>;
};

export default ButtonSizes;
import { Add } from "@mui/icons-material";
import { Fab, Stack } from "@mui/material";

const DefaultFab = () => {
  return <Stack direction="row" flexWrap="wrap" gap={3}>
      <Fab color="primary" aria-label="add">
        <Add />
      </Fab>

      <Fab color="secondary" aria-label="add">
        <Add />
      </Fab>

      <Fab color="warning" aria-label="add">
        <Add />
      </Fab>

      <Fab color="error" aria-label="add">
        <Add />
      </Fab>

      <Fab color="success" aria-label="add">
        <Add />
      </Fab>

      <Fab color="default" aria-label="add">
        <Add />
      </Fab>
    </Stack>;
};

export default DefaultFab;
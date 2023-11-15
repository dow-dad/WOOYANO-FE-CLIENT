import { Alert, Stack, ButtonBase } from "@mui/material";
import { CheckCircle, Info, Warning } from "@mui/icons-material";

const ActionAlert = () => {
  return <Stack spacing={3}>
      <Alert severity="info" icon={<Info />} action={<Stack className="btn-group" direction="row">
            <ButtonBase>UNDO</ButtonBase>
            <ButtonBase>Action</ButtonBase>
          </Stack>}>
        This is an primary alert — check it out!
      </Alert>

      <Alert severity="success" variant="outlined" icon={<CheckCircle />} action={<Stack className="btn-group" direction="row">
            <ButtonBase>UNDO</ButtonBase>
            <ButtonBase>Action</ButtonBase>
          </Stack>}>
        This is a success alert — check it out!
      </Alert>

      <Alert severity="warning" variant="filled" icon={<Warning />} action={<Stack className="btn-group" direction="row">
            <ButtonBase>UNDO</ButtonBase>
            <ButtonBase>Action</ButtonBase>
          </Stack>}>
        This is a warning alert — check it out!
      </Alert>
    </Stack>;
};

export default ActionAlert;
import { Alert, Stack } from "@mui/material";
import { CheckCircle, Error, Info, Warning } from "@mui/icons-material";

const OutlinedAlert = () => {
  return <Stack spacing={3}>
      <Alert severity="info" variant="outlined" onClose={() => {}} icon={<Info />}>
        This is an primary alert — check it out!
      </Alert>

      <Alert severity="success" variant="outlined" onClose={() => {}} icon={<CheckCircle />}>
        This is a success alert — check it out!
      </Alert>

      <Alert severity="warning" variant="outlined" onClose={() => {}} icon={<Warning />}>
        This is a warning alert — check it out!
      </Alert>

      <Alert severity="error" variant="outlined" onClose={() => {}} icon={<Error />}>
        This is an error alert — check it out!
      </Alert>
    </Stack>;
};

export default OutlinedAlert;
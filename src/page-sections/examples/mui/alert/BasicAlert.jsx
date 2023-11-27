import { Alert, Stack } from "@mui/material";
import { CheckCircle, Error, Info, Warning } from "@mui/icons-material";

const BasicAlert = () => {
  return <Stack spacing={3}>
      <Alert severity="info" onClose={() => {}} icon={<Info />}>
        This is an primary alert — check it out!
      </Alert>

      <Alert severity="success" onClose={() => {}} icon={<CheckCircle />}>
        This is a success alert — check it out!
      </Alert>

      <Alert severity="warning" onClose={() => {}} icon={<Warning />}>
        This is a warning alert — check it out!
      </Alert>

      <Alert severity="error" onClose={() => {}} icon={<Error />}>
        This is an error alert — check it out!
      </Alert>
    </Stack>;
};

export default BasicAlert;
import { useEffect, useState } from "react";
import { Step, StepConnector, StepLabel } from "@mui/material";
import MuiStepper from "@mui/material/Stepper";
const STEPS = ["Cart", "Billing & address", "Payment"]; // ============================================================================

// ============================================================================
const Stepper = ({
  stepNo
}) => {
  const [activeStep, setActiveStep] = useState(0);
  useEffect(() => {
    if (stepNo) setActiveStep(stepNo);
  }, [stepNo]);
  return <MuiStepper alternativeLabel activeStep={activeStep} connector={<StepConnector />}>
      {STEPS.map(label => {
      return <Step key={label} sx={{
        padding: 0
      }}>
            <StepLabel>{label}</StepLabel>
          </Step>;
    })}
    </MuiStepper>;
};

export default Stepper;
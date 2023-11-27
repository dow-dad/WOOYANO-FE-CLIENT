import { Box, Step, Stack, styled, Button, Stepper, StepLabel, StepContent, StepConnector, stepConnectorClasses, useTheme } from "@mui/material";
import { Fragment, useState } from "react";
import { Check } from "@mui/icons-material"; // CUSTOM COMPONENTS

import { Block } from "components/block";
import { FlexBox } from "components/flexbox";
import { Paragraph } from "components/typography";
import ComponentPageLayout from "../../ComponentPageLayout"; // CUSTOM UTILS METHOD

import { isDark } from "utils/constants"; // STYLED COMPONENTS

const CustomConnector = styled(StepConnector)(({
  theme
}) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)"
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: theme.palette.primary.main
    }
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: theme.palette.primary.main
    }
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderRadius: 1,
    borderTopWidth: 3,
    borderColor: theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0"
  }
}));
const CustomStepIconRoot = styled("div")(({
  theme,
  ownerState
}) => ({
  color: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#eaeaf0",
  display: "flex",
  height: 22,
  alignItems: "center",
  ...(ownerState.active && {
    color: theme.palette.primary.main
  }),
  "& .QontoStepIcon-completedIcon": {
    zIndex: 1,
    fontSize: 18,
    color: theme.palette.primary.main
  },
  "& .QontoStepIcon-circle": {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "currentColor"
  }
}));

const CustomStepIcon = ({
  active,
  completed,
  className
}) => <CustomStepIconRoot ownerState={{
  active
}} className={className}>
    {completed ? <Check className="QontoStepIcon-completedIcon" /> : <div className="QontoStepIcon-circle" />}
  </CustomStepIconRoot>;

const linear = ["Select campaign settings", "Create an ad group", "Create an ad"];
const steps = [{
  label: "Select campaign settings",
  description: `For each ad campaign that you create, you can control how much you're willing to spend on clicks and conversions, which networks and geographical locations you want your ads to show on, and more.`
}, {
  label: "Create an ad group",
  description: "An ad group contains one or more ads which target a shared set of keywords."
}, {
  label: "Create an ad",
  description: `Try out different ad text to see what brings in the most customers, and learn how to enhance your ads using features like ad extensions. If you run into any problems with your ads, find out how to tell if they're running and how to resolve approval issues.`
}];

const MuiStepperPageView = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());

  const isStepOptional = step => step === 1;

  const isStepSkipped = step => skipped.has(step);

  const handleReset = () => setActiveStep(0);

  const handleBack = () => setActiveStep(prevActiveStep => prevActiveStep - 1);

  const handleNext = () => {
    let newSkipped = skipped;

    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(prevSkipped => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  }; // vertical stepper


  const [verticalStep, setVerticalStep] = useState(0);

  const handleVerticalReset = () => setVerticalStep(0);

  const handleVerticalNext = () => setVerticalStep(state => state + 1);

  const handleVerticalBack = () => setVerticalStep(state => state - 1);

  const stepperNavigation = () => {
    return activeStep === linear.length ? <Fragment>
        <Box bgcolor={isDark(theme) ? "grey.800" : "grey.50"} borderRadius={3} p={3} mt={3}>
          <Paragraph fontWeight={500}>All steps completed - you&apos;re finished</Paragraph>
        </Box>

        <FlexBox pt={2}>
          <Box flex="1 1 auto" />
          <Button onClick={handleReset}>Reset</Button>
        </FlexBox>
      </Fragment> : <Fragment>
        <Box bgcolor={isDark(theme) ? "grey.800" : "grey.50"} borderRadius={3} p={3} mt={3}>
          <Paragraph fontWeight={500}>Step {activeStep + 1}</Paragraph>
        </Box>

        <FlexBox pt={2}>
          <Button variant="text" color="inherit" onClick={handleBack} disabled={activeStep === 0}>
            Back
          </Button>

          <Box flex="1 1 auto" />

          {isStepOptional(activeStep) && <Button variant="text" color="inherit" onClick={handleSkip} sx={{
          mr: 1
        }}>
              Skip
            </Button>}

          <Button onClick={handleNext}>
            {activeStep === linear.length - 1 ? "Finish" : "Next"}
          </Button>
        </FlexBox>
      </Fragment>;
  };

  return <ComponentPageLayout title="Stepper">
      <Block bgTransparent title="Horizontal Linear">
        <Stepper activeStep={activeStep}>
          {linear.map((label, index) => {
          const completed = isStepSkipped(index) ? false : undefined;
          const optional = isStepOptional(index) ? <Paragraph>Optional</Paragraph> : undefined;
          return <Step key={label} completed={completed}>
                <StepLabel optional={optional}>{label}</StepLabel>
              </Step>;
        })}
        </Stepper>

        {stepperNavigation()}
      </Block>

      <Block bgTransparent title="Alternative Label">
        <Stepper alternativeLabel activeStep={activeStep}>
          {linear.map((label, index) => {
          const completed = isStepSkipped(index) ? false : undefined;
          const optional = isStepOptional(index) ? <Paragraph>Optional</Paragraph> : undefined;
          return <Step key={label} completed={completed}>
                <StepLabel optional={optional}>{label}</StepLabel>
              </Step>;
        })}
        </Stepper>

        {stepperNavigation()}
      </Block>

      <Block bgTransparent title="Customized Stepper">
        <Stepper alternativeLabel activeStep={activeStep} connector={<CustomConnector />}>
          {linear.map(label => <Step key={label}>
              <StepLabel StepIconComponent={CustomStepIcon}>{label}</StepLabel>
            </Step>)}
        </Stepper>

        {stepperNavigation()}
      </Block>

      <Block bgTransparent title="Vertical Stepper">
        <Stepper activeStep={verticalStep} orientation="vertical">
          {steps.map((step, index) => <Step key={step.label}>
              <StepLabel optional={index === 2 ? <Paragraph>Last step</Paragraph> : null}>
                {step.label}
              </StepLabel>

              <StepContent>
                <Paragraph>{step.description}</Paragraph>

                <Stack mt={3} direction="row" gap={1}>
                  <Button size="small" onClick={handleVerticalNext}>
                    {index === steps.length - 1 ? "Finish" : "Continue"}
                  </Button>

                  <Button size="small" variant="text" color="inherit" disabled={index === 0} onClick={handleVerticalBack}>
                    Back
                  </Button>
                </Stack>
              </StepContent>
            </Step>)}
        </Stepper>

        {verticalStep === steps.length && <Box bgcolor={isDark(theme) ? "grey.800" : "grey.50"} borderRadius={3} p={3} mt={3}>
            <Paragraph fontWeight={500} mb={2}>
              All steps completed - you&apos;re finished
            </Paragraph>

            <Button size="small" onClick={handleVerticalReset}>
              Reset
            </Button>
          </Box>}
      </Block>
    </ComponentPageLayout>;
};

export default MuiStepperPageView;
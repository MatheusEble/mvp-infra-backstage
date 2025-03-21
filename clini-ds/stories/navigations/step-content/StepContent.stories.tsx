import React from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { StepContent } from "./StepContent";
import { Box, Paper } from "@mui/material";
import { Typography } from "../../data-display/typography/Typography";
import { Button } from "../../inputs/button/Button";
import { StepLabel } from "../step-label/StepLabel";
import { Stepper } from "../stepper/Stepper";
import { Step } from "../step/Step";

const meta = {
  title: "navigations/StepContent",
  component: StepContent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    onClick: action("icon clicked"),
  },
  argTypes: {
    onClick: { action: "icon clicked" },
    color: { control: "select", options: ["primary"] },
  },
} satisfies Meta<typeof StepContent>;

export const Default: Story = {
  render: (args) => {
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = [
      {
        label: "Select campaign settings",
        description: `For each ad campaign that you create, you can control how much
                  you"re willing to spend on clicks and conversions, which networks
                  and geographical locations you want your ads to show on, and more.`,
      },
      {
        label: "Create an ad group",
        description:
          "An ad group contains one or more ads which target a shared set of keywords.",
      },
      {
        label: "Create an ad",
        description: `Try out different ad text to see what brings in the most customers,
                  and learn how to enhance your ads using features like ad extensions.
                  If you run into any problems with your ads, find out how to tell if
                  they"re running and how to resolve approval issues.`,
      },
    ];

    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
      setActiveStep(0);
    };

    return (
      <Box sx={{ maxWidth: 400 }}>
        <p>
          Não é possível usar StepContent com o Stepper na horizontal.
        </p>

        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel
                optional={
                  index === steps.length - 1 ? (
                    <Typography variant="caption">Last step</Typography>
                  ) : null
                }
              >
                {step.label}
              </StepLabel>

              <StepContent>
                <Typography>{step.description}</Typography>

                <Box sx={{ mb: 2 }}>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? "Finish" : "Continue"}
                  </Button>

                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>

        {activeStep === steps.length && (
          <Paper square elevation={0} sx={{ p: 3 }}>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
              Reset
            </Button>
          </Paper>
        )}
      </Box>
    );
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

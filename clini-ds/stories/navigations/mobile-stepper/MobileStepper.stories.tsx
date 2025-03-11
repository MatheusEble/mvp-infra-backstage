import React from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { MobileStepper } from "./MobileStepper";
import { Typography } from "../../data-display/typography/Typography";
import { Button } from "../../inputs/button/Button";
import { Icon } from "../../data-display/icon/Icon";
import { useTheme } from "../../utils/useTheme";

const meta = {
  title: "navigations/MobileStepper",
  component: MobileStepper,
  parameters: {
    layout: "centered",
  },
  args: {
    variant: "text",
  },
  argTypes: {
    variant: { control: "select", options: ["text", "dots", "progress"] },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof MobileStepper>;

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

const Template = ({ variant = "text" }) => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div style={{ maxWidth: 400, flexGrow: 1 }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          height: 50,
          paddingLeft: 2,
          backgroundColor: "background.default",
        }}
      >
        <Typography>
          {steps[activeStep].label}
        </Typography>
      </div>

      <div style={{ height: 255, maxWidth: 400, width: "100%", padding: 2 }}>
        {steps[activeStep].description}
      </div>

      <MobileStepper
        variant={variant}
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <Icon>keyboard_arrow_left</Icon>
            ) : (
              <Icon>keyboard_arrow_right</Icon>
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <Icon>keyboard_arrow_right</Icon>
            ) : (
              <Icon>keyboard_arrow_left</Icon>
            )}
            Back
          </Button>
        }
      />
    </div>
  );
}

export const Default: Story = {
  render: Template,
};

export const WithDots: Story = {
  render: () => <Template variant="dots" />,
};

export const WithProgress: Story = {
  render: () => <Template variant="progress" />,
};

export default meta;

type Story = StoryObj<typeof meta>;

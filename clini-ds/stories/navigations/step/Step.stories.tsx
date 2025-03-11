import React from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Step } from "./Step";
import { StepLabel } from "../step-label/StepLabel";
import { Stepper } from "../stepper/Stepper";

const meta = {
  title: "navigations/Step",
  component: Step,
  parameters: {
    layout: "centered",
  },
  args: {
    completed: false,
    active: false,
  },
  argTypes: {
    completed: {
      control: {
        type: "boolean",
      }
    },
    active: {
      control: {
        type: "boolean",
      }
    }
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Step>;

export const Default: Story = {
  render: (args) => (
    <Stepper activeStep={1} style={{ width: 500 }}>
      <Step key="Cadastro">
        <StepLabel optional="optional">
          Cadastro
        </StepLabel>
      </Step>

      <Step key="Contato">
        <StepLabel optional="optional">
          Contato
        </StepLabel>
      </Step>

      <Step key="Concluir">
        <StepLabel optional="optional">
          Concluir
        </StepLabel>
      </Step>
    </Stepper>
  ),
};

export const Vertical: Story = {
  render: (args) => (
    <Stepper orientation="vertical" activeStep={1}>
      <Step key="Cadastro">
        <StepLabel optional="optional">
          Cadastro
        </StepLabel>
      </Step>

      <Step key="Contato">
        <StepLabel optional="optional">
          Contato
        </StepLabel>
      </Step>

      <Step key="Concluir">
        <StepLabel optional="optional">
          Concluir
        </StepLabel>
      </Step>
    </Stepper>
  ),
};

export const AlternativeLabel: Story = {
  render: (args) => (
    <Stepper activeStep={1} style={{ width: 500 }} alternativeLabel>
      <Step key="Cadastro">
        <StepLabel optional="optional">
          Cadastro
        </StepLabel>
      </Step>

      <Step key="Contato">
        <StepLabel optional="optional">
          Contato
        </StepLabel>
      </Step>

      <Step key="Concluir">
        <StepLabel optional="optional">
          Concluir
        </StepLabel>
      </Step>
    </Stepper>
  ),
};

export const Active: Story = {
  args: {
    active: true,
  },
  render: (args) => (
    <Stepper activeStep={0}>
      <Step {...args}>
        <StepLabel optional="optional">
          Cadastro
        </StepLabel>
      </Step>
    </Stepper>
  ),
};

export const Completed: Story = {
  args: {
    completed: true,
  },
  render: (args) => (
    <Stepper activeStep={0}>
      <Step {...args}>
        <StepLabel optional="optional">
          Cadastro
        </StepLabel>
      </Step>
    </Stepper>
  ),
};

export default meta;

type Story = StoryObj<typeof meta>;

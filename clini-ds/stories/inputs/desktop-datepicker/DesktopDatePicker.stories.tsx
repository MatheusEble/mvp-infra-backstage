import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { DesktopDatePicker } from "./DesktopDatePicker";

const meta = {
  title: "inputs/DesktopDatePicker",
  component: DesktopDatePicker,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    onChange: fn(),
  },
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["standard", "outlined", "filled"],
      },
    },
  },
} satisfies Meta<typeof DesktopDatePicker>;
export const Default: Story = {
  render: DesktopDatePicker,
  args: {
    label: "Selecionar Data",
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        story: `Não passando a prop "variant", o valor padrão será "standard".`,
      },
    },
  },
};

export const Outlined: Story = {
  render: DesktopDatePicker,
  args: {
    label: "Selecionar Data",
    variant: "outlined",
  },
};

export const Filled: Story = {
  render: DesktopDatePicker,
  args: {
    label: "Selecionar Data",
    variant: "filled",
  },
};

export const Disabled: Story = {
  render: DesktopDatePicker,
  args: {
    disabled: true,
    label: "Data Desativada",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

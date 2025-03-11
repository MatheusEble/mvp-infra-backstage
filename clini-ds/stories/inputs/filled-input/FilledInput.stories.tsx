import React from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { FilledInput } from "./FilledInput";
import { FormControl } from "../form-control/FormControl";
import { InputLabel } from "../input-label/InputLabel";

const meta = {
  title: "inputs/FilledInput",
  component: FilledInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    onChange: fn(),
  }
} satisfies Meta<typeof FilledInput>;

export const InputDefault: Story = {
  render: () => (
    <FormControl variant="filled">
      <InputLabel htmlFor="component-filled">Name</InputLabel>

      <FilledInput id="component-filled" defaultValue="Composed TextField" />
    </FormControl>
  ),
  args: {
    placeholder: "placeholder"
  },
};

export default meta;

type Story = StoryObj<typeof meta>;
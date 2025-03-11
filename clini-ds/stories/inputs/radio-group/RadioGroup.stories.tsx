import React from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { RadioGroup } from "./RadioGroup";
import { FormControlLabel } from "../form-control-label/FormControlLabel";
import { Radio } from "../radio/radio";
import { FormControl } from "../form-control/FormControl";
import { FormLabel } from "../form-label/FormLabel";

const meta = {
  title: "inputs/RadioGroup",
  component: RadioGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    onChange: fn(),
  },
  argTypes: {
    onChange: { action: "button clicked" },
  },
} satisfies Meta<typeof RadioGroup>;

export const RadioGroupDefault: Story = {
  render: () => (
    <RadioGroup
      aria-labelledby="demo-controlled-radio-buttons-group"
      name="controlled-radio-buttons-group"
    >
      <FormControlLabel value="female" control={<Radio />} label="Female" />
      <FormControlLabel value="male" control={<Radio />} label="Male" />
    </RadioGroup>
  ),
  args: {
    defaultChecked: true,
  }
};

export const RadioGroupDisabled: Story = {
  render: () => {
    const [value, setValue] = React.useState("female");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue((event.target as HTMLInputElement).value);
    };

    return (
      <FormControl disabled>
        <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
        </RadioGroup>
      </FormControl>
    );
  }
};

export const FormControlLabelExample: Story = {
  render: () => {
    return (
      <FormControl>
        <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>

        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
          <FormControlLabel
            value="disabled"
            disabled
            control={<Radio />}
            label="other"
          />
        </RadioGroup>
      </FormControl>
    );
  }
};

export default meta;

type Story = StoryObj<typeof meta>;
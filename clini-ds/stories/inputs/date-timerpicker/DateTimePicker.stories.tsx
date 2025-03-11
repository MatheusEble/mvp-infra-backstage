import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { DateTimePicker } from "./DateTimePicker";

const meta = {
	title: "inputs/DateTimePicker",
	component: DateTimePicker,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	args: {
		onChange: fn(),
		variant: "standard",
	},
	argTypes: {
		variant: {
			control: {
				type: "select",
				options: ["standard", "outlined", "filled"],
				defaultValue: "standard",
			},
		},
	},
} satisfies Meta<typeof DateTimePicker>;

export const Default: Story = {
	render: DateTimePicker,
	args: {
		disabled: false,
	},
};

export const Outlined: Story = {
	render: DateTimePicker,
	args: {
		variant: "outlined",
	},
};

export const Filled: Story = {
	render: DateTimePicker,
	args: {
		variant: "filled",
	},
};

export const Disabled: Story = {
	render: DateTimePicker,
	args: {
		disabled: true,
		variant: "standard",
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

import React from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Select } from "./Select";
import { MenuItem } from "../../navigations/menu-item/MenuItem";

const meta = {
    title: "inputs/Select",
    component: Select,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    args: {
        onChange: action("onChange"),
        onClose: action("onClose"),
        onOpen: action("onOpen"),
        style: { marginLeft: 10 },
        defaultValue: "apple"
    },
    argTypes: {
        onChange: { action: "onChange" },
        variant: {
            control: { type: "select" },
            options: ["standard", "outlined", "filled"],
        },
        defaultOpen: {
            control: { type: "boolean" },
        },
        defaultValue: {
            control: { type: "text" },
        },
        displayEmpty: {
            control: { type: "boolean" },
        },
        disabled: {
            control: { type: "boolean" },
        },
    },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SelectDefault: Story = {
    render: (args) => (
        <Select {...args}>
            <MenuItem value="apple">Apple</MenuItem>
            <MenuItem value="banana">Banana</MenuItem>
            <MenuItem value="orange">Orange</MenuItem>
        </Select>
    ),
};

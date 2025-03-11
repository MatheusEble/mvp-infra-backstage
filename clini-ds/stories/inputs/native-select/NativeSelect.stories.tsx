import React from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { NativeSelect } from "./NativeSelect";

const meta = {
    title: "inputs/NativeSelect",
    component: NativeSelect,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    argTypes: {
        onChange: { action: "onChange" },
        variant: {
            control: { type: "select" },
            options: ["standard", "outlined", "filled"],
        },
        value: {
            control: { type: "text" },
        },
        defaultValue: {
            control: { type: "text" },
        }
    },
    args: {
        onChange: action("onChange"),
        value: "banana",
    }
} satisfies Meta<typeof NativeSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NativeSelectDefault: Story = {
    render: (args) => (
        <NativeSelect {...args} >
            <option value="apple">Apple</option>
            <option value="banana">Banana</option>
            <option value="orange">Orange</option>
        </NativeSelect>
    ),
};

import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { ToggleButton } from "./ToggleButton";

const meta: Meta<typeof ToggleButton> = {
    title: "inputs/ToggleButton",
    component: ToggleButton,
    tags: ["autodocs"],
    args: {
        onChange: action("onChange"),
        onClick: action("onClick"),
    },
    argTypes: {
        onChange: { action: "onChange" },
        size: {
            control: { type: "select" },
            options: ["small", "medium", "large"],
            description: "Controla o tamanho do botão.",
        },
        disabled: {
            control: { type: "boolean" },
            description: "Controla se o botão está desabilitado.",
        },
        disableFocusRipple: {
            control: { type: "boolean" },
            description: "Controla se o ripple do botão está desabilitado.",
        },
        fullWidth : {
            control: { type: "boolean" },
            description: "Controla se o botão ocupa toda a largura disponível.",
        },
        selected: {
            control: { type: "boolean" },
            description: "Controla se o botão está selecionado.",
        },
        value: {
            control: { type: "text" },
            description: "Controla o valor do botão.",
        },
    }
};
export default meta;

type Story = StoryObj<typeof meta>;

export const ToggleButtonDefault: Story = {
    render: (args) => (
        <ToggleButton {...args}>
           WEB
        </ToggleButton>
    ),
    parameters: {
        layout: "centered",
    },
};

export const ToggleButtonFullWidth: Story = {
    render: (args) => (
        <ToggleButton {...args} fullWidth>
            IOS
        </ToggleButton>
    ),
};

export const ToggleButtonDisabled: Story = {
    render: (args) => (
        <ToggleButton {...args} disabled>
            ANDROID
        </ToggleButton>
    ),
    args: {
        disabled: true,
    },
    parameters: {
        layout: "centered",
    },
};
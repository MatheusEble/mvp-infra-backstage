import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { ToggleButtonGroup } from "./ToggleButtonGroup";
import { ToggleButton } from "../toggle-button/ToggleButton";
import { Icon } from "../../data-display/icon/Icon";

const meta: Meta<typeof ToggleButtonGroup> = {
    title: "inputs/ToggleButtonGroup",
    component: ToggleButtonGroup,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    args: {
        onChange: action("onChange"),
        color: "primary",
        exclusive: true,
        orientation: "horizontal",
        size: "medium",
        value: "check"
    },
    argTypes: {
        onChange: { action: "onChange" },
        size: {
            control: { type: "select" },
            options: ["small", "medium", "large"],
            description: "Controla o tamanho do botão.",
        },
        orientation: {
            control: { type: "select" },
            options: ["horizontal", "vertical"],
            description: "Controla a orientação do botão. Pode ser `horizontal` ou `vertical`.",
        },
        exclusive: {
            control: { type: "boolean" },
            description: "Controla se o botão está selecionado.",
        },
        fullWidth: {
            control: { type: "boolean" },
            description: "Controla se o botão ocupa toda a largura disponível.",
        }
    },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const ToggleButtonGroupDefault: Story = {
    render: (args) => (
        <ToggleButtonGroup {...args}>
            <ToggleButton value="check">
                WEB
            </ToggleButton>
            <ToggleButton value="check">
                ANDROID
            </ToggleButton>
            <ToggleButton value="check">
                IOS
            </ToggleButton>
        </ToggleButtonGroup>
    ),
};

export const ToggleButtonGroupVertical: Story = {
    render: (args) => (
        <ToggleButtonGroup {...args}>
            <ToggleButton value="check">
                <Icon>
                    laptop
                </Icon>
            </ToggleButton>
            <ToggleButton value="check">
                <Icon>
                    tv
                </Icon>
            </ToggleButton>
            <ToggleButton value="check">
                <Icon>
                    phoneAndroid
                </Icon>
            </ToggleButton>
        </ToggleButtonGroup>
    ),
    args: {
        orientation: "vertical",
        exclusive: false
    },
};

export const ToggleButtonGroupFullWidth: Story = {
    render: (args) => (
        <ToggleButtonGroup {...args}>
            <ToggleButton value="check">
                FULL
            </ToggleButton>
            <ToggleButton value="check">
                WIDTH
            </ToggleButton>
            <ToggleButton value="check">
                TOGGLE BUTTON
            </ToggleButton>
        </ToggleButtonGroup>
    ),
    args: {
        fullWidth: true
    },
    parameters: {
        layout: "",
    },
};

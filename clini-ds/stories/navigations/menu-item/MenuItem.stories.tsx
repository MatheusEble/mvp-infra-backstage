import React from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { MenuItem } from "./MenuItem";
import { ListItemIcon } from "../../data-display/list-item-icon/ListItemIcon";
import { Icon } from "../../data-display/icon/Icon";

const meta = {
    title: "navigations/MenuItem",
    component: MenuItem,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    args: {
        onClick: action("onClick"),
    },
    argTypes: {
        disabled: {
            control: { type: "boolean" },
            description: "Define se o item do menu está desabilitado.",
        },
        selected: {
            control: { type: "boolean" },
            description: "Define se o item do menu está selecionado.",
        },
    },
} satisfies Meta<typeof MenuItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: (args) => <MenuItem {...args}>Menu Item</MenuItem>,
};

export const Selected: Story = {
    render: (args) => <MenuItem {...args} selected>Selected Item</MenuItem>,
    args: {
        selected: true,
    },
};

export const Disabled: Story = {
    render: (args) => <MenuItem {...args} disabled>Disabled Item</MenuItem>,
    args: {
        disabled: true,
    },
};

export const WithIcon: Story = {
    render: (args) => (
        <MenuItem {...args}>
            <ListItemIcon>
                <Icon>person</Icon>
            </ListItemIcon>
            Profile
        </MenuItem>
    ),
};

export const WithCheckmark: Story = {
    render: (args) => (
        <MenuItem {...args}>
            <ListItemIcon>
                <Icon>check</Icon>
            </ListItemIcon>
            Selected Option
        </MenuItem>
    ),
};

export const LogoutOption: Story = {
    render: (args) => (
        <MenuItem {...args}>
            <ListItemIcon>
                <Icon>logout</Icon>
            </ListItemIcon>
            Logout
        </MenuItem>
    ),
};

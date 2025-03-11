import React from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { MenuList } from "./MenuList";
import { MenuItem } from "../menu-item/MenuItem";
import { ListItemIcon } from "../../data-display/list-item-icon/ListItemIcon";
import { Icon } from "../../data-display/icon/Icon";

const meta = {
    title: "navigations/MenuList",
    component: MenuList,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    args: {
        onChange: action("onChange"),
    },
    argTypes: {
        onChange: {
            action: "onChange",
        },
        autoFocus: {
            control: {
                type: "boolean"
            }
        },
        variant: {
            control: {
                type: "select",
                options: ["menu", "selectedMenu"]
            }
        }
    }
} satisfies Meta<typeof MenuList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: (args) => (
        <MenuList {...args}>
            <MenuItem onClick={action("onClick")}>Profile</MenuItem>
            <MenuItem onClick={action("onClick")}>Settings</MenuItem>
            <MenuItem onClick={action("onClick")}>Logout</MenuItem>
        </MenuList>
    ),
};

export const WithIcons: Story = {
    render: (args) => (
        <MenuList {...args}>
            <MenuItem onClick={action("onClick")}>
                <ListItemIcon>
                    <Icon>person</Icon>
                </ListItemIcon>

                Profile
            </MenuItem>
            <MenuItem onClick={action("onClick")}>
                <ListItemIcon>
                    <Icon>settings</Icon>
                </ListItemIcon>

                Settings
            </MenuItem>
            <MenuItem onClick={action("onClick")}>
                <ListItemIcon>
                    <Icon>logout</Icon>
                </ListItemIcon>

                Logout
            </MenuItem>
        </MenuList>
    ),
};

export const WithDisabledItems: Story = {
    render: (args) => (
        <MenuList {...args}>
            <MenuItem onClick={action("onClick")}>Profile</MenuItem>
            <MenuItem onClick={action("onClick")} disabled>Settings (Disabled)</MenuItem>
            <MenuItem onClick={action("onClick")}>Logout</MenuItem>
        </MenuList>
    ),
};

export const SelectableList: Story = {
    render: (args) => (
        <MenuList {...args}>
            <MenuItem onClick={action("onClick")} selected>
                <ListItemIcon>
                    <Icon>
                        check
                    </Icon>
                </ListItemIcon>

                Selected Option
            </MenuItem>
            <MenuItem onClick={action("onClick")}>
                <ListItemIcon>
                    <Icon>
                        check
                    </Icon>
                </ListItemIcon>

                Another Option
            </MenuItem>
        </MenuList>
    ),
};

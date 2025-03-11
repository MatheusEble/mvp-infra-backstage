import React, { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Button } from "../../inputs/button/Button";

import { Menu } from "./Menu";
import { MenuItem } from "../menu-item/MenuItem";
import { MenuList } from "../menu-list/MenuList";

const meta = {
    title: "navigations/Menu",
    component: Menu,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    args: {
        onClose: action("onClose"),
    },
    argTypes: {
        onClose: {
            action: "onClose"
        },
        open: {
            control: {
                type: "boolean",
                description: "Define se o menu está aberto."
            }
        },
        autoFocus: {
            control: {
                type: "boolean"
            }
        },
        anchorEl: {
            control: { type: "text" },
            description: "Define o elemento de ancoragem do Menu. Pode ser um nó do DOM ou uma função que retorna um nó.",
            table: {
                type: { summary: "HTMLElement | (() => HTMLElement) | null" },
                defaultValue: { summary: "null" },
            },
        },
    },
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicMenu: Story = {
    render: (args) => {
        const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
        const open = Boolean(anchorEl);

        const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
            setAnchorEl(event.currentTarget);
            action("onOpen")(event);
        };

        const handleClose = () => {
            setAnchorEl(null);
            action("onClose")();
        };

        return (
            <>
                <Button variant="contained" onClick={handleClick}>
                    Open Menu
                </Button>
                <Menu {...args} open={open} anchorEl={anchorEl} onClose={handleClose}>
                    <MenuList>
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </MenuList>
                </Menu>
            </>
        );
    },
};

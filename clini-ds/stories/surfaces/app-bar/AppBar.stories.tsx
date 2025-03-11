
import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { AppBar } from "./AppBar";
import { Toolbar } from "../../navigations/toolbar/Toolbar";
import { IconButton } from "../../inputs/icon-button/IconButton";
import { Icon } from "../../data-display/icon/Icon";
import { Typography } from "../../data-display/typography/Typography";
import theme from "../../utils/stylesheet/theme/Theme";

const meta: Meta<typeof AppBar> = {
    title: "surfaces/AppBar",
    component: AppBar,
    tags: ["autodocs"],
    parameters: {
        layout: "padded",
    },
    args: {
        color: "primary",
        enableColorOnDark: true,
        position: "static",
    },
    argTypes: {
        color: {
            control: "select",
            options: ["default", "inherit", "primary", "secondary", "transparent", "error", "info", "success", "warning"]
        },
        enableColorOnDark: {
            control: {
                type: "boolean"
            },
            description: "Determina se a cor da AppBar será aplicada em temas escuros. Se true, a cor definida será mantida mesmo no modo escuro."
        },
        position: {
            control: "select",
            options: ["static", "fixed", "absolute", "relative", "sticky"]
        }
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

const iconStyle = { color: theme.palette.white };

export const DefaultAppBar: Story = {
    render: (args) => (
        <AppBar {...args}>
            <Toolbar>
                <IconButton>
                    <Icon style={iconStyle}>menu</Icon>
                </IconButton>
                <Typography>News</Typography>
            </Toolbar>
        </AppBar>
    ),
};

export const AppBarWithActions: Story = {
    render: (args) => (
        <AppBar {...args}>
            <Toolbar>
                <IconButton>
                    <Icon style={iconStyle}>menu</Icon>
                </IconButton>
                <Typography>AppBar with Actions</Typography>
                <IconButton>
                    <Icon style={iconStyle}>search</Icon>
                </IconButton>
                <IconButton>
                    <Icon style={iconStyle}>more_vert</Icon>
                </IconButton>
            </Toolbar>
        </AppBar>
    ),
};

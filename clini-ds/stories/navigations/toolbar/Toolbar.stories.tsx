import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Toolbar } from "./Toolbar";
import { Button } from "../../inputs/button/Button";
import { IconButton } from "../../inputs/icon-button/IconButton";
import { Icon } from "../../data-display/icon/Icon";
import { Typography } from "../../data-display/typography/Typography";

/**
* ## Toolbar  
* O componente `Toolbar` é usado para agrupar botões, títulos e ícones dentro de um cabeçalho ou menu de navegação.
*/

const meta: Meta<typeof Toolbar> = {
    title: "navigations/Toolbar",
    component: Toolbar,
    tags: ["autodocs"],
    parameters: {
        layout: "padded",
    },
    args: {
        variant: "regular",
        disableGutters: false,
    },
    argTypes: {
        variant: {
            description: "Define o tamanho do toolbar.",
            control: "select",
            options: ["regular", "dense"],
            table: {
                type: { summary: "regular | dense" },
                defaultValue: { summary: "regular" },
            },
        },
        disableGutters: {
            description: "Remove os espaçamentos laterais.",
            control: { type: "boolean" },
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: "false" },
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultToolbar: Story = {
    render: (args) => (
        <Toolbar {...args}>
            <Button>Menu</Button>
            <Button>Perfil</Button>
        </Toolbar>
    ),
};

export const PersonalizedToolbar: Story = {
    render: (args) => (
        <Toolbar variant="regular" {...args}>
            <IconButton edge="start" color="inherit" aria-label="menu" style={{ marginRight: 2 }}>
                <Icon>menu</Icon>
            </IconButton>
            <Typography variant="h6" color="inherit" component="div">
                Título
            </Typography>
        </Toolbar>
    ),
};

import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Breadcrumbs } from "./Breadcrumbs";
import { Typography } from "../../data-display/typography/Typography";
import theme from "../../utils/stylesheet/theme/Theme";
import { Link } from "@mui/material";

const meta: Meta<typeof Breadcrumbs> = {
    title: "layouts/Breadcrumbs",
    component: Breadcrumbs,
    tags: ["autodocs"],
    parameters: {
        layout: "padded",
    },
    argTypes: {
        separator: {
            description: "Define um separador personalizado entre os itens do breadcrumb.",
            control: "text",
            options: ["/", ">"],
            table: {
                type: { summary: "React.ReactNode" },
                defaultValue: { summary: "/" },
            },
        },
        maxItems: {
            description: "Número máximo de itens exibidos antes da elipse.",
            control: { type: "number" },
            table: {
                type: { summary: "number" },
            },
        },
        itemsAfterCollapse: {
            description: "Número de itens exibidos após a elipse.",
            control: { type: "number" },
            table: {
                type: { summary: "number" },
            },
        },

        itemsBeforeCollapse: {
            description: "Número de itens exibidos antes da elipse.",
            control: { type: "number" },
            table: {
                type: { summary: "number" },
            },
        },
    },

};

export default meta;

type Story = StoryObj<typeof meta>;

const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    console.info("Breadcrumb link clicked.");
};

export const BasicBreadcrumbs: Story = {
    render: (args) => (
        <Breadcrumbs {...args}>
            <Link underline="hover" color="inherit" href="/" onClick={handleClick}>
                Home
            </Link>
            <Link underline="hover" color="inherit" href="/products" onClick={handleClick}>
                Products
            </Link>
            <Typography color={theme.palette.primary.main}>Details</Typography>
        </Breadcrumbs>
    ),
};

export const CustomSeparator: Story = {
    render: (args) => (
        <Breadcrumbs separator="›" {...args}>
            <Link underline="hover" color="inherit" href="/" onClick={handleClick}>
                Home
            </Link>
            <Link underline="hover" color="inherit" href="/category" onClick={handleClick}>
                Category
            </Link>
            <Typography color="text.primary">Item</Typography>
        </Breadcrumbs>
    ),
};

export const CollapsedBreadcrumbs: Story = {
    render: (args) => (
        <Breadcrumbs maxItems={2} {...args}>
            <Link underline="hover" color="inherit" href="/" onClick={handleClick}>
                Home
            </Link>
            <Link underline="hover" color="inherit" href="/section" onClick={handleClick}>
                Section
            </Link>
            <Link underline="hover" color="inherit" href="/sub-section" onClick={handleClick}>
                Sub-Section
            </Link>
            <Typography color="text.primary">Current Page</Typography>
        </Breadcrumbs>
    ),
};
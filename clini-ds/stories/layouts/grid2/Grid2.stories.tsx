import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { styled } from "@mui/material/styles";

import { Grid2 } from "./Grid2";
import { Box } from "../box/Box";
import { Paper } from "../../surfaces/paper/Paper";

const meta: Meta<typeof Grid2> = {
    title: "layouts/Grid2",
    component: Grid2,
    tags: ["autodocs"],
    parameters: {
        layout: "padded",
    },
    args: {
        size: 2,
        spacing: 1,
        container: false
    },
    argTypes: {
        container: {
            control: {
                type: "boolean"
            }
        },
        spacing: {
            control: {
                type: "number"
            }
        },
        size: {
            control: {
                type: "number"
            }
        },
        columnSpacing: {
            control: {
                type: "number"
            }
        },
        direction: {
            control: "select", options: ["row", "row-reverse", "column", "column-reverse"]
        },
        rowSpacing: {
            control: {
                type: "number"
            }
        },
        wrap: {
            control: {
                type: "boolean"
            }
        }
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    ...theme.applyStyles("dark", {
        backgroundColor: "#1A2027",
    }),
}));


export const BasicGrid: Story = {
    render: (args) => (
        <Box style={{ flexGrow: 1 }}>
            <Grid2 container spacing={args.spacing}>
                <Grid2 size={args.size}>
                    <Item>Item 1</Item>
                </Grid2>

                <Grid2 size={args.size}>
                    <Item>Item 2</Item>
                </Grid2>

                <Grid2 size={args.size}>
                    <Item>Item 3</Item>
                </Grid2>

                <Grid2 size={args.size}>
                    <Item>Item 4</Item>
                </Grid2>
            </Grid2>
        </Box>
    ),
};

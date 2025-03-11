import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Tabs } from "./Tabs";
import { Tab } from "../tab/Tab";

const meta: Meta<typeof Tabs> = {
    title: "navigations/Tabs",
    component: Tabs,
    tags: ["autodocs"],
    parameters: {
        layout: "padded",
    },
    args: {
        orientation: "horizontal",
        centered: true,
        onChange: () => { },
        scrollButtons: "auto",
        variant: "standard",
    },
    argTypes: {
        orientation: { control: "select", options: ["horizontal", "vertical"] },
        centered: { control: "boolean" },
        variant: { control: "select", options: ["standard", "scrollable", "fullWidth"] },
    },
};

export const BasicTabs: Story = {
    render: (args) => {
        function a11yProps(index: number) {
            return {
                id: `simple-tab-${index}`,
                "aria-controls": `simple-tabpanel-${index}`,
            };
        }

        const [value, setValue] = React.useState(0);

        const handleChange = (event: React.SyntheticEvent, newValue: number) => {
            setValue(newValue);
        };

        return (
            <Tabs {...args} value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Cadastro" {...a11yProps(0)} />
                <Tab label="Orçamentos" {...a11yProps(1)} />
                <Tab label="Financeiro" {...a11yProps(2)} />
            </Tabs>
        );
    }
};

export const ScrollableTabsButtonAuto: Story = {
    render: (args) => {
        function a11yProps(index: number) {
            return {
                id: `simple-tab-${index}`,
                "aria-controls": `simple-tabpanel-${index}`,
            };
        }

        const [value, setValue] = React.useState(0);

        const handleChange = (event: React.SyntheticEvent, newValue: number) => {
            setValue(newValue);
        };

        return (
            <div style={{ maxWidth: 600, padding: 30 }}>
                <p>Use as props variant="scrollable" e scrollButtons="auto" no Tabs para exibir os botões de rolagem à esquerda e à direita no desktop, mantendo-os ocultos no mobile</p>
                <Tabs variant="scrollable" scrollButtons="auto" value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Cadastro" {...a11yProps(0)} />
                    <Tab label="Orçamentos" {...a11yProps(1)} />
                    <Tab label="Financeiro" {...a11yProps(2)} />
                    <Tab label="Fotos" {...a11yProps(3)} />
                    <Tab label="Plano e Ficha Clinica" {...a11yProps(4)} />
                    <Tab label="Fichas Especialidades" {...a11yProps(5)} />
                </Tabs>
            </div>
        );
    }
};

export default meta;

type Story = StoryObj<typeof meta>
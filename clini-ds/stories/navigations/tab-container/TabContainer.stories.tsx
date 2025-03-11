import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Tabs } from "../tabs/Tabs"
import { Tab } from "../tab/Tab";
import { TabContainer } from "./TabContainer";

const meta: Meta<typeof TabContainer> = {
    title: "navigations/TabContainer",
    component: TabContainer,
    tags: ["autodocs"],
    parameters: {
        layout: "padded",
    },
    args: {
        value: 0,
        index: 0,
        style: {},
    },
    argTypes: {
        value: {
            control: {
                type: "number",
            }
        },
        index: {
            control: {
                type: "number",
            }
        },
        style: {
            control: {
                type: "object",
            }
        },
    },
};

export const BasicTabContainer: Story = {
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
            <>
                <Tabs {...args} value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Cadastro" {...a11yProps(0)} />
                    <Tab label="Orçamentos" {...a11yProps(1)} />
                    <Tab label="Financeiro" {...a11yProps(2)} />
                </Tabs>

                <TabContainer value={value} index={0}>TabContainer Cadastro</TabContainer>
                <TabContainer value={value} index={1}>TabContainer Orçamentos</TabContainer>
                <TabContainer value={value} index={2}>TabContainer Financeiro</TabContainer>
            </>
        );
    }
};

export default meta;

type Story = StoryObj<typeof meta>
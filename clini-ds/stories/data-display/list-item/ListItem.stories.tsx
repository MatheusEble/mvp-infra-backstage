import React from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { ListItem } from "./ListItem";
import { ListItemText } from "../list-item-text/ListItemText";
import { List } from "../list/List";

const meta = {
  title: "dataDisplay/ListItem",
  component: ListItem,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    onClick: action("ListItem clicked"),
  },
  argTypes: {
    onClick: { action: "ListItem clicked" },
    color: { control: "select", options: ["primary"] },
  },
} satisfies Meta<typeof ListItem>;

export const Default: Story = {
  render: (args) => (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {[1, 2, 3].map((value) => (
        <ListItem key={value}>
          <ListItemText primary={`Line item ${value}`} />
        </ListItem>
      ))}
    </List>
  ),
};

export default meta;

type Story = StoryObj<typeof meta>;

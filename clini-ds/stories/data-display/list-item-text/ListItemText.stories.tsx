import React from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { List } from "../list/List";
import { ListItemText } from "./ListItemText";
import { ListItemButton } from "../list-item-button/ListItemButton";
import { ListItem } from "../list-item/ListItem";

const meta = {
  title: "dataDisplay/ListItemText",
  component: ListItemText,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    onClick: action("ListItemText clicked"),
  },
  argTypes: {
    onClick: { action: "ListItemText clicked" },
    color: { control: "select", options: ["primary"] },
  },
} satisfies Meta<typeof ListItemText>;

export const Default: Story = {
  render: (args) => (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {[1, 2, 3].map((value) => (
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary={`Line item ${value}`} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  ),
};

export default meta;

type Story = StoryObj<typeof meta>;

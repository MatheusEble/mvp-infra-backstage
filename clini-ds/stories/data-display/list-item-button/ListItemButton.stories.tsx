import React from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { ListItemText } from "../list-item-text/ListItemText";
import { List } from "../list/List";
import { ListItemButton } from "./ListItemButton";
import { ListSubheader } from "../list-subheader/ListSubheader";

const meta = {
  title: "dataDisplay/ListItemButton",
  component: ListItemButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    onClick: action("ListItemButton clicked"),
  },
  argTypes: {
    onClick: { action: "ListItem clicked" },
    color: { control: "select", options: ["primary"] },
  },
} satisfies Meta<typeof ListItemButton>;

export const Default: Story = {
  render: (args) => (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Nested List Items
        </ListSubheader>
      }
    >
      <ListItemButton component="a">
        <ListItemText
          sx={{ my: 0 }}
          primary="Paciente"
        />
      </ListItemButton>
    </List>
  ),
};

export default meta;

type Story = StoryObj<typeof meta>;

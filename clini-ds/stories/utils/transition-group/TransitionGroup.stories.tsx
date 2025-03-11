import React, { useEffect, useState } from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { TransitionGroup } from "./TransitionGroup";
import { Button } from "../../inputs/button/Button";
import { Collapse } from "../collapse/Collapse";
import { List } from "../../data-display/list/List";
import { ListItem } from "../../data-display/list-item/ListItem";
import { IconButton } from "../../inputs/icon-button/IconButton";
import { Icon } from "../../data-display/icon/Icon";
import { ListItemText } from "../../data-display/list-item-text/ListItemText";

const meta = {
  title: "utils/TransitionGroup",
  component: () => <div>teste</div>,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TransitionGroup>;

const FRUITS = [
  "🍏 Apple",
  "🍌 Banana",
  "🍍 Pineapple",
  "🥥 Coconut",
  "🍉 Watermelon",
];

interface RenderItemOptions {
  item: string;
  handleRemoveFruit: (item: string) => void;
}

function renderItem({ item, handleRemoveFruit }: RenderItemOptions) {
  return (
    <ListItem
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          title="Delete"
          onClick={() => handleRemoveFruit(item)}
        >
          <Icon>
            delete
          </Icon>
        </IconButton>
      }
    >
      <ListItemText primary={item} />
    </ListItem>
  );
}

export const Default: Story = {
  render: (args) => {
    const [fruitsInBasket, setFruitsInBasket] = React.useState(FRUITS.slice(0, 3));

    const handleAddFruit = () => {
      const nextHiddenItem = FRUITS.find((i) => !fruitsInBasket.includes(i));
      if (nextHiddenItem) {
        setFruitsInBasket((prev) => [nextHiddenItem, ...prev]);
      }
    };

    const handleRemoveFruit = (item: string) => {
      setFruitsInBasket((prev) => [...prev.filter((i) => i !== item)]);
    };

    const addFruitButton = (
      <Button
        variant="contained"
        disabled={fruitsInBasket.length >= FRUITS.length}
        onClick={handleAddFruit}
      >
        Add fruit to basket
      </Button>
    );

    return (
      <div>
        {addFruitButton}
        <List sx={{ mt: 1 }}>
          <TransitionGroup>
            {fruitsInBasket.map((item) => (
              <Collapse key={item}>{renderItem({ item, handleRemoveFruit })}</Collapse>
            ))}
          </TransitionGroup>
        </List>
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

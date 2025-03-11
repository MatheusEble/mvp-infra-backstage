import React from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Badge } from "./Badge";
import { Icon } from "../icon/Icon";

const meta = {
  title: "dataDisplay/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    onClick: action("Badge clicked"),
  },
} satisfies Meta<typeof Badge>;

const Box = () => (
  <div style={{ width: 40, height: 40, backgroundColor: "cyan" }} />
)

const Circle = () => (
  <div style={{ width: 40, height: 40, backgroundColor: "cyan", borderRadius: "50%" }} />
)

export const Default: Story = {
  args: {
    badgeContent: 4,
    max: 100,
  },
  render: (args) => (
    <div style={{ display: "flex", gap: "2rem" }}>
      <Badge {...args}>
        <Icon>star</Icon>
      </Badge>

      <Badge badgeContent={100}>
        <Icon>star</Icon>
      </Badge>

      <Badge badgeContent={1000} max={999}>
        <Icon>star</Icon>
      </Badge>
    </div>
  )
};

export const Overlap: Story = {
  args: {
    badgeContent: 4,
    max: 100,
    overlap: "rectangular"
  },
  render: (args) => (
    <div style={{ display: "flex", gap: "2rem" }}>
      <div>
        <p>
          overlap="rectangular"
        </p>

        <div style={{ display: "flex", gap: "2rem" }}>
          <Badge {...args}>
            <Box />
          </Badge>

          <Badge badgeContent={100}>
            <Box />
          </Badge>

          <Badge badgeContent={1000} max={999}>
            <Box />
          </Badge>
        </div>
      </div>

      <div>
        <p>
          overlap="circular"
        </p>

        <div style={{ display: "flex", gap: "2rem" }}>
          <Badge {...args} overlap="circular">
            <Circle />
          </Badge>

          <Badge badgeContent={100} overlap="circular">
            <Circle />
          </Badge>

          <Badge badgeContent={1000} max={999} overlap="circular">
            <Circle />
          </Badge>
        </div>
      </div>
    </div>
  )
};

export const Alignment: Story = {
  args: {
    badgeContent: 4,
    max: 100,
    overlap: "rectangular",
    anchorOrigin: {
      vertical: "top",
      horizontal: "left",
    }
  },
  argTypes: {
    anchorOrigin: {
      control: {
        type: "object",
      },
    },
  },
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem", alignItems: "center" }}>
      <div style={{ display: "flex", gap: "2rem" }}>
        <Badge {...args}>
          <Box />
        </Badge>

        <Badge {...args} overlap="circular">
          <Circle />
        </Badge>
      </div>

      <div style={{ display: "flex", gap: "2rem" }}>
        <div style={{ display: "flex", gap: "2rem" }}>
          <Badge
            {...args}
            overlap="circular"
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <Circle />
          </Badge>

          <Badge
            badgeContent={100}
            overlap="circular"
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <Circle />
          </Badge>
        </div>

        <div style={{ display: "flex", gap: "2rem" }}>
          <Badge
            badgeContent={1000}
            max={999}
            overlap="circular"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Circle />
          </Badge>

          <Badge
            badgeContent={1000}
            max={999}
            overlap="circular"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
          >
            <Circle />
          </Badge>
        </div>
      </div>
    </div>
  )
};

export default meta;

type Story = StoryObj<typeof meta>;

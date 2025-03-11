import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Chip, ChipProps } from "./Chip";
import { Avatar } from "@mui/material";
import { Face as FaceIcon, Done as DoneIcon, Clear as ClearIcon } from "@mui/icons-material";
import { action } from "@storybook/addon-actions";

export default {
  title: "dataDisplay/Chip",
  component: Chip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    color: "primary",
  },
  argTypes: {
    label: { control: "text", defaultValue: "Default Chip" },
    color: {
      control: "select",
      options: ["default", "primary", "secondary", "error", "info", "success", "warning"],
      defaultValue: "default"
    },
    size: {
      control: "select",
      options: ["small", "medium"],
      defaultValue: "medium",
    },
    variant: {
      control: "select",
      options: ["filled", "outlined"],
      defaultValue: "filled"
    },
  }
} satisfies Meta<typeof Chip>;

export const Default: StoryObj = {
  render: Chip,
  args: {
    label: "Default Chip",
    variant: "filled",
    color: "primary",
  },
};

export const Clickable: StoryObj = {
  render: (args) =>
    <Chip
      {...args}
      onClick={action("clicked")}
    />,
  args: {
    label: "Clickable Chip",
  },
};

export const Deletable: StoryObj = {
  render: (args) =>
    <Chip
      {...args}
      onDelete={action("deleted")}
      deleteIcon={<ClearIcon />}
    />,
  args: {
    label: "Deletable Chip",
  },
};

export const ClickableDeletable: StoryObj = {
  render: (args) => (
    <Chip
      {...args}
      onClick={action("clicked")}
      onDelete={action("deleted")}
      deleteIcon={<ClearIcon />}
    />
  ),
  args: {
    label: "Clickable & Deletable Chip",
  },
};

export const ClickableLink: StoryObj<ChipProps> = {
  render: (args) => (
    <Chip
      {...args}
      onClick={action("clicked")}
    />
  ),
  args: {
    label: "Clickable Link Chip",
    component: "a",
    href: "https://mui.com/material-ui/react-chip/#clickable-link",
    target: "_blank",
    rel: "noopener noreferrer",
  },
};

export const WithIcon: StoryObj = {
  render: (args) =>
    <Chip
      {...args}
      icon={<FaceIcon />}
    />,
  args: {
    label: "Chip with Icon",
  },
};

export const ClickableWithIcon: StoryObj = {
  render: (args) =>
    <Chip
      {...args}
      icon={<FaceIcon />}
      onClick={action("clicked")}
    />,
  args: {
    label: "Clickable Chip with Icon",
  },
};

export const DeletableWithCustomIcon: StoryObj = {
  render: (args) =>
    <Chip
      {...args}
      onDelete={action("deleted")}
      deleteIcon={<DoneIcon />}
    />,
  args: {
    label: "Deletable Chip",
  },
};

export const AvatarChip: StoryObj = {
  render: (args) =>
    <Chip
      {...args}
      avatar={<Avatar>M</Avatar>}
    />,
  args: {
    label: "Avatar Chip",
  },
};

export const MultilineChip: StoryObj = {
  render: (args) => (
    <Chip
      {...args}
      style={{
        height: "auto",
        width: 100,
      }}
      label={<span style={{ display: "block", whiteSpace: "normal" }}>This is a chip that has multiple lines.</span>}
    />

  ),
  args: {
    label: "Multiline Chip",
    size: "medium",
    variant: "filled",
  },
};

export const ChipArray: StoryObj = {
  render: (args) => {
    const [chips, setChips] = useState(["Chip 1", "Chip 2", "Chip 3"]);

    const handleDelete = (chipToDelete: string) => {
      setChips((prevChips) => prevChips.filter(chip => chip !== chipToDelete));
      action("deleted")(chipToDelete);
    };

    return (
      <div>
        {chips.map((label, index) => (
          <Chip
            key={index}
            label={label}
            onDelete={() => handleDelete(label)}
            deleteIcon={<ClearIcon />}
            style={{ marginRight: 1 }}
            color="primary"
          />
        ))}
      </div>
    );
  },
  args: {
    label: "Chip Array with Deletion",
  },
};

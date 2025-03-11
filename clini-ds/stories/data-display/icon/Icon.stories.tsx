import React from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Icon } from "./Icon";
import { Grid2 } from "../../layouts/grid2/Grid2";

const meta = {
  title: "dataDisplay/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    filled: false,
    overwriteDefaultFilledIconsToOutlined: false,
  },
  argTypes: {
    overwriteDefaultFilledIconsToOutlined: {
      control: "boolean",
      description: "Um grupo de ícones por padrão são fiiled, essa prop faz com que eles sejam outlined caso necessário",
    },
    color: {
      control: "select", options: [
        "primary",
        "secondary",
        "error",
        "warning",
        "info",
        "success",
      ]
    },
  },
} satisfies Meta<typeof Icon>;

export const Default: Story = {
  render: (args) => <Icon {...args} />,
  args: {
    color: "primary",
    children: "person"
  },
};

export const Primary: Story = {
  render: (args) => <Icon {...args} />,
  args: {
    color: "primary",
    children: "star"
  },
};

export const IconDisabled: Story = {
  render: (args) => <Icon {...args} />,
  args: {
    color: "disabled",
    children: "star"
  },
};

export const DefaultFilled: Story = {
  render: (args) => {
    const overwrite = args.overwriteDefaultFilledIconsToOutlined;

    return (
      <>
        <Icon {...args} />
        <Icon overwriteDefaultFilledIconsToOutlined={overwrite}>label</Icon>
        <Icon overwriteDefaultFilledIconsToOutlined={overwrite}>check_box</Icon>
        <Icon overwriteDefaultFilledIconsToOutlined={overwrite}>lens</Icon>
      </>
    )
  },
  args: {
    overwriteDefaultFilledIconsToOutlined: false,
    children: "folder"
  },
  argTypes: {
    filled: { table: { disable: true } },
  },
};

export const SomeIcons: Story = {
  render: (args) => (
    <Grid2>
      <Grid2>
        <Icon>person</Icon>
        <Icon>delete</Icon>
        <Icon>calendar_today</Icon>
      </Grid2>

      <Grid2>
        <Icon>pix</Icon>
        <Icon>whatsapp</Icon>
        <Icon>copy</Icon>
      </Grid2>
    </Grid2>
  ),
  args: {
    color: "disabled",
    children: "star"
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

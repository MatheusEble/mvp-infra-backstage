import React from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { useMediaQuery } from ".";

const meta: Meta<typeof useMediaQuery> = {
  title: "utils/useMediaQuery",
  component: useMediaQuery,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    query: "(max-width: 600px)",
  },
  argTypes: {
    query: {
      control: "text",
      description: "Define a media query a ser testada. Exemplo: `(max-width: 600px)`",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (query: string) => {
  const matches = useMediaQuery(query);

  return (
    <div>
      <strong>Query:</strong> {query} <br />
      <strong>Matches:</strong> {matches ? "Sim" : "Não"}
    </div>
  );
};

export const SmallScreen: Story = {
  args: {
    query: "(max-width: 640px)",
  },
  render: ({ query }) => Template(query),
};

export const MediumScreen: Story = {
  args: {
    query: "(max-width: 768px)",
  },
  render: ({ query }) => Template(query),
};

export const LargeScreen: Story = {
  args: {
    query: "(max-width: 1024px)",
  },
  render: ({ query }) => Template(query),
};

export const XLargeScreen: Story = {
  args: {
    query: "(max-width: 1280px)",
  },
  render: ({ query }) => Template(query),
};

export const TwoXLargeScreen: Story = {
  args: {
    query: "(max-width: 1536px)",
  },
  render: ({ query }) => Template(query),
};

export const DarkMode: Story = {
  args: {
    query: "(prefers-color-scheme: dark)",
  },
  render: ({ query }) => Template(query),
};

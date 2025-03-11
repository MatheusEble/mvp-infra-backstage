import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Pagination } from "../pagination/Pagination";
import { PaginationItem, PaginationItemProps } from "./PaginationItem";
import { Icon } from "../../data-display/icon/Icon";
import { Stack } from "@mui/material";
import { action } from "@storybook/addon-actions";

export default {
  title: "navigations/PaginationItem",
  component: PaginationItem,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    count: 10,
    color: "primary",
    onClick: action("clicked"),
  },
  argTypes: {
    count: { control: "number" },
    color: { control: "select", options: ["primary", "error", "info", "success", "warning","secondary"] },
  },
} as Meta<PaginationItemProps>;

const ArrowBackIcon = () => <Icon>arrow_back</Icon>;
const ArrowForwardIcon = () => <Icon>arrow_forward</Icon>;

export const Default: StoryFn = (args) => (
  <Stack spacing={2}>
    <Pagination
      renderItem={(item) => (
        <PaginationItem
          slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
          {...item}
        />
      )}
      {...args}
    />
  </Stack>
);

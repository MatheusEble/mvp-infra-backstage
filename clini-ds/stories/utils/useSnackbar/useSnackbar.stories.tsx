import React, { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { useSnackbar } from ".";
import { Alert } from "../../feedbacks/alert/Alert";

const meta: Meta<typeof useSnackbar> = {
  title: "utils/useSnackbar",
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <Alert severity="info">
        Veja a documentação do componente Snackbar para entender quando usar esse hook.
      </Alert>
    )
  }
};
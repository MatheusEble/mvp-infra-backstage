import React from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { DialogActions } from "./DialogActions";
import { Button } from "../../inputs/button/Button";

const meta = {
  title: "feedbacks/DialogActions",
  component: DialogActions,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DialogActions>;

export const Default: Story = {
  render: () => (
    <DialogActions>
      <Button>
        Cancelar
      </Button>

      <Button variant="contained">
        Criar
      </Button>
    </DialogActions>
  )
};

export default meta;

type Story = StoryObj<typeof meta>;

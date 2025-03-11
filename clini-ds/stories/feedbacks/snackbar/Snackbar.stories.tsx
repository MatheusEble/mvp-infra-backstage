import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Snackbar } from "./Snackbar";
import { Button } from "../../inputs/button/Button";
import { IconButton } from "../../inputs/icon-button/IconButton";
import { Icon } from "../../data-display/icon/Icon";
import { useTheme } from "../../utils/useTheme";

const meta = {
  title: "feedbacks/Snackbar",
  component: Snackbar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    open: { control: "boolean" },
    autoHideDuration: { control: "number" },
    message: { control: "text" },
    onClose: { action: "closed" },
  },
} satisfies Meta<typeof Snackbar>;

export const Default: Story = {
  render: (args) => {
    const [showSnackbar, setShowSnackbar] = useState(false);

    const theme = useTheme();

    const handleClose = () => {
      setShowSnackbar(!showSnackbar);

      alert("Snackbar closed")
    }

    const actions = () => {
      return (
        <>
          <Button onClick={handleClose}>Desfazer</Button>

          <IconButton onClick={handleClose}>
            <Icon style={{ color: theme.palette.white }}>
              close
            </Icon>
          </IconButton>
        </>
      )
    }

    return (
      <div style={{ height: 300 }}>
        <Button onClick={() => setShowSnackbar(true)}>Mostrar Snackbar</Button>

        <Snackbar
          open={showSnackbar}
          message="Paciente deletado"
          action={actions()}
          onClose={handleClose}
          autoHideDuration={4000}
          {...args}
        />
      </div >
    )
  }
};

export default meta;

type Story = StoryObj<typeof meta>;
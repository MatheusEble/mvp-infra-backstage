import React, { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { Portal } from "./Portal";
import { Backdrop } from "../../feedbacks/backdrop/Backdrop";
import { Button } from "../../inputs/button/Button";

const meta: Meta<typeof Portal> = {
  title: "utils/Portal",
  component: Portal,
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

export const Default: Story = {
  render: () => {
    const [openPortal, setOpenPortal] = useState(false);

    return (
      <>
        <Button onClick={() => setOpenPortal(!openPortal)}>
          Abrir Portal
        </Button>

        <Portal>
          <Backdrop open={openPortal}>
            <Button
              style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
              onClick={() => setOpenPortal(!openPortal)}
              variant="contained"
            >
              {openPortal ? "Fechar" : "Abrir"} Portal
            </Button>
          </Backdrop>
        </Portal>
      </>
    )
  }
};
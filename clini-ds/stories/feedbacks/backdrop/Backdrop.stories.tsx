import React, { useEffect, useState } from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { Backdrop } from "./Backdrop";
import { Portal } from "../../utils/portal/Portal";
import { Button } from "../../inputs/button/Button";

const meta = {
  title: "feedbacks/Backdrop",
  component: Backdrop,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  }
} satisfies Meta<typeof Backdrop>;

export const Default: Story = {
  args: {
    open: false,
  },
  render: (args) => {
    const [openPortal, setOpenPortal] = useState(false);

    useEffect(() => {
      setOpenPortal(args.open);
    }, [args.open]);

    return (
      <>
        <Button onClick={() => setOpenPortal(!openPortal)}>
          {"Abrir Backdrop usando <Portal />"}
        </Button>

        <Portal>
          <Backdrop {...args} open={openPortal}>
            <Button
              style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
              onClick={() => setOpenPortal(!openPortal)}
              variant="contained"
            >
              {openPortal ? "Fechar" : "Abrir"} Backdrop
            </Button>
          </Backdrop>
        </Portal>
      </>
    )
  }
}

export default meta;

type Story = StoryObj<typeof meta>;
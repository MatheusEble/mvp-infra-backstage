import React, { useEffect, useState } from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { Collapse } from "./Collapse";
import { Button } from "../../inputs/button/Button";
import { Box } from "@mui/material";

const meta = {
  title: "utils/Collapse",
  component: Collapse,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    in: false,
    collapsedSize: 0,
  },
  argTypes: {
    in: {
      control: {
        type: "boolean",
      }
    },
    collapsedSize: {
      control: {
        type: "number"
      },
      description: "Você pode definir quantos PX do elemento collpasado pode ser mostrado antes mesmo de ser collpasado"
    }
  },
} satisfies Meta<typeof Collapse>;

const Template = ({ show, args, collapsedSize }: { show: boolean, args: object, collapsedSize?: number }) => {
  return (
    <div style={{ display: "flex", gap: 4 }}>
      <Collapse collapsedSize={collapsedSize} {...args} in={show}>
        <Box
          sx={{
            width: 200,
            height: 200,
            bgcolor: "primary.main",
            color: "primary.contrastText",
            borderRadius: 1,
            p: 3,
          }}
        />
      </Collapse>

      <Collapse collapsedSize={collapsedSize} {...(show ? { timeout: 1000 } : {})} {...args} in={show}>
        <Box
          sx={{
            width: 200,
            height: 200,
            bgcolor: "primary.main",
            color: "primary.contrastText",
            borderRadius: 1,
            p: 3,
          }}
        />
      </Collapse>

      <Collapse collapsedSize={collapsedSize} {...(show ? { timeout: 2000 } : {})} {...args} in={show}>
        <Box
          sx={{
            width: 200,
            height: 200,
            bgcolor: "primary.main",
            color: "primary.contrastText",
            borderRadius: 1,
            p: 3,
          }}
        />
      </Collapse>
    </div>
  )
}

export const Default: Story = {
  args: {
    in: false,
    children: <div></div>
  },
  render: (args) => {
    const [show, setShow] = useState<boolean>(false);

    useEffect(() => {
      setShow(args.in || false);
    }, [args.in])

    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Button onClick={() => setShow(!show)}>
          Aparecer
        </Button>

        <Template
          show={show}
          args={args}
        />
      </div>
    )
  },
};

export const CollapsedSize: Story = {
  args: {
    in: false,
    children: <div></div>
  },
  render: (args) => {
    const [show, setShow] = useState<boolean>(false);

    useEffect(() => {
      setShow(args.in || false);
    }, [args.in])

    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <p>
          Por padrão, 50px do elemento ainda Collpasado é renderizado
        </p>

        <Button onClick={() => setShow(!show)}>
          Aparecer
        </Button>

        <Template
          show={show}
          args={args}
          collapsedSize={50}
        />
      </div>
    )
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

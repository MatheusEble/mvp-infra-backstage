import React, { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProvider } from "./ThemeProvider";
import { useTheme } from "../../utils/useTheme";

const meta = {
  title: "providers/ThemeProvider",
  component: ThemeProvider,
  tags: ["autodocs"],
} satisfies Meta<typeof ThemeProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <ThemeProvider>
        <ThemeExample />
      </ThemeProvider>
    )
  },
};

const ThemeExample = () => {
  const theme = useTheme();

  return (
    <div style={{ height: 700, display: "flex", flexDirection: "column", gap: 16 }}>
      <div style={{ backgroundColor: theme.palette.primaryPure, color: theme.palette.white, padding: 16 }}>theme.palette.primaryPure</div>
      <div style={{ backgroundColor: theme.palette.cosmosPure, color: theme.palette.white, padding: 16 }}>theme.palette.cosmosPure</div>
      <div style={{ backgroundColor: theme.palette.dangerPure, color: theme.palette.white, padding: 16 }}>theme.palette.dangerPure</div>
      <div style={{ backgroundColor: theme.palette.warningPure, color: theme.palette.black, padding: 16 }}>theme.palette.warningPure</div>
      <div style={{ backgroundColor: theme.palette.infoPure, color: theme.palette.white, padding: 16 }}>theme.palette.infoPure</div>
      <div style={{ backgroundColor: theme.palette.successPure, color: theme.palette.white, padding: 16 }}>theme.palette.successPure</div>

      <pre>
        {`
          const theme = useTheme();

          return (
            <div style={{ backgroundColor: theme.palette.primaryLightest }}>
              <h1 style={{ color: theme.palette.primaryPure }}>
                Hello World
              </h1>
            </div>
          )
        `}
      </pre>
    </div>
  );
};
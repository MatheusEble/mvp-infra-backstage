import React, { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { useTheme } from ".";
import { Alert } from "../../feedbacks/alert/Alert";

const meta: Meta<typeof useTheme> = {
  title: "utils/useTheme",
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <>
        <Alert severity="info">
          <span>
            Esse hooks é usado para pegar os design tokens e outras informações do tema do projeto,
            temas tanto internos da Clinicorp quanto do próprio MUI.
          </span>

          <p>
            Você pode ver a documentação do Theme dentro da pasta Stylesheet para saber
            quais cores você pode usar.
          </p>
        </Alert>

        <div>
          <p>Exemplo de uso:</p>

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
      </>
    )
  }
};
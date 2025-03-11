import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Rating } from "./Rating";
import StarIcon from "@mui/icons-material/Star";
import { useState } from "react";
import { fn } from "@storybook/test";
import { Icon } from "../../data-display/icon/Icon";

const meta: Meta<typeof Rating> = {
  title: "inputs/Rating",
  component: Rating,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Componente de avaliação, utilizado para capturar a nota de um usuário de 0 a 5, com precisão configurável.",
      },
    },
  },
  argTypes: {
    value: {
      control: { type: "number", min: 0, max: 5, step: 0.5 },
      description: "Valor da avaliação, de 0 a 5",
      table: { type: { summary: "number" } },
    },
    precision: {
      control: { type: "number", min: 0.1, max: 1, step: 0.1 },
      description: "Precisão da avaliação (ex: 0.1, 0.5, 1)",
      table: { type: { summary: "number" } },
    },
    disabled: {
      control: "boolean",
      description: "Desabilita a interação com o rating",
      table: { type: { summary: "boolean" } },
    },
    readOnly: {
      control: "boolean",
      description: "Modo somente leitura, não permite alteração do valor",
      table: { type: { summary: "boolean" } },
    },
    onChange: {
      table: { disable: true },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Controlled: Story = {
  args: {
    value: 2,
    onChange: fn(),
    precision: 0.5,
  },
  parameters: {
    docs: {
      description: {
        story: "O valor da avaliação é controlado externamente através da prop `value`.",
      },
    },
  },
};

export const Uncontrolled: Story = {
  args: {
    value: undefined,
    onChange: fn(),
    precision: 0.5,
  },
  parameters: {
    docs: {
      description: {
        story: "Este é um exemplo de uso não controlado do Rating. O valor não é controlado externamente, podendo ser alterado internamente pelo componente.",
      },
    },
  },
};

export const ReadOnly: Story = {
  args: {
    value: 4,
    precision: 0.5,
    readOnly: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Este é um exemplo do Rating no modo somente leitura. O valor é exibido, mas não é possível interagir com ele para alterá-lo.",
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    value: 4,
    onChange: fn(),
    precision: 0.5,
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Este é um exemplo do Rating desabilitado. As estrelas aparecem esmaecidas e o usuário não pode interagir com elas.",
      },
    },
  },
};

export const NoRatingGiven: Story = {
  args: {
    value: 3,
    onChange: fn(),
    precision: 0.5,
  },
  parameters: {
    docs: {
      description: {
        story: "Este exemplo mostra o Rating sem uma avaliação dada. As estrelas aparecem vazias, sem valor selecionado.",
      },
    },
  },
};

export const HoverFeedback: Story = {
  args: {
    value: 2,
    onChange: fn(),
    precision: 1,
  },
  parameters: {
    docs: {
      description: {
        story: "Este exemplo mostra o Rating com feedback visual ao passar o mouse. As estrelas exibem um valor de hover antes de serem selecionadas, permitindo ao usuário visualizar a avaliação de forma interativa.",
      },
    },
  },
  render: (args) => {
    const [value, setValue] = useState<number | null>(2);
    const [hover, setHover] = useState<number | null>(-1);

    const labels: { [key: number]: string } = {
      0: "Desaprovado",
      1: "Ruim",
      2: "Regular",
      3: "Bom",
      4: "Muito bom",
      5: "Excelente",
    };

    const getLabelText = (value: number) => {
      return labels[value];
    };

    const handleChangeActive = (_: React.SyntheticEvent, newHover: number | null) => {
      setHover(newHover);
      if (newHover !== null) {
        args.onChangeActive?.(_, newHover);
      }
    };

    const handleChange = (event: React.SyntheticEvent, newValue: number | null) => {
      setValue(newValue);
      setHover(-1);
      args.onChange?.(event, newValue);
    };

    return (
      <div style={{ width: 220, display: "flex", alignItems: "center" }}>
        <Rating
          precision={1}
          value={value}
          getLabelText={getLabelText}
          emptyIcon={<Icon style={{ opacity: 0.55 }} fontSize="inherit">star</Icon>}
          {...args}
          onChange={handleChange}
          onChangeActive={handleChangeActive}
        />
        {value !== null && (
          <div style={{ marginLeft: 7 }}>
            {labels[hover !== -1 && hover !== null ? hover : value !== null ? value : 0]}
          </div>
        )}
      </div>
    );
  },
};

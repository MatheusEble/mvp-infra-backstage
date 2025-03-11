import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { TextField } from "../text-field/TextField";
import { Autocomplete } from "./Autocomplete";

import ClearIcon from "@mui/icons-material/Clear";

import { TextFieldProps } from "@mui/material";
import { JSX } from "react/jsx-runtime";
import { Icon } from "../../data-display/icon/Icon";

const options = [
    "Option 1",
    "Option 2",
    "Option 3",
    "Option 4",
    "Option 5",
    "Option 6",
];

const timeSlots = ["08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM"];

const meta: Meta<typeof Autocomplete> = {
    title: "inputs/Autocomplete",
    component: Autocomplete,
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
    args: {
        options: options,
        renderInput: (params: JSX.IntrinsicAttributes & TextFieldProps) => <TextField {...params} label="Select options" />,
        clearIcon: <ClearIcon />,
        popupIcon: <Icon>arrow_drop_down</Icon>,
        disabled: false,
        fullWidth: false,
        loading: false,
        size: "medium",
        disablePortal: false,
        limitTags: 2
    },
    argTypes: {
        options: {
            control: "array",
            description: "Array de opções para o componente Autocomplete.",
        },
        clearIcon: {
            control: "none",
            description: "Ícone de limpar seleção."
        },
        popupIcon: {
            control: "none",
            description: "Ícone de abrir popup."
        },
        disabled: {
            control: "boolean",
            description: "Desabilita o componente."
        },
        fullWidth: {
            control: "boolean",
            description: "Define se o input ocupa a largura total do container."
        },
        loading: {
            control: "boolean",
            description: "Indica se o componente está carregando."
        },
        size: {
            control: "radio",
            options: ["small", "medium"],
            description: "Define o tamanho do componente.",
        },
        disablePortal: {
            control: "boolean",
            description: "Se true, o Popper será renderizado dentro da árvore do DOM."
        },
        limitTags: {
            control: "number",
            description: "Número máximo de tags visíveis antes de serem colapsadas."
        },
        getOptionDisabled: {
            control: false,
            description: "Função que determina se uma opção deve estar desabilitada.",
            table: {
                type: { summary: "(option: any) => boolean" },
            },
        },
        isOptionEqualToValue: {
            control: "function",
            description: "Função que determina se uma opção é igual ao valor selecionado.",
            table: {
                type: { summary: "(option: any, value: any) => boolean" },
            },
        },
        getOptionLabel: {
            control: "function",
            description: "Função que define como o rótulo de uma opção será exibido.",
            table: {
                type: { summary: "(option: any) => string" },
            },
        },
        renderInput: {
            control: "function",
            description: "Função que renderiza o componente de entrada do Autocomplete.",
            table: {
                type: { summary: `(params) => <TextField {...params} label="Select options" />` },
            },
        },
        open: {
            description: "Controla se o menu suspenso do Autocomplete está aberto ou fechado.",
            control: "boolean",
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: "false" },
            },
        },
    },
} satisfies Meta<typeof Autocomplete>;

type Story = StoryObj<typeof meta>;

export const AutocompleteDefault: Story = {
    render: (args: any) => <Autocomplete {...args} />,
};

export const AutocompleteWithLimitTags: Story = {
    render: (args: any) => (
        <Autocomplete
            {...args}
            multiple
            limitTags={2}
            options={options}
            renderInput={(params: JSX.IntrinsicAttributes & TextFieldProps) => <TextField {...params} label="Select options" />}
        />
    ),
    args: {
        options,
    },
};

export const AutocompleteWithDisabledOptions: Story = {
    render: (args: any) => (
        <Autocomplete
            {...args}
            options={timeSlots}
            getOptionDisabled={(option: string) => option === timeSlots[0] || option === timeSlots[2]}
            renderInput={(params: JSX.IntrinsicAttributes & TextFieldProps) => <TextField {...params} label="Disabled options" />}
        />
    ),
    args: {
        options: timeSlots,
    },
};

export const AutocompleteLoading: Story = {
    render: () => {
        const [open, setOpen] = React.useState(false);
        const [options, setOptions] = React.useState<readonly { title: string; year: number }[]>([]);
        const [loading, setLoading] = React.useState(false);

        React.useEffect(() => {
            if (!open) return;
            setLoading(true);
            const timer = setTimeout(() => {
                setOptions([
                    { title: "Branca de Neve e os Sete Anões", year: 1937 },
                    { title: "Cinderela ", year: 1950 },
                    { title: "A Bela Adormecida", year: 1959 },
                    { title: "A Pequena Sereia", year: 1989 },
                ]);
                setLoading(false);
            }, 1000);
            return () => clearTimeout(timer);
        }, [open]);

        return (
            <Autocomplete
                open={open}
                onOpen={() => setOpen(true)}
                onClose={() => {
                    setOpen(false);
                    setOptions([]);
                }}
                isOptionEqualToValue={(option: { title: any; }, value: { title: any; }) => option.title === value.title}
                getOptionLabel={(option: { title: any; }) => option.title}
                options={options}
                loading={loading}
                renderInput={(params: JSX.IntrinsicAttributes & TextFieldProps) => (
                    <TextField
                        {...params}
                        label="Select book"
                    />
                )}
            />
        );
    },
};

export default meta;

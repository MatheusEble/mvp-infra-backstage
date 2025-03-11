import React from "react";
import { useAutocomplete } from "@mui/base/useAutocomplete";
import { TextField, Paper, MenuItem, Chip } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";
import { styled } from "@mui/material/styles";
import { fn, expect } from "@storybook/test";
import { AutocompleteGroupedOption } from "@mui/base/useAutocomplete";

interface AutocompleteProps {
  options: ({ label: string } | AutocompleteGroupedOption<{ label: string }>)[];
  multiple?: boolean;
}

const Listbox = styled("ul")(({ theme }) => ({
  margin: 0,
  padding: 0,
  zIndex: 1,
  position: "absolute",
  listStyle: "none",
  backgroundColor: theme.palette.background.paper,
  overflow: "auto",
  maxHeight: 400,
  width: "100%",
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
}));

const AutocompleteComponent = ({ options, multiple = false, onChange }: AutocompleteProps & { onChange?: () => void }) => {
  const {
    getRootProps,
    getInputProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    value = [] as { label: string }[],
    setAnchorEl,
  } = useAutocomplete({
    options,
    multiple,
    onChange,
  });

  return (
    <div {...getRootProps()} style={{ width: 300, position: "relative", height: 210 }}>
      <TextField
        {...getInputProps()}
        label="Search"
        variant="standard"
        color="primary"
        fullWidth
        size="medium"
        inputRef={setAnchorEl}
      />
      {Array.isArray(value) && value.length > 0 && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 0.5, marginTop: 2 }}>
          {value.map((option, index) => (
            <Chip label={option.label} {...getTagProps({ index })} />
          ))}
        </div>
      )}
      {groupedOptions.length > 0 && (
        <Paper component={Listbox} {...getListboxProps()}>
          {groupedOptions.map((option, index) => (
            <MenuItem {...getOptionProps({ option, index })} key={option.label}>
              {"label" in option ? option.label : ""}
            </MenuItem>
          ))}
        </Paper>
      )}
    </div>
  );
};

export default {
  title: "utils/useAutocomplete",
  component: AutocompleteComponent,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Este é um componente de preenchimento automático personalizado usando o hook "useAutocomplete", sendo assim, necessário construir a estrutura do Autocomplete para cada cenário em específico.`,
      },
    },
  },
  tags: ["autodocs"],
  args: {
    options: [
      { label: "React" },
      { label: "Vue" },
      { label: "Angular" },
      { label: "Svelte" },
    ],
    onChange: fn(),
  },
} satisfies Meta<typeof AutocompleteComponent>;

export const Default: StoryObj<typeof AutocompleteComponent> = {
  play: async ({ args, canvasElement }) => {
    const input = canvasElement.querySelector("input");
    const menuItems = canvasElement.querySelectorAll(`[role="option"]`);
    if (input && menuItems.length > 0) {

      input.value = "React";
      input.dispatchEvent(new Event("input"));

      (menuItems[0] as HTMLElement).click();

      expect(args.onChange).toHaveBeenCalled();
    }
  },
};

export const Multiple: StoryObj<typeof AutocompleteComponent> = {
  args: {
    multiple: true,
  },
  decorators: [
    (Story) => (
      <div style={{ width: "300px" }}>
        <Story />
      </div>
    ),
  ],
  render: (args) => <AutocompleteComponent {...args} />,
  play: async ({ args, canvasElement }) => {
    const input = canvasElement.querySelector("input");
    const menuItems = canvasElement.querySelectorAll(`[role="option"]`);
    if (input && menuItems.length > 0) {

      input.value = "React";
      input.dispatchEvent(new Event("input"));

      (menuItems[0] as HTMLElement).click();

      expect(args.onChange).toHaveBeenCalled();
    }
  },
};

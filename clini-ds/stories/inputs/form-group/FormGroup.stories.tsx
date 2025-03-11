import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { FormGroup } from "./FormGroup";
import { FormControl } from "../form-control/FormControl";
import { FormLabel } from "../form-label/FormLabel";
import { FormControlLabel } from "../form-control-label/FormControlLabel";
import { Checkbox } from "../../inputs/checkbox/Checkbox";
import { FormHelperText } from "../form-helper-text/FormHelperText";

const meta = {
  title: "inputs/FormGroup",
  component: FormGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FormGroup>;

export const Default: Story = {
  render: () => {
    const [state, setState] = React.useState({
      gilad: true,
      jason: false,
      antoine: false,
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setState({
        ...state,
        [event.target.name]: event.target.checked,
      });
    };

    const { gilad, jason, antoine } = state;

    return (
      <div style={{ display: "flex", gap: 40 }}>
        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
          <FormLabel component="legend">Responsável</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox checked={gilad} onChange={handleChange} name="gilad" />}
              label="Gilad Gray"
            />
            <FormControlLabel
              control={<Checkbox checked={jason} onChange={handleChange} name="jason" />}
              label="Jason Killian"
            />
            <FormControlLabel
              control={<Checkbox checked={antoine} onChange={handleChange} name="antoine" />}
              label="Antoine Llorca"
            />
          </FormGroup>

          <FormHelperText>Be careful</FormHelperText>
        </FormControl>
      </div>
    )
  },
}

export default meta;

type Story = StoryObj<typeof meta>;
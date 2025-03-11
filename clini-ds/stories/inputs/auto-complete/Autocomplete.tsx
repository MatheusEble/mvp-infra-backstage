import React from "react";

import MUIAutocomplete, { AutocompleteProps } from "@mui/material/Autocomplete";

export const Autocomplete = <Value, Multiple extends boolean | undefined, DisableClearable extends boolean | undefined, FreeSolo extends boolean | undefined, ChipComponent extends React.ElementType>(props: AutocompleteProps<Value, Multiple, DisableClearable, FreeSolo, ChipComponent>) => <MUIAutocomplete  {...props} />;

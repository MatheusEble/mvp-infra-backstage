import MUIuseAutocomplete, { UseAutocompleteProps } from "@mui/material/useAutocomplete";

export const useAutocomplete = <Value, Multiple extends boolean = false, DisableClearable extends boolean = false, FreeSolo extends boolean = false>(
  props: UseAutocompleteProps<Value, Multiple, DisableClearable, FreeSolo>
) => MUIuseAutocomplete<Value, Multiple, DisableClearable, FreeSolo>(props);

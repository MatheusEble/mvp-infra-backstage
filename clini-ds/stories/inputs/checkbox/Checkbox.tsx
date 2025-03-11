import React from "react";

import MUICheckbox, { CheckboxProps } from "@mui/material/Checkbox";

export const Checkbox = (props: CheckboxProps) => (<MUICheckbox size={props.size || "small"} {...props} />);
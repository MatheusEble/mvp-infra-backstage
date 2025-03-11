import React from "react";
import { DateField as MUIDateField } from "@mui/x-date-pickers/DateField";
import type { DateFieldProps } from "@mui/x-date-pickers/DateField";
import { Dayjs } from "dayjs";

export const DateField = (props: DateFieldProps<Dayjs | any> & { variant?: "standard" | "outlined" | "filled" }) => {
  const { variant = "standard", ...restProps } = props;

  return (
    <MUIDateField
        slotProps={{
            textField: { variant }
        }}
        {...restProps}
    />
  );
};
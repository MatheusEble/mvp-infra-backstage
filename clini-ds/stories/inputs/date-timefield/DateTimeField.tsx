import React from "react";
import { DateTimeField as MUIDateTimeField } from "@mui/x-date-pickers/DateTimeField";
import type { DateTimeFieldProps } from "@mui/x-date-pickers/DateTimeField";
import { Dayjs } from "dayjs";

export const DateTimeField = (props: DateTimeFieldProps<Dayjs | any> & { variant?: "standard" | "outlined" | "filled" }) => {
  const { variant = "standard", ...restProps } = props;

  return (
    <MUIDateTimeField
        slotProps={{
            textField: { variant }
        }}
        {...restProps}
    />
  );
};

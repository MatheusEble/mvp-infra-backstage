import React from "react";
import { DatePicker as MUIDatePicker } from "@mui/x-date-pickers/DatePicker";
import type { DatePickerProps } from "@mui/x-date-pickers/DatePicker";
import { Dayjs } from "dayjs";

export const DatePicker = (props: DatePickerProps<Dayjs | any> & { variant?: "standard" | "outlined" | "filled" }) => {
  const { variant = "standard", ...restProps } = props;

  return (
    <MUIDatePicker
      slotProps={{
        textField: { variant }
      }}
      {...restProps}
    />
  );
};

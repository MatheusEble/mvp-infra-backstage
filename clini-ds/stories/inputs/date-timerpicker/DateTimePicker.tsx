import React from "react";
import { DateTimePicker as MUIDateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import type { DateTimePickerProps } from "@mui/x-date-pickers/DateTimePicker";
import { Dayjs } from "dayjs";

export const DateTimePicker = (props: DateTimePickerProps<Dayjs | any> & { variant?: "standard" | "outlined" | "filled" }) => {
  const { variant = "standard", ...restProps } = props;

  return (
    <MUIDateTimePicker
        slotProps={{
            textField: { variant }
        }}
        {...restProps}
    />
  );
};

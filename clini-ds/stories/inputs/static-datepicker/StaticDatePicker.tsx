import React from "react";
import { StaticDatePicker as MUIStaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import type { StaticDatePickerProps } from "@mui/x-date-pickers/StaticDatePicker";
import { Dayjs } from "dayjs";

export const StaticDatePicker = (props: StaticDatePickerProps<Dayjs | any>) => {
  return (
    <MUIStaticDatePicker
      {...props}
    />
  );
};
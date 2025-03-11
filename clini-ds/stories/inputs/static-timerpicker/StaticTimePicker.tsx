import React from "react";
import { StaticTimePicker as MUIStaticTimePicker } from "@mui/x-date-pickers/StaticTimePicker";
import type { StaticTimePickerProps } from "@mui/x-date-pickers/StaticTimePicker";
import { Dayjs } from "dayjs";

export const StaticTimePicker = (props: StaticTimePickerProps<Dayjs | any>) => {
  return (
    <MUIStaticTimePicker
      {...props}
    />
  );
};
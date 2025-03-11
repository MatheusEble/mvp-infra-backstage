import React from "react";
import { MobileDatePicker as MUIMobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import type { MobileDatePickerProps } from "@mui/x-date-pickers/MobileDatePicker";
import { Dayjs } from "dayjs";

export const MobileDatePicker = (props: MobileDatePickerProps<Dayjs | any> & { variant?: "standard" | "outlined" | "filled" }) => {
  const { variant = "standard", ...restProps } = props;

  return (
      <MUIMobileDatePicker
        slotProps={{
          textField: { variant }
        }}
        {...restProps} 
      />
  );
};

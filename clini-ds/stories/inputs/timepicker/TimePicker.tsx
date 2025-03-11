import React from "react";
import { TimePicker as MUITimePicker } from "@mui/x-date-pickers/TimePicker";
import type { TimePickerProps } from "@mui/x-date-pickers/TimePicker";
import { Dayjs } from "dayjs";

export const TimePicker = (props: TimePickerProps<Dayjs | any> & { variant?: "standard" | "outlined" | "filled" }) => {
	const { variant = "standard", ...restProps } = props;

	return (
		<MUITimePicker
			slotProps={{
				textField: { variant },
			}}
			{...restProps}
		/>
	);
};

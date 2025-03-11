import React, { useState, useEffect } from "react";
import MUIRating, { RatingProps } from "@mui/material/Rating";

export const Rating = ({ value: propValue, onChange, ...props }: RatingProps) => {
  const [value, setValue] = useState<number | null>(propValue || null);

  useEffect(() => {
    setValue(propValue || null);
  }, [propValue]);

  const handleChange = (event: React.SyntheticEvent, newValue: number | null) => {
    setValue(newValue);
    onChange?.(event, newValue);
  };

  return (
    <MUIRating
      onChange={handleChange}
      value={value}
      {...props}
    />
  );
};

export type { RatingProps };

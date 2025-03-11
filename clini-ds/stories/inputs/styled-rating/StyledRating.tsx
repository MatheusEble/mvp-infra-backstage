import React from "react";
import { styled } from "@mui/material/styles";
import { Rating, RatingProps } from "../rating/Rating";

interface StyledRatingProps extends RatingProps {
	filledColor?: string;
	hoverColor?: string;
}

const StyledRating = styled(Rating)<StyledRatingProps>(
	({ theme, filledColor, hoverColor }) => ({
		"& .MuiRating-iconFilled": {
			".MuiIcon-root": {
				color: filledColor || theme.palette.primaryPure,
			},
		},
		"& .MuiRating-iconHover": {
			".MuiIcon-root": {
				color: hoverColor || theme.palette.primaryLight,
			},
		},
	})
);

export default function CustomizedRating(props: StyledRatingProps) {
	return (
		<StyledRating {...props} />
	);
}

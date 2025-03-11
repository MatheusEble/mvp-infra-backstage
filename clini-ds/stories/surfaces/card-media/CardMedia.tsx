import React from "react";
import { Card } from "../card/Card";
import MUICardMedia, { CardMediaProps } from "@mui/material/CardMedia";

export const CardMedia = (props: CardMediaProps) => (
	<Card>
		<MUICardMedia {...props} />
	</Card>
);
export type { CardMediaProps };
import { Row } from "./";

const typeId = "HeadingRow";

export interface HeadingRow extends Row {
	type: typeof typeId;
	/** The text content of the heading. */
	text: string;
	/** The level (size, lower is bigger) of the heading. */
	level: number;
}

export function isHeadingRow(row: Row): row is HeadingRow {
	return row.type === typeId;
}
import { Row } from "./";

const typeId = "ChoiceRow";

export interface ChoiceRow extends Row {
	type: typeof typeId;

	/** The choices in this row. */
	choices: Array<unknown>;
}

export function isChoiceRow(row: Row): row is ChoiceRow {
	return row.type === typeId;
}
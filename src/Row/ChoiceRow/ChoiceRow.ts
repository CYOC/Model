import { Row } from "../";
import { Choice } from "./";

const typeId = "ChoiceRow";

export interface ChoiceRow extends Row {
	type: typeof typeId;

	/** The choices in this row. */
	choices: Array<Choice>;
}

export function isChoiceRow(row: Row): row is ChoiceRow {
	return row.type === typeId;
}
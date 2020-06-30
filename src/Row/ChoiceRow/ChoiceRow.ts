import { IRow } from "../IRow";
import { Choice } from "./";

const typeId = "ChoiceRow";

export interface ChoiceRow extends IRow {
	type: typeof typeId;

	/** The choices in this row. */
	choices: Array<Choice>;
}

export function isChoiceRow(row: IRow): row is ChoiceRow {
	return row.type === typeId;
}
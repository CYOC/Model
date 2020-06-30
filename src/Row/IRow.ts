export interface IRow {
	/** The type of row. */
	type: string;
	/**
	 * A unique name for this row among it's sibling rows
	 * (in the same section).
	 */
	name: string;
}
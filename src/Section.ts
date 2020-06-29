import { Border, Row } from "./";

export interface Section {
	/**
	 * A unique name for this section among it's sibling sections
	 * (in the same part).
	 */
	name: string;
	/** An optional border around this section. */
	border?: Border;
	/** The rows in this section. */
	rows: Array<Row>;
}
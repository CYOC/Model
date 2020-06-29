import { Row } from "./";
import { ImageURI, RelativePosition } from "../";

const typeId = "DescriptionRow";

export interface DescriptionRow extends Row {
	type: typeof typeId;

	/** An optional image. */
	image?: {
		/** The source of the image. */
		src: ImageURI;
		/** The position of the image relative to the text. */
		position: RelativePosition;
	};

	/** An optional heading appearing above the text. */
	heading?: string;
	/** The text content. */
	text: string;
}

export function isDescriptionRow(row: Row): row is DescriptionRow {
	return row.type === typeId;
}
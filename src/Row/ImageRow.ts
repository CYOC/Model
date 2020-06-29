import { Row } from "./";
import { ImageURI } from "../";

const typeId = "ImageRow";

export interface ImageRow extends Row {
	type: typeof typeId;

	/** The source of the image. */
	src: ImageURI;
}

export function isImageRow(row: Row): row is ImageRow {
	return row.type === typeId;
}
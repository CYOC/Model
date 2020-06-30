import { IRow } from "./IRow";
import { ImageURI } from "../";

const typeId = "ImageRow";

export interface ImageRow extends IRow {
	type: typeof typeId;

	/** The source of the image. */
	src: ImageURI;
}

export function isImageRow(row: IRow): row is ImageRow {
	return row.type === typeId;
}
import { HeadingRow } from "./HeadingRow";
import { DescriptionRow } from "./DescriptionRow";
import { ImageRow } from "./ImageRow";
import { ChoiceRow } from "./ChoiceRow";

export * from "./HeadingRow";
export * from "./DescriptionRow";
export * from "./ImageRow";
export * from "./ChoiceRow";

export type Row =
	  HeadingRow
	| DescriptionRow
	| ImageRow
	| ChoiceRow
	;
import { Background, Section } from "./";

export interface Part {
	/** A unique name for this part. */
	name: string;
	/** An optional background that overrides the projects background. */
	background?: Background;
	/** The sections in this part. */
	sections: Array<Section>;
}
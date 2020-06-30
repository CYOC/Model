import { Background, Border, ImageURI } from "../../";

export interface Choice {
	/**
	 * A unique name for this choice among it's sibling choices
	 * (in the same row).
	 */
	name: string;

	/**
	 * An optional background for this choice. If no background is provided it
	 * will be transparent.
	 */
	background?: Background;
	/** An optional border for this choice. */
	border?: Border

	/** The title of this choice. */
	title: string;
	/** An optional image for this choice. */
	image?: ImageURI;
	/** An optional descriptive text for this choice */
	description?: string;
}
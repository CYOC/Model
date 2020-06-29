import { ImageURI } from "./";

/**
 * Either a CSS color string (including the `#`), or a background
 * image object.
 */
export type Background = string | BackgroundImage;

interface BackgroundImage {
	/** The source of the image. */
	src: ImageURI;
	/**
	 * A CSS color string (including the `#`). Used on elements the image
	 * can't cover.
	 */
	color: string;
	/**
	 * Should the image be repeated. `true` for repeating along both axises.
	 */
	repeat?: boolean | {
		/** Repeat along the x-axis */
		x?: boolean;
		/** Repeat along the y-axis */
		y?: boolean;
	};
}
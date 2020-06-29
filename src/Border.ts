export interface Border {
	/** A CSS color string (including the `#`). */
	color: string;
	/** The thickness of the border in pixels. */
	thickness: number;
	/**
	 * The rounding of the border's edges in pixels.
	 */
	rounding?: number;
	/**
	 * Indicates where the border should be present.
	 * If left out it's present on all sides.
	 */
	presence?: {
		top?: boolean;
		left?: boolean;
		right?: boolean;
		bottom?: boolean;
	};
}
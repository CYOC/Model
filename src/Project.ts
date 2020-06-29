import { Background, Part } from "./";

export interface Project {
	/** The name of this CYOA project. */
	name: string;
	/** The target width of this CYOA project in pixels. */
	width: number;
	/** The background (color) of this CYOA project */
	background: Background;
	/** The parts of this CYOA project. */
	parts: Array<Part>;
}
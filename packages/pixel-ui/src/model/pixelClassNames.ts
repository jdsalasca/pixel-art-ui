import type { HTMLAttributes } from "react";
import type { PixelTone } from "./PixelTone.js";

/** Shared presentation contract. Components compose it; none inherit from another component. */
export interface PixelClassNameProps extends Pick<HTMLAttributes<HTMLElement>, "className"> {}

/** Shared semantic variant contract. Components compose it instead of inheriting implementation. */
export interface PixelToneProps { tone?: PixelTone; }

export function pixelClassNames(...names: Array<string | false | null | undefined>): string {
  return names.filter((name): name is string => Boolean(name && name.trim())).join(" ");
}

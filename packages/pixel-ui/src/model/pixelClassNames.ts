import type { HTMLAttributes } from "react";

/** Shared presentation contract. Components compose it; none inherit from another component. */
export interface PixelClassNameProps extends Pick<HTMLAttributes<HTMLElement>, "className"> {}

export function pixelClassNames(...names: Array<string | false | null | undefined>): string {
  return names.filter((name): name is string => Boolean(name && name.trim())).join(" ");
}

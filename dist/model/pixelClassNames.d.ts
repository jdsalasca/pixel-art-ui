import type { HTMLAttributes } from "react";
/** Shared presentation contract. Components compose it; none inherit from another component. */
export interface PixelClassNameProps extends Pick<HTMLAttributes<HTMLElement>, "className"> {
}
export declare function pixelClassNames(...names: Array<string | false | null | undefined>): string;
//# sourceMappingURL=pixelClassNames.d.ts.map
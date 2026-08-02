import type { HTMLAttributes } from "react";
import type { PixelTone } from "../model/PixelTone.js";
export interface PixelBadgeProps extends HTMLAttributes<HTMLSpanElement> {
    tone?: PixelTone;
}
export declare function PixelBadge({ tone, className, ...props }: PixelBadgeProps): import("react").JSX.Element;
//# sourceMappingURL=PixelBadge.d.ts.map
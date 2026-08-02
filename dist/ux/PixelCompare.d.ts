import type { HTMLAttributes } from "react";
export interface PixelCompareProps extends HTMLAttributes<HTMLDivElement> {
    before: string;
    after: string;
    beforeAlt?: string;
    afterAlt?: string;
    position?: number;
    onPositionChange?: (position: number) => void;
}
export declare function PixelCompare({ before, after, beforeAlt, afterAlt, position, onPositionChange, className, ...props }: PixelCompareProps): import("react").JSX.Element;
//# sourceMappingURL=PixelCompare.d.ts.map
import type { HTMLAttributes } from "react";
export interface PixelFrameItem {
    src: string;
    alt?: string;
    label?: string;
    durationMs?: number;
}
export interface PixelFrameStripProps extends HTMLAttributes<HTMLDivElement> {
    frames: readonly PixelFrameItem[];
    selectedIndex?: number;
    onSelectedIndexChange?: (index: number) => void;
}
export declare function PixelFrameStrip({ frames, selectedIndex, onSelectedIndexChange, className, ...props }: PixelFrameStripProps): import("react").JSX.Element;
//# sourceMappingURL=PixelFrameStrip.d.ts.map
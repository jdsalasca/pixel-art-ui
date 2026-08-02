import type { HTMLAttributes } from "react";
export interface PixelAnimationSheetProps extends HTMLAttributes<HTMLElement> {
    src?: string;
    frames: number;
    columns: number;
    rows: number;
    width: number;
    height: number;
    cellWidth: number;
    cellHeight: number;
    padding: number;
    manifestUrl?: string;
}
export declare function PixelAnimationSheet({ src, frames, columns, rows, width, height, cellWidth, cellHeight, padding, manifestUrl, className, ...props }: PixelAnimationSheetProps): import("react").JSX.Element;
//# sourceMappingURL=PixelAnimationSheet.d.ts.map
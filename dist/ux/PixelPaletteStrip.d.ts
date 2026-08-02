import type { HTMLAttributes } from "react";
export interface PixelPaletteSwatch {
    color: string;
    count?: number;
}
export interface PixelPaletteStripProps extends HTMLAttributes<HTMLElement> {
    label?: string;
    colors: readonly PixelPaletteSwatch[];
}
export declare function PixelPaletteStrip({ label, colors, className, ...props }: PixelPaletteStripProps): import("react").JSX.Element;
//# sourceMappingURL=PixelPaletteStrip.d.ts.map
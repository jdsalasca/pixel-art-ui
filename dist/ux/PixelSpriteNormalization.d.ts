import type { HTMLAttributes } from "react";
export type PixelSpritePivotMode = "center" | "bottom_center";
export interface PixelSpriteNormalizationProps extends HTMLAttributes<HTMLElement> {
    width: number;
    height: number;
    frames: number;
    padding: number;
    pivot: {
        mode: PixelSpritePivotMode;
        x: number;
        y: number;
    };
    bounds: {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    sourcePreserved?: boolean;
    deterministic?: boolean;
}
export declare function PixelSpriteNormalization({ width, height, frames, padding, pivot, bounds, sourcePreserved, deterministic, className, ...props }: PixelSpriteNormalizationProps): import("react").JSX.Element;
//# sourceMappingURL=PixelSpriteNormalization.d.ts.map
import type { HTMLAttributes } from "react";
export interface PixelSpriteGeometryFrame {
    index: number;
    bounds: {
        x: number;
        y: number;
        width: number;
        height: number;
    } | null;
    baselineY: number | null;
    pivot: {
        x: number;
        y: number;
    };
    componentCount: number;
}
export interface PixelSpriteGeometryProps extends HTMLAttributes<HTMLElement> {
    frameCount: number;
    width: number;
    height: number;
    stableBounds: boolean;
    baselineDrift: number;
    valid: boolean;
    frames: readonly PixelSpriteGeometryFrame[];
    violations?: readonly string[];
}
export declare function PixelSpriteGeometry({ frameCount, width, height, stableBounds, baselineDrift, valid, frames, violations, className, ...props }: PixelSpriteGeometryProps): import("react").JSX.Element;
//# sourceMappingURL=PixelSpriteGeometry.d.ts.map
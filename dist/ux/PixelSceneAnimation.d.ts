import type { HTMLAttributes } from "react";
import type { PixelSceneCompositionLayer } from "./PixelSceneComposition.js";
export interface PixelSceneAnimationProps extends HTMLAttributes<HTMLElement> {
    src: string;
    manifestUrl?: string;
    width: number;
    height: number;
    frames: number;
    delayMs: number;
    layers: readonly PixelSceneCompositionLayer[];
    deterministic?: boolean;
    sourcePreserved?: boolean;
}
export declare function PixelSceneAnimation({ src, manifestUrl, width, height, frames, delayMs, layers, deterministic, sourcePreserved, className, ...props }: PixelSceneAnimationProps): import("react").JSX.Element;
//# sourceMappingURL=PixelSceneAnimation.d.ts.map
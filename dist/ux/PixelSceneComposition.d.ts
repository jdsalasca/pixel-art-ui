import type { HTMLAttributes } from "react";
export interface PixelSceneCompositionLayer {
    assetId: string;
    title: string;
    role: "background" | "midground" | "foreground" | "effect";
    order: number;
    x: number;
    y: number;
    width: number;
    height: number;
}
export interface PixelSceneCompositionProps extends HTMLAttributes<HTMLElement> {
    src?: string;
    manifestUrl?: string;
    width: number;
    height: number;
    layers: readonly PixelSceneCompositionLayer[];
    deterministic?: boolean;
    sourcePreserved?: boolean;
}
export declare function PixelSceneComposition({ src, manifestUrl, width, height, layers, deterministic, sourcePreserved, className, ...props }: PixelSceneCompositionProps): import("react").JSX.Element;
//# sourceMappingURL=PixelSceneComposition.d.ts.map
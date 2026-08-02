import type { HTMLAttributes } from "react";
export interface PixelSpriteAnchorsProps extends HTMLAttributes<HTMLElement> {
    frameCount: number;
    anchorTypes: number;
    baselineDrift: number;
    manifestUrl?: string;
    deterministic?: boolean;
    sourcePreserved?: boolean;
}
export declare function PixelSpriteAnchors({ frameCount, anchorTypes, baselineDrift, manifestUrl, deterministic, sourcePreserved, className, ...props }: PixelSpriteAnchorsProps): import("react").JSX.Element;
//# sourceMappingURL=PixelSpriteAnchors.d.ts.map
import type { HTMLAttributes } from "react";
export interface PixelSpriteRuntimeBundleProps extends HTMLAttributes<HTMLElement> {
    frameCount: number;
    artifactCount: number;
    manifestUrl?: string;
    sourceFilename?: string;
    deterministic?: boolean;
    sourcePreserved?: boolean;
}
export declare function PixelSpriteRuntimeBundle({ frameCount, artifactCount, manifestUrl, sourceFilename, deterministic, sourcePreserved, className, ...props }: PixelSpriteRuntimeBundleProps): import("react").JSX.Element;
//# sourceMappingURL=PixelSpriteRuntimeBundle.d.ts.map
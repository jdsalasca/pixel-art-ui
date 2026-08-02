import type { HTMLAttributes } from "react";
export interface PixelSceneBundleProps extends HTMLAttributes<HTMLElement> {
    staticSrc?: string;
    staticManifestUrl?: string;
    animationSrc?: string;
    animationManifestUrl?: string;
    width: number;
    height: number;
    frames: number;
    delayMs: number;
    deterministic?: boolean;
    sourcePreserved?: boolean;
}
export declare function PixelSceneBundle({ staticSrc, staticManifestUrl, animationSrc, animationManifestUrl, width, height, frames, delayMs, deterministic, sourcePreserved, className, ...props }: PixelSceneBundleProps): import("react").JSX.Element;
//# sourceMappingURL=PixelSceneBundle.d.ts.map
import type { HTMLAttributes } from "react";
export interface PixelLibraryVariantPackAsset {
    assetId: string;
    title: string;
    outputPrefix: string;
    variants: readonly string[];
}
export interface PixelLibraryVariantPackProps extends HTMLAttributes<HTMLElement> {
    manifestUrl?: string;
    assets: readonly PixelLibraryVariantPackAsset[];
    frames: number;
    seed: number;
    deterministic?: boolean;
    sourcePreserved?: boolean;
}
export declare function PixelLibraryVariantPack({ manifestUrl, assets, frames, seed, deterministic, sourcePreserved, className, ...props }: PixelLibraryVariantPackProps): import("react").JSX.Element;
//# sourceMappingURL=PixelLibraryVariantPack.d.ts.map
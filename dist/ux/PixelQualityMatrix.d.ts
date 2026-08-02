import type { HTMLAttributes } from "react";
export interface PixelQualityMatrixAsset {
    filename: string;
    valid: boolean;
    violations?: readonly string[];
    error?: string;
}
export interface PixelQualityMatrixSummary {
    total: number;
    valid: number;
    invalid: number;
    failed: number;
}
export interface PixelQualityMatrixProps extends HTMLAttributes<HTMLElement> {
    assets: readonly PixelQualityMatrixAsset[];
    summary: PixelQualityMatrixSummary;
}
export declare function PixelQualityMatrix({ assets, summary, className, ...props }: PixelQualityMatrixProps): import("react").JSX.Element;
//# sourceMappingURL=PixelQualityMatrix.d.ts.map
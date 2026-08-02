import type { HTMLAttributes } from "react";
export interface PixelLibrarySummaryCategory {
    id: string;
    title: string;
    itemCount: number;
    examples: readonly string[];
}
export interface PixelLibrarySummaryPreset {
    id: string;
    title: string;
    category: string;
    itemCount: number;
}
export interface PixelLibrarySummaryProps extends HTMLAttributes<HTMLElement> {
    totalItems: number;
    totalCategories: number;
    totalPresets: number;
    categories: readonly PixelLibrarySummaryCategory[];
    presets: readonly PixelLibrarySummaryPreset[];
}
export declare function PixelLibrarySummary({ totalItems, totalCategories, totalPresets, categories, presets, className, ...props }: PixelLibrarySummaryProps): import("react").JSX.Element;
//# sourceMappingURL=PixelLibrarySummary.d.ts.map
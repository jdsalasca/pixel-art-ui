import type { HTMLAttributes } from "react";
export interface PixelSceneRecommendation {
    assetId: string;
    title: string;
    category: string;
    kind: string;
    score: number;
    reasons: readonly string[];
    tags: readonly string[];
    variants: readonly string[];
}
export interface PixelSceneRecommendationsProps extends HTMLAttributes<HTMLElement> {
    libraryVersion: string;
    recommendations: readonly PixelSceneRecommendation[];
    suggestedItemIds: readonly string[];
    coveredKinds: readonly string[];
    coveredTags: readonly string[];
    coveredVariants: readonly string[];
}
export declare function PixelSceneRecommendations({ libraryVersion, recommendations, suggestedItemIds, coveredKinds, coveredTags, coveredVariants, className, ...props }: PixelSceneRecommendationsProps): import("react").JSX.Element;
//# sourceMappingURL=PixelSceneRecommendations.d.ts.map
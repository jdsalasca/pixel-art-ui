import type { HTMLAttributes } from "react";
export interface PixelScenePlanLayer {
    id: string;
    assetId: string;
    title: string;
    role: "background" | "midground" | "foreground" | "effect";
    order: number;
}
export interface PixelScenePlanProps extends HTMLAttributes<HTMLElement> {
    libraryVersion: string;
    layers: readonly PixelScenePlanLayer[];
    deterministic?: boolean;
    sourcePreserved?: boolean;
}
export declare function PixelScenePlan({ libraryVersion, layers, deterministic, sourcePreserved, className, ...props }: PixelScenePlanProps): import("react").JSX.Element;
//# sourceMappingURL=PixelScenePlan.d.ts.map
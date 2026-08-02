import type { HTMLAttributes } from "react";
export interface PixelSpriteHitboxesProps extends HTMLAttributes<HTMLElement> {
    frameCount: number;
    mode: "components" | "union";
    padding: number;
    hitboxes: number;
    manifestUrl?: string;
    deterministic?: boolean;
    sourcePreserved?: boolean;
}
export declare function PixelSpriteHitboxes({ frameCount, mode, padding, hitboxes, manifestUrl, deterministic, sourcePreserved, className, ...props }: PixelSpriteHitboxesProps): import("react").JSX.Element;
//# sourceMappingURL=PixelSpriteHitboxes.d.ts.map
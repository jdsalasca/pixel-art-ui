import type { HTMLAttributes } from "react";
export interface PixelAnimationAuditProps extends HTMLAttributes<HTMLElement> {
    frameCount: number;
    duplicateFrames: readonly number[];
    loopClosed: boolean;
    loopChangedPixels: number;
    timingConsistent: boolean;
    paletteStable: boolean;
    valid: boolean;
    violations?: readonly string[];
}
export declare function PixelAnimationAudit({ frameCount, duplicateFrames, loopClosed, loopChangedPixels, timingConsistent, paletteStable, valid, violations, className, ...props }: PixelAnimationAuditProps): import("react").JSX.Element;
//# sourceMappingURL=PixelAnimationAudit.d.ts.map
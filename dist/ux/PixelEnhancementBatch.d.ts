import type { HTMLAttributes } from "react";
export interface PixelEnhancementBatchItem {
    filename: string;
    outputFilename: string;
    ok: boolean;
    planId?: string;
    frames?: number;
    passesApplied?: readonly string[];
    quality?: {
        valid: boolean;
        violations?: readonly string[];
    };
    error?: string;
}
export interface PixelEnhancementBatchProps extends HTMLAttributes<HTMLElement> {
    items: readonly PixelEnhancementBatchItem[];
    summary: {
        total: number;
        succeeded: number;
        failed: number;
    };
    deterministic?: boolean;
    sourcePreserved?: boolean;
}
export declare function PixelEnhancementBatch({ items, summary, deterministic, sourcePreserved, className, ...props }: PixelEnhancementBatchProps): import("react").JSX.Element;
//# sourceMappingURL=PixelEnhancementBatch.d.ts.map
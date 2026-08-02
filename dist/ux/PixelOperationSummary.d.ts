import type { PixelTone } from "../model/PixelTone.js";
export interface PixelOperationSummaryProps {
    label: string;
    operation: string;
    artifactCount: number;
    deterministic?: boolean;
    sourcePreserved?: boolean;
    tone?: PixelTone;
}
export declare function PixelOperationSummary({ label, operation, artifactCount, deterministic, sourcePreserved, tone }: PixelOperationSummaryProps): import("react").JSX.Element;
//# sourceMappingURL=PixelOperationSummary.d.ts.map
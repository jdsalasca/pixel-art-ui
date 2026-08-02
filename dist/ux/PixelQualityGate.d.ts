import type { HTMLAttributes } from "react";
export interface PixelQualityGateProps extends HTMLAttributes<HTMLDivElement> {
    valid: boolean;
    violations?: string[];
    label?: string;
}
export declare function PixelQualityGate({ valid, violations, label, className, ...props }: PixelQualityGateProps): import("react").JSX.Element;
//# sourceMappingURL=PixelQualityGate.d.ts.map
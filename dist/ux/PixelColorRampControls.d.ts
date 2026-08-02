import type { HTMLAttributes } from "react";
export interface PixelColorRampControlsProps extends HTMLAttributes<HTMLDivElement> {
    shadowColor: string;
    midColor: string;
    highlightColor: string;
    shadowThreshold: number;
    highlightThreshold: number;
    disabled?: boolean;
    onShadowColorChange(color: string): void;
    onMidColorChange(color: string): void;
    onHighlightColorChange(color: string): void;
    onShadowThresholdChange(value: number): void;
    onHighlightThresholdChange(value: number): void;
}
export declare function PixelColorRampControls({ shadowColor, midColor, highlightColor, shadowThreshold, highlightThreshold, disabled, onShadowColorChange, onMidColorChange, onHighlightColorChange, onShadowThresholdChange, onHighlightThresholdChange, className, ...props }: PixelColorRampControlsProps): import("react").JSX.Element;
//# sourceMappingURL=PixelColorRampControls.d.ts.map
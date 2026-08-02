import type { HTMLAttributes } from "react";
export interface PixelAmbientOcclusionControlsProps extends HTMLAttributes<HTMLDivElement> {
    color: string;
    radius: number;
    strength: number;
    disabled?: boolean;
    onColorChange(color: string): void;
    onRadiusChange(radius: number): void;
    onStrengthChange(strength: number): void;
}
export declare function PixelAmbientOcclusionControls({ color, radius, strength, disabled, onColorChange, onRadiusChange, onStrengthChange, className, ...props }: PixelAmbientOcclusionControlsProps): import("react").JSX.Element;
//# sourceMappingURL=PixelAmbientOcclusionControls.d.ts.map
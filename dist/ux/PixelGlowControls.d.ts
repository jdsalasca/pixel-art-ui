import type { HTMLAttributes } from "react";
export interface PixelGlowControlsProps extends HTMLAttributes<HTMLDivElement> {
    color: string;
    radius: number;
    opacity: number;
    disabled?: boolean;
    onColorChange(color: string): void;
    onRadiusChange(radius: number): void;
    onOpacityChange(opacity: number): void;
}
export declare function PixelGlowControls({ color, radius, opacity, disabled, onColorChange, onRadiusChange, onOpacityChange, className, ...props }: PixelGlowControlsProps): import("react").JSX.Element;
//# sourceMappingURL=PixelGlowControls.d.ts.map
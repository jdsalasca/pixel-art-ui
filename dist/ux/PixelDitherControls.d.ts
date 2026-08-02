import type { HTMLAttributes } from "react";
export interface PixelDitherControlsProps extends HTMLAttributes<HTMLDivElement> {
    darkColor: string;
    lightColor: string;
    strength: number;
    scale: number;
    disabled?: boolean;
    onDarkColorChange(color: string): void;
    onLightColorChange(color: string): void;
    onStrengthChange(value: number): void;
    onScaleChange(value: number): void;
}
export declare function PixelDitherControls({ darkColor, lightColor, strength, scale, disabled, onDarkColorChange, onLightColorChange, onStrengthChange, onScaleChange, className, ...props }: PixelDitherControlsProps): import("react").JSX.Element;
//# sourceMappingURL=PixelDitherControls.d.ts.map
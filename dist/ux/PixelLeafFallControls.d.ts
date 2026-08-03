import type { HTMLAttributes } from "react";
export interface PixelLeafFallControlsProps extends HTMLAttributes<HTMLDivElement> {
    frames: number;
    seed: number;
    density: number;
    wind: number;
    color: string;
    disabled?: boolean;
    onFramesChange(value: number): void;
    onSeedChange(value: number): void;
    onDensityChange(value: number): void;
    onWindChange(value: number): void;
    onColorChange(value: string): void;
}
export declare function PixelLeafFallControls({ frames, seed, density, wind, color, disabled, onFramesChange, onSeedChange, onDensityChange, onWindChange, onColorChange, className, ...props }: PixelLeafFallControlsProps): import("react").JSX.Element;
//# sourceMappingURL=PixelLeafFallControls.d.ts.map
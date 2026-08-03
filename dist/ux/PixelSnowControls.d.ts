import type { HTMLAttributes } from "react";
export interface PixelSnowControlsProps extends HTMLAttributes<HTMLDivElement> {
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
export declare function PixelSnowControls({ frames, seed, density, wind, color, disabled, onFramesChange, onSeedChange, onDensityChange, onWindChange, onColorChange, className, ...props }: PixelSnowControlsProps): import("react").JSX.Element;
//# sourceMappingURL=PixelSnowControls.d.ts.map
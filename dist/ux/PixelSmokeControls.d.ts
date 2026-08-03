import type { HTMLAttributes } from "react";
export interface PixelSmokeControlsProps extends HTMLAttributes<HTMLDivElement> {
    frames: number;
    seed: number;
    density: number;
    drift: number;
    rise: number;
    color: string;
    disabled?: boolean;
    onFramesChange(value: number): void;
    onSeedChange(value: number): void;
    onDensityChange(value: number): void;
    onDriftChange(value: number): void;
    onRiseChange(value: number): void;
    onColorChange(value: string): void;
}
export declare function PixelSmokeControls({ frames, seed, density, drift, rise, color, disabled, onFramesChange, onSeedChange, onDensityChange, onDriftChange, onRiseChange, onColorChange, className, ...props }: PixelSmokeControlsProps): import("react").JSX.Element;
//# sourceMappingURL=PixelSmokeControls.d.ts.map
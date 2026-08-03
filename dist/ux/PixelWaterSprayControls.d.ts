import type { HTMLAttributes } from "react";
export interface PixelWaterSprayControlsProps extends HTMLAttributes<HTMLDivElement> {
    frames: number;
    seed: number;
    density: number;
    drift: number;
    color: string;
    disabled?: boolean;
    onFramesChange(value: number): void;
    onSeedChange(value: number): void;
    onDensityChange(value: number): void;
    onDriftChange(value: number): void;
    onColorChange(value: string): void;
}
export declare function PixelWaterSprayControls({ frames, seed, density, drift, color, disabled, onFramesChange, onSeedChange, onDensityChange, onDriftChange, onColorChange, className, ...props }: PixelWaterSprayControlsProps): import("react").JSX.Element;
//# sourceMappingURL=PixelWaterSprayControls.d.ts.map
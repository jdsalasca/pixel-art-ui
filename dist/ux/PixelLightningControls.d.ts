import type { HTMLAttributes } from "react";
export interface PixelLightningControlsProps extends HTMLAttributes<HTMLDivElement> {
    frames: number;
    seed: number;
    intensity: number;
    flash: number;
    color: string;
    disabled?: boolean;
    onFramesChange(value: number): void;
    onSeedChange(value: number): void;
    onIntensityChange(value: number): void;
    onFlashChange(value: number): void;
    onColorChange(value: string): void;
}
export declare function PixelLightningControls({ frames, seed, intensity, flash, color, disabled, onFramesChange, onSeedChange, onIntensityChange, onFlashChange, onColorChange, className, ...props }: PixelLightningControlsProps): import("react").JSX.Element;
//# sourceMappingURL=PixelLightningControls.d.ts.map
import type { HTMLAttributes } from "react";
export interface PixelWaveControlsProps extends HTMLAttributes<HTMLDivElement> {
    frames: number;
    seed: number;
    density: number;
    amplitude: number;
    color: string;
    disabled?: boolean;
    onFramesChange(value: number): void;
    onSeedChange(value: number): void;
    onDensityChange(value: number): void;
    onAmplitudeChange(value: number): void;
    onColorChange(value: string): void;
}
export declare function PixelWaveControls({ frames, seed, density, amplitude, color, disabled, onFramesChange, onSeedChange, onDensityChange, onAmplitudeChange, onColorChange, className, ...props }: PixelWaveControlsProps): import("react").JSX.Element;
//# sourceMappingURL=PixelWaveControls.d.ts.map
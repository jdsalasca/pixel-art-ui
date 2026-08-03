import type { HTMLAttributes } from "react";
export interface PixelFireControlsProps extends HTMLAttributes<HTMLDivElement> {
    frames: number;
    seed: number;
    intensity: number;
    flicker: number;
    color: string;
    disabled?: boolean;
    onFramesChange(value: number): void;
    onSeedChange(value: number): void;
    onIntensityChange(value: number): void;
    onFlickerChange(value: number): void;
    onColorChange(value: string): void;
}
export declare function PixelFireControls({ frames, seed, intensity, flicker, color, disabled, onFramesChange, onSeedChange, onIntensityChange, onFlickerChange, onColorChange, className, ...props }: PixelFireControlsProps): import("react").JSX.Element;
//# sourceMappingURL=PixelFireControls.d.ts.map
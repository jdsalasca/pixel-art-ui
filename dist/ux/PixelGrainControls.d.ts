import type { HTMLAttributes } from "react";
export interface PixelGrainControlsProps extends HTMLAttributes<HTMLDivElement> {
    seed: number;
    intensity: number;
    scale: number;
    disabled?: boolean;
    onSeedChange(seed: number): void;
    onIntensityChange(intensity: number): void;
    onScaleChange(scale: number): void;
}
export declare function PixelGrainControls({ seed, intensity, scale, disabled, onSeedChange, onIntensityChange, onScaleChange, className, ...props }: PixelGrainControlsProps): import("react").JSX.Element;
//# sourceMappingURL=PixelGrainControls.d.ts.map
import type { HTMLAttributes } from "react";
export interface PixelColorTemperatureControlsProps extends HTMLAttributes<HTMLDivElement> {
    temperature: number;
    intensity: number;
    disabled?: boolean;
    onTemperatureChange(value: number): void;
    onIntensityChange(value: number): void;
}
export declare function PixelColorTemperatureControls({ temperature, intensity, disabled, onTemperatureChange, onIntensityChange, className, ...props }: PixelColorTemperatureControlsProps): import("react").JSX.Element;
//# sourceMappingURL=PixelColorTemperatureControls.d.ts.map
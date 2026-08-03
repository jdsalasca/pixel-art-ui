import type { HTMLAttributes } from "react";
export type PixelWindSwayDirection = "left" | "right";
export interface PixelWindSwayControlsProps extends HTMLAttributes<HTMLDivElement> {
    frames: number;
    seed: number;
    amplitude: number;
    direction: PixelWindSwayDirection;
    disabled?: boolean;
    onFramesChange(value: number): void;
    onSeedChange(value: number): void;
    onAmplitudeChange(value: number): void;
    onDirectionChange(value: PixelWindSwayDirection): void;
}
export declare function PixelWindSwayControls({ frames, seed, amplitude, direction, disabled, onFramesChange, onSeedChange, onAmplitudeChange, onDirectionChange, className, ...props }: PixelWindSwayControlsProps): import("react").JSX.Element;
//# sourceMappingURL=PixelWindSwayControls.d.ts.map
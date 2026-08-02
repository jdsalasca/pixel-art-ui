import type { HTMLAttributes } from "react";
export interface PixelCleanupControlsProps extends HTMLAttributes<HTMLDivElement> {
    minNeighbors: number;
    iterations: number;
    disabled?: boolean;
    onMinNeighborsChange(value: number): void;
    onIterationsChange(value: number): void;
}
export declare function PixelCleanupControls({ minNeighbors, iterations, disabled, onMinNeighborsChange, onIterationsChange, className, ...props }: PixelCleanupControlsProps): import("react").JSX.Element;
//# sourceMappingURL=PixelCleanupControls.d.ts.map
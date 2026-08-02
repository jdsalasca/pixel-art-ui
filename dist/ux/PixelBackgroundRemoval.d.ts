import type { HTMLAttributes } from "react";
export interface PixelBackgroundRemovalProps extends HTMLAttributes<HTMLDivElement> {
    color: string;
    tolerance: number;
    connectedOnly: boolean;
    disabled?: boolean;
    onColorChange(color: string): void;
    onToleranceChange(tolerance: number): void;
    onConnectedOnlyChange(connectedOnly: boolean): void;
}
export declare function PixelBackgroundRemoval({ color, tolerance, connectedOnly, disabled, onColorChange, onToleranceChange, onConnectedOnlyChange, className, ...props }: PixelBackgroundRemovalProps): import("react").JSX.Element;
//# sourceMappingURL=PixelBackgroundRemoval.d.ts.map
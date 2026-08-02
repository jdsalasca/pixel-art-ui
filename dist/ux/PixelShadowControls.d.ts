import type { HTMLAttributes } from "react";
export interface PixelShadowControlsProps extends HTMLAttributes<HTMLDivElement> {
    color: string;
    offsetX: number;
    offsetY: number;
    opacity: number;
    disabled?: boolean;
    onColorChange(color: string): void;
    onOffsetXChange(value: number): void;
    onOffsetYChange(value: number): void;
    onOpacityChange(value: number): void;
}
export declare function PixelShadowControls({ color, offsetX, offsetY, opacity, disabled, onColorChange, onOffsetXChange, onOffsetYChange, onOpacityChange, className, ...props }: PixelShadowControlsProps): import("react").JSX.Element;
//# sourceMappingURL=PixelShadowControls.d.ts.map
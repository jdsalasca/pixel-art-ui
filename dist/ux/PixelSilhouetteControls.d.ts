import type { HTMLAttributes } from "react";
export interface PixelSilhouetteControlsProps extends HTMLAttributes<HTMLDivElement> {
    color: string;
    opacity: number;
    disabled?: boolean;
    onColorChange(value: string): void;
    onOpacityChange(value: number): void;
}
export declare function PixelSilhouetteControls({ color, opacity, disabled, onColorChange, onOpacityChange, className, ...props }: PixelSilhouetteControlsProps): import("react").JSX.Element;
//# sourceMappingURL=PixelSilhouetteControls.d.ts.map
import type { HTMLAttributes } from "react";
import type { PixelRimLightDirection } from "./PixelRimLightControls.js";
export interface PixelSpecularHighlightControlsProps extends HTMLAttributes<HTMLDivElement> {
    color: string;
    direction: PixelRimLightDirection;
    radius: number;
    strength: number;
    disabled?: boolean;
    onColorChange(color: string): void;
    onDirectionChange(direction: PixelRimLightDirection): void;
    onRadiusChange(radius: number): void;
    onStrengthChange(strength: number): void;
}
export declare function PixelSpecularHighlightControls({ color, direction, radius, strength, disabled, onColorChange, onDirectionChange, onRadiusChange, onStrengthChange, className, ...props }: PixelSpecularHighlightControlsProps): import("react").JSX.Element;
//# sourceMappingURL=PixelSpecularHighlightControls.d.ts.map
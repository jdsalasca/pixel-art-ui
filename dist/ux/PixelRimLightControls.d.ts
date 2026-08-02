import type { HTMLAttributes } from "react";
export type PixelRimLightDirection = "north" | "north_east" | "east" | "south_east" | "south" | "south_west" | "west" | "north_west";
export interface PixelRimLightControlsProps extends HTMLAttributes<HTMLDivElement> {
    color: string;
    direction: PixelRimLightDirection;
    strength: number;
    disabled?: boolean;
    onColorChange(color: string): void;
    onDirectionChange(direction: PixelRimLightDirection): void;
    onStrengthChange(strength: number): void;
}
export declare function PixelRimLightControls({ color, direction, strength, disabled, onColorChange, onDirectionChange, onStrengthChange, className, ...props }: PixelRimLightControlsProps): import("react").JSX.Element;
//# sourceMappingURL=PixelRimLightControls.d.ts.map
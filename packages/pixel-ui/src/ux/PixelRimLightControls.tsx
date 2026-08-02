import type { HTMLAttributes } from "react";
import { pixelClassNames } from "../model/pixelClassNames.js";

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

const DIRECTIONS: PixelRimLightDirection[] = ["north", "north_east", "east", "south_east", "south", "south_west", "west", "north_west"];

export function PixelRimLightControls({ color, direction, strength, disabled = false, onColorChange, onDirectionChange, onStrengthChange, className = "", ...props }: PixelRimLightControlsProps) {
  const boundedStrength = Math.max(0, Math.min(1, Number.isFinite(strength) ? strength : 0.75));
  const boundedDirection = DIRECTIONS.includes(direction) ? direction : "north";
  return <div className={pixelClassNames("pixel-rim-light-controls", className)} aria-label="Sprite rim light controls" {...props}>
    <label className="pixel-rim-light-controls__color"><span>RIM COLOR</span><input type="color" value={color} disabled={disabled} onChange={(event) => onColorChange(event.target.value)} /></label>
    <label className="pixel-rim-light-controls__direction"><span>DIRECTION · {boundedDirection.replace("_", " ").toUpperCase()}</span><select value={boundedDirection} disabled={disabled} onChange={(event) => onDirectionChange(event.target.value as PixelRimLightDirection)}>{DIRECTIONS.map((value) => <option key={value} value={value}>{value.replace("_", " ").toUpperCase()}</option>)}</select></label>
    <label className="pixel-rim-light-controls__strength"><span>STRENGTH · {boundedStrength}</span><input type="range" min={0} max={1} step={0.05} value={boundedStrength} disabled={disabled} onChange={(event) => onStrengthChange(Number(event.target.value))} /></label>
  </div>;
}

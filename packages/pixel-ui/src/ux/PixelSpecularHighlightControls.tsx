import type { HTMLAttributes } from "react";
import { pixelClassNames } from "../model/pixelClassNames.js";
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

const DIRECTIONS: PixelRimLightDirection[] = ["north", "north_east", "east", "south_east", "south", "south_west", "west", "north_west"];

export function PixelSpecularHighlightControls({ color, direction, radius, strength, disabled = false, onColorChange, onDirectionChange, onRadiusChange, onStrengthChange, className = "", ...props }: PixelSpecularHighlightControlsProps) {
  const boundedDirection = DIRECTIONS.includes(direction) ? direction : "north";
  const boundedRadius = Math.max(1, Math.min(8, Number.isFinite(radius) ? Math.round(radius) : 2));
  const boundedStrength = Math.max(0, Math.min(1, Number.isFinite(strength) ? strength : 0.8));
  return <div className={pixelClassNames("pixel-specular-highlight-controls", className)} aria-label="Sprite specular highlight controls" {...props}>
    <label className="pixel-specular-highlight-controls__color"><span>HIGHLIGHT COLOR</span><input type="color" value={color} disabled={disabled} onChange={(event) => onColorChange(event.target.value)} /></label>
    <label className="pixel-specular-highlight-controls__direction"><span>DIRECTION · {boundedDirection.replace("_", " ").toUpperCase()}</span><select value={boundedDirection} disabled={disabled} onChange={(event) => onDirectionChange(event.target.value as PixelRimLightDirection)}>{DIRECTIONS.map((value) => <option key={value} value={value}>{value.replace("_", " ").toUpperCase()}</option>)}</select></label>
    <label className="pixel-specular-highlight-controls__radius"><span>RADIUS · {boundedRadius}</span><input type="range" min={1} max={8} step={1} value={boundedRadius} disabled={disabled} onChange={(event) => onRadiusChange(Number(event.target.value))} /></label>
    <label className="pixel-specular-highlight-controls__strength"><span>STRENGTH · {boundedStrength}</span><input type="range" min={0} max={1} step={0.05} value={boundedStrength} disabled={disabled} onChange={(event) => onStrengthChange(Number(event.target.value))} /></label>
  </div>;
}

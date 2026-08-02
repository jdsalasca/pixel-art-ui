import type { HTMLAttributes } from "react";
import { pixelClassNames } from "../model/pixelClassNames.js";

export interface PixelAmbientOcclusionControlsProps extends HTMLAttributes<HTMLDivElement> {
  color: string;
  radius: number;
  strength: number;
  disabled?: boolean;
  onColorChange(color: string): void;
  onRadiusChange(radius: number): void;
  onStrengthChange(strength: number): void;
}

export function PixelAmbientOcclusionControls({ color, radius, strength, disabled = false, onColorChange, onRadiusChange, onStrengthChange, className = "", ...props }: PixelAmbientOcclusionControlsProps) {
  const boundedRadius = Math.max(1, Math.min(4, Number.isFinite(radius) ? Math.round(radius) : 1));
  const boundedStrength = Math.max(0, Math.min(1, Number.isFinite(strength) ? strength : 0.6));
  return <div className={pixelClassNames("pixel-ambient-occlusion-controls", className)} aria-label="Sprite ambient occlusion controls" {...props}>
    <label className="pixel-ambient-occlusion-controls__color"><span>OCCLUSION COLOR</span><input type="color" value={color} disabled={disabled} onChange={(event) => onColorChange(event.target.value)} /></label>
    <label className="pixel-ambient-occlusion-controls__radius"><span>RADIUS · {boundedRadius}</span><input type="range" min={1} max={4} step={1} value={boundedRadius} disabled={disabled} onChange={(event) => onRadiusChange(Number(event.target.value))} /></label>
    <label className="pixel-ambient-occlusion-controls__strength"><span>STRENGTH · {boundedStrength}</span><input type="range" min={0} max={1} step={0.05} value={boundedStrength} disabled={disabled} onChange={(event) => onStrengthChange(Number(event.target.value))} /></label>
  </div>;
}

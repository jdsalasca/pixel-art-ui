import type { HTMLAttributes } from "react";
import { pixelClassNames } from "../model/pixelClassNames.js";

export interface PixelGlowControlsProps extends HTMLAttributes<HTMLDivElement> {
  color: string;
  radius: number;
  opacity: number;
  disabled?: boolean;
  onColorChange(color: string): void;
  onRadiusChange(radius: number): void;
  onOpacityChange(opacity: number): void;
}

export function PixelGlowControls({ color, radius, opacity, disabled = false, onColorChange, onRadiusChange, onOpacityChange, className = "", ...props }: PixelGlowControlsProps) {
  const boundedRadius = Math.max(1, Math.min(8, Number.isFinite(radius) ? Math.round(radius) : 2));
  const boundedOpacity = Math.max(0, Math.min(1, Number.isFinite(opacity) ? opacity : 0.8));
  return <div className={pixelClassNames("pixel-glow-controls", className)} aria-label="Sprite glow controls" {...props}>
    <label className="pixel-glow-controls__color"><span>GLOW COLOR</span><input type="color" value={color} disabled={disabled} onChange={(event) => onColorChange(event.target.value)} /></label>
    <label className="pixel-glow-controls__radius"><span>RADIUS · {boundedRadius}</span><input type="range" min={1} max={8} step={1} value={boundedRadius} disabled={disabled} onChange={(event) => onRadiusChange(Number(event.target.value))} /></label>
    <label className="pixel-glow-controls__opacity"><span>OPACITY · {boundedOpacity}</span><input type="range" min={0} max={1} step={0.05} value={boundedOpacity} disabled={disabled} onChange={(event) => onOpacityChange(Number(event.target.value))} /></label>
  </div>;
}

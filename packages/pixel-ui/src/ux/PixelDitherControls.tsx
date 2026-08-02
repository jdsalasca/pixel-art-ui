import type { HTMLAttributes } from "react";
import { pixelClassNames } from "../model/pixelClassNames.js";

export interface PixelDitherControlsProps extends HTMLAttributes<HTMLDivElement> {
  darkColor: string;
  lightColor: string;
  strength: number;
  scale: number;
  disabled?: boolean;
  onDarkColorChange(color: string): void;
  onLightColorChange(color: string): void;
  onStrengthChange(value: number): void;
  onScaleChange(value: number): void;
}

export function PixelDitherControls({ darkColor, lightColor, strength, scale, disabled = false, onDarkColorChange, onLightColorChange, onStrengthChange, onScaleChange, className = "", ...props }: PixelDitherControlsProps) {
  const boundedStrength = Math.max(0, Math.min(1, Number.isFinite(strength) ? strength : 1));
  const boundedScale = Math.max(1, Math.min(8, Number.isInteger(scale) ? scale : 1));
  return <div className={pixelClassNames("pixel-dither-controls", className)} aria-label="Sprite dither controls" {...props}>
    <label className="pixel-dither-controls__color"><span>DARK COLOR</span><input type="color" value={darkColor} disabled={disabled} onChange={(event) => onDarkColorChange(event.target.value)} /></label>
    <label className="pixel-dither-controls__color"><span>LIGHT COLOR</span><input type="color" value={lightColor} disabled={disabled} onChange={(event) => onLightColorChange(event.target.value)} /></label>
    <label className="pixel-dither-controls__strength"><span>STRENGTH · {boundedStrength}</span><input type="range" min={0} max={1} step={0.05} value={boundedStrength} disabled={disabled} onChange={(event) => onStrengthChange(Number(event.target.value))} /></label>
    <label className="pixel-dither-controls__scale"><span>SCALE · {boundedScale}</span><input type="range" min={1} max={8} step={1} value={boundedScale} disabled={disabled} onChange={(event) => onScaleChange(Number(event.target.value))} /></label>
  </div>;
}

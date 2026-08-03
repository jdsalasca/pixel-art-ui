import type { HTMLAttributes } from "react";
import { pixelClassNames } from "../model/pixelClassNames.js";

export interface PixelSnowControlsProps extends HTMLAttributes<HTMLDivElement> {
  frames: number;
  seed: number;
  density: number;
  wind: number;
  color: string;
  disabled?: boolean;
  onFramesChange(value: number): void;
  onSeedChange(value: number): void;
  onDensityChange(value: number): void;
  onWindChange(value: number): void;
  onColorChange(value: string): void;
}

export function PixelSnowControls({ frames, seed, density, wind, color, disabled = false, onFramesChange, onSeedChange, onDensityChange, onWindChange, onColorChange, className = "", ...props }: PixelSnowControlsProps) {
  const safeFrames = Math.max(1, Math.min(24, Number.isInteger(frames) ? frames : 8));
  const safeSeed = Number.isInteger(seed) ? seed : 1;
  const safeDensity = Math.max(0, Math.min(1, Number.isFinite(density) ? density : 0.55));
  const safeWind = Math.max(-1, Math.min(1, Number.isFinite(wind) ? wind : 0));
  return <div className={pixelClassNames("pixel-snow-controls", className)} aria-label="Snow overlay controls" {...props}>
    <label><span>FRAMES · {safeFrames}</span><input type="number" min={1} max={24} step={1} value={safeFrames} disabled={disabled} onChange={(event) => onFramesChange(Number(event.target.value))} /></label>
    <label><span>SEED · {safeSeed}</span><input type="number" step={1} value={safeSeed} disabled={disabled} onChange={(event) => onSeedChange(Number(event.target.value))} /></label>
    <label><span>DENSITY · {safeDensity}</span><input type="range" min={0} max={1} step={0.05} value={safeDensity} disabled={disabled} onChange={(event) => onDensityChange(Number(event.target.value))} /></label>
    <label><span>WIND · {safeWind}</span><input type="range" min={-1} max={1} step={0.05} value={safeWind} disabled={disabled} onChange={(event) => onWindChange(Number(event.target.value))} /></label>
    <label className="pixel-snow-controls__color"><span>SNOW COLOR</span><input type="color" value={color} disabled={disabled} onChange={(event) => onColorChange(event.target.value)} /></label>
  </div>;
}

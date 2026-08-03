import type { HTMLAttributes } from "react";
import { pixelClassNames } from "../model/pixelClassNames.js";

export interface PixelFireControlsProps extends HTMLAttributes<HTMLDivElement> {
  frames: number;
  seed: number;
  intensity: number;
  flicker: number;
  color: string;
  disabled?: boolean;
  onFramesChange(value: number): void;
  onSeedChange(value: number): void;
  onIntensityChange(value: number): void;
  onFlickerChange(value: number): void;
  onColorChange(value: string): void;
}

export function PixelFireControls({ frames, seed, intensity, flicker, color, disabled = false, onFramesChange, onSeedChange, onIntensityChange, onFlickerChange, onColorChange, className = "", ...props }: PixelFireControlsProps) {
  const safeFrames = Math.max(1, Math.min(24, Number.isInteger(frames) ? frames : 8));
  const safeSeed = Number.isInteger(seed) ? seed : 1;
  const safeIntensity = Math.max(0, Math.min(1, Number.isFinite(intensity) ? intensity : 0.65));
  const safeFlicker = Math.max(0, Math.min(1, Number.isFinite(flicker) ? flicker : 0.55));
  return <div className={pixelClassNames("pixel-fire-controls", className)} aria-label="Fire overlay controls" {...props}>
    <label><span>FRAMES · {safeFrames}</span><input type="number" min={1} max={24} step={1} value={safeFrames} disabled={disabled} onChange={(event) => onFramesChange(Number(event.target.value))} /></label>
    <label><span>SEED · {safeSeed}</span><input type="number" step={1} value={safeSeed} disabled={disabled} onChange={(event) => onSeedChange(Number(event.target.value))} /></label>
    <label><span>INTENSITY · {safeIntensity}</span><input type="range" min={0} max={1} step={0.05} value={safeIntensity} disabled={disabled} onChange={(event) => onIntensityChange(Number(event.target.value))} /></label>
    <label><span>FLICKER · {safeFlicker}</span><input type="range" min={0} max={1} step={0.05} value={safeFlicker} disabled={disabled} onChange={(event) => onFlickerChange(Number(event.target.value))} /></label>
    <label className="pixel-fire-controls__color"><span>FIRE COLOR</span><input type="color" value={color} disabled={disabled} onChange={(event) => onColorChange(event.target.value)} /></label>
  </div>;
}

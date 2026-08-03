import type { HTMLAttributes } from "react";
import { pixelClassNames } from "../model/pixelClassNames.js";

export interface PixelLightningControlsProps extends HTMLAttributes<HTMLDivElement> {
  frames: number;
  seed: number;
  intensity: number;
  flash: number;
  color: string;
  disabled?: boolean;
  onFramesChange(value: number): void;
  onSeedChange(value: number): void;
  onIntensityChange(value: number): void;
  onFlashChange(value: number): void;
  onColorChange(value: string): void;
}

export function PixelLightningControls({ frames, seed, intensity, flash, color, disabled = false, onFramesChange, onSeedChange, onIntensityChange, onFlashChange, onColorChange, className = "", ...props }: PixelLightningControlsProps) {
  const safeFrames = Math.max(1, Math.min(24, Number.isInteger(frames) ? frames : 8));
  const safeSeed = Number.isInteger(seed) ? seed : 1;
  const safeIntensity = Math.max(0, Math.min(1, Number.isFinite(intensity) ? intensity : 0.65));
  const safeFlash = Math.max(0, Math.min(1, Number.isFinite(flash) ? flash : 0.65));
  return <div className={pixelClassNames("pixel-lightning-controls", className)} aria-label="Lightning overlay controls" {...props}>
    <label><span>FRAMES · {safeFrames}</span><input type="number" min={1} max={24} step={1} value={safeFrames} disabled={disabled} onChange={(event) => onFramesChange(Number(event.target.value))} /></label>
    <label><span>SEED · {safeSeed}</span><input type="number" step={1} value={safeSeed} disabled={disabled} onChange={(event) => onSeedChange(Number(event.target.value))} /></label>
    <label><span>INTENSITY · {safeIntensity}</span><input type="range" min={0} max={1} step={0.05} value={safeIntensity} disabled={disabled} onChange={(event) => onIntensityChange(Number(event.target.value))} /></label>
    <label><span>FLASH · {safeFlash}</span><input type="range" min={0} max={1} step={0.05} value={safeFlash} disabled={disabled} onChange={(event) => onFlashChange(Number(event.target.value))} /></label>
    <label className="pixel-lightning-controls__color"><span>LIGHTNING COLOR</span><input type="color" value={color} disabled={disabled} onChange={(event) => onColorChange(event.target.value)} /></label>
  </div>;
}

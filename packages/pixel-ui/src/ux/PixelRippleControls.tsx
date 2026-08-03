import type { HTMLAttributes } from "react";
import { pixelClassNames } from "../model/pixelClassNames.js";

export interface PixelRippleControlsProps extends HTMLAttributes<HTMLDivElement> { frames: number; seed: number; density: number; amplitude: number; color: string; disabled?: boolean; onFramesChange(value: number): void; onSeedChange(value: number): void; onDensityChange(value: number): void; onAmplitudeChange(value: number): void; onColorChange(value: string): void; }

export function PixelRippleControls({ frames, seed, density, amplitude, color, disabled = false, onFramesChange, onSeedChange, onDensityChange, onAmplitudeChange, onColorChange, className = "", ...props }: PixelRippleControlsProps) {
  const safeFrames = Math.max(1, Math.min(24, Number.isInteger(frames) ? frames : 8)); const safeSeed = Number.isInteger(seed) ? seed : 1;
  const safeDensity = Math.max(0, Math.min(1, Number.isFinite(density) ? density : 0.6)); const safeAmplitude = Math.max(0, Math.min(8, Number.isFinite(amplitude) ? amplitude : 2));
  return <div className={pixelClassNames("pixel-ripple-controls", className)} aria-label="Water ripple controls" {...props}>
    <label><span>FRAMES · {safeFrames}</span><input type="number" min={1} max={24} step={1} value={safeFrames} disabled={disabled} onChange={(event) => onFramesChange(Number(event.target.value))} /></label>
    <label><span>SEED · {safeSeed}</span><input type="number" step={1} value={safeSeed} disabled={disabled} onChange={(event) => onSeedChange(Number(event.target.value))} /></label>
    <label><span>DENSITY · {safeDensity}</span><input type="range" min={0} max={1} step={0.05} value={safeDensity} disabled={disabled} onChange={(event) => onDensityChange(Number(event.target.value))} /></label>
    <label><span>AMPLITUDE · {safeAmplitude}</span><input type="range" min={0} max={8} step={1} value={safeAmplitude} disabled={disabled} onChange={(event) => onAmplitudeChange(Number(event.target.value))} /></label>
    <label className="pixel-ripple-controls__color"><span>RIPPLE COLOR</span><input type="color" value={color} disabled={disabled} onChange={(event) => onColorChange(event.target.value)} /></label>
  </div>;
}

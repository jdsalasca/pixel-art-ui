import type { HTMLAttributes } from "react";
import { pixelClassNames } from "../model/pixelClassNames.js";

export type PixelWindSwayDirection = "left" | "right";

export interface PixelWindSwayControlsProps extends HTMLAttributes<HTMLDivElement> {
  frames: number;
  seed: number;
  amplitude: number;
  direction: PixelWindSwayDirection;
  disabled?: boolean;
  onFramesChange(value: number): void;
  onSeedChange(value: number): void;
  onAmplitudeChange(value: number): void;
  onDirectionChange(value: PixelWindSwayDirection): void;
}

const DIRECTIONS: PixelWindSwayDirection[] = ["left", "right"];

export function PixelWindSwayControls({ frames, seed, amplitude, direction, disabled = false, onFramesChange, onSeedChange, onAmplitudeChange, onDirectionChange, className = "", ...props }: PixelWindSwayControlsProps) {
  const safeFrames = Math.max(2, Math.min(24, Number.isInteger(frames) ? frames : 8));
  const safeSeed = Number.isInteger(seed) ? seed : 1;
  const safeAmplitude = Math.max(0, Math.min(8, Number.isFinite(amplitude) ? amplitude : 2));
  const safeDirection = DIRECTIONS.includes(direction) ? direction : "right";
  return <div className={pixelClassNames("pixel-wind-sway-controls", className)} aria-label="Wind sway controls" {...props}>
    <label><span>FRAMES · {safeFrames}</span><input type="number" min={2} max={24} step={1} value={safeFrames} disabled={disabled} onChange={(event) => onFramesChange(Number(event.target.value))} /></label>
    <label><span>SEED · {safeSeed}</span><input type="number" step={1} value={safeSeed} disabled={disabled} onChange={(event) => onSeedChange(Number(event.target.value))} /></label>
    <label><span>AMPLITUDE · {safeAmplitude}</span><input type="range" min={0} max={8} step={0.5} value={safeAmplitude} disabled={disabled} onChange={(event) => onAmplitudeChange(Number(event.target.value))} /></label>
    <label><span>DIRECTION · {safeDirection.toUpperCase()}</span><select value={safeDirection} disabled={disabled} onChange={(event) => onDirectionChange(event.target.value as PixelWindSwayDirection)}>{DIRECTIONS.map((value) => <option key={value} value={value}>{value.toUpperCase()}</option>)}</select></label>
  </div>;
}

import type { HTMLAttributes } from "react";
import { pixelClassNames } from "../model/pixelClassNames.js";

export interface PixelGrainControlsProps extends HTMLAttributes<HTMLDivElement> {
  seed: number;
  intensity: number;
  scale: number;
  disabled?: boolean;
  onSeedChange(seed: number): void;
  onIntensityChange(intensity: number): void;
  onScaleChange(scale: number): void;
}

export function PixelGrainControls({ seed, intensity, scale, disabled = false, onSeedChange, onIntensityChange, onScaleChange, className = "", ...props }: PixelGrainControlsProps) {
  const boundedIntensity = Math.max(0, Math.min(1, Number.isFinite(intensity) ? intensity : 0.45));
  const boundedScale = Math.max(1, Math.min(8, Number.isInteger(scale) ? scale : 1));
  return <div className={pixelClassNames("pixel-grain-controls", className)} aria-label="Sprite grain controls" {...props}>
    <label className="pixel-grain-controls__seed"><span>SEED · {seed}</span><input type="number" value={seed} disabled={disabled} onChange={(event) => onSeedChange(Number(event.target.value))} /></label>
    <label className="pixel-grain-controls__intensity"><span>INTENSITY · {boundedIntensity}</span><input type="range" min={0} max={1} step={0.05} value={boundedIntensity} disabled={disabled} onChange={(event) => onIntensityChange(Number(event.target.value))} /></label>
    <label className="pixel-grain-controls__scale"><span>SCALE · {boundedScale}</span><input type="range" min={1} max={8} step={1} value={boundedScale} disabled={disabled} onChange={(event) => onScaleChange(Number(event.target.value))} /></label>
  </div>;
}

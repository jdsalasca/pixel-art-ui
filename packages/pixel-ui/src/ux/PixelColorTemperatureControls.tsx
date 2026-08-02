import type { HTMLAttributes } from "react";
import { pixelClassNames } from "../model/pixelClassNames.js";

export interface PixelColorTemperatureControlsProps extends HTMLAttributes<HTMLDivElement> {
  temperature: number;
  intensity: number;
  disabled?: boolean;
  onTemperatureChange(value: number): void;
  onIntensityChange(value: number): void;
}

export function PixelColorTemperatureControls({ temperature, intensity, disabled = false, onTemperatureChange, onIntensityChange, className = "", ...props }: PixelColorTemperatureControlsProps) {
  const safeTemperature = Math.max(-1, Math.min(1, Number.isFinite(temperature) ? temperature : 0));
  const safeIntensity = Math.max(0, Math.min(1, Number.isFinite(intensity) ? intensity : 0.7));
  return <div className={pixelClassNames("pixel-color-temperature-controls", className)} aria-label="Sprite color temperature controls" {...props}>
    <label><span>TEMPERATURE · {safeTemperature}</span><input type="range" min={-1} max={1} step={0.05} value={safeTemperature} disabled={disabled} onChange={(event) => onTemperatureChange(Number(event.target.value))} /></label>
    <label><span>INTENSITY · {safeIntensity}</span><input type="range" min={0} max={1} step={0.05} value={safeIntensity} disabled={disabled} onChange={(event) => onIntensityChange(Number(event.target.value))} /></label>
  </div>;
}

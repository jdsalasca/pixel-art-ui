import type { HTMLAttributes } from "react";
import { pixelClassNames } from "../model/pixelClassNames.js";

export interface PixelSilhouetteControlsProps extends HTMLAttributes<HTMLDivElement> {
  color: string;
  opacity: number;
  disabled?: boolean;
  onColorChange(value: string): void;
  onOpacityChange(value: number): void;
}

export function PixelSilhouetteControls({ color, opacity, disabled = false, onColorChange, onOpacityChange, className = "", ...props }: PixelSilhouetteControlsProps) {
  const safeOpacity = Math.max(0, Math.min(1, Number.isFinite(opacity) ? opacity : 1));
  return <div className={pixelClassNames("pixel-silhouette-controls", className)} aria-label="Sprite silhouette controls" {...props}>
    <label className="pixel-silhouette-controls__color"><span>SILHOUETTE COLOR</span><input type="color" value={color} disabled={disabled} onChange={(event) => onColorChange(event.target.value)} /></label>
    <label><span>OPACITY · {safeOpacity}</span><input type="range" min={0} max={1} step={0.05} value={safeOpacity} disabled={disabled} onChange={(event) => onOpacityChange(Number(event.target.value))} /></label>
  </div>;
}

import type { HTMLAttributes } from "react";
import { pixelClassNames } from "../model/pixelClassNames.js";

export interface PixelShadowControlsProps extends HTMLAttributes<HTMLDivElement> {
  color: string;
  offsetX: number;
  offsetY: number;
  opacity: number;
  disabled?: boolean;
  onColorChange(color: string): void;
  onOffsetXChange(value: number): void;
  onOffsetYChange(value: number): void;
  onOpacityChange(value: number): void;
}

function boundedOffset(value: number): number { return Math.max(-32, Math.min(32, Number.isInteger(value) ? value : 0)); }
function boundedOpacity(value: number): number { return Math.max(0, Math.min(1, Number.isFinite(value) ? value : 0.45)); }

export function PixelShadowControls({ color, offsetX, offsetY, opacity, disabled = false, onColorChange, onOffsetXChange, onOffsetYChange, onOpacityChange, className = "", ...props }: PixelShadowControlsProps) {
  const safeX = boundedOffset(offsetX); const safeY = boundedOffset(offsetY); const safeOpacity = boundedOpacity(opacity);
  return <div className={pixelClassNames("pixel-shadow-controls", className)} aria-label="Sprite shadow controls" {...props}>
    <label className="pixel-shadow-controls__color"><span>COLOR</span><input type="color" value={color} disabled={disabled} onChange={(event) => onColorChange(event.target.value)} /></label>
    <label><span>OFFSET X · {safeX}</span><input type="range" min={-32} max={32} step={1} value={safeX} disabled={disabled} onChange={(event) => onOffsetXChange(Number(event.target.value))} /></label>
    <label><span>OFFSET Y · {safeY}</span><input type="range" min={-32} max={32} step={1} value={safeY} disabled={disabled} onChange={(event) => onOffsetYChange(Number(event.target.value))} /></label>
    <label><span>OPACITY · {safeOpacity}</span><input type="range" min={0} max={1} step={0.05} value={safeOpacity} disabled={disabled} onChange={(event) => onOpacityChange(Number(event.target.value))} /></label>
  </div>;
}

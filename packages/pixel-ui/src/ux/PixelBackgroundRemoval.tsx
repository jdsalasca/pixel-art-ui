import type { HTMLAttributes } from "react";
import { pixelClassNames } from "../model/pixelClassNames.js";

export interface PixelBackgroundRemovalProps extends HTMLAttributes<HTMLDivElement> {
  color: string;
  tolerance: number;
  connectedOnly: boolean;
  disabled?: boolean;
  onColorChange(color: string): void;
  onToleranceChange(tolerance: number): void;
  onConnectedOnlyChange(connectedOnly: boolean): void;
}

export function PixelBackgroundRemoval({ color, tolerance, connectedOnly, disabled = false, onColorChange, onToleranceChange, onConnectedOnlyChange, className = "", ...props }: PixelBackgroundRemovalProps) {
  const boundedTolerance = Math.max(0, Math.min(255, Number.isFinite(tolerance) ? tolerance : 0));
  return <div className={pixelClassNames("pixel-background-removal", className)} aria-label="Background removal controls" {...props}>
    <label className="pixel-background-removal__color"><span>BACKGROUND COLOR</span><input type="color" value={color} disabled={disabled} onChange={(event) => onColorChange(event.target.value)} /></label>
    <label className="pixel-background-removal__tolerance"><span>TOLERANCE · {boundedTolerance}</span><input type="range" min={0} max={255} step={1} value={boundedTolerance} disabled={disabled} onChange={(event) => onToleranceChange(Number(event.target.value))} /></label>
    <label className="pixel-background-removal__mode"><input type="checkbox" checked={connectedOnly} disabled={disabled} onChange={(event) => onConnectedOnlyChange(event.target.checked)} /><span>CONNECTED TO EDGES ONLY</span></label>
  </div>;
}

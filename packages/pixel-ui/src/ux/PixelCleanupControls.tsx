import type { HTMLAttributes } from "react";
import { pixelClassNames } from "../model/pixelClassNames.js";

export interface PixelCleanupControlsProps extends HTMLAttributes<HTMLDivElement> {
  minNeighbors: number;
  iterations: number;
  disabled?: boolean;
  onMinNeighborsChange(value: number): void;
  onIterationsChange(value: number): void;
}

export function PixelCleanupControls({ minNeighbors, iterations, disabled = false, onMinNeighborsChange, onIterationsChange, className = "", ...props }: PixelCleanupControlsProps) {
  const boundedNeighbors = Math.max(1, Math.min(8, Number.isFinite(minNeighbors) ? Math.round(minNeighbors) : 1));
  const boundedIterations = Math.max(1, Math.min(4, Number.isFinite(iterations) ? Math.round(iterations) : 1));
  return <div className={pixelClassNames("pixel-cleanup-controls", className)} aria-label="Isolated pixel cleanup controls" {...props}>
    <label className="pixel-cleanup-controls__neighbors"><span>MIN NEIGHBORS · {boundedNeighbors}</span><input type="range" min={1} max={8} step={1} value={boundedNeighbors} disabled={disabled} onChange={(event) => onMinNeighborsChange(Number(event.target.value))} /></label>
    <label className="pixel-cleanup-controls__iterations"><span>ITERATIONS · {boundedIterations}</span><input type="range" min={1} max={4} step={1} value={boundedIterations} disabled={disabled} onChange={(event) => onIterationsChange(Number(event.target.value))} /></label>
    <small>Removes isolated opaque pixels and preserves connected clusters.</small>
  </div>;
}

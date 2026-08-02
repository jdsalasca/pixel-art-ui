import type { HTMLAttributes } from "react";
import { pixelClassNames } from "../model/pixelClassNames.js";

export interface PixelColorRampControlsProps extends HTMLAttributes<HTMLDivElement> {
  shadowColor: string;
  midColor: string;
  highlightColor: string;
  shadowThreshold: number;
  highlightThreshold: number;
  disabled?: boolean;
  onShadowColorChange(color: string): void;
  onMidColorChange(color: string): void;
  onHighlightColorChange(color: string): void;
  onShadowThresholdChange(value: number): void;
  onHighlightThresholdChange(value: number): void;
}

function bounded(value: number, fallback: number): number {
  return Math.max(0, Math.min(1, Number.isFinite(value) ? value : fallback));
}

export function PixelColorRampControls({ shadowColor, midColor, highlightColor, shadowThreshold, highlightThreshold, disabled = false, onShadowColorChange, onMidColorChange, onHighlightColorChange, onShadowThresholdChange, onHighlightThresholdChange, className = "", ...props }: PixelColorRampControlsProps) {
  const boundedShadow = bounded(shadowThreshold, 0.3);
  const boundedHighlight = bounded(highlightThreshold, 0.7);
  return <div className={pixelClassNames("pixel-color-ramp-controls", className)} aria-label="Sprite color ramp controls" {...props}>
    <label className="pixel-color-ramp-controls__color"><span>SHADOW COLOR</span><input type="color" value={shadowColor} disabled={disabled} onChange={(event) => onShadowColorChange(event.target.value)} /></label>
    <label className="pixel-color-ramp-controls__color"><span>MID COLOR</span><input type="color" value={midColor} disabled={disabled} onChange={(event) => onMidColorChange(event.target.value)} /></label>
    <label className="pixel-color-ramp-controls__color"><span>HIGHLIGHT COLOR</span><input type="color" value={highlightColor} disabled={disabled} onChange={(event) => onHighlightColorChange(event.target.value)} /></label>
    <label className="pixel-color-ramp-controls__threshold"><span>SHADOW THRESHOLD · {boundedShadow}</span><input type="range" min={0} max={1} step={0.05} value={boundedShadow} disabled={disabled} onChange={(event) => onShadowThresholdChange(Number(event.target.value))} /></label>
    <label className="pixel-color-ramp-controls__threshold"><span>HIGHLIGHT THRESHOLD · {boundedHighlight}</span><input type="range" min={0} max={1} step={0.05} value={boundedHighlight} disabled={disabled} onChange={(event) => onHighlightThresholdChange(Number(event.target.value))} /></label>
  </div>;
}

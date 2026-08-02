import type { HTMLAttributes } from "react";
import { pixelClassNames } from "../model/pixelClassNames.js";

export type PixelSpritePivotMode = "center" | "bottom_center";

export interface PixelSpriteNormalizationProps extends HTMLAttributes<HTMLElement> {
  width: number;
  height: number;
  frames: number;
  padding: number;
  pivot: { mode: PixelSpritePivotMode; x: number; y: number };
  bounds: { x: number; y: number; width: number; height: number };
  sourcePreserved?: boolean;
  deterministic?: boolean;
}

export function PixelSpriteNormalization({ width, height, frames, padding, pivot, bounds, sourcePreserved = true, deterministic = true, className = "", ...props }: PixelSpriteNormalizationProps) {
  return <section className={pixelClassNames("pixel-sprite-normalization", className)} aria-label="Sprite normalization result" {...props}>
    <header className="pixel-sprite-normalization__heading"><h2>SPRITE NORMALIZATION</h2><span>{frames} FRAME(S)</span></header>
    <div className="pixel-sprite-normalization__metrics">
      <span><strong>{width}×{height}</strong> OUTPUT</span>
      <span><strong>{padding}px</strong> PADDING</span>
      <span><strong>{pivot.mode}</strong> PIVOT ({pivot.x}, {pivot.y})</span>
      <span><strong>{bounds.width}×{bounds.height}</strong> ALPHA BOUNDS</span>
    </div>
    <div className="pixel-sprite-normalization__guarantees"><span className={deterministic ? "is-ok" : "is-warning"}>{deterministic ? "DETERMINISTIC" : "CHECK DETERMINISM"}</span><span className={sourcePreserved ? "is-ok" : "is-warning"}>{sourcePreserved ? "SOURCE PRESERVED" : "SOURCE REPLACED"}</span></div>
  </section>;
}

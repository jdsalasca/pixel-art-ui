import type { HTMLAttributes } from "react";
import { pixelClassNames } from "../model/pixelClassNames.js";

export interface PixelSpriteGeometryFrame {
  index: number;
  bounds: { x: number; y: number; width: number; height: number } | null;
  baselineY: number | null;
  pivot: { x: number; y: number };
  componentCount: number;
}

export interface PixelSpriteGeometryProps extends HTMLAttributes<HTMLElement> {
  frameCount: number;
  width: number;
  height: number;
  stableBounds: boolean;
  baselineDrift: number;
  valid: boolean;
  frames: readonly PixelSpriteGeometryFrame[];
  violations?: readonly string[];
}

export function PixelSpriteGeometry({ frameCount, width, height, stableBounds, baselineDrift, valid, frames, violations = [], className = "", ...props }: PixelSpriteGeometryProps) {
  return <section className={pixelClassNames("pixel-sprite-geometry", valid ? "pixel-sprite-geometry--valid" : "pixel-sprite-geometry--invalid", className)} aria-label="Sprite geometry report" {...props}>
    <header className="pixel-sprite-geometry__heading"><h2>SPRITE GEOMETRY</h2><span>{frameCount} FRAMES · {width}×{height}</span></header>
    <div className="pixel-sprite-geometry__checks"><span className={stableBounds ? "is-ok" : "is-warning"}>{stableBounds ? "BOUNDS STABLE" : "BOUNDS REVIEW"}</span><span className={baselineDrift ? "is-warning" : "is-ok"}>{`BASELINE DRIFT ${baselineDrift}PX`}</span><span className={valid ? "is-ok" : "is-warning"}>{valid ? "GEOMETRY OK" : "GEOMETRY REVIEW"}</span></div>
    <ul className="pixel-sprite-geometry__frames">{frames.slice(0, 6).map((frame) => <li key={frame.index}><strong>F{frame.index + 1}</strong><span>{frame.bounds ? `${frame.bounds.width}×${frame.bounds.height} BOUNDS` : "EMPTY"}</span><span>{frame.componentCount} COMPONENT(S)</span><span>PIVOT {frame.pivot.x},{frame.pivot.y}</span></li>)}</ul>
    {violations.length ? <ul className="pixel-sprite-geometry__violations">{violations.map((violation) => <li key={violation}>{violation}</li>)}</ul> : null}
  </section>;
}

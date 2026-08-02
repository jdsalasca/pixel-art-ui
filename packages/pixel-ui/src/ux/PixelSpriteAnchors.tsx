import type { HTMLAttributes } from "react";
import { pixelClassNames } from "../model/pixelClassNames.js";

export interface PixelSpriteAnchorsProps extends HTMLAttributes<HTMLElement> {
  frameCount: number;
  anchorTypes: number;
  baselineDrift: number;
  manifestUrl?: string;
  deterministic?: boolean;
  sourcePreserved?: boolean;
}

export function PixelSpriteAnchors({ frameCount, anchorTypes, baselineDrift, manifestUrl, deterministic = true, sourcePreserved = true, className = "", ...props }: PixelSpriteAnchorsProps) {
  return <section className={pixelClassNames("pixel-sprite-anchors", className)} aria-label="Sprite anchors manifest" {...props}>
    <header className="pixel-sprite-anchors__heading"><h2>SPRITE ANCHORS</h2><span>{frameCount} FRAMES</span></header>
    <div className="pixel-sprite-anchors__metrics"><span><strong>{anchorTypes} ANCHOR TYPES</strong></span><span>BASELINE DRIFT <strong>{baselineDrift}px</strong></span></div>
    <div className="pixel-sprite-anchors__guarantees"><span className={deterministic ? "is-ok" : "is-warning"}>{deterministic ? "DETERMINISTIC" : "REVIEW OUTPUT"}</span><span className={sourcePreserved ? "is-ok" : "is-warning"}>{sourcePreserved ? "SOURCE PRESERVED" : "SOURCE REPLACED"}</span>{manifestUrl ? <a href={manifestUrl}>OPEN ANCHOR MANIFEST</a> : null}</div>
  </section>;
}

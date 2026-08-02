import type { HTMLAttributes } from "react";
import { pixelClassNames } from "../model/pixelClassNames.js";

export interface PixelSpriteHitboxesProps extends HTMLAttributes<HTMLElement> {
  frameCount: number;
  mode: "components" | "union";
  padding: number;
  hitboxes: number;
  manifestUrl?: string;
  deterministic?: boolean;
  sourcePreserved?: boolean;
}

export function PixelSpriteHitboxes({ frameCount, mode, padding, hitboxes, manifestUrl, deterministic = true, sourcePreserved = true, className = "", ...props }: PixelSpriteHitboxesProps) {
  return <section className={pixelClassNames("pixel-sprite-hitboxes", className)} aria-label="Sprite hitbox manifest" {...props}>
    <header className="pixel-sprite-hitboxes__heading"><h2>SPRITE HITBOXES</h2><span>{frameCount} FRAMES</span></header>
    <div className="pixel-sprite-hitboxes__checks"><span>{mode.toUpperCase()}</span><span>{hitboxes} HITBOXES</span><span>PADDING {padding}px</span></div>
    <div className="pixel-sprite-hitboxes__guarantees"><span className={deterministic ? "is-ok" : "is-warning"}>{deterministic ? "DETERMINISTIC" : "REVIEW OUTPUT"}</span><span className={sourcePreserved ? "is-ok" : "is-warning"}>{sourcePreserved ? "SOURCE PRESERVED" : "SOURCE REPLACED"}</span>{manifestUrl ? <a href={manifestUrl}>OPEN MANIFEST</a> : null}</div>
  </section>;
}

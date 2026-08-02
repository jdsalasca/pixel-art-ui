import type { HTMLAttributes } from "react";
import { pixelClassNames } from "../model/pixelClassNames.js";

export interface PixelSpriteRuntimeBundleProps extends HTMLAttributes<HTMLElement> {
  frameCount: number;
  artifactCount: number;
  manifestUrl?: string;
  sourceFilename?: string;
  deterministic?: boolean;
  sourcePreserved?: boolean;
}

export function PixelSpriteRuntimeBundle({ frameCount, artifactCount, manifestUrl, sourceFilename, deterministic = true, sourcePreserved = true, className = "", ...props }: PixelSpriteRuntimeBundleProps) {
  return <section className={pixelClassNames("pixel-sprite-runtime-bundle", className)} aria-label="Sprite runtime bundle" {...props}>
    <header className="pixel-sprite-runtime-bundle__heading"><h2>SPRITE RUNTIME BUNDLE</h2><span>{frameCount} FRAMES</span></header>
    <div className="pixel-sprite-runtime-bundle__artifacts"><span>ANIMATION SHEET</span><span>HITBOX MANIFEST</span><strong>{artifactCount} ARTIFACTS</strong></div>
    {sourceFilename ? <p className="pixel-sprite-runtime-bundle__source">SOURCE · {sourceFilename}</p> : null}
    <div className="pixel-sprite-runtime-bundle__guarantees"><span className={deterministic ? "is-ok" : "is-warning"}>{deterministic ? "DETERMINISTIC" : "REVIEW OUTPUT"}</span><span className={sourcePreserved ? "is-ok" : "is-warning"}>{sourcePreserved ? "SOURCE PRESERVED" : "SOURCE REPLACED"}</span>{manifestUrl ? <a href={manifestUrl}>OPEN BUNDLE MANIFEST</a> : null}</div>
  </section>;
}

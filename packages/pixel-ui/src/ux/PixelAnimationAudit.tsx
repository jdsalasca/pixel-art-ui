import type { HTMLAttributes } from "react";
import { pixelClassNames } from "../model/pixelClassNames.js";

export interface PixelAnimationAuditProps extends HTMLAttributes<HTMLElement> {
  frameCount: number;
  duplicateFrames: readonly number[];
  loopClosed: boolean;
  loopChangedPixels: number;
  timingConsistent: boolean;
  paletteStable: boolean;
  valid: boolean;
  violations?: readonly string[];
}

export function PixelAnimationAudit({ frameCount, duplicateFrames, loopClosed, loopChangedPixels, timingConsistent, paletteStable, valid, violations = [], className = "", ...props }: PixelAnimationAuditProps) {
  return <section className={pixelClassNames("pixel-animation-audit", valid ? "pixel-animation-audit--valid" : "pixel-animation-audit--invalid", className)} aria-label="Animation quality audit" {...props}>
    <header className="pixel-animation-audit__heading"><h2>ANIMATION AUDIT</h2><span>{frameCount} FRAMES</span></header>
    <div className="pixel-animation-audit__checks">
      <span className={duplicateFrames.length ? "is-warning" : "is-ok"}>{duplicateFrames.length ? `${duplicateFrames.length} DUPLICATE` : "NO DUPLICATES"}</span>
      <span className={loopClosed ? "is-ok" : "is-warning"}>{loopClosed ? "LOOP CLOSED" : `${loopChangedPixels} LOOP DELTA`}</span>
      <span className={timingConsistent ? "is-ok" : "is-warning"}>{timingConsistent ? "TIMING OK" : "TIMING REVIEW"}</span>
      <span className={paletteStable ? "is-ok" : "is-warning"}>{paletteStable ? "PALETTE STABLE" : "PALETTE DRIFT"}</span>
    </div>
    {violations.length ? <ul className="pixel-animation-audit__violations">{violations.map((violation) => <li key={violation}>{violation}</li>)}</ul> : <p className="pixel-animation-audit__pass">Animation passes the deterministic audit.</p>}
  </section>;
}

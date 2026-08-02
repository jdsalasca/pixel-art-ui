import type { HTMLAttributes } from "react";
import { pixelClassNames } from "../model/pixelClassNames.js";

export interface PixelSceneBundleProps extends HTMLAttributes<HTMLElement> { staticSrc?: string; staticManifestUrl?: string; animationSrc?: string; animationManifestUrl?: string; width: number; height: number; frames: number; delayMs: number; deterministic?: boolean; sourcePreserved?: boolean; }

export function PixelSceneBundle({ staticSrc, staticManifestUrl, animationSrc, animationManifestUrl, width, height, frames, delayMs, deterministic = true, sourcePreserved = true, className = "", ...props }: PixelSceneBundleProps) {
  return <section className={pixelClassNames("pixel-scene-bundle", className)} aria-label="Asset scene bundle" {...props}>
    <header className="pixel-scene-bundle__heading"><h2>SCENE BUNDLE</h2><span>{width}×{height} · {frames} FRAMES</span></header>
    <div className="pixel-scene-bundle__previews">{staticSrc ? <figure><img src={staticSrc} alt="Static scene" /><figcaption>PNG {staticManifestUrl ? <a href={staticManifestUrl}>MANIFEST</a> : null}</figcaption></figure> : null}{animationSrc ? <figure><img src={animationSrc} alt="Animated scene" /><figcaption>GIF · {delayMs}MS {animationManifestUrl ? <a href={animationManifestUrl}>MANIFEST</a> : null}</figcaption></figure> : null}</div>
    <div className="pixel-scene-bundle__guarantees"><span className={deterministic ? "is-ok" : "is-warning"}>{deterministic ? "DETERMINISTIC" : "REVIEW OUTPUT"}</span><span className={sourcePreserved ? "is-ok" : "is-warning"}>{sourcePreserved ? "SOURCE PRESERVED" : "SOURCE REPLACED"}</span><span>4 ARTIFACTS</span></div>
  </section>;
}

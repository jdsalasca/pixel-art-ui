import type { HTMLAttributes } from "react";
import { pixelClassNames } from "../model/pixelClassNames.js";
import type { PixelSceneCompositionLayer } from "./PixelSceneComposition.js";

export interface PixelSceneAnimationProps extends HTMLAttributes<HTMLElement> {
  src: string;
  manifestUrl?: string;
  width: number;
  height: number;
  frames: number;
  delayMs: number;
  layers: readonly PixelSceneCompositionLayer[];
  deterministic?: boolean;
  sourcePreserved?: boolean;
}

export function PixelSceneAnimation({ src, manifestUrl, width, height, frames, delayMs, layers, deterministic = true, sourcePreserved = true, className = "", ...props }: PixelSceneAnimationProps) {
  return <section className={pixelClassNames("pixel-scene-animation", className)} aria-label="Asset scene animation" {...props}>
    <header className="pixel-scene-animation__heading"><h2>SCENE ANIMATION</h2><span>{frames} FRAMES · {delayMs}MS · {width}×{height}</span></header>
    <figure className="pixel-scene-animation__preview"><img src={src} alt="Animated composed pixel-art scene" width={width} height={height} /><figcaption>{manifestUrl ? <a href={manifestUrl}>OPEN FRAME MANIFEST</a> : "GIF PREVIEW"}</figcaption></figure>
    <ol className="pixel-scene-animation__layers">{layers.map((layer) => <li key={`${layer.assetId}-${layer.order}`}><strong>{layer.order + 1}. {layer.title}</strong><span>{layer.role.toUpperCase()} · {layer.assetId} · {layer.x},{layer.y} · {layer.width}×{layer.height}</span></li>)}</ol>
    <div className="pixel-scene-animation__guarantees"><span className={deterministic ? "is-ok" : "is-warning"}>{deterministic ? "DETERMINISTIC" : "REVIEW OUTPUT"}</span><span className={sourcePreserved ? "is-ok" : "is-warning"}>{sourcePreserved ? "SOURCE PRESERVED" : "SOURCE REPLACED"}</span></div>
  </section>;
}

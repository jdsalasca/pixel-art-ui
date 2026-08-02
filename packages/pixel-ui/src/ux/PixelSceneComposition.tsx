import type { HTMLAttributes } from "react";
import { pixelClassNames } from "../model/pixelClassNames.js";

export interface PixelSceneCompositionLayer {
  assetId: string;
  title: string;
  role: "background" | "midground" | "foreground" | "effect";
  order: number;
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface PixelSceneCompositionProps extends HTMLAttributes<HTMLElement> {
  src?: string;
  manifestUrl?: string;
  width: number;
  height: number;
  layers: readonly PixelSceneCompositionLayer[];
  deterministic?: boolean;
  sourcePreserved?: boolean;
}

export function PixelSceneComposition({ src, manifestUrl, width, height, layers, deterministic = true, sourcePreserved = true, className = "", ...props }: PixelSceneCompositionProps) {
  return <section className={pixelClassNames("pixel-scene-composition", className)} aria-label="Asset scene composition" {...props}>
    <header className="pixel-scene-composition__heading"><h2>SCENE COMPOSITION</h2><span>{layers.length} LAYERS · {width}×{height}</span></header>
    {src ? <figure className="pixel-scene-composition__preview"><img src={src} alt="Composed pixel-art scene" width={width} height={height} /><figcaption>{manifestUrl ? <a href={manifestUrl}>OPEN MANIFEST</a> : "PNG PREVIEW"}</figcaption></figure> : null}
    <ol className="pixel-scene-composition__layers">{layers.map((layer) => <li key={`${layer.assetId}-${layer.order}`}><strong>{layer.order + 1}. {layer.title}</strong><span>{layer.role.toUpperCase()} · {layer.assetId} · {layer.x},{layer.y} · {layer.width}×{layer.height}</span></li>)}</ol>
    <div className="pixel-scene-composition__guarantees"><span className={deterministic ? "is-ok" : "is-warning"}>{deterministic ? "DETERMINISTIC" : "REVIEW OUTPUT"}</span><span className={sourcePreserved ? "is-ok" : "is-warning"}>{sourcePreserved ? "SOURCE PRESERVED" : "SOURCE REPLACED"}</span></div>
  </section>;
}

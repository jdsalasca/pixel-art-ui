import type { HTMLAttributes } from "react";
import { pixelClassNames } from "../model/pixelClassNames.js";

export interface PixelScenePlanLayer { id: string; assetId: string; title: string; role: "background" | "midground" | "foreground" | "effect"; order: number; }
export interface PixelScenePlanProps extends HTMLAttributes<HTMLElement> { libraryVersion: string; layers: readonly PixelScenePlanLayer[]; deterministic?: boolean; sourcePreserved?: boolean; }

export function PixelScenePlan({ libraryVersion, layers, deterministic = true, sourcePreserved = true, className = "", ...props }: PixelScenePlanProps) {
  return <section className={pixelClassNames("pixel-scene-plan", className)} aria-label="Asset scene plan" {...props}>
    <header className="pixel-scene-plan__heading"><h2>SCENE PLAN</h2><span>{layers.length} LAYERS</span></header>
    <ol className="pixel-scene-plan__layers">{layers.map((layer) => <li key={layer.id}><strong>{layer.order + 1}. {layer.title}</strong><span>{layer.role.toUpperCase()} · {layer.assetId}</span></li>)}</ol>
    <div className="pixel-scene-plan__guarantees"><span>LIBRARY {libraryVersion}</span><span className={deterministic ? "is-ok" : "is-warning"}>{deterministic ? "DETERMINISTIC" : "REVIEW OUTPUT"}</span><span className={sourcePreserved ? "is-ok" : "is-warning"}>{sourcePreserved ? "SOURCE PRESERVED" : "SOURCE REPLACED"}</span></div>
  </section>;
}

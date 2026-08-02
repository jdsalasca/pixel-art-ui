import type { HTMLAttributes } from "react";
import { pixelClassNames } from "../model/pixelClassNames.js";

export interface PixelSceneRecommendation { assetId: string; title: string; category: string; kind: string; score: number; reasons: readonly string[]; tags: readonly string[]; variants: readonly string[]; }
export interface PixelSceneRecommendationsProps extends HTMLAttributes<HTMLElement> { libraryVersion: string; recommendations: readonly PixelSceneRecommendation[]; suggestedItemIds: readonly string[]; coveredKinds: readonly string[]; coveredTags: readonly string[]; coveredVariants: readonly string[]; }

export function PixelSceneRecommendations({ libraryVersion, recommendations, suggestedItemIds, coveredKinds, coveredTags, coveredVariants, className = "", ...props }: PixelSceneRecommendationsProps) {
  return <section className={pixelClassNames("pixel-scene-recommendations", className)} aria-label="Asset scene recommendations" {...props}>
    <header className="pixel-scene-recommendations__heading"><h2>SCENE RECOMMENDATIONS</h2><span>{recommendations.length} ASSETS</span></header>
    <ol className="pixel-scene-recommendations__items">{recommendations.map((item) => <li key={item.assetId}><div><strong>{item.title}</strong><span>{item.kind.toUpperCase()} · {item.category} · SCORE {item.score}</span></div><small>{item.reasons.slice(0, 4).join(" · ")}</small></li>)}</ol>
    <div className="pixel-scene-recommendations__meta"><span>IDS {suggestedItemIds.join(", ") || "—"}</span><span>LIBRARY {libraryVersion}</span><span>KINDS {coveredKinds.join(" · ") || "—"}</span><span>TAGS {coveredTags.slice(0, 6).join(" · ") || "—"}</span><span>EFFECTS {coveredVariants.slice(0, 6).join(" · ") || "—"}</span></div>
  </section>;
}

import type { HTMLAttributes } from "react";
import { pixelClassNames } from "../model/pixelClassNames.js";

export interface PixelLibrarySummaryCategory { id: string; title: string; itemCount: number; examples: readonly string[]; }
export interface PixelLibrarySummaryPreset { id: string; title: string; category: string; itemCount: number; }
export interface PixelLibrarySummaryProps extends HTMLAttributes<HTMLElement> { totalItems: number; totalCategories: number; totalPresets: number; categories: readonly PixelLibrarySummaryCategory[]; presets: readonly PixelLibrarySummaryPreset[]; }

export function PixelLibrarySummary({ totalItems, totalCategories, totalPresets, categories, presets, className = "", ...props }: PixelLibrarySummaryProps) {
  return <section className={pixelClassNames("pixel-library-summary", className)} aria-label="Asset library summary" {...props}>
    <header className="pixel-library-summary__heading"><h2>LIBRARY MAP</h2><span>LOW-TOKEN NAVIGATION</span></header>
    <div className="pixel-library-summary__metrics"><span><strong>{totalItems}</strong> ASSETS</span><span><strong>{totalCategories}</strong> CATEGORIES</span><span><strong>{totalPresets}</strong> PRESETS</span></div>
    <div className="pixel-library-summary__categories" aria-label="Asset categories">{categories.map((category) => <article key={category.id}><strong>{category.title}</strong><span>{category.itemCount} ASSETS</span><small>{category.examples.join(" · ") || "NO EXAMPLES"}</small></article>)}</div>
    {presets.length ? <p className="pixel-library-summary__presets">PRESETS: {presets.map((preset) => `${preset.title} (${preset.itemCount})`).join(" · ")}</p> : null}
  </section>;
}

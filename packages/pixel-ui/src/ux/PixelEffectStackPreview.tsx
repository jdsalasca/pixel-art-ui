import type { HTMLAttributes } from "react";
import { pixelClassNames } from "../model/pixelClassNames.js";

export interface PixelEffectStackItem { id: string; label: string; }
export interface PixelEffectStackPreviewProps extends HTMLAttributes<HTMLElement> { items: readonly PixelEffectStackItem[]; label?: string; }

export function PixelEffectStackPreview({ items, label = "Effect execution order", className = "", ...props }: PixelEffectStackPreviewProps) {
  return <section className={pixelClassNames("pixel-effect-stack-preview", className)} aria-label={label} {...props}>
    <header className="pixel-effect-stack-preview__heading"><h2>{label}</h2><span>{items.length} PASSES</span></header>
    {items.length ? <ol className="pixel-effect-stack-preview__items">{items.map((item, index) => <li key={item.id}><span className="pixel-effect-stack-preview__index" aria-hidden="true">{index + 1}</span><strong>{index + 1}. {item.label}</strong></li>)}</ol> : <p className="pixel-effect-stack-preview__empty">NO EFFECTS SELECTED</p>}
  </section>;
}

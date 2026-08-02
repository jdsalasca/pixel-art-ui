import type { ReactNode } from "react";
import { PixelAssetCard } from "./PixelAssetCard.js";

export interface PixelArtifactStripItem { id: string; name: string; preview?: string; detail?: ReactNode; status?: ReactNode; }
export interface PixelArtifactStripProps { label: string; items: readonly PixelArtifactStripItem[]; onSelect?(id: string): void; }

export function PixelArtifactStrip({ label, items, onSelect }: PixelArtifactStripProps) {
  if (items.length === 0) return <p className="pixel-artifact-strip__empty" role="status">NO ARTIFACTS</p>;
  return <section className="pixel-artifact-strip" aria-label={label}>
    <h2>{label}</h2>
    <div className="pixel-artifact-strip__items" role="list">{items.map((item) => <div key={item.id} role="listitem"><PixelAssetCard {...item} onSelect={onSelect ? () => onSelect(item.id) : undefined} /></div>)}</div>
  </section>;
}

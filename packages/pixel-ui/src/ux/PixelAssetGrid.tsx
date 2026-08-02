import type { ReactNode } from "react";
import { PixelAssetCard } from "./PixelAssetCard.js";

export interface PixelAssetGridItem { id: string; name: string; preview?: string; detail?: ReactNode; status?: ReactNode; }
export interface PixelAssetGridProps { items: readonly PixelAssetGridItem[]; emptyLabel?: string; onSelect?(id: string): void; }

export function PixelAssetGrid({ items, emptyLabel = "NO ASSETS", onSelect }: PixelAssetGridProps) {
  if (items.length === 0) return <p className="pixel-asset-grid__empty" role="status">{emptyLabel}</p>;
  return <div className="pixel-asset-grid" role="list" aria-label="Asset library">{items.map((item) => <div key={item.id} role="listitem"><PixelAssetCard name={item.name} preview={item.preview} detail={item.detail} status={item.status} onSelect={onSelect ? () => onSelect(item.id) : undefined} /></div>)}</div>;
}

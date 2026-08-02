import type { HTMLAttributes } from "react";
import { pixelClassNames } from "../model/pixelClassNames.js";

export interface PixelLibraryVariantPackAsset {
  assetId: string;
  title: string;
  outputPrefix: string;
  variants: readonly string[];
}

export interface PixelLibraryVariantPackProps extends HTMLAttributes<HTMLElement> {
  manifestUrl?: string;
  assets: readonly PixelLibraryVariantPackAsset[];
  frames: number;
  seed: number;
  deterministic?: boolean;
  sourcePreserved?: boolean;
}

export function PixelLibraryVariantPack({ manifestUrl, assets, frames, seed, deterministic = true, sourcePreserved = true, className = "", ...props }: PixelLibraryVariantPackProps) {
  return <section className={pixelClassNames("pixel-library-variant-pack", className)} aria-label="Library variant pack" {...props}>
    <header className="pixel-library-variant-pack__heading"><h2>LIBRARY VARIANT PACK</h2><span>{assets.length} ASSETS · {frames} FRAMES</span></header>
    <ul className="pixel-library-variant-pack__assets">{assets.map((asset) => <li key={asset.assetId}><strong>{asset.title}</strong><span>{asset.assetId} · {asset.variants.join(" · ")}</span><small>{asset.outputPrefix}</small></li>)}</ul>
    <div className="pixel-library-variant-pack__meta"><span>SEED {seed}</span>{manifestUrl ? <a href={manifestUrl}>OPEN MANIFEST</a> : null}<span className={deterministic ? "is-ok" : "is-warning"}>{deterministic ? "DETERMINISTIC" : "REVIEW OUTPUT"}</span><span className={sourcePreserved ? "is-ok" : "is-warning"}>{sourcePreserved ? "SOURCE PRESERVED" : "SOURCE REPLACED"}</span></div>
  </section>;
}

import type { HTMLAttributes } from "react";
import { pixelClassNames } from "../model/pixelClassNames.js";

export interface PixelQualityMatrixAsset {
  filename: string;
  valid: boolean;
  violations?: readonly string[];
  error?: string;
}

export interface PixelQualityMatrixSummary {
  total: number;
  valid: number;
  invalid: number;
  failed: number;
}

export interface PixelQualityMatrixProps extends HTMLAttributes<HTMLElement> {
  assets: readonly PixelQualityMatrixAsset[];
  summary: PixelQualityMatrixSummary;
}

export function PixelQualityMatrix({ assets, summary, className = "", ...props }: PixelQualityMatrixProps) {
  return <section className={pixelClassNames("pixel-quality-matrix", className)} aria-label="Batch quality report" {...props}>
    <header className="pixel-quality-matrix__heading"><h2>BATCH QUALITY</h2><span>{summary.total} ASSETS</span></header>
    <div className="pixel-quality-matrix__summary" aria-label="Quality summary"><span className="pixel-quality-matrix__summary--valid">{summary.valid} PASS</span><span className="pixel-quality-matrix__summary--invalid">{summary.invalid} REVIEW</span><span className="pixel-quality-matrix__summary--failed">{summary.failed} FAILED</span></div>
    <ul className="pixel-quality-matrix__items">
      {assets.map((asset) => <li key={asset.filename} className={asset.valid ? "pixel-quality-matrix__item--valid" : "pixel-quality-matrix__item--invalid"}><strong>{asset.filename}</strong><span>{asset.error ?? (asset.valid ? "PASS" : `${asset.violations?.length ?? 0} ISSUE(S)`)}</span></li>)}
    </ul>
  </section>;
}

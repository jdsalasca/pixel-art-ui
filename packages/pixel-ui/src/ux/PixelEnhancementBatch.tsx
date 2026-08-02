import type { HTMLAttributes } from "react";
import { pixelClassNames } from "../model/pixelClassNames.js";

export interface PixelEnhancementBatchItem {
  filename: string;
  outputFilename: string;
  ok: boolean;
  planId?: string;
  frames?: number;
  passesApplied?: readonly string[];
  quality?: { valid: boolean; violations?: readonly string[] };
  error?: string;
}

export interface PixelEnhancementBatchProps extends HTMLAttributes<HTMLElement> {
  items: readonly PixelEnhancementBatchItem[];
  summary: { total: number; succeeded: number; failed: number };
  deterministic?: boolean;
  sourcePreserved?: boolean;
}

export function PixelEnhancementBatch({ items, summary, deterministic = true, sourcePreserved = true, className = "", ...props }: PixelEnhancementBatchProps) {
  return <section className={pixelClassNames("pixel-enhancement-batch", className)} aria-label="Enhancement batch report" {...props}>
    <header className="pixel-enhancement-batch__heading"><h2>ENHANCEMENT BATCH</h2><span>{summary.total} ASSETS</span></header>
    <div className="pixel-enhancement-batch__summary" aria-label="Enhancement batch summary"><span className="is-success">{summary.succeeded} DONE</span><span className={summary.failed ? "is-failed" : "is-success"}>{summary.failed} FAILED</span></div>
    <ul className="pixel-enhancement-batch__items">
      {items.map((item) => <li key={`${item.filename}:${item.outputFilename}`} className={item.ok ? "is-success" : "is-failed"}><div><strong>{item.filename}</strong><small>→ {item.outputFilename}</small></div><span>{item.error ?? (item.ok ? `${item.passesApplied?.length ?? 0} PASS(ES)` : "FAILED")}</span></li>)}
    </ul>
    <footer className="pixel-enhancement-batch__guarantees"><span className={deterministic ? "is-success" : "is-warning"}>{deterministic ? "DETERMINISTIC" : "NON-DETERMINISTIC"}</span><span className={sourcePreserved ? "is-success" : "is-warning"}>{sourcePreserved ? "SOURCE PRESERVED" : "SOURCE CHANGED"}</span></footer>
  </section>;
}

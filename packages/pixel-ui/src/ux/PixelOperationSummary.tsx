import { PixelBadge } from "./PixelBadge.js";
import type { PixelTone } from "../model/PixelTone.js";

export interface PixelOperationSummaryProps { label: string; operation: string; artifactCount: number; deterministic?: boolean; sourcePreserved?: boolean; tone?: PixelTone; }

export function PixelOperationSummary({ label, operation, artifactCount, deterministic = false, sourcePreserved = false, tone = "cyan" }: PixelOperationSummaryProps) {
  const countLabel = `${artifactCount} ARTIFACT${artifactCount === 1 ? "" : "S"}`;
  return <section className="pixel-operation-summary" aria-label={label}><div className="pixel-operation-summary__heading"><h2>{label}</h2><PixelBadge tone={tone}>{countLabel}</PixelBadge></div><code>{operation}</code><div className="pixel-operation-summary__guarantees"><PixelBadge tone={deterministic ? "cyan" : "amber"}>{deterministic ? "DETERMINISTIC" : "REVIEW REQUIRED"}</PixelBadge><PixelBadge tone={sourcePreserved ? "cyan" : "amber"}>{sourcePreserved ? "SOURCE PRESERVED" : "SOURCE CHECK"}</PixelBadge></div></section>;
}

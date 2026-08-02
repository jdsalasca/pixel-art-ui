import type { HTMLAttributes } from "react";
import { pixelClassNames } from "../model/pixelClassNames.js";

export interface PixelManifestAuditArtifact { filename: string; status: "ok" | "missing" | "empty"; sizeBytes: number; format: string; sha256: string | null; }
export interface PixelManifestAuditProps extends HTMLAttributes<HTMLElement> { manifest: string; artifacts: readonly PixelManifestAuditArtifact[]; valid: boolean; missingArtifacts: number; emptyArtifacts: number; manifestUrl?: string; }

export function PixelManifestAudit({ manifest, artifacts, valid, missingArtifacts, emptyArtifacts, manifestUrl, className = "", ...props }: PixelManifestAuditProps) {
  return <section className={pixelClassNames("pixel-manifest-audit", valid ? "pixel-manifest-audit--valid" : "pixel-manifest-audit--invalid", className)} aria-label="Asset manifest audit" {...props}>
    <header className="pixel-manifest-audit__heading"><h2>MANIFEST INTEGRITY</h2><span>{valid ? "ALL ARTIFACTS READY" : "REVIEW REQUIRED"}</span></header>
    <p className="pixel-manifest-audit__manifest">{manifestUrl ? <a href={manifestUrl}>{manifest}</a> : manifest}</p>
    <div className="pixel-manifest-audit__summary"><span><strong>{artifacts.length}</strong> ARTIFACTS</span><span><strong>{missingArtifacts}</strong> MISSING</span><span><strong>{emptyArtifacts}</strong> EMPTY</span></div>
    <ul className="pixel-manifest-audit__artifacts">{artifacts.slice(0, 12).map((artifact) => <li className={`pixel-manifest-audit__artifact--${artifact.status}`} key={artifact.filename}><strong>{artifact.status.toUpperCase()}</strong><span>{artifact.filename}</span><small>{artifact.sizeBytes} B · {artifact.format} · {artifact.sha256 ? artifact.sha256.slice(0, 12) : "NO HASH"}</small></li>)}</ul>
  </section>;
}

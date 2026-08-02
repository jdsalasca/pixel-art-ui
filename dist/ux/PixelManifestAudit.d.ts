import type { HTMLAttributes } from "react";
export interface PixelManifestAuditArtifact {
    filename: string;
    status: "ok" | "missing" | "empty";
    sizeBytes: number;
    format: string;
    sha256: string | null;
}
export interface PixelManifestAuditProps extends HTMLAttributes<HTMLElement> {
    manifest: string;
    artifacts: readonly PixelManifestAuditArtifact[];
    valid: boolean;
    missingArtifacts: number;
    emptyArtifacts: number;
    manifestUrl?: string;
}
export declare function PixelManifestAudit({ manifest, artifacts, valid, missingArtifacts, emptyArtifacts, manifestUrl, className, ...props }: PixelManifestAuditProps): import("react").JSX.Element;
//# sourceMappingURL=PixelManifestAudit.d.ts.map
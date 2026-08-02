import type { HTMLAttributes } from "react";
import { pixelClassNames } from "../model/pixelClassNames.js";

export interface PixelLibraryAuditProps extends HTMLAttributes<HTMLElement> {
  totalItems: number;
  totalCategories: number;
  totalPresets: number;
  totalFolders: number;
  readmePaths: number;
  previewPaths: number;
  spritePaths: number;
  animationPaths: number;
  valid: boolean;
  violations?: readonly string[];
}

export function PixelLibraryAudit({ totalItems, totalCategories, totalPresets, totalFolders, readmePaths, previewPaths, spritePaths, animationPaths, valid, violations = [], className = "", ...props }: PixelLibraryAuditProps) {
  return <section className={pixelClassNames("pixel-library-audit", valid ? "pixel-library-audit--valid" : "pixel-library-audit--invalid", className)} aria-label="Asset library audit" {...props}>
    <header className="pixel-library-audit__heading"><h2>LIBRARY INTEGRITY</h2><span>{valid ? "CATALOG READY" : "REVIEW REQUIRED"}</span></header>
    <div className="pixel-library-audit__metrics">
      <span><strong>{totalItems}</strong> ASSETS</span><span><strong>{totalFolders}</strong> FOLDERS</span><span><strong>{totalCategories}</strong> CATEGORIES</span><span><strong>{totalPresets}</strong> PRESETS</span>
    </div>
    <div className="pixel-library-audit__paths"><span>README {readmePaths}/{totalItems}</span><span>PREVIEW {previewPaths}/{totalItems}</span><span>SPRITE {spritePaths}/{totalItems}</span><span>GIF {animationPaths}/{totalItems}</span></div>
    {violations.length ? <ul className="pixel-library-audit__violations">{violations.slice(0, 5).map((violation) => <li key={violation}>{violation}</li>)}</ul> : <p className="pixel-library-audit__pass">NO BROKEN REFERENCES OR UNSAFE PATHS</p>}
  </section>;
}

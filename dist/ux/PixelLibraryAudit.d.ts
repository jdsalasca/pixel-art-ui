import type { HTMLAttributes } from "react";
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
export declare function PixelLibraryAudit({ totalItems, totalCategories, totalPresets, totalFolders, readmePaths, previewPaths, spritePaths, animationPaths, valid, violations, className, ...props }: PixelLibraryAuditProps): import("react").JSX.Element;
//# sourceMappingURL=PixelLibraryAudit.d.ts.map
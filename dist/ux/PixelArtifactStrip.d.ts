import type { ReactNode } from "react";
export interface PixelArtifactStripItem {
    id: string;
    name: string;
    preview?: string;
    detail?: ReactNode;
    status?: ReactNode;
}
export interface PixelArtifactStripProps {
    label: string;
    items: readonly PixelArtifactStripItem[];
    onSelect?(id: string): void;
}
export declare function PixelArtifactStrip({ label, items, onSelect }: PixelArtifactStripProps): import("react").JSX.Element;
//# sourceMappingURL=PixelArtifactStrip.d.ts.map
import type { ReactNode } from "react";
export interface PixelAssetGridItem {
    id: string;
    name: string;
    preview?: string;
    detail?: ReactNode;
    status?: ReactNode;
}
export interface PixelAssetGridProps {
    items: readonly PixelAssetGridItem[];
    emptyLabel?: string;
    onSelect?(id: string): void;
}
export declare function PixelAssetGrid({ items, emptyLabel, onSelect }: PixelAssetGridProps): import("react").JSX.Element;
//# sourceMappingURL=PixelAssetGrid.d.ts.map
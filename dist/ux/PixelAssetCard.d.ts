import type { ReactNode } from "react";
export interface PixelAssetCardProps {
    name: string;
    preview?: string;
    detail?: ReactNode;
    status?: ReactNode;
    onSelect?(): void;
}
export declare function PixelAssetCard({ name, preview, detail, status, onSelect }: PixelAssetCardProps): import("react").JSX.Element;
//# sourceMappingURL=PixelAssetCard.d.ts.map
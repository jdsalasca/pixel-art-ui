import type { HTMLAttributes } from "react";
export interface PixelEffectStackItem {
    id: string;
    label: string;
}
export interface PixelEffectStackPreviewProps extends HTMLAttributes<HTMLElement> {
    items: readonly PixelEffectStackItem[];
    label?: string;
}
export declare function PixelEffectStackPreview({ items, label, className, ...props }: PixelEffectStackPreviewProps): import("react").JSX.Element;
//# sourceMappingURL=PixelEffectStackPreview.d.ts.map
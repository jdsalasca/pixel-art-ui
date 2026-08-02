import type { HTMLAttributes, ReactNode } from "react";
export type PixelTimelineState = "complete" | "current" | "pending" | "error";
export interface PixelTimelineItem {
    id: string;
    label: string;
    detail?: ReactNode;
    state?: PixelTimelineState;
}
export interface PixelTimelineProps extends Omit<HTMLAttributes<HTMLOListElement>, "onSelect"> {
    items: readonly PixelTimelineItem[];
    activeId?: string;
    onSelect?(id: string): void;
}
export declare function PixelTimeline({ items, activeId, onSelect, className, ...props }: PixelTimelineProps): import("react").JSX.Element;
//# sourceMappingURL=PixelTimeline.d.ts.map
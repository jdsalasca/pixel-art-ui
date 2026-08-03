import type { HTMLAttributes } from "react";
export type PixelLogStatus = "started" | "success" | "failure" | "info";
export interface PixelLogEntry {
    id: string;
    timestamp: string;
    title: string;
    status: PixelLogStatus;
    detail?: string;
}
export interface PixelLogViewerProps extends HTMLAttributes<HTMLDivElement> {
    entries: readonly PixelLogEntry[];
    emptyLabel?: string;
    maxEntries?: number;
}
export declare function PixelLogViewer({ entries, emptyLabel, maxEntries, className, ...props }: PixelLogViewerProps): import("react").JSX.Element;
//# sourceMappingURL=PixelLogViewer.d.ts.map